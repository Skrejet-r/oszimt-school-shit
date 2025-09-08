
## Was ist ein UML Aktivitätsdiagramm?
Ein UML Aktivitätsdiagramm stellt den Ablauf eines Prozesses oder Algorithmus grafisch dar. Es zeigt die Reihenfolge von Aktionen, Entscheidungen und möglichen Parallelitäten in einem System.

## Wichtige Elemente eines Aktivitätsdiagramms
1. **Aktivität (Activity):** Repräsentiert eine Aufgabe oder Handlung im Prozess. Dargestellt als abgerundetes Rechteck.
   - Beispiel: `Daten validieren`
2. **Startknoten (Initial Node):** Markiert den Beginn des Prozesses. Dargestellt als ausgefüllter Kreis.
3. **Endknoten (Final Node):** Markiert das Ende des Prozesses. Dargestellt als Kreis mit einem kleineren ausgefüllten Kreis.
4. **Entscheidungsknoten (Decision Node):** Zeigt einen Zweig im Prozess basierend auf einer Bedingung. Dargestellt als Raute.
   - Beispiel: `if (Bedingung) then...`
5. **Kanten (Edges):** Zeigen den Ablauf von einer Aktivität zur nächsten.
6. **Parallelität (Fork/Join):** Zeigt parallele Prozesse. Dargestellt als dicke horizontale oder vertikale Linien.

## Beispiel: Login-Prozess
### Beschreibung:
Ein Benutzer gibt Anmeldedaten ein. Diese werden überprüft, und der Benutzer wird entweder eingeloggt oder erhält eine Fehlermeldung.

### Grafisches Diagramm:
1. **Start:** Benutzer startet den Login.
2. **Aktivitäten:**
   - Anmeldedaten eingeben.
   - Daten validieren.
3. **Entscheidung:** Sind die Anmeldedaten korrekt?
   - Ja: Benutzer einloggen.
   - Nein: Fehlermeldung anzeigen.
4. **Ende:** Prozess abgeschlossen.

## Markdown für Obsidian mit Beschreibung und Diagramm-Bild
```markdown
# UML Aktivitätsdiagramm: Login-Prozess

**Beschreibung:**
Der Benutzer gibt Anmeldedaten ein, die validiert werden. Danach wird entschieden, ob die Anmeldung erfolgreich ist.

## Elemente des Prozesses:
1. **Start:** Beginn des Login-Prozesses.
2. **Aktivitäten:**
   - Anmeldedaten eingeben.
   - Daten validieren.
3. **Entscheidung:**
   - Bei korrekten Anmeldedaten: Benutzer einloggen.
   - Bei fehlerhaften Daten: Fehlermeldung anzeigen.
4. **Ende:** Abschluss des Prozesses.

**Diagramm:**
![Login-Prozess Aktivitätsdiagramm](link_zu_bild.png)
```

## Diagramm-Erstellung
### Tools:
- **Lucidchart**: Online-Tool zum Zeichnen von Diagrammen.
- **Draw.io/diagrams.net**: Kostenlos und einfach zu bedienen.
- **PlantUML**: Markdown-Erweiterung für Diagramme.

### PlantUML-Code für das Login-Diagramm:
```plantuml
@startuml
start
:Anmeldedaten eingeben;
:Validiere Daten;
diamond "Sind Daten korrekt?" as Entscheidung
yes -> :Benutzer einloggen;
no -> :Fehlermeldung anzeigen;
end
@enduml
```

## Vorteile eines Aktivitätsdiagramms
- **Visualisierung:** Prozesse werden leicht verständlich dargestellt.
- **Analyse:** Identifikation von Engpässen und Entscheidungen.
- **Kommunikation:** Einfache Darstellung für Entwickler und Fachabteilungen.
