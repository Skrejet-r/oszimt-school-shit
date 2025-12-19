# OSZIMT School Shit - Dokumentations-Viewer

Ein automatischer Dokumentations-Viewer für Markdown-Dateien aus Obsidian.

## Features

- ✅ **Automatisches Scannen** aller Markdown-Dateien
- ✅ **Ordner-Auswahl** zum Filtern nach Verzeichnissen
- ✅ **Suchfunktion** für schnelles Finden von Themen
- ✅ **Obsidian-Syntax-Unterstützung** (Bilder, Links)
- ✅ **Responsive Design** für alle Geräte
- ✅ **Anpassbare Konfiguration** (Farben, Schriftgrößen, etc.)

## Installation

1. Stelle sicher, dass Python 3 installiert ist
2. Starte den Webserver im Hauptverzeichnis:
   ```bash
   cd /home/mgoering/Dokumente/Maxim/Berufsschule
   python3 -m http.server 8000
   ```
3. Öffne im Browser: `http://localhost:8000/public/index.html`

## Automatisches Generieren des Index

Das `fileIndex.json` wird automatisch generiert, indem alle Markdown-Dateien gescannt werden.

### Index neu generieren

Führe einfach das Python-Script aus:

```bash
cd public
python3 generate_index.py
```

Das Script:
- Scannt alle `.md` Dateien im Hauptverzeichnis
- Erstellt automatisch die `fileIndex.json`
- Unterstützt verschachtelte Strukturen (z.B. "1.J/LF 1")
- Zeigt nur existierende Dateien an

### Automatische Aktualisierung

Du kannst das Script auch in einen Cron-Job einbinden oder es manuell ausführen, wenn neue Dateien hinzugefügt wurden.

## Verwendung

### Ordner-Auswahl

Im Dropdown-Menü oben in der Sidebar kannst du zwischen verschiedenen Ordnern wählen:
- **Alle Ordner**: Zeigt alle Dateien an
- **1.J**: Zeigt nur Dateien aus dem "1.J" Ordner
- **LF 6, LF 7, etc.**: Zeigt nur Dateien aus dem jeweiligen Ordner

### Suche

Verwende das Suchfeld, um nach spezifischen Themen zu suchen. Die Suche filtert sowohl Kategorien als auch Dateinamen.

### Dateien laden

Klicke auf einen Eintrag im Inhaltsverzeichnis, um die Datei anzuzeigen. Die URL wird automatisch aktualisiert, sodass du die Datei direkt verlinken kannst.

## Konfiguration

Alle visuellen Einstellungen können in `config.js` angepasst werden:
- Farben
- Schriftgrößen
- Abstände
- Texte und Labels

## Struktur

```
Berufsschule/
├── public/
│   ├── index.html          # Haupt-HTML-Datei
│   ├── script.js           # Haupt-JavaScript
│   ├── config.js           # Konfigurationsdatei
│   ├── fileIndex.json      # Automatisch generierter Index
│   ├── generate_index.py   # Script zum Generieren des Index
│   └── styles/
│       └── main.css        # Stylesheet
├── LF 6/                    # Beispiel-Ordner
├── LF 7/
├── 1.J/
│   ├── LF 1/
│   ├── LF 2/
│   └── ...
└── ...
```

## Troubleshooting

### Dateien werden nicht angezeigt

1. Führe `generate_index.py` aus, um den Index neu zu generieren
2. Überprüfe, ob die Dateien tatsächlich existieren
3. Prüfe die Browser-Konsole (F12) für Fehlermeldungen

### Bilder werden nicht angezeigt

- Bilder müssen relativ zur Markdown-Datei liegen
- Unterstützte Ordner: `assets/`, `images/`, `Attachments/`
- Dateinamen mit Leerzeichen werden automatisch encodiert

### Server-Fehler

- Stelle sicher, dass der Server im Hauptverzeichnis läuft (nicht im `public/` Ordner)
- Überprüfe, ob Port 8000 verfügbar ist

