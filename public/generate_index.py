#!/usr/bin/env python3
"""
Automatisches Generieren der fileIndex.json
Scannt alle Markdown-Dateien in den Verzeichnissen und erstellt einen Index
"""

import os
import json
from pathlib import Path

def find_markdown_files(root_dir):
    """
    Findet alle Markdown-Dateien in einem Verzeichnis rekursiv
    """
    md_files = []
    root_path = Path(root_dir)
    
    for md_file in root_path.rglob('*.md'):
        # Überspringe versteckte Dateien und Ordner
        if any(part.startswith('.') for part in md_file.parts):
            continue
        
        # Relativer Pfad vom Root
        rel_path = md_file.relative_to(root_path)
        md_files.append({
            'path': str(rel_path),
            'title': md_file.stem,  # Dateiname ohne Extension
            'exists': md_file.exists()
        })
    
    return md_files

def scan_directory_structure(root_dir):
    """
    Scannt die Verzeichnisstruktur und erstellt eine hierarchische Struktur
    Unterstützt auch verschachtelte Strukturen wie "1.J/LF 1"
    """
    root_path = Path(root_dir)
    structure = {}
    
    # Finde alle Verzeichnisse, die Markdown-Dateien enthalten
    for md_file in root_path.rglob('*.md'):
        # Überspringe versteckte Dateien und Ordner
        if any(part.startswith('.') for part in md_file.parts):
            continue
        
        # Relativer Pfad
        rel_path = md_file.relative_to(root_path)
        parts = rel_path.parts
        
        # Wenn die Datei direkt im Root liegt, ignoriere sie
        if len(parts) == 1:
            continue
        
        # Erstelle den vollständigen Pfad für die Kategorie
        # Wenn es verschachtelt ist (z.B. "1.J/LF 1"), verwende den vollständigen Pfad
        if len(parts) == 2:
            # Einfache Struktur: Kategorie/Datei
            category = parts[0]
            category_path = category
            file_name = parts[-1]
        else:
            # Verschachtelte Struktur: z.B. "1.J/LF 1/Datei.md"
            # Verwende die ersten beiden Ebenen als Kategorie
            category = f"{parts[0]} / {parts[1]}"
            category_path = f"{parts[0]}/{parts[1]}"
            file_name = parts[-1]
        
        if category not in structure:
            structure[category] = {
                'title': category,
                'path': category_path,
                'files': []
            }
        
        # Prüfe ob Datei existiert (sollte immer True sein, aber zur Sicherheit)
        if md_file.exists() and md_file.is_file():
            # Verwende den vollständigen relativen Pfad für die Datei
            # Das ist wichtig für verschachtelte Strukturen
            file_relative_path = str(rel_path)
            
            structure[category]['files'].append({
                'title': md_file.stem,
                'path': file_relative_path  # Vollständiger Pfad, nicht nur Dateiname
            })
    
    # Sortiere Dateien alphabetisch
    for category in structure.values():
        category['files'].sort(key=lambda x: x['title'])
    
    # Konvertiere zu Liste und sortiere
    result = list(structure.values())
    result.sort(key=lambda x: x['title'])
    
    return result

def main():
    # Root-Verzeichnis (ein Verzeichnis über public)
    script_dir = Path(__file__).parent
    root_dir = script_dir.parent  # Berufsschule-Verzeichnis
    output_file = script_dir / 'fileIndex.json'
    
    print(f"Scanne Verzeichnis: {root_dir}")
    print(f"Output-Datei: {output_file}")
    
    # Scanne die Struktur
    structure = scan_directory_structure(root_dir)
    
    print(f"\nGefundene Kategorien: {len(structure)}")
    for cat in structure:
        print(f"  - {cat['title']}: {len(cat['files'])} Dateien")
    
    # Schreibe JSON-Datei
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(structure, f, ensure_ascii=False, indent=4)
    
    print(f"\n✓ fileIndex.json erfolgreich generiert!")
    print(f"  {len(structure)} Kategorien")
    print(f"  {sum(len(cat['files']) for cat in structure)} Dateien insgesamt")

if __name__ == '__main__':
    main()

