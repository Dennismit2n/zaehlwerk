/*
 * Zählwerk — Texte
 *
 * Aufbau wie in den übrigen Werkzeugen: ein Objekt je Sprache, `_name` trägt
 * den Sprachnamen in der Sprache selbst. Mengenangaben liegen als _one/_other
 * (und wo nötig _few/_many) vor und werden über Intl.PluralRules gewählt.
 *
 * Übersetzungen teils maschinell erstellt. Korrekturen sehr willkommen:
 * https://github.com/Dennismit2n/zaehlwerk
 */
'use strict';

var I18N = {

  /* ─────────────────────────────── Deutsch ─────────────────────────────── */
  de: {
    _name: 'Deutsch',
    claim: 'Deine Claude-Code-Nutzung in Zahlen',
    langLabel: 'Sprache', themeLabel: 'Darstellung',
    themeSystem: 'System', themeLight: 'Hell', themeDark: 'Dunkel',

    introTitle: 'Ordner auswählen und loslegen',
    introLead: 'Zählwerk liest die Protokolle, die Claude Code auf deinem Rechner anlegt, und rechnet aus, wohin dein Verbrauch geht. Die Dateien bleiben dabei auf deinem Gerät — es gibt keinen Server, der sie entgegennehmen könnte.',
    dropMain: 'Ordner hierher ziehen oder klicken',
    dropSub: 'Es werden ausschließlich <code>.jsonl</code>-Dateien gelesen',
    pfadTitle: 'Wo liegt der Ordner?',
    pfadNote: 'Der Ordner ist versteckt, weil sein Name mit einem Punkt beginnt. Im Explorer den Pfad einfach oben in die Adreßleiste eintippen; im Auswahlfenster genügt es, ihn dort einzufügen.',

    kennzahlenTitle: 'Auf einen Blick',
    namenVerbergen: 'Namen verbergen', neuLaden: 'Anderer Ordner',
    kzHeute: 'Heute', kzWoche: 'Diese Woche',
    kzGesamt: 'Verbrauch gesamt', kzCache: 'Kontext erneut gelesen',
    erklKennzahlen: 'Was bedeuten diese Zahlen?',
    erklKennzahlen1: '<strong>Verbrauch gesamt</strong> zählt zusammen, was neu entstanden ist: was du getippt hast, was Claude geschrieben hat, und den Gesprächsverlauf, der neu in den Zwischenspeicher gelegt wurde.',
    erklKennzahlen2: '<strong>Kontext erneut gelesen</strong> steht bewußt daneben und nicht darin. Bei jeder Folgefrage wird der bisherige Verlauf noch einmal mitgezählt. Diese Zahl wächst also mit der Länge einer Sitzung, nicht mit deiner Arbeit — sie ist meist zwanzig- bis dreißigmal so groß wie der eigentliche Verbrauch und würde jede Gesamtsumme unbrauchbar machen.',
    erklKennzahlen3: 'Ein Token ist grob ein halbes Wort. Genaue Kosten kann Zählwerk nicht ausrechnen: In den Protokollen steht kein Preis, und im Abonnement kostet Claude Code ohnehin nichts zusätzlich.',

    tageTitle: 'Die letzten 30 Tage',
    erklTage: 'Wie liest man das?',
    erklTage1: 'Ein Balken je Tag, von links nach rechts bis heute. Die Höhe zeigt den Verbrauch dieses Tages im Verhältnis zum stärksten Tag des Zeitraums. Tage ohne Balken sind Tage, an denen du nicht mit Claude Code gearbeitet hast.',

    modelleTitle: 'Nach Modell',
    erklModelle: 'Warum ist das interessant?',
    erklModelle1: 'Die verschiedenen Modelle sind unterschiedlich schnell und unterschiedlich gründlich. Wenn ein einzelnes Modell fast deinen ganzen Verbrauch ausmacht, lohnt der Gedanke, ob für einfache Arbeiten ein kleineres genügt.',

    ordnerTitle: 'Nach Arbeitsordner',
    erklOrdner: 'Woher kommen diese Namen?',
    erklOrdner1: 'Aus dem Verzeichnis, in dem Claude Code jeweils gestartet wurde. Gezeigt wird nur der letzte Ordnername — und nur dann mehr, wenn zwei Ordner sonst gleich hießen.',
    erklOrdner2: 'Wenn hier fast alles unter einem einzigen Eintrag steht, heißt das schlicht, daß du Claude Code meist aus demselben Verzeichnis heraus benutzt.',

    stundenTitle: 'Nach Tageszeit',
    erklStunden: 'Wie liest man das?',
    erklStunden1: 'Vierundzwanzig Säulen, eine je Stunde deines Tages, über den gesamten Zeitraum aufsummiert. Zeigt, wann du tatsächlich arbeitest — nicht wann du glaubst zu arbeiten.',

    wochenTitle: 'Nach Woche',

    sitzungenTitle: 'Sitzungen',
    spBeginn: 'Beginn', spDauer: 'Dauer', spOrdner: 'Ordner',
    spAntworten: 'Antworten', spVerbrauch: 'Verbrauch',
    erklSitzungen: 'Was ist eine Sitzung?',
    erklSitzungen1: 'Ein durchgehendes Gespräch mit Claude Code. Die Dauer ist der Abstand zwischen der ersten und der letzten Antwort — Pausen dazwischen zählen mit, denn Zählwerk kann nicht wissen, ob du Kaffee geholt oder nachgedacht hast.',

    zweigeTitle: 'Nach Git-Zweig',
    erklZweige: 'Wozu das?',
    erklZweige1: 'Claude Code merkt sich, auf welchem Git-Zweig gearbeitet wurde. Wer je Aufgabe einen eigenen Zweig anlegt, sieht hier, welche Aufgabe wie viel gekostet hat. Ohne Git bleibt die Liste leer.',

    technikTitle: 'Was gelesen wurde',
    erklTechnik: 'Warum stehen hier zwei verschiedene Zahlen?',
    erklTechnik1: 'Eine einzelne Antwort steht mehrfach in den Protokollen — einmal je Block, aus dem sie besteht: Nachdenken, Text, Werkzeugaufruf. Jede dieser Zeilen trägt die vollständige Abrechnung der ganzen Antwort.',
    erklTechnik2: 'Zählwerk erkennt das und zählt jede Antwort genau einmal. Würde man einfach alle Zeilen zusammenzählen, kämen ungefähr doppelt so hohe Zahlen heraus.',

    ftQuellcode: 'Quellcode auf GitHub', ftWerkstatt: 'Mehr Werkzeuge',
    ftLokal: 'Alles rechnet in deinem Browser. Deine Protokolle werden nicht hochgeladen und verlassen dein Gerät nicht.',
    ftHinweis: 'Übersetzungen teils maschinell — Korrekturen willkommen. Besucherzählung anonym per GoatCounter, ohne Cookies.',
    ftMarke: 'Zählwerk ist ein privates Werkzeug und steht in keiner Verbindung zu Anthropic. „Claude“ ist eine Marke von Anthropic PBC.',

    lese: 'Lese Datei', fertigRechnen: 'Rechne …',
    fehlerKeine: 'In diesem Ordner liegen keine .jsonl-Dateien. Gemeint ist der Ordner „projects“ innerhalb von „.claude“ — nicht der Projektordner deines eigenen Vorhabens.',
    antworten_one: 'Antwort', antworten_other: 'Antworten',
    token_one: 'Token', token_other: 'Token',
    sitzungen_one: 'Sitzung insgesamt', sitzungen_other: 'Sitzungen insgesamt',
    eMinute: 'min', eStunde: 'h', eTag: 'd',
    allerToken: 'aller Token', projekt: 'Projekt', zweig: 'Zweig',
    listeLeer: 'Keine Daten vorhanden.',
    tageAlt: 'Verbrauch je Tag', tageLeer: 'In den letzten 30 Tagen keine Nutzung.',
    faktor: 'Mehrfacheinträge je Antwort: Faktor',
    tGelesen: 'Zeilen gelesen', tAntworten: 'davon echte Antworten',
    tDoppelt: 'Mehrfacheinträge verworfen', tEingabe: 'Eingabe-Token',
    tAusgabe: 'Ausgabe-Token', tCacheNeu: 'Kontext neu zwischengespeichert',
    tCacheLesen: 'Kontext erneut gelesen', tAgenten: 'davon durch Unteragenten',
    tUnlesbar: 'unlesbare Zeilen'
  },

  /* ─────────────────────────────── English ─────────────────────────────── */
  en: {
    _name: 'English',
    claim: 'Your Claude Code usage in numbers',
    langLabel: 'Language', themeLabel: 'Appearance',
    themeSystem: 'System', themeLight: 'Light', themeDark: 'Dark',

    introTitle: 'Pick a folder and go',
    introLead: 'Zählwerk reads the logs Claude Code writes on your machine and works out where your usage goes. The files stay on your device — there is no server that could receive them.',
    dropMain: 'Drop a folder here, or click',
    dropSub: 'Only <code>.jsonl</code> files are read',
    pfadTitle: 'Where is the folder?',
    pfadNote: 'The folder is hidden because its name starts with a dot. In Explorer, just type the path into the address bar; in the file dialog, pasting it there is enough.',

    kennzahlenTitle: 'At a glance',
    namenVerbergen: 'Hide names', neuLaden: 'Different folder',
    kzHeute: 'Today', kzWoche: 'This week',
    kzGesamt: 'Total usage', kzCache: 'Context re-read',
    erklKennzahlen: 'What do these numbers mean?',
    erklKennzahlen1: '<strong>Total usage</strong> adds up what was newly produced: what you typed, what Claude wrote, and the conversation newly placed into the cache.',
    erklKennzahlen2: '<strong>Context re-read</strong> deliberately sits beside that figure, not inside it. Every follow-up question counts the previous conversation again. So this number grows with the length of a session, not with your work — it is typically twenty to thirty times the actual usage and would render any total meaningless.',
    erklKennzahlen3: 'A token is roughly half a word. Zählwerk cannot compute exact costs: the logs contain no prices, and on a subscription Claude Code costs nothing extra anyway.',

    tageTitle: 'The last 30 days',
    erklTage: 'How do you read this?',
    erklTage1: 'One bar per day, left to right up to today. The height shows that day’s usage relative to the busiest day in the period. Days without a bar are days you did not work with Claude Code.',

    modelleTitle: 'By model',
    erklModelle: 'Why does this matter?',
    erklModelle1: 'The models differ in speed and thoroughness. If a single model accounts for almost all your usage, it is worth asking whether a smaller one would do for the simpler jobs.',

    ordnerTitle: 'By working folder',
    erklOrdner: 'Where do these names come from?',
    erklOrdner1: 'From the directory Claude Code was started in. Only the last folder name is shown — and more only when two folders would otherwise look identical.',
    erklOrdner2: 'If nearly everything sits under a single entry, that simply means you usually run Claude Code from the same directory.',

    stundenTitle: 'By time of day',
    erklStunden: 'How do you read this?',
    erklStunden1: 'Twenty-four columns, one per hour of your day, summed across the whole period. It shows when you actually work — not when you think you do.',

    wochenTitle: 'By week',

    sitzungenTitle: 'Sessions',
    spBeginn: 'Start', spDauer: 'Duration', spOrdner: 'Folder',
    spAntworten: 'Replies', spVerbrauch: 'Usage',
    erklSitzungen: 'What counts as a session?',
    erklSitzungen1: 'One continuous conversation with Claude Code. The duration is the span between the first and last reply — breaks count towards it, because Zählwerk cannot tell whether you fetched coffee or were thinking.',

    zweigeTitle: 'By Git branch',
    erklZweige: 'What is this for?',
    erklZweige1: 'Claude Code records which Git branch was in use. If you create a branch per task, this shows what each task cost. Without Git the list stays empty.',

    technikTitle: 'What was read',
    erklTechnik: 'Why are there two different numbers here?',
    erklTechnik1: 'A single reply appears several times in the logs — once per block it consists of: thinking, text, tool call. Each of those lines carries the full accounting for the entire reply.',
    erklTechnik2: 'Zählwerk detects this and counts every reply exactly once. Simply adding up all lines would produce roughly double the real figures.',

    ftQuellcode: 'Source code on GitHub', ftWerkstatt: 'More tools',
    ftLokal: 'Everything is computed in your browser. Your logs are never uploaded and do not leave your device.',
    ftHinweis: 'Some translations are machine-generated — corrections are welcome. Visitor counting is anonymous via GoatCounter, without cookies.',
    ftMarke: 'Zählwerk is a personal tool and is not affiliated with Anthropic. “Claude” is a trademark of Anthropic PBC.',

    lese: 'Reading file', fertigRechnen: 'Calculating …',
    fehlerKeine: 'There are no .jsonl files in this folder. What is meant is the “projects” folder inside “.claude” — not the folder of your own project.',
    antworten_one: 'reply', antworten_other: 'replies',
    token_one: 'token', token_other: 'tokens',
    sitzungen_one: 'session in total', sitzungen_other: 'sessions in total',
    eMinute: 'min', eStunde: 'h', eTag: 'd',
    allerToken: 'of all tokens', projekt: 'Project', zweig: 'Branch',
    listeLeer: 'No data available.',
    tageAlt: 'Usage per day', tageLeer: 'No usage in the last 30 days.',
    faktor: 'Duplicate entries per reply: factor',
    tGelesen: 'Lines read', tAntworten: 'of which real replies',
    tDoppelt: 'Duplicate entries discarded', tEingabe: 'Input tokens',
    tAusgabe: 'Output tokens', tCacheNeu: 'Context newly cached',
    tCacheLesen: 'Context re-read', tAgenten: 'of which by sub-agents',
    tUnlesbar: 'unreadable lines'
  },

  /* ─────────────────────────────── Español ─────────────────────────────── */
  es: {
    _name: 'Español',
    claim: 'Tu uso de Claude Code en cifras',
    langLabel: 'Idioma', themeLabel: 'Apariencia',
    themeSystem: 'Sistema', themeLight: 'Claro', themeDark: 'Oscuro',

    introTitle: 'Elige una carpeta y empieza',
    introLead: 'Zählwerk lee los registros que Claude Code guarda en tu equipo y calcula a dónde va tu consumo. Los archivos permanecen en tu dispositivo: no hay ningún servidor que pudiera recibirlos.',
    dropMain: 'Arrastra una carpeta aquí o haz clic',
    dropSub: 'Solo se leen archivos <code>.jsonl</code>',
    pfadTitle: '¿Dónde está la carpeta?',
    pfadNote: 'La carpeta está oculta porque su nombre empieza por un punto. En el Explorador basta con escribir la ruta en la barra de direcciones; en el diálogo de selección, pegarla allí es suficiente.',

    kennzahlenTitle: 'De un vistazo',
    namenVerbergen: 'Ocultar nombres', neuLaden: 'Otra carpeta',
    kzHeute: 'Hoy', kzWoche: 'Esta semana',
    kzGesamt: 'Consumo total', kzCache: 'Contexto releído',
    erklKennzahlen: '¿Qué significan estas cifras?',
    erklKennzahlen1: '<strong>Consumo total</strong> suma lo que se ha generado de nuevo: lo que has escrito, lo que ha redactado Claude y la conversación añadida a la memoria intermedia.',
    erklKennzahlen2: '<strong>Contexto releído</strong> figura aparte a propósito, no dentro. Cada pregunta de seguimiento vuelve a contar la conversación anterior. Esta cifra crece con la duración de una sesión, no con tu trabajo: suele ser veinte o treinta veces el consumo real y volvería inservible cualquier total.',
    erklKennzahlen3: 'Un token equivale aproximadamente a media palabra. Zählwerk no puede calcular costes exactos: los registros no contienen precios y, con suscripción, Claude Code no cuesta nada adicional.',

    tageTitle: 'Los últimos 30 días',
    erklTage: '¿Cómo se lee esto?',
    erklTage1: 'Una barra por día, de izquierda a derecha hasta hoy. La altura muestra el consumo de ese día en relación con el día más intenso del periodo. Los días sin barra son días en los que no trabajaste con Claude Code.',

    modelleTitle: 'Por modelo',
    erklModelle: '¿Por qué es interesante?',
    erklModelle1: 'Los modelos difieren en rapidez y minuciosidad. Si uno solo concentra casi todo tu consumo, merece la pena plantearse si para las tareas sencillas bastaría con uno más pequeño.',

    ordnerTitle: 'Por carpeta de trabajo',
    erklOrdner: '¿De dónde salen estos nombres?',
    erklOrdner1: 'Del directorio desde el que se inició Claude Code. Solo se muestra el último nombre de carpeta, y algo más únicamente cuando dos carpetas coincidirían.',
    erklOrdner2: 'Si casi todo aparece bajo una sola entrada, significa sencillamente que sueles ejecutar Claude Code desde el mismo directorio.',

    stundenTitle: 'Por hora del día',
    erklStunden: '¿Cómo se lee esto?',
    erklStunden1: 'Veinticuatro columnas, una por cada hora del día, sumadas a lo largo de todo el periodo. Muestra cuándo trabajas de verdad, no cuándo crees que trabajas.',

    wochenTitle: 'Por semana',

    sitzungenTitle: 'Sesiones',
    spBeginn: 'Inicio', spDauer: 'Duración', spOrdner: 'Carpeta',
    spAntworten: 'Respuestas', spVerbrauch: 'Consumo',
    erklSitzungen: '¿Qué cuenta como sesión?',
    erklSitzungen1: 'Una conversación continua con Claude Code. La duración es el intervalo entre la primera y la última respuesta; las pausas cuentan, porque Zählwerk no puede saber si fuiste a por café o estabas pensando.',

    zweigeTitle: 'Por rama de Git',
    erklZweige: '¿Para qué sirve?',
    erklZweige1: 'Claude Code registra en qué rama de Git se trabajó. Quien crea una rama por tarea ve aquí cuánto costó cada una. Sin Git, la lista queda vacía.',

    technikTitle: 'Qué se ha leído',
    erklTechnik: '¿Por qué hay dos cifras distintas?',
    erklTechnik1: 'Una misma respuesta aparece varias veces en los registros: una por cada bloque que la compone (razonamiento, texto, llamada a herramienta). Cada una de esas líneas lleva la contabilidad completa de toda la respuesta.',
    erklTechnik2: 'Zählwerk lo detecta y cuenta cada respuesta exactamente una vez. Sumar todas las líneas sin más daría cifras aproximadamente el doble de altas.',

    ftQuellcode: 'Código fuente en GitHub', ftWerkstatt: 'Más herramientas',
    ftLokal: 'Todo se calcula en tu navegador. Tus registros no se suben ni salen de tu dispositivo.',
    ftHinweis: 'Algunas traducciones son automáticas; se agradecen las correcciones. Recuento de visitas anónimo mediante GoatCounter, sin cookies.',
    ftMarke: 'Zählwerk es una herramienta personal y no está afiliada a Anthropic. «Claude» es una marca de Anthropic PBC.',

    lese: 'Leyendo archivo', fertigRechnen: 'Calculando …',
    fehlerKeine: 'En esta carpeta no hay archivos .jsonl. Se refiere a la carpeta «projects» dentro de «.claude», no a la carpeta de tu propio proyecto.',
    antworten_one: 'respuesta', antworten_other: 'respuestas',
    token_one: 'token', token_other: 'tokens',
    sitzungen_one: 'sesión en total', sitzungen_other: 'sesiones en total',
    eMinute: 'min', eStunde: 'h', eTag: 'd',
    allerToken: 'de todos los tokens', projekt: 'Proyecto', zweig: 'Rama',
    listeLeer: 'No hay datos disponibles.',
    tageAlt: 'Consumo por día', tageLeer: 'Sin uso en los últimos 30 días.',
    faktor: 'Entradas duplicadas por respuesta: factor',
    tGelesen: 'Líneas leídas', tAntworten: 'de ellas respuestas reales',
    tDoppelt: 'Entradas duplicadas descartadas', tEingabe: 'Tokens de entrada',
    tAusgabe: 'Tokens de salida', tCacheNeu: 'Contexto almacenado de nuevo',
    tCacheLesen: 'Contexto releído', tAgenten: 'de ellas por subagentes',
    tUnlesbar: 'líneas ilegibles'
  },

  /* ─────────────────────────────── Français ─────────────────────────────── */
  fr: {
    _name: 'Français',
    claim: 'Votre usage de Claude Code en chiffres',
    langLabel: 'Langue', themeLabel: 'Apparence',
    themeSystem: 'Système', themeLight: 'Clair', themeDark: 'Sombre',

    introTitle: 'Choisissez un dossier et c’est parti',
    introLead: 'Zählwerk lit les journaux que Claude Code enregistre sur votre machine et calcule où passe votre consommation. Les fichiers restent sur votre appareil : aucun serveur ne pourrait les recevoir.',
    dropMain: 'Déposez un dossier ici ou cliquez',
    dropSub: 'Seuls les fichiers <code>.jsonl</code> sont lus',
    pfadTitle: 'Où se trouve le dossier ?',
    pfadNote: 'Le dossier est masqué car son nom commence par un point. Dans l’Explorateur, saisissez simplement le chemin dans la barre d’adresse ; dans la boîte de dialogue, il suffit de l’y coller.',

    kennzahlenTitle: 'En un coup d’œil',
    namenVerbergen: 'Masquer les noms', neuLaden: 'Autre dossier',
    kzHeute: 'Aujourd’hui', kzWoche: 'Cette semaine',
    kzGesamt: 'Consommation totale', kzCache: 'Contexte relu',
    erklKennzahlen: 'Que signifient ces chiffres ?',
    erklKennzahlen1: '<strong>Consommation totale</strong> additionne ce qui a été produit de neuf : ce que vous avez tapé, ce que Claude a écrit et la conversation nouvellement placée en mémoire tampon.',
    erklKennzahlen2: '<strong>Contexte relu</strong> figure volontairement à côté, et non dedans. Chaque question de suivi recompte la conversation précédente. Ce nombre croît donc avec la durée d’une session, pas avec votre travail — il vaut généralement vingt à trente fois la consommation réelle et rendrait tout total inutilisable.',
    erklKennzahlen3: 'Un token correspond en gros à une demi-mot. Zählwerk ne peut pas calculer de coûts exacts : les journaux ne contiennent aucun prix et, avec un abonnement, Claude Code ne coûte rien de plus.',

    tageTitle: 'Les 30 derniers jours',
    erklTage: 'Comment lire ce graphique ?',
    erklTage1: 'Une barre par jour, de gauche à droite jusqu’à aujourd’hui. La hauteur indique la consommation du jour par rapport au jour le plus chargé de la période. Les jours sans barre sont ceux où vous n’avez pas travaillé avec Claude Code.',

    modelleTitle: 'Par modèle',
    erklModelle: 'Pourquoi est-ce intéressant ?',
    erklModelle1: 'Les modèles diffèrent en rapidité et en minutie. Si un seul modèle représente presque toute votre consommation, il vaut la peine de se demander si un plus petit suffirait pour les tâches simples.',

    ordnerTitle: 'Par dossier de travail',
    erklOrdner: 'D’où viennent ces noms ?',
    erklOrdner1: 'Du répertoire depuis lequel Claude Code a été lancé. Seul le dernier nom de dossier est affiché — et davantage uniquement si deux dossiers seraient sinon identiques.',
    erklOrdner2: 'Si presque tout se retrouve sous une seule entrée, cela signifie simplement que vous lancez Claude Code le plus souvent depuis le même répertoire.',

    stundenTitle: 'Par heure de la journée',
    erklStunden: 'Comment lire ce graphique ?',
    erklStunden1: 'Vingt-quatre colonnes, une par heure de votre journée, cumulées sur toute la période. Montre quand vous travaillez réellement — pas quand vous croyez travailler.',

    wochenTitle: 'Par semaine',

    sitzungenTitle: 'Sessions',
    spBeginn: 'Début', spDauer: 'Durée', spOrdner: 'Dossier',
    spAntworten: 'Réponses', spVerbrauch: 'Consommation',
    erklSitzungen: 'Qu’est-ce qu’une session ?',
    erklSitzungen1: 'Une conversation continue avec Claude Code. La durée est l’écart entre la première et la dernière réponse : les pauses sont comptées, car Zählwerk ne peut pas savoir si vous alliez chercher un café ou si vous réfléchissiez.',

    zweigeTitle: 'Par branche Git',
    erklZweige: 'À quoi cela sert-il ?',
    erklZweige1: 'Claude Code retient sur quelle branche Git le travail a eu lieu. Si vous créez une branche par tâche, vous voyez ici ce que chaque tâche a coûté. Sans Git, la liste reste vide.',

    technikTitle: 'Ce qui a été lu',
    erklTechnik: 'Pourquoi deux chiffres différents ici ?',
    erklTechnik1: 'Une même réponse apparaît plusieurs fois dans les journaux — une fois par bloc dont elle se compose : réflexion, texte, appel d’outil. Chacune de ces lignes porte la comptabilité complète de toute la réponse.',
    erklTechnik2: 'Zählwerk le détecte et compte chaque réponse exactement une fois. Additionner simplement toutes les lignes donnerait des chiffres environ deux fois trop élevés.',

    ftQuellcode: 'Code source sur GitHub', ftWerkstatt: 'Plus d’outils',
    ftLokal: 'Tout est calculé dans votre navigateur. Vos journaux ne sont jamais téléversés et ne quittent pas votre appareil.',
    ftHinweis: 'Certaines traductions sont automatiques — les corrections sont bienvenues. Comptage des visites anonyme via GoatCounter, sans cookies.',
    ftMarke: 'Zählwerk est un outil personnel, sans lien avec Anthropic. « Claude » est une marque d’Anthropic PBC.',

    lese: 'Lecture du fichier', fertigRechnen: 'Calcul en cours …',
    fehlerKeine: 'Aucun fichier .jsonl dans ce dossier. Il s’agit du dossier « projects » situé dans « .claude », et non du dossier de votre propre projet.',
    antworten_one: 'réponse', antworten_other: 'réponses', antworten_many: 'réponses',
    token_one: 'token', token_other: 'tokens', token_many: 'tokens',
    sitzungen_one: 'session au total', sitzungen_other: 'sessions au total', sitzungen_many: 'sessions au total',
    eMinute: 'min', eStunde: 'h', eTag: 'j',
    allerToken: 'de tous les tokens', projekt: 'Projet', zweig: 'Branche',
    listeLeer: 'Aucune donnée disponible.',
    tageAlt: 'Consommation par jour', tageLeer: 'Aucune utilisation ces 30 derniers jours.',
    faktor: 'Entrées en double par réponse : facteur',
    tGelesen: 'Lignes lues', tAntworten: 'dont réponses réelles',
    tDoppelt: 'Entrées en double écartées', tEingabe: 'Tokens d’entrée',
    tAusgabe: 'Tokens de sortie', tCacheNeu: 'Contexte nouvellement mis en cache',
    tCacheLesen: 'Contexte relu', tAgenten: 'dont par des sous-agents',
    tUnlesbar: 'lignes illisibles'
  },

  /* ─────────────────────────────── Italiano ─────────────────────────────── */
  it: {
    _name: 'Italiano',
    claim: 'Il tuo utilizzo di Claude Code in cifre',
    langLabel: 'Lingua', themeLabel: 'Aspetto',
    themeSystem: 'Sistema', themeLight: 'Chiaro', themeDark: 'Scuro',

    introTitle: 'Scegli una cartella e comincia',
    introLead: 'Zählwerk legge i registri che Claude Code salva sul tuo computer e calcola dove va il tuo consumo. I file restano sul tuo dispositivo: non esiste alcun server che potrebbe riceverli.',
    dropMain: 'Trascina qui una cartella oppure fai clic',
    dropSub: 'Vengono letti solo i file <code>.jsonl</code>',
    pfadTitle: 'Dove si trova la cartella?',
    pfadNote: 'La cartella è nascosta perché il nome inizia con un punto. In Esplora file basta digitare il percorso nella barra degli indirizzi; nella finestra di selezione è sufficiente incollarlo lì.',

    kennzahlenTitle: 'In sintesi',
    namenVerbergen: 'Nascondi i nomi', neuLaden: 'Altra cartella',
    kzHeute: 'Oggi', kzWoche: 'Questa settimana',
    kzGesamt: 'Consumo totale', kzCache: 'Contesto riletto',
    erklKennzahlen: 'Che cosa significano queste cifre?',
    erklKennzahlen1: '<strong>Consumo totale</strong> somma ciò che è stato prodotto ex novo: quello che hai digitato, quello che ha scritto Claude e la conversazione appena inserita nella memoria intermedia.',
    erklKennzahlen2: '<strong>Contesto riletto</strong> sta di proposito accanto, non dentro. Ogni domanda successiva riconteggia la conversazione precedente. Questo numero cresce quindi con la durata di una sessione, non con il tuo lavoro: di solito è venti o trenta volte il consumo effettivo e renderebbe inutilizzabile qualsiasi totale.',
    erklKennzahlen3: 'Un token corrisponde grosso modo a mezza parola. Zählwerk non può calcolare i costi esatti: nei registri non compaiono prezzi e con l’abbonamento Claude Code non costa comunque nulla in più.',

    tageTitle: 'Gli ultimi 30 giorni',
    erklTage: 'Come si legge?',
    erklTage1: 'Una barra per giorno, da sinistra a destra fino a oggi. L’altezza mostra il consumo di quel giorno rispetto al giorno più intenso del periodo. I giorni senza barra sono quelli in cui non hai lavorato con Claude Code.',

    modelleTitle: 'Per modello',
    erklModelle: 'Perché è interessante?',
    erklModelle1: 'I modelli differiscono per rapidità e accuratezza. Se un solo modello assorbe quasi tutto il consumo, vale la pena chiedersi se per i lavori semplici basterebbe uno più piccolo.',

    ordnerTitle: 'Per cartella di lavoro',
    erklOrdner: 'Da dove vengono questi nomi?',
    erklOrdner1: 'Dalla directory in cui è stato avviato Claude Code. Viene mostrato solo l’ultimo nome di cartella, e qualcosa in più soltanto quando due cartelle risulterebbero identiche.',
    erklOrdner2: 'Se quasi tutto ricade sotto un’unica voce, significa semplicemente che di solito avvii Claude Code dalla stessa directory.',

    stundenTitle: 'Per ora del giorno',
    erklStunden: 'Come si legge?',
    erklStunden1: 'Ventiquattro colonne, una per ogni ora della giornata, sommate sull’intero periodo. Mostra quando lavori davvero, non quando credi di lavorare.',

    wochenTitle: 'Per settimana',

    sitzungenTitle: 'Sessioni',
    spBeginn: 'Inizio', spDauer: 'Durata', spOrdner: 'Cartella',
    spAntworten: 'Risposte', spVerbrauch: 'Consumo',
    erklSitzungen: 'Che cos’è una sessione?',
    erklSitzungen1: 'Una conversazione continua con Claude Code. La durata è l’intervallo tra la prima e l’ultima risposta: le pause contano, perché Zählwerk non può sapere se sei andato a prendere un caffè o stavi riflettendo.',

    zweigeTitle: 'Per ramo Git',
    erklZweige: 'A che cosa serve?',
    erklZweige1: 'Claude Code registra su quale ramo Git si è lavorato. Chi crea un ramo per ogni attività vede qui quanto è costata ciascuna. Senza Git l’elenco resta vuoto.',

    technikTitle: 'Che cosa è stato letto',
    erklTechnik: 'Perché qui ci sono due cifre diverse?',
    erklTechnik1: 'Una singola risposta compare più volte nei registri, una per ogni blocco che la compone: ragionamento, testo, chiamata a strumento. Ognuna di queste righe porta con sé il conteggio completo dell’intera risposta.',
    erklTechnik2: 'Zählwerk se ne accorge e conta ogni risposta esattamente una volta. Sommando semplicemente tutte le righe si otterrebbero cifre circa doppie.',

    ftQuellcode: 'Codice sorgente su GitHub', ftWerkstatt: 'Altri strumenti',
    ftLokal: 'Tutto viene calcolato nel tuo browser. I tuoi registri non vengono caricati e non lasciano il dispositivo.',
    ftHinweis: 'Alcune traduzioni sono automatiche: le correzioni sono benvenute. Conteggio visite anonimo tramite GoatCounter, senza cookie.',
    ftMarke: 'Zählwerk è uno strumento personale e non è affiliato ad Anthropic. «Claude» è un marchio di Anthropic PBC.',

    lese: 'Lettura del file', fertigRechnen: 'Calcolo in corso …',
    fehlerKeine: 'In questa cartella non ci sono file .jsonl. Si intende la cartella «projects» dentro «.claude», non la cartella del tuo progetto.',
    antworten_one: 'risposta', antworten_other: 'risposte',
    token_one: 'token', token_other: 'token',
    sitzungen_one: 'sessione in totale', sitzungen_other: 'sessioni in totale',
    eMinute: 'min', eStunde: 'h', eTag: 'g',
    allerToken: 'di tutti i token', projekt: 'Progetto', zweig: 'Ramo',
    listeLeer: 'Nessun dato disponibile.',
    tageAlt: 'Consumo per giorno', tageLeer: 'Nessun utilizzo negli ultimi 30 giorni.',
    faktor: 'Voci duplicate per risposta: fattore',
    tGelesen: 'Righe lette', tAntworten: 'di cui risposte effettive',
    tDoppelt: 'Voci duplicate scartate', tEingabe: 'Token in ingresso',
    tAusgabe: 'Token in uscita', tCacheNeu: 'Contesto memorizzato ex novo',
    tCacheLesen: 'Contesto riletto', tAgenten: 'di cui da sotto-agenti',
    tUnlesbar: 'righe illeggibili'
  },

  /* ─────────────────────────────── Português ─────────────────────────────── */
  pt: {
    _name: 'Português',
    claim: 'O seu uso do Claude Code em números',
    langLabel: 'Idioma', themeLabel: 'Aparência',
    themeSystem: 'Sistema', themeLight: 'Claro', themeDark: 'Escuro',

    introTitle: 'Escolha uma pasta e comece',
    introLead: 'O Zählwerk lê os registos que o Claude Code guarda no seu computador e calcula para onde vai o seu consumo. Os ficheiros permanecem no seu dispositivo — não existe servidor algum que os pudesse receber.',
    dropMain: 'Arraste uma pasta para aqui ou clique',
    dropSub: 'São lidos apenas ficheiros <code>.jsonl</code>',
    pfadTitle: 'Onde fica a pasta?',
    pfadNote: 'A pasta está oculta porque o nome começa por um ponto. No Explorador, basta escrever o caminho na barra de endereço; na janela de seleção, colá-lo aí é suficiente.',

    kennzahlenTitle: 'Num relance',
    namenVerbergen: 'Ocultar nomes', neuLaden: 'Outra pasta',
    kzHeute: 'Hoje', kzWoche: 'Esta semana',
    kzGesamt: 'Consumo total', kzCache: 'Contexto relido',
    erklKennzahlen: 'O que significam estes números?',
    erklKennzahlen1: '<strong>Consumo total</strong> soma aquilo que foi produzido de novo: o que escreveu, o que o Claude redigiu e a conversa recém-colocada na memória intermédia.',
    erklKennzahlen2: '<strong>Contexto relido</strong> aparece de propósito ao lado, não dentro. Cada pergunta de seguimento volta a contar a conversa anterior. Este número cresce, portanto, com a duração de uma sessão e não com o seu trabalho — costuma ser vinte a trinta vezes o consumo real e tornaria inútil qualquer total.',
    erklKennzahlen3: 'Um token corresponde grosso modo a meia palavra. O Zählwerk não consegue calcular custos exatos: os registos não contêm preços e, com subscrição, o Claude Code não custa nada adicional.',

    tageTitle: 'Os últimos 30 dias',
    erklTage: 'Como se lê isto?',
    erklTage1: 'Uma barra por dia, da esquerda para a direita até hoje. A altura mostra o consumo desse dia em relação ao dia mais intenso do período. Dias sem barra são dias em que não trabalhou com o Claude Code.',

    modelleTitle: 'Por modelo',
    erklModelle: 'Porque é isto interessante?',
    erklModelle1: 'Os modelos diferem em rapidez e minúcia. Se um único modelo representa quase todo o seu consumo, vale a pena pensar se, para tarefas simples, um mais pequeno chegaria.',

    ordnerTitle: 'Por pasta de trabalho',
    erklOrdner: 'De onde vêm estes nomes?',
    erklOrdner1: 'Do diretório a partir do qual o Claude Code foi iniciado. É mostrado apenas o último nome de pasta — e mais só quando duas pastas ficariam iguais.',
    erklOrdner2: 'Se quase tudo aparece sob uma única entrada, isso significa simplesmente que costuma executar o Claude Code a partir do mesmo diretório.',

    stundenTitle: 'Por hora do dia',
    erklStunden: 'Como se lê isto?',
    erklStunden1: 'Vinte e quatro colunas, uma por cada hora do dia, somadas ao longo de todo o período. Mostra quando trabalha de facto — não quando julga trabalhar.',

    wochenTitle: 'Por semana',

    sitzungenTitle: 'Sessões',
    spBeginn: 'Início', spDauer: 'Duração', spOrdner: 'Pasta',
    spAntworten: 'Respostas', spVerbrauch: 'Consumo',
    erklSitzungen: 'O que conta como sessão?',
    erklSitzungen1: 'Uma conversa contínua com o Claude Code. A duração é o intervalo entre a primeira e a última resposta — as pausas contam, porque o Zählwerk não pode saber se foi buscar café ou se estava a pensar.',

    zweigeTitle: 'Por ramo do Git',
    erklZweige: 'Para que serve isto?',
    erklZweige1: 'O Claude Code regista em que ramo do Git se trabalhou. Quem cria um ramo por tarefa vê aqui quanto custou cada uma. Sem Git, a lista fica vazia.',

    technikTitle: 'O que foi lido',
    erklTechnik: 'Porque há aqui dois números diferentes?',
    erklTechnik1: 'Uma única resposta surge várias vezes nos registos — uma por cada bloco que a compõe: raciocínio, texto, chamada de ferramenta. Cada uma dessas linhas traz a contabilidade completa da resposta inteira.',
    erklTechnik2: 'O Zählwerk deteta isso e conta cada resposta exatamente uma vez. Somar simplesmente todas as linhas daria números cerca do dobro.',

    ftQuellcode: 'Código-fonte no GitHub', ftWerkstatt: 'Mais ferramentas',
    ftLokal: 'Tudo é calculado no seu navegador. Os seus registos nunca são enviados e não saem do dispositivo.',
    ftHinweis: 'Algumas traduções são automáticas — correções são bem-vindas. Contagem de visitas anónima via GoatCounter, sem cookies.',
    ftMarke: 'O Zählwerk é uma ferramenta pessoal e não tem qualquer ligação à Anthropic. «Claude» é uma marca da Anthropic PBC.',

    lese: 'A ler ficheiro', fertigRechnen: 'A calcular …',
    fehlerKeine: 'Não há ficheiros .jsonl nesta pasta. Trata-se da pasta «projects» dentro de «.claude» — não a pasta do seu próprio projeto.',
    antworten_one: 'resposta', antworten_other: 'respostas', antworten_many: 'respostas',
    token_one: 'token', token_other: 'tokens', token_many: 'tokens',
    sitzungen_one: 'sessão no total', sitzungen_other: 'sessões no total', sitzungen_many: 'sessões no total',
    eMinute: 'min', eStunde: 'h', eTag: 'd',
    allerToken: 'de todos os tokens', projekt: 'Projeto', zweig: 'Ramo',
    listeLeer: 'Sem dados disponíveis.',
    tageAlt: 'Consumo por dia', tageLeer: 'Sem utilização nos últimos 30 dias.',
    faktor: 'Entradas duplicadas por resposta: fator',
    tGelesen: 'Linhas lidas', tAntworten: 'das quais respostas reais',
    tDoppelt: 'Entradas duplicadas descartadas', tEingabe: 'Tokens de entrada',
    tAusgabe: 'Tokens de saída', tCacheNeu: 'Contexto novamente em cache',
    tCacheLesen: 'Contexto relido', tAgenten: 'das quais por subagentes',
    tUnlesbar: 'linhas ilegíveis'
  },

  /* ─────────────────────────────── Türkçe ─────────────────────────────── */
  tr: {
    _name: 'Türkçe',
    claim: 'Claude Code kullanımınız rakamlarla',
    langLabel: 'Dil', themeLabel: 'Görünüm',
    themeSystem: 'Sistem', themeLight: 'Açık', themeDark: 'Koyu',

    introTitle: 'Bir klasör seçin ve başlayın',
    introLead: 'Zählwerk, Claude Code’un bilgisayarınızda tuttuğu kayıtları okur ve tüketiminizin nereye gittiğini hesaplar. Dosyalar cihazınızda kalır — onları alabilecek bir sunucu yoktur.',
    dropMain: 'Klasörü buraya sürükleyin veya tıklayın',
    dropSub: 'Yalnızca <code>.jsonl</code> dosyaları okunur',
    pfadTitle: 'Klasör nerede?',
    pfadNote: 'Adı noktayla başladığı için klasör gizlidir. Dosya Gezgini’nde yolu adres çubuğuna yazmanız yeterli; seçim penceresinde ise oraya yapıştırmak yeter.',

    kennzahlenTitle: 'Bir bakışta',
    namenVerbergen: 'Adları gizle', neuLaden: 'Başka klasör',
    kzHeute: 'Bugün', kzWoche: 'Bu hafta',
    kzGesamt: 'Toplam tüketim', kzCache: 'Yeniden okunan bağlam',
    erklKennzahlen: 'Bu sayılar ne anlama geliyor?',
    erklKennzahlen1: '<strong>Toplam tüketim</strong>, yeni ortaya çıkanı toplar: yazdıklarınızı, Claude’un yazdıklarını ve ara belleğe yeni alınan konuşma geçmişini.',
    erklKennzahlen2: '<strong>Yeniden okunan bağlam</strong> bilinçli olarak yanında durur, içinde değil. Her yeni soruda önceki konuşma bir kez daha sayılır. Bu sayı çalışmanızla değil, oturumun uzunluğuyla büyür — genellikle gerçek tüketimin yirmi ila otuz katıdır ve her toplamı anlamsız kılar.',
    erklKennzahlen3: 'Bir token kabaca yarım kelimedir. Zählwerk kesin maliyet hesaplayamaz: kayıtlarda fiyat yoktur ve abonelikte Claude Code zaten ek ücret getirmez.',

    tageTitle: 'Son 30 gün',
    erklTage: 'Bu nasıl okunur?',
    erklTage1: 'Her gün için bir çubuk, soldan sağa bugüne kadar. Yükseklik, o günün tüketimini dönemin en yoğun gününe oranla gösterir. Çubuğu olmayan günler, Claude Code ile çalışmadığınız günlerdir.',

    modelleTitle: 'Modele göre',
    erklModelle: 'Bu neden ilginç?',
    erklModelle1: 'Modeller hız ve titizlik bakımından farklıdır. Tek bir model tüketiminizin neredeyse tamamını oluşturuyorsa, basit işler için daha küçüğünün yetip yetmeyeceğini düşünmeye değer.',

    ordnerTitle: 'Çalışma klasörüne göre',
    erklOrdner: 'Bu adlar nereden geliyor?',
    erklOrdner1: 'Claude Code’un başlatıldığı dizinden. Yalnızca son klasör adı gösterilir — iki klasör aynı görünecekse ancak o zaman daha fazlası.',
    erklOrdner2: 'Neredeyse her şey tek bir satırda toplanıyorsa, bu yalnızca Claude Code’u çoğunlukla aynı dizinden çalıştırdığınız anlamına gelir.',

    stundenTitle: 'Günün saatine göre',
    erklStunden: 'Bu nasıl okunur?',
    erklStunden1: 'Günün her saati için bir tane olmak üzere yirmi dört sütun, tüm dönem boyunca toplanmış. Gerçekte ne zaman çalıştığınızı gösterir — çalıştığınızı sandığınız zamanı değil.',

    wochenTitle: 'Haftaya göre',

    sitzungenTitle: 'Oturumlar',
    spBeginn: 'Başlangıç', spDauer: 'Süre', spOrdner: 'Klasör',
    spAntworten: 'Yanıt', spVerbrauch: 'Tüketim',
    erklSitzungen: 'Oturum neye denir?',
    erklSitzungen1: 'Claude Code ile kesintisiz süren bir konuşma. Süre, ilk ve son yanıt arasındaki aralıktır — aralar da sayılır, çünkü Zählwerk kahve almaya mı gittiğinizi yoksa düşündüğünüzü mü bilemez.',

    zweigeTitle: 'Git dalına göre',
    erklZweige: 'Bu ne işe yarar?',
    erklZweige1: 'Claude Code hangi Git dalında çalışıldığını kaydeder. Her görev için ayrı dal açanlar, burada hangi görevin ne kadara mal olduğunu görür. Git yoksa liste boş kalır.',

    technikTitle: 'Neler okundu',
    erklTechnik: 'Burada neden iki farklı sayı var?',
    erklTechnik1: 'Tek bir yanıt kayıtlarda birden çok kez yer alır — oluştuğu her blok için bir kez: düşünme, metin, araç çağrısı. Bu satırların her biri tüm yanıtın eksiksiz hesabını taşır.',
    erklTechnik2: 'Zählwerk bunu fark eder ve her yanıtı tam olarak bir kez sayar. Tüm satırlar öylece toplansaydı, yaklaşık iki katı sayılar çıkardı.',

    ftQuellcode: 'GitHub’da kaynak kodu', ftWerkstatt: 'Diğer araçlar',
    ftLokal: 'Her şey tarayıcınızda hesaplanır. Kayıtlarınız yüklenmez ve cihazınızdan çıkmaz.',
    ftHinweis: 'Bazı çeviriler makine çevirisidir — düzeltmeler memnuniyetle karşılanır. Ziyaretçi sayımı GoatCounter ile anonim, çerezsiz.',
    ftMarke: 'Zählwerk kişisel bir araçtır ve Anthropic ile bağlantısı yoktur. „Claude“, Anthropic PBC’nin markasıdır.',

    lese: 'Dosya okunuyor', fertigRechnen: 'Hesaplanıyor …',
    fehlerKeine: 'Bu klasörde .jsonl dosyası yok. Kastedilen, „.claude“ içindeki „projects“ klasörüdür — kendi projenizin klasörü değil.',
    antworten_one: 'yanıt', antworten_other: 'yanıt',
    token_one: 'token', token_other: 'token',
    sitzungen_one: 'oturum toplam', sitzungen_other: 'oturum toplam',
    eMinute: 'dk', eStunde: 's', eTag: 'g',
    allerToken: 'tüm tokenlerin', projekt: 'Proje', zweig: 'Dal',
    listeLeer: 'Veri yok.',
    tageAlt: 'Güne göre tüketim', tageLeer: 'Son 30 günde kullanım yok.',
    faktor: 'Yanıt başına yinelenen kayıt: katsayı',
    tGelesen: 'Okunan satır', tAntworten: 'bunlardan gerçek yanıt',
    tDoppelt: 'Elenen yinelenen kayıt', tEingabe: 'Girdi tokenleri',
    tAusgabe: 'Çıktı tokenleri', tCacheNeu: 'Yeni önbelleğe alınan bağlam',
    tCacheLesen: 'Yeniden okunan bağlam', tAgenten: 'bunlardan alt aracılarca',
    tUnlesbar: 'okunamayan satır'
  },

  /* ─────────────────────────────── Русский ─────────────────────────────── */
  ru: {
    _name: 'Русский',
    claim: 'Ваше использование Claude Code в цифрах',
    langLabel: 'Язык', themeLabel: 'Оформление',
    themeSystem: 'Системное', themeLight: 'Светлое', themeDark: 'Тёмное',

    introTitle: 'Выберите папку и начните',
    introLead: 'Zählwerk читает журналы, которые Claude Code сохраняет на вашем компьютере, и подсчитывает, куда уходит расход. Файлы остаются на вашем устройстве — нет сервера, который мог бы их получить.',
    dropMain: 'Перетащите папку сюда или нажмите',
    dropSub: 'Читаются только файлы <code>.jsonl</code>',
    pfadTitle: 'Где находится папка?',
    pfadNote: 'Папка скрыта, потому что её имя начинается с точки. В проводнике просто введите путь в адресную строку; в окне выбора достаточно вставить его туда.',

    kennzahlenTitle: 'Кратко',
    namenVerbergen: 'Скрыть названия', neuLaden: 'Другая папка',
    kzHeute: 'Сегодня', kzWoche: 'На этой неделе',
    kzGesamt: 'Общий расход', kzCache: 'Контекст перечитан',
    erklKennzahlen: 'Что означают эти числа?',
    erklKennzahlen1: '<strong>Общий расход</strong> складывает то, что появилось заново: то, что вы напечатали, то, что написал Claude, и разговор, впервые помещённый в промежуточную память.',
    erklKennzahlen2: '<strong>Контекст перечитан</strong> намеренно стоит рядом, а не внутри. При каждом следующем вопросе прежний разговор считается заново. Это число растёт с длительностью сессии, а не с вашей работой — обычно оно в двадцать-тридцать раз больше настоящего расхода и сделало бы любую сумму бессмысленной.',
    erklKennzahlen3: 'Токен — это примерно половина слова. Точные затраты Zählwerk посчитать не может: в журналах нет цен, а по подписке Claude Code и так не стоит ничего дополнительно.',

    tageTitle: 'Последние 30 дней',
    erklTage: 'Как это читать?',
    erklTage1: 'По одному столбцу на день, слева направо до сегодняшнего дня. Высота показывает расход этого дня относительно самого напряжённого дня периода. Дни без столбца — это дни, когда вы не работали с Claude Code.',

    modelleTitle: 'По модели',
    erklModelle: 'Чем это интересно?',
    erklModelle1: 'Модели различаются по скорости и основательности. Если почти весь расход приходится на одну модель, стоит подумать, не хватит ли для простых задач модели поменьше.',

    ordnerTitle: 'По рабочей папке',
    erklOrdner: 'Откуда эти названия?',
    erklOrdner1: 'Из каталога, в котором был запущен Claude Code. Показывается только последнее имя папки — и больше лишь тогда, когда две папки иначе выглядели бы одинаково.',
    erklOrdner2: 'Если почти всё собрано в одной строке, это просто значит, что вы обычно запускаете Claude Code из одного и того же каталога.',

    stundenTitle: 'По времени суток',
    erklStunden: 'Как это читать?',
    erklStunden1: 'Двадцать четыре столбца, по одному на каждый час суток, просуммированные за весь период. Показывает, когда вы работаете на самом деле, а не когда вам кажется.',

    wochenTitle: 'По неделям',

    sitzungenTitle: 'Сессии',
    spBeginn: 'Начало', spDauer: 'Длительность', spOrdner: 'Папка',
    spAntworten: 'Ответы', spVerbrauch: 'Расход',
    erklSitzungen: 'Что считается сессией?',
    erklSitzungen1: 'Один непрерывный разговор с Claude Code. Длительность — промежуток между первым и последним ответом; паузы учитываются, ведь Zählwerk не может знать, ходили вы за кофе или размышляли.',

    zweigeTitle: 'По ветке Git',
    erklZweige: 'Зачем это нужно?',
    erklZweige1: 'Claude Code запоминает, в какой ветке Git шла работа. Кто заводит отдельную ветку на задачу, увидит здесь, во что обошлась каждая. Без Git список остаётся пустым.',

    technikTitle: 'Что было прочитано',
    erklTechnik: 'Почему здесь два разных числа?',
    erklTechnik1: 'Один ответ встречается в журналах несколько раз — по одному разу на каждый блок, из которых он состоит: размышление, текст, вызов инструмента. Каждая такая строка несёт полный учёт всего ответа.',
    erklTechnik2: 'Zählwerk это распознаёт и считает каждый ответ ровно один раз. Если просто сложить все строки, числа окажутся примерно вдвое больше.',

    ftQuellcode: 'Исходный код на GitHub', ftWerkstatt: 'Другие инструменты',
    ftLokal: 'Все вычисления идут в вашем браузере. Ваши журналы не загружаются никуда и не покидают устройство.',
    ftHinweis: 'Часть переводов машинная — поправки приветствуются. Подсчёт посещений анонимный через GoatCounter, без файлов cookie.',
    ftMarke: 'Zählwerk — частный инструмент, не связанный с Anthropic. «Claude» — товарный знак Anthropic PBC.',

    lese: 'Чтение файла', fertigRechnen: 'Считаю …',
    fehlerKeine: 'В этой папке нет файлов .jsonl. Имеется в виду папка «projects» внутри «.claude», а не папка вашего собственного проекта.',
    antworten_one: 'ответ', antworten_few: 'ответа', antworten_many: 'ответов', antworten_other: 'ответа',
    token_one: 'токен', token_few: 'токена', token_many: 'токенов', token_other: 'токена',
    sitzungen_one: 'сессия всего', sitzungen_few: 'сессии всего', sitzungen_many: 'сессий всего', sitzungen_other: 'сессии всего',
    eMinute: 'мин', eStunde: 'ч', eTag: 'д',
    allerToken: 'всех токенов', projekt: 'Проект', zweig: 'Ветка',
    listeLeer: 'Данных нет.',
    tageAlt: 'Расход по дням', tageLeer: 'За последние 30 дней использования не было.',
    faktor: 'Повторных записей на ответ: коэффициент',
    tGelesen: 'Прочитано строк', tAntworten: 'из них настоящих ответов',
    tDoppelt: 'Отброшено повторов', tEingabe: 'Входные токены',
    tAusgabe: 'Выходные токены', tCacheNeu: 'Контекст помещён в кэш заново',
    tCacheLesen: 'Контекст перечитан', tAgenten: 'из них подагентами',
    tUnlesbar: 'нечитаемых строк'
  },

  /* ─────────────────────────────── हिन्दी ─────────────────────────────── */
  hi: {
    _name: 'हिन्दी',
    claim: 'आपका Claude Code उपयोग आँकड़ों में',
    langLabel: 'भाषा', themeLabel: 'रूप',
    themeSystem: 'सिस्टम', themeLight: 'हल्का', themeDark: 'गहरा',

    introTitle: 'फ़ोल्डर चुनें और शुरू करें',
    introLead: 'Zählwerk उन लॉग को पढ़ता है जो Claude Code आपके कंप्यूटर पर बनाता है, और हिसाब लगाता है कि आपकी खपत कहाँ जा रही है। फ़ाइलें आपके डिवाइस पर ही रहती हैं — उन्हें लेने वाला कोई सर्वर है ही नहीं।',
    dropMain: 'फ़ोल्डर यहाँ खींचें या क्लिक करें',
    dropSub: 'केवल <code>.jsonl</code> फ़ाइलें पढ़ी जाती हैं',
    pfadTitle: 'फ़ोल्डर कहाँ है?',
    pfadNote: 'फ़ोल्डर छिपा हुआ है क्योंकि उसका नाम बिंदु से शुरू होता है। एक्सप्लोरर में पथ को ऊपर पता-पट्टी में टाइप कर दें; चयन विंडो में उसे वहाँ चिपका देना काफ़ी है।',

    kennzahlenTitle: 'एक नज़र में',
    namenVerbergen: 'नाम छिपाएँ', neuLaden: 'दूसरा फ़ोल्डर',
    kzHeute: 'आज', kzWoche: 'इस सप्ताह',
    kzGesamt: 'कुल खपत', kzCache: 'संदर्भ दोबारा पढ़ा गया',
    erklKennzahlen: 'इन आँकड़ों का क्या अर्थ है?',
    erklKennzahlen1: '<strong>कुल खपत</strong> उसे जोड़ती है जो नया बना: जो आपने लिखा, जो Claude ने लिखा, और वह बातचीत जो नई-नई अस्थायी स्मृति में रखी गई।',
    erklKennzahlen2: '<strong>संदर्भ दोबारा पढ़ा गया</strong> जानबूझकर अलग रखा गया है, भीतर नहीं। हर अगले प्रश्न पर पिछली बातचीत फिर से गिनी जाती है। यह संख्या आपके काम से नहीं, सत्र की लंबाई से बढ़ती है — यह प्रायः असली खपत से बीस-तीस गुना होती है और किसी भी कुल योग को बेकार कर देती।',
    erklKennzahlen3: 'एक टोकन मोटे तौर पर आधा शब्द है। Zählwerk सटीक लागत नहीं निकाल सकता: लॉग में कोई दाम नहीं होता, और सदस्यता में Claude Code का वैसे भी कोई अतिरिक्त शुल्क नहीं है।',

    tageTitle: 'पिछले 30 दिन',
    erklTage: 'इसे कैसे पढ़ें?',
    erklTage1: 'हर दिन के लिए एक स्तंभ, बाएँ से दाएँ आज तक। ऊँचाई उस दिन की खपत को अवधि के सबसे व्यस्त दिन के अनुपात में दिखाती है। बिना स्तंभ वाले दिन वे हैं जब आपने Claude Code से काम नहीं किया।',

    modelleTitle: 'मॉडल के अनुसार',
    erklModelle: 'यह क्यों दिलचस्प है?',
    erklModelle1: 'मॉडल गति और गहराई में अलग-अलग हैं। यदि लगभग पूरी खपत एक ही मॉडल की है, तो सोचना सार्थक है कि सरल कामों के लिए कोई छोटा मॉडल पर्याप्त होगा या नहीं।',

    ordnerTitle: 'कार्य फ़ोल्डर के अनुसार',
    erklOrdner: 'ये नाम कहाँ से आते हैं?',
    erklOrdner1: 'उस डायरेक्टरी से जहाँ से Claude Code शुरू किया गया था। केवल अंतिम फ़ोल्डर नाम दिखाया जाता है — और उससे अधिक तभी जब दो फ़ोल्डर एक जैसे दिखते।',
    erklOrdner2: 'यदि लगभग सब कुछ एक ही पंक्ति में है, तो इसका सीधा अर्थ है कि आप Claude Code प्रायः एक ही डायरेक्टरी से चलाते हैं।',

    stundenTitle: 'दिन के समय के अनुसार',
    erklStunden: 'इसे कैसे पढ़ें?',
    erklStunden1: 'चौबीस स्तंभ, दिन के हर घंटे के लिए एक, पूरी अवधि में जोड़े गए। यह दिखाता है कि आप वास्तव में कब काम करते हैं — तब नहीं जब आप सोचते हैं कि करते हैं।',

    wochenTitle: 'सप्ताह के अनुसार',

    sitzungenTitle: 'सत्र',
    spBeginn: 'आरंभ', spDauer: 'अवधि', spOrdner: 'फ़ोल्डर',
    spAntworten: 'उत्तर', spVerbrauch: 'खपत',
    erklSitzungen: 'सत्र किसे कहते हैं?',
    erklSitzungen1: 'Claude Code के साथ एक निरंतर बातचीत। अवधि पहले और अंतिम उत्तर के बीच का अंतराल है — बीच के विराम भी गिने जाते हैं, क्योंकि Zählwerk यह नहीं जान सकता कि आप कॉफ़ी लेने गए थे या सोच रहे थे।',

    zweigeTitle: 'Git शाखा के अनुसार',
    erklZweige: 'यह किस काम का?',
    erklZweige1: 'Claude Code याद रखता है कि किस Git शाखा पर काम हुआ। जो हर काम के लिए अलग शाखा बनाते हैं, वे यहाँ देख सकते हैं कि किस काम में कितना लगा। Git न हो तो सूची खाली रहती है।',

    technikTitle: 'क्या पढ़ा गया',
    erklTechnik: 'यहाँ दो अलग-अलग संख्याएँ क्यों हैं?',
    erklTechnik1: 'एक ही उत्तर लॉग में कई बार आता है — उसके हर खंड के लिए एक बार: सोच, पाठ, उपकरण-आह्वान। इनमें से हर पंक्ति पूरे उत्तर का सम्पूर्ण हिसाब लिए होती है।',
    erklTechnik2: 'Zählwerk इसे पहचानता है और हर उत्तर को ठीक एक बार गिनता है। यदि सारी पंक्तियाँ यूँ ही जोड़ दी जातीं, तो संख्याएँ लगभग दुगनी निकलतीं।',

    ftQuellcode: 'GitHub पर स्रोत कोड', ftWerkstatt: 'और उपकरण',
    ftLokal: 'सब कुछ आपके ब्राउज़र में ही गिना जाता है। आपके लॉग कहीं अपलोड नहीं होते और आपका डिवाइस नहीं छोड़ते।',
    ftHinweis: 'कुछ अनुवाद मशीनी हैं — सुधार सादर आमंत्रित हैं। आगंतुक गणना GoatCounter द्वारा गुमनाम, बिना कुकी।',
    ftMarke: 'Zählwerk एक निजी उपकरण है और Anthropic से इसका कोई संबंध नहीं। „Claude“ Anthropic PBC का ट्रेडमार्क है।',

    lese: 'फ़ाइल पढ़ी जा रही है', fertigRechnen: 'गणना हो रही है …',
    fehlerKeine: 'इस फ़ोल्डर में कोई .jsonl फ़ाइल नहीं है। अभिप्राय „.claude“ के भीतर वाले „projects“ फ़ोल्डर से है — आपके अपने प्रोजेक्ट के फ़ोल्डर से नहीं।',
    antworten_one: 'उत्तर', antworten_other: 'उत्तर',
    token_one: 'टोकन', token_other: 'टोकन',
    sitzungen_one: 'सत्र कुल', sitzungen_other: 'सत्र कुल',
    eMinute: 'मि', eStunde: 'घं', eTag: 'दि',
    allerToken: 'सभी टोकनों का', projekt: 'प्रोजेक्ट', zweig: 'शाखा',
    listeLeer: 'कोई डेटा उपलब्ध नहीं।',
    tageAlt: 'प्रतिदिन खपत', tageLeer: 'पिछले 30 दिनों में कोई उपयोग नहीं।',
    faktor: 'प्रति उत्तर दोहरी प्रविष्टियाँ: गुणक',
    tGelesen: 'पढ़ी गई पंक्तियाँ', tAntworten: 'उनमें से वास्तविक उत्तर',
    tDoppelt: 'हटाई गई दोहरी प्रविष्टियाँ', tEingabe: 'इनपुट टोकन',
    tAusgabe: 'आउटपुट टोकन', tCacheNeu: 'संदर्भ नया संचित',
    tCacheLesen: 'संदर्भ दोबारा पढ़ा गया', tAgenten: 'उनमें से उप-एजेंटों द्वारा',
    tUnlesbar: 'अपठनीय पंक्तियाँ'
  },

  /* ─────────────────────────────── 中文 ─────────────────────────────── */
  zh: {
    _name: '中文',
    claim: '用数字看你的 Claude Code 用量',
    langLabel: '语言', themeLabel: '外观',
    themeSystem: '跟随系统', themeLight: '浅色', themeDark: '深色',

    introTitle: '选择文件夹即可开始',
    introLead: 'Zählwerk 读取 Claude Code 在你电脑上生成的日志，算出用量都花在了哪里。文件始终留在你的设备上——根本没有服务器可以接收它们。',
    dropMain: '把文件夹拖到这里，或点击选择',
    dropSub: '只读取 <code>.jsonl</code> 文件',
    pfadTitle: '文件夹在哪里？',
    pfadNote: '该文件夹名以点开头，因此是隐藏的。在资源管理器中直接把路径输入地址栏即可；在选择窗口里粘贴进去就行。',

    kennzahlenTitle: '概览',
    namenVerbergen: '隐藏名称', neuLaden: '换个文件夹',
    kzHeute: '今天', kzWoche: '本周',
    kzGesamt: '总用量', kzCache: '重复读取的上下文',
    erklKennzahlen: '这些数字是什么意思？',
    erklKennzahlen1: '<strong>总用量</strong>统计的是新产生的部分：你输入的内容、Claude 写出的内容，以及新写入缓存的对话。',
    erklKennzahlen2: '<strong>重复读取的上下文</strong>特意放在旁边，而不是算在里面。每追问一次，之前的对话就会被再数一遍。因此这个数字随会话长度增长，而不是随你的工作量增长——它通常是真实用量的二三十倍，会让任何合计数字失去意义。',
    erklKennzahlen3: '一个 token 大致相当于半个词。Zählwerk 无法算出准确费用：日志里没有价格，而在订阅制下使用 Claude Code 本就不额外收费。',

    tageTitle: '最近 30 天',
    erklTage: '怎么看这张图？',
    erklTage1: '每天一根柱子，从左到右直到今天。高度表示当天用量相对于这段时间内最高一天的比例。没有柱子的日子，就是你没有使用 Claude Code 的日子。',

    modelleTitle: '按模型',
    erklModelle: '这有什么用？',
    erklModelle1: '各个模型在速度和细致程度上并不相同。如果几乎全部用量都来自同一个模型，那就值得想想：简单的活儿是不是用小一点的模型也够了。',

    ordnerTitle: '按工作目录',
    erklOrdner: '这些名称从哪来？',
    erklOrdner1: '来自启动 Claude Code 时所在的目录。只显示最后一级文件夹名——只有当两个文件夹重名时才多显示一层。',
    erklOrdner2: '如果几乎所有用量都集中在一条上，那只说明你通常都在同一个目录里运行 Claude Code。',

    stundenTitle: '按一天中的时段',
    erklStunden: '怎么看这张图？',
    erklStunden1: '二十四根柱子，一小时一根，按整段时间累加。它显示你真正在什么时候工作——而不是你以为的那个时候。',

    wochenTitle: '按周',

    sitzungenTitle: '会话',
    spBeginn: '开始', spDauer: '时长', spOrdner: '文件夹',
    spAntworten: '回复数', spVerbrauch: '用量',
    erklSitzungen: '什么算一次会话？',
    erklSitzungen1: '与 Claude Code 的一段连续对话。时长是首条与末条回复之间的间隔——中间的停顿也算在内，因为 Zählwerk 无从得知你是去倒咖啡了，还是在思考。',

    zweigeTitle: '按 Git 分支',
    erklZweige: '这有什么用？',
    erklZweige1: 'Claude Code 会记录当时所在的 Git 分支。若你习惯每个任务开一个分支，这里就能看出每个任务花了多少。没有用 Git 的话，列表是空的。',

    technikTitle: '读取了什么',
    erklTechnik: '为什么这里有两个不同的数字？',
    erklTechnik1: '同一条回复在日志里会出现多次——它由几个部分组成就出现几次：思考、正文、工具调用。而每一行都带着整条回复的完整计数。',
    erklTechnik2: 'Zählwerk 能识别这一点，每条回复只数一次。若把所有行直接相加，得出的数字大约会翻一倍。',

    ftQuellcode: 'GitHub 上的源代码', ftWerkstatt: '更多工具',
    ftLokal: '一切都在你的浏览器里计算。你的日志不会被上传，也不会离开你的设备。',
    ftHinweis: '部分翻译由机器生成——欢迎指正。访问统计通过 GoatCounter 匿名进行，不使用 Cookie。',
    ftMarke: 'Zählwerk 是个人工具，与 Anthropic 无关。「Claude」是 Anthropic PBC 的商标。',

    lese: '正在读取文件', fertigRechnen: '正在计算 …',
    fehlerKeine: '这个文件夹里没有 .jsonl 文件。指的是「.claude」里面的「projects」文件夹——不是你自己项目的文件夹。',
    antworten_one: '条回复', antworten_other: '条回复',
    token_one: '个 token', token_other: '个 token',
    sitzungen_one: '次会话', sitzungen_other: '次会话',
    eMinute: '分', eStunde: '时', eTag: '天',
    allerToken: '（占全部 token）', projekt: '项目', zweig: '分支',
    listeLeer: '暂无数据。',
    tageAlt: '每日用量', tageLeer: '最近 30 天没有使用记录。',
    faktor: '每条回复的重复条目：倍数',
    tGelesen: '读取行数', tAntworten: '其中真实回复',
    tDoppelt: '丢弃的重复条目', tEingabe: '输入 token',
    tAusgabe: '输出 token', tCacheNeu: '新写入缓存的上下文',
    tCacheLesen: '重复读取的上下文', tAgenten: '其中来自子代理',
    tUnlesbar: '无法解析的行'
  },

  /* ─────────────────────────────── 日本語 ─────────────────────────────── */
  ja: {
    _name: '日本語',
    claim: 'Claude Code の使用状況を数字で',
    langLabel: '言語', themeLabel: '表示',
    themeSystem: 'システム', themeLight: 'ライト', themeDark: 'ダーク',

    introTitle: 'フォルダーを選ぶだけ',
    introLead: 'Zählwerk は Claude Code がパソコンに残すログを読み取り、使用量の内訳を計算します。ファイルは端末から出ません——受け取るサーバーそのものが存在しないからです。',
    dropMain: 'フォルダーをここにドロップ、またはクリック',
    dropSub: '読み取るのは <code>.jsonl</code> ファイルのみです',
    pfadTitle: 'フォルダーの場所',
    pfadNote: '名前がドットで始まるため、このフォルダーは隠し属性です。エクスプローラーではアドレスバーにパスを直接入力すれば開けます。選択ダイアログでも貼り付けるだけで構いません。',

    kennzahlenTitle: '概要',
    namenVerbergen: '名前を隠す', neuLaden: '別のフォルダー',
    kzHeute: '今日', kzWoche: '今週',
    kzGesamt: '使用量の合計', kzCache: '読み直された文脈',
    erklKennzahlen: 'これらの数字の意味',
    erklKennzahlen1: '<strong>使用量の合計</strong>は、新たに生じた分を合計したものです。あなたが入力した内容、Claude が書いた内容、そして新しくキャッシュに置かれた会話です。',
    erklKennzahlen2: '<strong>読み直された文脈</strong>は、あえて合計の外に並べてあります。追加の質問をするたび、それまでの会話がもう一度数えられるためです。この数字は作業量ではなくセッションの長さとともに増え、通常は実際の使用量の二十〜三十倍に達します。合計に含めれば、どんな総計も意味をなさなくなります。',
    erklKennzahlen3: 'トークンはおおよそ半語分です。正確な費用は算出できません。ログに価格は記録されておらず、サブスクリプションでは Claude Code に追加料金もかからないからです。',

    tageTitle: '直近 30 日',
    erklTage: '見方',
    erklTage1: '1 日につき 1 本の棒を、左から右へ今日まで並べています。高さは、その期間で最も多かった日を基準にした相対値です。棒のない日は、Claude Code を使わなかった日です。',

    modelleTitle: 'モデル別',
    erklModelle: 'なぜ役に立つのか',
    erklModelle1: 'モデルによって速さも丁寧さも異なります。使用量のほとんどが一つのモデルに偏っているなら、簡単な作業には小さめのモデルで足りないか、考えてみる価値があります。',

    ordnerTitle: '作業フォルダー別',
    erklOrdner: 'この名前の出どころ',
    erklOrdner1: 'Claude Code を起動したディレクトリです。表示するのは末尾のフォルダー名だけで、二つのフォルダーが同名になる場合にのみ、区別できるところまで遡って表示します。',
    erklOrdner2: 'ほとんどが一行に集中しているなら、いつも同じディレクトリから Claude Code を起動している、というだけのことです。',

    stundenTitle: '時間帯別',
    erklStunden: '見方',
    erklStunden1: '1 日 24 時間ぶんの柱を、期間全体で合計したものです。自分が実際に作業している時間帯が分かります——そう思い込んでいる時間帯ではなく。',

    wochenTitle: '週別',

    sitzungenTitle: 'セッション',
    spBeginn: '開始', spDauer: '長さ', spOrdner: 'フォルダー',
    spAntworten: '応答数', spVerbrauch: '使用量',
    erklSitzungen: 'セッションとは',
    erklSitzungen1: 'Claude Code との一続きの対話です。長さは最初と最後の応答の間隔で、途中の休憩も含まれます。コーヒーを取りに行っていたのか考え込んでいたのかは、Zählwerk には分からないからです。',

    zweigeTitle: 'Git ブランチ別',
    erklZweige: '何の役に立つのか',
    erklZweige1: 'Claude Code はどの Git ブランチで作業したかを記録しています。作業ごとにブランチを切る方なら、どの作業にどれだけかかったかが分かります。Git を使っていなければ、この一覧は空のままです。',

    technikTitle: '読み取った内容',
    erklTechnik: 'なぜ二つの数字があるのか',
    erklTechnik1: '一つの応答は、ログの中に複数回現れます。思考・本文・ツール呼び出しといった構成要素ごとに 1 行ずつ記録され、そのどの行にも応答全体の集計が丸ごと入っているためです。',
    erklTechnik2: 'Zählwerk はこれを見分け、応答を必ず 1 回だけ数えます。行をそのまま合計すると、およそ倍の数字になってしまいます。',

    ftQuellcode: 'GitHub のソースコード', ftWerkstatt: 'ほかの道具',
    ftLokal: '計算はすべてブラウザー内で行われます。ログがアップロードされることはなく、端末から出ることもありません。',
    ftHinweis: '一部の翻訳は機械によるものです。修正のご指摘を歓迎します。訪問者数は GoatCounter により匿名で計測し、Cookie は使いません。',
    ftMarke: 'Zählwerk は個人の道具であり、Anthropic とは関係ありません。「Claude」は Anthropic PBC の商標です。',

    lese: 'ファイルを読み込み中', fertigRechnen: '計算中 …',
    fehlerKeine: 'このフォルダーに .jsonl ファイルがありません。指しているのは「.claude」の中の「projects」フォルダーであって、ご自身のプロジェクトのフォルダーではありません。',
    antworten_one: '件の応答', antworten_other: '件の応答',
    token_one: 'トークン', token_other: 'トークン',
    sitzungen_one: '件のセッション', sitzungen_other: '件のセッション',
    eMinute: '分', eStunde: '時間', eTag: '日',
    allerToken: '（全トークン中）', projekt: 'プロジェクト', zweig: 'ブランチ',
    listeLeer: 'データがありません。',
    tageAlt: '日別の使用量', tageLeer: '直近 30 日間の利用はありません。',
    faktor: '応答あたりの重複記録：倍率',
    tGelesen: '読み取った行数', tAntworten: 'うち実際の応答',
    tDoppelt: '破棄した重複記録', tEingabe: '入力トークン',
    tAusgabe: '出力トークン', tCacheNeu: '新たにキャッシュした文脈',
    tCacheLesen: '読み直された文脈', tAgenten: 'うちサブエージェントによるもの',
    tUnlesbar: '読み取れなかった行'
  },

  /* ─────────────────────────────── 한국어 ─────────────────────────────── */
  ko: {
    _name: '한국어',
    claim: '숫자로 보는 Claude Code 사용량',
    langLabel: '언어', themeLabel: '화면',
    themeSystem: '시스템', themeLight: '밝게', themeDark: '어둡게',

    introTitle: '폴더만 고르면 됩니다',
    introLead: 'Zählwerk는 Claude Code가 컴퓨터에 남기는 기록을 읽어 사용량이 어디로 갔는지 계산합니다. 파일은 기기 밖으로 나가지 않습니다 — 받아 갈 서버 자체가 없기 때문입니다.',
    dropMain: '폴더를 여기에 끌어다 놓거나 클릭하세요',
    dropSub: '<code>.jsonl</code> 파일만 읽습니다',
    pfadTitle: '폴더 위치',
    pfadNote: '이름이 점으로 시작해서 숨김 폴더입니다. 탐색기에서는 주소 표시줄에 경로를 그대로 입력하면 되고, 선택 창에서도 붙여넣기만 하면 됩니다.',

    kennzahlenTitle: '한눈에 보기',
    namenVerbergen: '이름 숨기기', neuLaden: '다른 폴더',
    kzHeute: '오늘', kzWoche: '이번 주',
    kzGesamt: '총 사용량', kzCache: '다시 읽은 맥락',
    erklKennzahlen: '이 숫자들의 뜻',
    erklKennzahlen1: '<strong>총 사용량</strong>은 새로 만들어진 몫을 더한 값입니다. 직접 입력한 내용, Claude가 작성한 내용, 그리고 새로 캐시에 올라간 대화입니다.',
    erklKennzahlen2: '<strong>다시 읽은 맥락</strong>은 일부러 합계 밖에 두었습니다. 이어서 질문할 때마다 앞선 대화가 다시 세어지기 때문입니다. 이 숫자는 작업량이 아니라 세션 길이에 따라 늘어나며, 보통 실제 사용량의 스무 배에서 서른 배에 이릅니다. 합계에 넣으면 어떤 총계도 의미를 잃습니다.',
    erklKennzahlen3: '토큰은 대략 반 단어에 해당합니다. 정확한 비용은 계산할 수 없습니다. 기록에 가격이 없고, 구독제에서는 Claude Code에 추가 요금이 붙지 않기 때문입니다.',

    tageTitle: '최근 30일',
    erklTage: '보는 법',
    erklTage1: '하루에 막대 하나씩, 왼쪽에서 오른쪽으로 오늘까지 이어집니다. 높이는 해당 기간에서 가장 많았던 날을 기준으로 한 상대값입니다. 막대가 없는 날은 Claude Code를 쓰지 않은 날입니다.',

    modelleTitle: '모델별',
    erklModelle: '왜 볼 만한가',
    erklModelle1: '모델마다 속도와 꼼꼼함이 다릅니다. 사용량이 한 모델에 거의 몰려 있다면, 간단한 일에는 더 작은 모델로 충분하지 않을지 한 번 따져 볼 만합니다.',

    ordnerTitle: '작업 폴더별',
    erklOrdner: '이 이름들의 출처',
    erklOrdner1: 'Claude Code를 실행한 디렉터리입니다. 마지막 폴더 이름만 보여 주고, 두 폴더가 같은 이름일 때만 구분될 만큼 위쪽 경로를 덧붙입니다.',
    erklOrdner2: '거의 전부가 한 줄에 몰려 있다면, 늘 같은 디렉터리에서 Claude Code를 실행한다는 뜻일 뿐입니다.',

    stundenTitle: '시간대별',
    erklStunden: '보는 법',
    erklStunden1: '하루 24시간을 한 시간에 기둥 하나씩, 전체 기간에 걸쳐 합산했습니다. 실제로 언제 일하는지가 드러납니다 — 그렇게 여기던 시간대가 아니라.',

    wochenTitle: '주별',

    sitzungenTitle: '세션',
    spBeginn: '시작', spDauer: '길이', spOrdner: '폴더',
    spAntworten: '응답 수', spVerbrauch: '사용량',
    erklSitzungen: '세션이란',
    erklSitzungen1: 'Claude Code와 이어서 나눈 하나의 대화입니다. 길이는 첫 응답과 마지막 응답 사이의 간격이며, 중간의 쉬는 시간도 포함됩니다. 커피를 가지러 갔는지 생각에 잠겼는지, Zählwerk로서는 알 길이 없기 때문입니다.',

    zweigeTitle: 'Git 브랜치별',
    erklZweige: '어디에 쓰나',
    erklZweige1: 'Claude Code는 어느 Git 브랜치에서 작업했는지 기록합니다. 작업마다 브랜치를 따로 만드는 분이라면, 어느 작업에 얼마가 들었는지 여기서 확인할 수 있습니다. Git을 쓰지 않으면 목록은 비어 있습니다.',

    technikTitle: '읽어 들인 내용',
    erklTechnik: '왜 숫자가 두 개인가',
    erklTechnik1: '응답 하나가 기록에는 여러 번 나타납니다. 사고, 본문, 도구 호출처럼 구성 요소마다 한 줄씩 남고, 그 줄마다 응답 전체의 집계가 통째로 들어 있기 때문입니다.',
    erklTechnik2: 'Zählwerk는 이를 알아채고 응답을 정확히 한 번만 셉니다. 줄을 그대로 더하면 숫자가 대략 두 배로 부풀어 오릅니다.',

    ftQuellcode: 'GitHub 소스 코드', ftWerkstatt: '다른 도구',
    ftLokal: '모든 계산은 브라우저 안에서 이루어집니다. 기록은 어디로도 올라가지 않으며 기기를 벗어나지 않습니다.',
    ftHinweis: '일부 번역은 기계 번역입니다 — 수정 제안을 환영합니다. 방문자 집계는 GoatCounter로 익명 처리되며 쿠키를 쓰지 않습니다.',
    ftMarke: 'Zählwerk는 개인이 만든 도구이며 Anthropic과 무관합니다. ‘Claude’는 Anthropic PBC의 상표입니다.',

    lese: '파일 읽는 중', fertigRechnen: '계산 중 …',
    fehlerKeine: '이 폴더에는 .jsonl 파일이 없습니다. ‘.claude’ 안의 ‘projects’ 폴더를 말하는 것이지, 직접 만드신 프로젝트 폴더가 아닙니다.',
    antworten_one: '개 응답', antworten_other: '개 응답',
    token_one: '토큰', token_other: '토큰',
    sitzungen_one: '개 세션', sitzungen_other: '개 세션',
    eMinute: '분', eStunde: '시간', eTag: '일',
    allerToken: '(전체 토큰 중)', projekt: '프로젝트', zweig: '브랜치',
    listeLeer: '데이터가 없습니다.',
    tageAlt: '일별 사용량', tageLeer: '최근 30일 동안 사용 기록이 없습니다.',
    faktor: '응답당 중복 기록: 배수',
    tGelesen: '읽은 줄 수', tAntworten: '그중 실제 응답',
    tDoppelt: '버린 중복 기록', tEingabe: '입력 토큰',
    tAusgabe: '출력 토큰', tCacheNeu: '새로 캐시된 맥락',
    tCacheLesen: '다시 읽은 맥락', tAgenten: '그중 하위 에이전트',
    tUnlesbar: '읽을 수 없는 줄'
  }

};
