/*
 * Zählwerk — Auswertung der lokalen Claude-Code-Protokolle
 *
 * Reine Rechenlogik, ohne Zugriff auf die Oberfläche. Läuft im Browser
 * (als klassisches Skript, Objekt AUSWERTUNG) und unter Node (module.exports),
 * damit sich dieselbe Logik gegen echte Dateien prüfen läßt.
 *
 * Zwei Dinge, die hier entscheidend sind und leicht übersehen werden:
 *
 * 1. DOPPELZÄHLUNG. Eine Antwort mit mehreren Blöcken (Denken, Text,
 *    Werkzeugaufruf) steht als mehrere Zeilen in der Datei — und JEDE Zeile
 *    trägt die vollständige Abrechnung der ganzen Antwort. Ohne Entdopplung
 *    über message.id sind die Zahlen rund doppelt so hoch wie die Wahrheit.
 *
 * 2. CACHE-LESEN. Rund 96 % aller gezählten Token sind wiedergelesener
 *    Gesprächskontext. Diese Zahl wächst mit der Länge einer Sitzung, nicht
 *    mit der geleisteten Arbeit. Sie wird deshalb getrennt geführt und nie
 *    stillschweigend in den "Verbrauch" eingerechnet.
 */
'use strict';

var AUSWERTUNG = (function () {

  // ---------------------------------------------------------------- Zustand

  /** Sammelbehälter, in den zeilenweise eingelesen wird. */
  function neuerZustand() {
    return {
      gesehen: Object.create(null),  // message.id -> true (Entdopplung)
      antworten: [],                 // je Antwort ein Eintrag
      zeilen: 0,
      uebersprungenDoppelt: 0,
      unlesbar: 0
    };
  }

  /**
   * Eine Zeile einlesen. Nimmt den fertig geparsten Datensatz ODER die
   * Rohzeile als Zeichenkette entgegen.
   * Rückgabe: true, wenn die Zeile als Antwort gezählt wurde.
   */
  function zeileEinlesen(zustand, zeile) {
    zustand.zeilen++;
    var o = zeile;
    if (typeof zeile === 'string') {
      if (!zeile) { zustand.zeilen--; return false; }
      try { o = JSON.parse(zeile); }
      catch (e) { zustand.unlesbar++; return false; }
    }
    if (!o || typeof o !== 'object') { zustand.unlesbar++; return false; }

    var nachricht = o.message;
    var u = nachricht && nachricht.usage;
    if (!u) return false;                       // keine Abrechnung -> uninteressant

    // --- Entdopplung: eine Abrechnung je Antwort ---
    var id = nachricht.id || (o.uuid ? 'uuid:' + o.uuid : null);
    if (!id) { zustand.unlesbar++; return false; }
    if (zustand.gesehen[id]) { zustand.uebersprungenDoppelt++; return false; }
    zustand.gesehen[id] = true;

    var zeit = Date.parse(o.timestamp);
    if (isNaN(zeit)) zeit = null;

    var ein = zahl(u.input_tokens);
    var aus = zahl(u.output_tokens);
    var cacheNeu = zahl(u.cache_creation_input_tokens);
    var cacheGelesen = zahl(u.cache_read_input_tokens);

    var werkzeug = u.server_tool_use || {};

    zustand.antworten.push({
      zeit: zeit,
      modell: nachricht.model || 'unbekannt',
      ordner: o.cwd || '',
      sitzung: o.sessionId || '',
      zweig: o.gitBranch || '',
      agent: !!o.isSidechain,          // Antwort eines Unteragenten
      ein: ein,
      aus: aus,
      cacheNeu: cacheNeu,
      cacheGelesen: cacheGelesen,
      echt: ein + aus + cacheNeu,      // was neu entstanden ist
      websuche: zahl(werkzeug.web_search_requests),
      webabruf: zahl(werkzeug.web_fetch_requests)
    });
    return true;
  }

  function zahl(v) { return typeof v === 'number' && isFinite(v) ? v : 0; }

  // ------------------------------------------------------- Ordnernamen

  /**
   * Kürzt Pfade auf den letzten Ordner — aber nur so weit, wie sie dabei
   * eindeutig bleiben. Zwei verschiedene Ordner, die beide ".claude" heißen,
   * werden zu "danyr\.claude" und "Temp\.claude" statt zweimal ".claude".
   */
  function kurznamen(pfade) {
    var teile = {};
    pfade.forEach(function (p) {
      teile[p] = String(p).replace(/[\\/]+$/, '').split(/[\\/]+/).filter(Boolean);
    });
    var ergebnis = {};
    var tiefe = 1;
    var offen = pfade.slice();

    while (offen.length && tiefe <= 8) {
      var nachName = {};
      offen.forEach(function (p) {
        var name = teile[p].slice(-tiefe).join('\\') || p;
        (nachName[name] = nachName[name] || []).push(p);
      });
      var nochOffen = [];
      Object.keys(nachName).forEach(function (name) {
        var gruppe = nachName[name];
        // eindeutig — oder der Pfad gibt nichts mehr her
        if (gruppe.length === 1 || tiefe >= teile[gruppe[0]].length) {
          gruppe.forEach(function (p, i) {
            ergebnis[p] = gruppe.length === 1 ? name : name + ' (' + (i + 1) + ')';
          });
        } else {
          nochOffen = nochOffen.concat(gruppe);
        }
      });
      offen = nochOffen;
      tiefe++;
    }
    offen.forEach(function (p) { ergebnis[p] = p; });
    return ergebnis;
  }

  // ---------------------------------------------------------- Hilfsmittel

  function tagesschluessel(zeit) {          // lokale Zeit, nicht UTC
    var d = new Date(zeit);
    return d.getFullYear() + '-' +
           String(d.getMonth() + 1).padStart(2, '0') + '-' +
           String(d.getDate()).padStart(2, '0');
  }

  function wochenschluessel(zeit) {         // ISO-Woche
    var d = new Date(zeit);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    var jahresbeginn = new Date(d.getFullYear(), 0, 1);
    var woche = Math.ceil(((d - jahresbeginn) / 86400000 + 1) / 7);
    return d.getFullYear() + '-KW' + String(woche).padStart(2, '0');
  }

  function leereSumme() {
    return { echt: 0, cacheGelesen: 0, ein: 0, aus: 0, cacheNeu: 0, antworten: 0 };
  }

  function dazu(summe, a) {
    summe.echt += a.echt;
    summe.cacheGelesen += a.cacheGelesen;
    summe.ein += a.ein;
    summe.aus += a.aus;
    summe.cacheNeu += a.cacheNeu;
    summe.antworten += 1;
    return summe;
  }

  function nachSchluessel(antworten, schluesselVon) {
    var karte = Object.create(null);
    antworten.forEach(function (a) {
      var k = schluesselVon(a);
      if (k === null || k === undefined || k === '') return;
      if (!karte[k]) karte[k] = leereSumme();
      dazu(karte[k], a);
    });
    return karte;
  }

  function alsListe(karte, sortiert) {
    var liste = Object.keys(karte).map(function (k) {
      var e = karte[k];
      return {
        schluessel: k, echt: e.echt, cacheGelesen: e.cacheGelesen,
        ein: e.ein, aus: e.aus, cacheNeu: e.cacheNeu, antworten: e.antworten
      };
    });
    if (sortiert === 'wert') liste.sort(function (a, b) { return b.echt - a.echt; });
    else liste.sort(function (a, b) { return a.schluessel < b.schluessel ? -1 : 1; });
    return liste;
  }

  // ------------------------------------------------------------ Auswertung

  /**
   * Wertet den gefüllten Zustand aus.
   * optionen.jetzt — Zeitpunkt für "heute"/"diese Woche" (für Tests setzbar)
   * optionen.tage  — Länge der Tagesreihe (Vorgabe 30)
   */
  function auswerten(zustand, optionen) {
    optionen = optionen || {};
    var jetzt = optionen.jetzt ? new Date(optionen.jetzt) : new Date();
    var tage = optionen.tage || 30;
    var a = zustand.antworten;

    var gesamt = a.reduce(function (s, x) { return dazu(s, x); }, leereSumme());

    var heuteKey = tagesschluessel(jetzt);
    var wocheKey = wochenschluessel(jetzt);
    var heute = leereSumme(), diesewoche = leereSumme();
    a.forEach(function (x) {
      if (x.zeit === null) return;
      if (tagesschluessel(x.zeit) === heuteKey) dazu(heute, x);
      if (wochenschluessel(x.zeit) === wocheKey) dazu(diesewoche, x);
    });

    // Tagesreihe: lückenlos, damit arbeitsfreie Tage als Lücke sichtbar sind
    var proTagKarte = nachSchluessel(a, function (x) {
      return x.zeit === null ? null : tagesschluessel(x.zeit);
    });
    var reihe = [];
    var tag = new Date(jetzt); tag.setHours(0, 0, 0, 0);
    for (var i = tage - 1; i >= 0; i--) {
      var d = new Date(tag); d.setDate(d.getDate() - i);
      var k = tagesschluessel(d);
      var e = proTagKarte[k] || leereSumme();
      reihe.push({
        datum: k, zeitwert: d.getTime(),
        echt: e.echt, cacheGelesen: e.cacheGelesen, antworten: e.antworten
      });
    }

    // Sitzungen
    var sitzungKarte = Object.create(null);
    a.forEach(function (x) {
      if (!x.sitzung) return;
      var s = sitzungKarte[x.sitzung];
      if (!s) {
        s = sitzungKarte[x.sitzung] = {
          id: x.sitzung, von: x.zeit, bis: x.zeit, ordner: x.ordner,
          echt: 0, cacheGelesen: 0, antworten: 0
        };
      }
      if (x.zeit !== null) {
        if (s.von === null || x.zeit < s.von) s.von = x.zeit;
        if (s.bis === null || x.zeit > s.bis) s.bis = x.zeit;
      }
      s.echt += x.echt; s.cacheGelesen += x.cacheGelesen; s.antworten++;
    });
    var sitzungen = Object.keys(sitzungKarte).map(function (k) {
      var s = sitzungKarte[k];
      s.dauerMs = (s.von !== null && s.bis !== null) ? s.bis - s.von : null;
      return s;
    }).sort(function (x, y) { return (y.von || 0) - (x.von || 0); });

    // Ordner mit eindeutigen Kurznamen
    var ordnerKarte = nachSchluessel(a, function (x) { return x.ordner; });
    var pfade = Object.keys(ordnerKarte);
    var kurz = kurznamen(pfade);
    var ordner = alsListe(ordnerKarte, 'wert').map(function (e) {
      e.name = kurz[e.schluessel] || e.schluessel;
      e.pfad = e.schluessel;
      return e;
    });

    // Stundenverteilung, lückenlos 0–23
    var stundenKarte = nachSchluessel(a, function (x) {
      return x.zeit === null ? null : String(new Date(x.zeit).getHours());
    });
    var stunden = [];
    for (var h = 0; h < 24; h++) {
      var se = stundenKarte[String(h)] || leereSumme();
      stunden.push({ stunde: h, echt: se.echt, cacheGelesen: se.cacheGelesen, antworten: se.antworten });
    }

    var zeiten = a.map(function (x) { return x.zeit; })
                  .filter(function (t) { return t !== null; });

    var agent = leereSumme();
    a.forEach(function (x) { if (x.agent) dazu(agent, x); });

    return {
      kennzahlen: {
        heute: heute,
        diesewoche: diesewoche,
        gesamt: gesamt,
        sitzungen: sitzungen.length,
        ordner: pfade.length,
        von: zeiten.length ? Math.min.apply(null, zeiten) : null,
        bis: zeiten.length ? Math.max.apply(null, zeiten) : null,
        cacheAnteil: gesamt.echt + gesamt.cacheGelesen > 0
          ? gesamt.cacheGelesen / (gesamt.echt + gesamt.cacheGelesen) : 0,
        websuchen: a.reduce(function (s, x) { return s + x.websuche; }, 0),
        webabrufe: a.reduce(function (s, x) { return s + x.webabruf; }, 0)
      },
      proTag: reihe,
      proWoche: alsListe(nachSchluessel(a, function (x) {
        return x.zeit === null ? null : wochenschluessel(x.zeit);
      }), 'schluessel'),
      proModell: alsListe(nachSchluessel(a, function (x) { return x.modell; }), 'wert'),
      proOrdner: ordner,
      proZweig: alsListe(nachSchluessel(a, function (x) { return x.zweig; }), 'wert'),
      proStunde: stunden,
      sitzungsliste: sitzungen,
      agenten: agent,
      verarbeitung: {
        zeilen: zustand.zeilen,
        antworten: a.length,
        doppelteUebersprungen: zustand.uebersprungenDoppelt,
        unlesbar: zustand.unlesbar
      }
    };
  }

  return {
    neuerZustand: neuerZustand,
    zeileEinlesen: zeileEinlesen,
    auswerten: auswerten,
    kurznamen: kurznamen,
    tagesschluessel: tagesschluessel,
    wochenschluessel: wochenschluessel
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = AUSWERTUNG;
