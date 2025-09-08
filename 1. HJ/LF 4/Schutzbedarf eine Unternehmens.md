#### PLAN:
1. Die Sicherheitsleitlinie
2. BSI-Grundschutzvarianten
3. Strukturanalyse
4. Schutzbedarfsfeststellung

---

#### Warum ist eine Sicherheitslinie wichtig?

1. Beinhaltet Grundlage für die "Steuerung" der technischen Sicherheitsmaßnahmen
2. Legt eindeutige Erwartungen an den Sicherheitsprozess fest
3. Hilft beim Einhalten von Gesetzen, Normen und Regelungen
4. Steigert die Effizienz der Geschäftsprozesse


![[Pasted image 20241204081750.png]]
#### Was steht in einer Sicherheitsleitlinie?

1. **Zweck** der Leitlinie,
2. **Einbindung** der Leitungsebene,  
3. Hinweis auf Bedeutung der Datensicherheit,
4. **Realisierbarkeit**,
5. Definition schwieriger Fachausdrücke (**einfache Sprache**),
6. **Geltungsbereich** (für wen gilt die Leitlinie?),
7. Hinweis auf **Schulungen**,
8. **Aktualisierungsstand** (Wie aktuell ist die Leitlinie?),
9. **Verantwortlichkeiten** und Bildung einer IT-Sicherheitsabteilung,
10. Wichtige **Geschäftsprozesse** als Organigramm,
11. Hinweis auf einzuhaltende **Gesetze**,
12. **Risiko-Level**, der noch akzeptiert wird.

---

#### Die drei IT-Grundschutz-Varianten des **BSI**:

1. **Basis-Absicherung** = Einstiegsabsicherung, erste Schritte von Sicherheit  
	==Vorteil==: Schnelle Umsetzung, auf der aufgebaut werden kann, erweiterbar, sehr vieles 
	abgesichert, wenig Voraussetzung, preiswert, etc.  
	
	==Nachteil==: Kein hohes Level  

2. **Standard-Absicherung** = tiefgehende, breite Absicherung  
	==Vorteil==: Mögliche Zertifizierung, tiefgehende, breite Absicherung  
	
	===Nachteil===: Kritische Prozesse nicht besonders gut abgesichert  

3. **Kern-Absicherung** = Schutz von besonderen Bereichen ("Kronjuwelen")  
	==Vorteil==: Sehr guter Schutz der "Kronjuwelen"  
	
	==Nachteil==: Nicht alles abgesichert, viele Ressourcen, relativ teuer  

*Einstieg = Basis-Absicherung*
*Angestrebt werden sollte die Standard-Absicherung (ggf. kombiniert mit der Kern-Absicherung)*

---

#### Der **Informationsverbund** besteht aus:

1. Geschäftsprozesse,
2. Anwendungen (auch Datenträger und Dokumente),
3. Systeme (PCs, alle möglichen Endgeräte, etc.),
4. Netzwerkelemente (Router, Switches, etc.),
5. Räume und Gebäude
6. Verkabelung

![[Pasted image 20241204003034.jpg]]


### Geschäftsprozesse

| Geschäftsprozess | Abteilung/Bereich | Bechreibung                                                  |
| ---------------- | ----------------- | ------------------------------------------------------------ |
| Einkauf          | Einkauf           | Verwaltung der Bestellung von Materialien und Ressourcen     |
| Verkauf          | Verkauf           | Verkaufsverwaltung und Kundenbetreuung                       |
| Werbung          | Werbung           | Planung und Durchführung von Marketingaktivitäten            |
| Geschäftsleitung | Geschäftsleitung  | Strategische Führung und Verwaltung des Unternehmens         |
| Lohnbuchhaltung  | Lohnbuchhaltung   | Verwaltung der Gehaltsabrechnungen und finanziellen Prozesse |


### Systeme

| System/Komponente       | Typ/Klasse            | Anzahl | Ort                     |
| ----------------------- | --------------------- | ------ | ----------------------- |
| PC-PT (Arbeitsplatz PC) | Arbeitsplatzrechner   | 8 Sets | In verschiedenen Büros  |
| Monitor, Tastatur, Maus | Peripheriegeräte      | 8 Sets | In jedem Büro mit PC-PT |
| Server-PT               | Server                | 1 Set  | IT-Raum                 |
| Cisco 7960 IP-Telefone  | Endgeräte / Telefonie | 6 Sets | In verschiedenen Büros  |


### Netzwerkelemente

| Netzwerkelement  | Typ/Klasse         | Anzahl | Ort     |
| ---------------- | ------------------ | ------ | ------- |
| ISR4321 Router   | Netzwerkkomponente | 1      | IT-Raum |
| 2960-24TT Switch | Netzwerkkomponente | 2      | IT-Raum |


### Gebäude/Räume

| Raum             | Verwendung                  | Ausstattung              |
| ---------------- | --------------------------- | ------------------------ |
| IT-Raum          | Netzwerk- und IT-Management | Server, Router, Switches |
| Einkauf          | Verwaltung                  | PC-PT, IP Phone          |
| Verkauf          | Kundenbetreuung             | PC-PT, IP Phone          |
| Werbung          | Marketing                   | PC-PT, IP Phone          |
| Geschäftsleitung | Unternehmensführung         | PC-PT, IP Phone          |
| Lohnbuchhaltung  | Finanzverwaltung            | PC-PT, IP Phone          |
