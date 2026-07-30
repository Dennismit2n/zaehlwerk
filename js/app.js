/*
 * Zählwerk — Bedienung und Anzeige
 *
 * Liest die vom Nutzer gewählten .jsonl-Dateien, übergibt sie zeilenweise an
 * AUSWERTUNG und zeichnet das Ergebnis. Es gibt bewußt keinen Netzzugriff:
 * die Dateien werden gelesen, gerechnet, angezeigt — und nichts verläßt den
 * Rechner. Wer das prüfen will, öffnet die Entwicklerwerkzeuge und schaut im
 * Netzwerk-Reiter nach: außer der Seite selbst wird nichts geladen.
 */
'use strict';

(function () {

  var E = function (id) { return document.getElementById(id); };
  var letzteAuswertung = null;
  var sprache = 'de';

  var zahlFormat = new Intl.NumberFormat('de-DE');
  var pluralRegel = new Intl.PluralRules('de-DE');
  var prozentFormat = new Intl.NumberFormat('de-DE',
    { style: 'percent', maximumFractionDigits: 1 });
  var anteilFormat = new Intl.NumberFormat('de-DE',
    { style: 'percent', maximumFractionDigits: 0 });
  var faktorFormat = new Intl.NumberFormat('de-DE',
    { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var datumFormat = new Intl.DateTimeFormat('de-DE',
    { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  var tagFormat = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit' });

  function t(schluessel, ersatz) {
    if (typeof I18N !== 'undefined' && I18N[sprache] && I18N[sprache][schluessel]) {
      return I18N[sprache][schluessel];
    }
    return ersatz;
  }

  function zahl(n) { return zahlFormat.format(Math.round(n || 0)); }

  /* Ein- und Mehrzahl über Intl.PluralRules statt fest verdrahtetem "n Dinge".
     Deutsch und Englisch kennen nur eine und viele; andere Sprachen haben
     mehr Formen, und die Regeln dafür bringt der Browser bereits mit. */
  function mengen(basis, n) {
    var form = 'other';
    try { form = pluralRegel.select(n); } catch (x) {}
    var text = t(basis + '_' + form, null) || t(basis + '_other', basis);
    return zahl(n) + ' ' + text;
  }

  function dauer(ms) {
    if (ms === null || ms === undefined || isNaN(ms)) return '–';
    var min = Math.round(ms / 60000);
    var eMin = t('eMinute', 'min'), eStd = t('eStunde', 'h'), eTag = t('eTag', 'd');
    if (min < 60) return min + ' ' + eMin;
    var h = Math.floor(min / 60);
    if (h < 24) return h + ' ' + eStd + ' ' + String(min % 60).padStart(2, '0') + ' ' + eMin;
    return Math.floor(h / 24) + ' ' + eTag + ' ' + (h % 24) + ' ' + eStd;
  }

  // ───────────────────────────── Dateien einlesen ─────────────────────────

  function istProtokoll(datei) {
    return datei && typeof datei.name === 'string' && /\.jsonl$/i.test(datei.name);
  }

  /** Ordner aus einem Zieh-Vorgang rekursiv auflösen. */
  function ausEintrag(eintrag, sammler) {
    return new Promise(function (fertig) {
      if (!eintrag) return fertig();
      if (eintrag.isFile) {
        eintrag.file(function (datei) {
          if (istProtokoll(datei)) sammler.push(datei);
          fertig();
        }, function () { fertig(); });
        return;
      }
      if (!eintrag.isDirectory) return fertig();
      var leser = eintrag.createReader();
      var alle = [];
      (function weiter() {
        leser.readEntries(function (teil) {
          if (!teil.length) {
            Promise.all(alle.map(function (e) { return ausEintrag(e, sammler); })).then(function () { fertig(); });
            return;
          }
          alle = alle.concat(Array.prototype.slice.call(teil));
          weiter();
        }, function () { fertig(); });
      })();
    });
  }

  function fortschritt(anteil, text) {
    E('fortschritt').hidden = false;
    E('fortschrittFuell').style.width = Math.round(anteil * 100) + '%';
    E('fortschrittText').textContent = text;
  }

  function fehlerZeigen(text) {
    var f = E('fehler');
    f.textContent = text;
    f.hidden = false;
    E('fortschritt').hidden = true;
  }

  function warten() {
    // Dem Browser Luft zum Zeichnen geben, damit der Fortschritt sichtbar läuft
    return new Promise(function (w) { setTimeout(w, 0); });
  }

  function verarbeiten(dateien) {
    E('fehler').hidden = true;

    var protokolle = dateien.filter(istProtokoll);
    if (!protokolle.length) {
      fehlerZeigen(t('fehlerKeine',
        'In diesem Ordner liegen keine .jsonl-Dateien. Gemeint ist der Ordner "projects" innerhalb von ".claude" — nicht der Projektordner deines eigenen Vorhabens.'));
      return;
    }

    var zustand = AUSWERTUNG.neuerZustand();
    var i = 0;

    function naechste() {
      if (i >= protokolle.length) {
        fortschritt(1, t('fertigRechnen', 'Rechne …'));
        return warten().then(function () {
          letzteAuswertung = AUSWERTUNG.auswerten(zustand);
          alleAnzeigen();
          E('fortschritt').hidden = true;
          E('einstieg').hidden = true;
          E('ergebnis').hidden = false;
          window.scrollTo(0, 0);
        });
      }
      var datei = protokolle[i];
      return datei.text().then(function (inhalt) {
        var zeilen = inhalt.split('\n');
        for (var z = 0; z < zeilen.length; z++) AUSWERTUNG.zeileEinlesen(zustand, zeilen[z]);
        i++;
        fortschritt(i / protokolle.length,
          t('lese', 'Lese Datei') + ' ' + i + ' / ' + protokolle.length);
        return warten().then(naechste);
      }).catch(function () {
        i++;                       // eine unlesbare Datei stoppt nicht das Ganze
        return warten().then(naechste);
      });
    }

    fortschritt(0, t('lese', 'Lese Datei') + ' 1 / ' + protokolle.length);
    warten().then(naechste);
  }

  // ──────────────────────────────── Anzeige ───────────────────────────────

  function alleAnzeigen() {
    var r = letzteAuswertung;
    if (!r) return;
    var verbergen = E('namenVerbergen').checked;

    zeigeKennzahlen(r);
    zeigeTage(r);
    zeigeListe('modelle', r.proModell.map(function (m) {
      return { name: m.schluessel, wert: m.echt, zusatz: m.antworten };
    }));
    zeigeListe('ordner', r.proOrdner.map(function (o, idx) {
      return {
        name: verbergen ? t('projekt', 'Projekt') + ' ' + (idx + 1) : o.name,
        titel: verbergen ? '' : o.pfad,
        wert: o.echt, zusatz: o.antworten
      };
    }));
    zeigeListe('wochen', r.proWoche.map(function (w) {
      return { name: w.schluessel, wert: w.echt, zusatz: w.antworten };
    }));
    zeigeListe('zweige', r.proZweig.map(function (z) {
      return {
        name: verbergen ? t('zweig', 'Zweig') + ' ' + (r.proZweig.indexOf(z) + 1) : z.schluessel,
        wert: z.echt, zusatz: z.antworten
      };
    }));
    zeigeStunden(r);
    zeigeSitzungen(r, verbergen);
    zeigeTechnik(r);
  }

  function zeigeKennzahlen(r) {
    var k = r.kennzahlen;
    E('kzHeute').textContent = zahl(k.heute.echt);
    E('kzHeuteZusatz').textContent = mengen('antworten', k.heute.antworten);
    E('kzWoche').textContent = zahl(k.diesewoche.echt);
    E('kzWocheZusatz').textContent = mengen('antworten', k.diesewoche.antworten);
    E('kzGesamt').textContent = zahl(k.gesamt.echt);

    var zeitraum = '';
    if (k.von && k.bis) {
      zeitraum = tagFormat.format(new Date(k.von)) + ' – ' + tagFormat.format(new Date(k.bis));
    }
    E('kzGesamtZusatz').textContent = zeitraum;

    E('kzCache').textContent = zahl(k.gesamt.cacheGelesen);
    E('kzCacheZusatz').textContent =
      prozentFormat.format(k.cacheAnteil) + ' ' + t('allerToken', 'aller Token');
  }

  function zeigeTage(r) {
    var behaelter = E('tage');
    behaelter.textContent = '';
    var max = r.proTag.reduce(function (m, x) { return Math.max(m, x.echt); }, 0);
    var beschreibung = [];

    r.proTag.forEach(function (tag, idx) {
      var saeule = document.createElement('div');
      saeule.className = 'saeule' + (tag.echt === 0 ? ' saeule-leer' : '');
      var datum = tagFormat.format(new Date(tag.zeitwert));
      saeule.title = datum + ': ' + mengen('token', tag.echt) +
                     ' (' + mengen('antworten', tag.antworten) + ')';

      var fuell = document.createElement('div');
      fuell.className = 'saeule-fuell';
      fuell.style.height = (max > 0 ? Math.max(2, tag.echt / max * 100) : 2) + '%';
      saeule.appendChild(fuell);

      // Beschriftung nur an jedem fünften Tag, sonst wird es unlesbar
      var marke = document.createElement('div');
      marke.className = 'saeule-marke';
      marke.textContent = (idx % 5 === 0 || idx === r.proTag.length - 1) ? datum : '';
      saeule.appendChild(marke);

      behaelter.appendChild(saeule);
      if (tag.echt > 0) beschreibung.push(datum + ': ' + zahl(tag.echt));
    });

    E('tageAlt').textContent = beschreibung.length
      ? t('tageAlt', 'Verbrauch je Tag') + ' — ' + beschreibung.join(', ')
      : t('tageLeer', 'In den letzten 30 Tagen keine Nutzung.');
  }

  function zeigeStunden(r) {
    var behaelter = E('stunden');
    behaelter.textContent = '';
    var max = r.proStunde.reduce(function (m, x) { return Math.max(m, x.echt); }, 0);
    var beschreibung = [];

    r.proStunde.forEach(function (s) {
      var saeule = document.createElement('div');
      saeule.className = 'saeule' + (s.echt === 0 ? ' saeule-leer' : '');
      var label = String(s.stunde).padStart(2, '0') + ':00';
      saeule.title = label + ' – ' + mengen('token', s.echt);

      var fuell = document.createElement('div');
      fuell.className = 'saeule-fuell';
      fuell.style.height = (max > 0 ? Math.max(2, s.echt / max * 100) : 2) + '%';
      saeule.appendChild(fuell);

      var marke = document.createElement('div');
      marke.className = 'saeule-marke';
      marke.textContent = s.stunde % 6 === 0 ? String(s.stunde) : '';
      saeule.appendChild(marke);

      behaelter.appendChild(saeule);
      if (s.echt > 0) beschreibung.push(label + ': ' + zahl(s.echt));
    });
    E('stundenAlt').textContent = beschreibung.join(', ');
  }

  function zeigeListe(id, eintraege, nurZahlen) {
    var behaelter = E(id);
    behaelter.textContent = '';
    if (!eintraege.length) {
      var leer = document.createElement('p');
      leer.className = 'liste-leer';
      leer.textContent = t('listeLeer', 'Keine Daten vorhanden.');
      behaelter.appendChild(leer);
      return;
    }
    var max = eintraege.reduce(function (m, e) { return Math.max(m, e.wert); }, 0);

    eintraege.forEach(function (e) {
      var zeile = document.createElement('div');
      zeile.className = 'zeile';

      var kopf = document.createElement('div');
      kopf.className = 'zeile-kopf';

      var name = document.createElement('span');
      name.className = 'zeile-name';
      name.textContent = e.name;
      if (e.titel) name.title = e.titel;

      var wert = document.createElement('span');
      wert.className = 'zeile-wert';
      wert.textContent = zahl(e.wert) +
        (!nurZahlen && max > 0 ? '  ·  ' + anteilFormat.format(e.wert / max) : '');

      kopf.appendChild(name);
      kopf.appendChild(wert);

      var balken = document.createElement('div');
      balken.className = 'zeile-balken';
      var fuell = document.createElement('div');
      fuell.className = 'zeile-fuell';
      fuell.style.width = (max > 0 ? Math.max(1, e.wert / max * 100) : 0) + '%';
      balken.appendChild(fuell);

      zeile.appendChild(kopf);
      if (!nurZahlen) zeile.appendChild(balken);
      behaelter.appendChild(zeile);
    });
  }

  function zeigeSitzungen(r, verbergen) {
    var koerper = E('sitzungen').querySelector('tbody');
    koerper.textContent = '';
    var kurz = {};
    r.proOrdner.forEach(function (o, idx) {
      kurz[o.pfad] = verbergen ? t('projekt', 'Projekt') + ' ' + (idx + 1) : o.name;
    });

    r.sitzungsliste.forEach(function (s) {
      var zeile = document.createElement('tr');
      [
        { text: s.von ? datumFormat.format(new Date(s.von)) : '–' },
        { text: dauer(s.dauerMs) },
        { text: kurz[s.ordner] || '–', klasse: 'name' },
        { text: String(s.antworten), klasse: 'rechts' },
        { text: zahl(s.echt), klasse: 'rechts' }
      ].forEach(function (feld) {
        var td = document.createElement('td');
        td.textContent = feld.text;
        if (feld.klasse) td.className = feld.klasse;
        zeile.appendChild(td);
      });
      koerper.appendChild(zeile);
    });

    E('sitzungenZusatz').textContent = mengen('sitzungen', r.sitzungsliste.length);
  }

  function zeigeTechnik(r) {
    var v = r.verarbeitung;
    var k = r.kennzahlen;
    var faktor = v.antworten > 0
      ? faktorFormat.format((v.antworten + v.doppelteUebersprungen) / v.antworten)
      : '–';

    var eintraege = [
      { name: t('tGelesen', 'Zeilen gelesen'), wert: v.zeilen },
      { name: t('tAntworten', 'davon echte Antworten'), wert: v.antworten },
      { name: t('tDoppelt', 'Mehrfacheinträge verworfen'), wert: v.doppelteUebersprungen },
      { name: t('tEingabe', 'Eingabe-Token'), wert: k.gesamt.ein },
      { name: t('tAusgabe', 'Ausgabe-Token'), wert: k.gesamt.aus },
      { name: t('tCacheNeu', 'Kontext neu zwischengespeichert'), wert: k.gesamt.cacheNeu },
      { name: t('tCacheLesen', 'Kontext erneut gelesen'), wert: k.gesamt.cacheGelesen }
    ];
    if (r.agenten.antworten > 0) {
      eintraege.push({ name: t('tAgenten', 'davon durch Unteragenten'), wert: r.agenten.echt });
    }
    if (v.unlesbar > 0) {
      eintraege.push({ name: t('tUnlesbar', 'unlesbare Zeilen'), wert: v.unlesbar });
    }
    zeigeListe('technik', eintraege, true);

    E('technikZusatz').textContent =
      t('faktor', 'Mehrfacheinträge je Antwort: Faktor') + ' ' + faktor;
  }

  // ──────────────────────────────── Bedienung ─────────────────────────────

  function bedienungVerdrahten() {
    var zone = E('dropzone');
    var eingabe = E('dateiwahl');

    zone.addEventListener('click', function () { eingabe.click(); });
    zone.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); eingabe.click(); }
    });

    eingabe.addEventListener('change', function () {
      verarbeiten(Array.prototype.slice.call(eingabe.files || []));
    });

    ['dragenter', 'dragover'].forEach(function (n) {
      zone.addEventListener(n, function (e) { e.preventDefault(); zone.classList.add('aktiv'); });
    });
    ['dragleave', 'drop'].forEach(function (n) {
      zone.addEventListener(n, function (e) { e.preventDefault(); zone.classList.remove('aktiv'); });
    });

    zone.addEventListener('drop', function (e) {
      var uebertrag = e.dataTransfer;
      // Der Rückfall ist keine Zierde: webkitGetAsEntry() liefert je nach
      // Browser und Herkunft des Abwurfs null. Ohne ihn gingen die Dateien
      // verloren, obwohl sie in dataTransfer.files bereitliegen.
      var direkt = Array.prototype.slice.call((uebertrag && uebertrag.files) || []);
      var elemente = uebertrag && uebertrag.items;
      var eintraege = [];

      if (elemente && elemente.length && elemente[0].webkitGetAsEntry) {
        for (var i = 0; i < elemente.length; i++) {
          var eintrag = elemente[i].webkitGetAsEntry();
          if (eintrag) eintraege.push(eintrag);
        }
      }
      if (!eintraege.length) { verarbeiten(direkt); return; }

      var sammler = [];
      Promise.all(eintraege.map(function (x) { return ausEintrag(x, sammler); }))
        .then(function () { verarbeiten(sammler.length ? sammler : direkt); });
    });

    E('namenVerbergen').addEventListener('change', function () {
      try { localStorage.setItem('zaehlwerk.verbergen', this.checked ? '1' : '0'); } catch (x) {}
      alleAnzeigen();
    });
    try {
      E('namenVerbergen').checked = localStorage.getItem('zaehlwerk.verbergen') === '1';
    } catch (x) {}

    E('neuLaden').addEventListener('click', function () {
      letzteAuswertung = null;
      eingabe.value = '';
      E('ergebnis').hidden = true;
      E('einstieg').hidden = false;
      window.scrollTo(0, 0);
    });

    var themeWahl = E('theme');
    try {
      var gespeichert = localStorage.getItem('zaehlwerk.theme');
      themeWahl.value = (gespeichert === 'light' || gespeichert === 'dark') ? gespeichert : 'system';
    } catch (x) {}
    themeWahl.addEventListener('change', function () {
      var wert = this.value;
      if (wert === 'system') {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.removeItem('zaehlwerk.theme'); } catch (x) {}
      } else {
        document.documentElement.setAttribute('data-theme', wert);
        try { localStorage.setItem('zaehlwerk.theme', wert); } catch (x) {}
      }
    });
  }

  // Sprachauswahl füllen — solange nur Deutsch vorliegt, bleibt es dabei.
  function sprachenVerdrahten() {
    var wahl = E('lang');
    var verfuegbar = (typeof I18N !== 'undefined') ? Object.keys(I18N) : ['de'];
    verfuegbar.forEach(function (code) {
      var o = document.createElement('option');
      o.value = code;
      // Der Sprachname steht in der Sprache selbst — wie in den anderen Werkzeugen
      o.textContent = (I18N[code] && I18N[code]._name) || code;
      wahl.appendChild(o);
    });
    var start = 'de';
    try {
      var gespeichert = localStorage.getItem('zaehlwerk.lang');
      if (gespeichert && verfuegbar.indexOf(gespeichert) >= 0) start = gespeichert;
      else {
        var browser = (navigator.language || 'de').slice(0, 2).toLowerCase();
        if (verfuegbar.indexOf(browser) >= 0) start = browser;
      }
    } catch (x) {}
    wahl.value = start;
    spracheSetzen(start);
    wahl.addEventListener('change', function () {
      spracheSetzen(this.value);
      try { localStorage.setItem('zaehlwerk.lang', this.value); } catch (x) {}
    });
  }

  function spracheSetzen(code) {
    sprache = code;
    document.documentElement.setAttribute('lang', code);
    zahlFormat = new Intl.NumberFormat(code);
    pluralRegel = new Intl.PluralRules(code);
    prozentFormat = new Intl.NumberFormat(code, { style: 'percent', maximumFractionDigits: 1 });
    anteilFormat = new Intl.NumberFormat(code, { style: 'percent', maximumFractionDigits: 0 });
    faktorFormat = new Intl.NumberFormat(code, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    datumFormat = new Intl.DateTimeFormat(code,
      { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    tagFormat = new Intl.DateTimeFormat(code, { day: '2-digit', month: '2-digit' });

    if (typeof I18N !== 'undefined' && I18N[code]) {
      var texte = I18N[code];
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var wert = texte[el.getAttribute('data-i18n')];
        if (wert) el.innerHTML = wert;
      });
    }
    if (letzteAuswertung) alleAnzeigen();
  }

  document.addEventListener('DOMContentLoaded', function () {
    bedienungVerdrahten();
    sprachenVerdrahten();
  });

})();
