---
author: ChatGPT
date: 2025-11-24
tags:
---
---

## Einführung: Was ist IoT?

> Das Internet of Things (IoT) umfasst digitale und physische Objekte, die Daten sammeln, austauschen und autonome Aktionen ausführen – ohne direkte menschliche Kontrolle.

Beispiele:
- Smart Home: Temperatur regelt sich automatisch  
- Fahrzeugkommunikation: Autos tauschen Informationen aus  
- Industrie 4.0: Maschinen koordinieren Wartung selbst  

---

# Eigenschaften von IoT-Objekten

## 1. Allgegenwärtigkeit (Ubiquitous Computing)
Objekte sind jederzeit und überall verfügbar.

> Sensoren, Dienste und vernetzte Geräte arbeiten im Hintergrund, ohne dass der Mensch aktiv eingreifen muss.

Beispiel:  
Ein Fitness-Armband misst permanent die Herzfrequenz.

---

## 2. Autonomie
Objekte treffen Entscheidungen selbstständig.

> Daten werden analysiert, daraus ergibt sich automatisch eine Aktion.

Beispiele:  
- Thermostat erkennt: niemand zuhause → Heizung herunter  
- Bodensensor meldet Trockenheit → Bewässerung startet  

---

## 3. Machine-to-Machine-Kommunikation (M2M)
Objekte kommunizieren direkt miteinander.

> Maschinen tauschen Daten aus, ohne dass ein Mensch beteiligt sein muss.

Beispiele:  
- Auto sendet Statusinformationen an Ampelanlagen  
- Kühlschrank kommuniziert mit einer Einkaufs-App  

---

# Vertikale und horizontale Dienste im IoT

## Vertikale Bereiche (Domain Specific / Vertical Markets)
Z. B.:
- Smart Home  
- Industrie  
- Verkehr  
- Gesundheit  
- Landwirtschaft  

Innerhalb eines vertikalen Bereichs kommunizieren Sensoren und Aktoren miteinander.

## Horizontale Dienste (Application Domain Independent / Horizontal Markets)
Z. B.:
- Cloud-Datenverarbeitung  
- Big-Data-Analyse  
- Identitätsverwaltung  
- Sicherheitsdienste  

> Vertikale Bereiche senden Rohdaten → horizontale Dienste analysieren → Ergebnisse fließen als Handlungsempfehlung zurück.

---

# Das 5-Schichten-Modell der IoT-Architektur

## 1. Objects Layer (Sensoren und Aktoren)
- Erfasst physische Daten  
- Temperatur, Bewegung, Feuchtigkeit, RFID, etc.

Beispiel:  
Ein Bewegungsmelder erkennt eine Person und sendet ein Signal weiter.

---

## 2. Object Abstraction Layer
Überträgt Daten über:
- WiFi, Bluetooth, ZigBee  
- Mobilfunktechnologien  
- 6LoWPAN  
- RFID  

> Diese Schicht digitalisiert Sensordaten und macht sie transportfähig.

---

## 3. Service Management Layer (Middleware)
- Ordnet Services zu  
- Verarbeitet Daten  
- Trifft Vorentscheidungen  

> Die Middleware versteckt die Hardwarekomplexität vor Entwicklern.

Beispiel:  
Eine App fragt nach „Temperatur Wohnzimmer“ – die Middleware sucht automatisch den passenden Sensor.

---

## 4. Application Layer
- Endnutzeranwendungen  
- Dashboards, Apps, Visualisierung

---

## 5. Business Layer
- Big-Data-Auswertung  
- Modellierung von Prozessen  
- Monitoring aller unteren Schichten  
- Datenschutz und Systemanalyse

> Hier entstehen Berichte, Trends und Entscheidungen.

---

# Vergleich: 3-Schichten- vs. 5-Schichten-Modell

## Gemeinsamkeiten
- Beide Modelle beinhalten Sensorik, Netzwerk-Logik und Anwendungsebene  
- Beide beschreiben den Datenfluss vom Sensor bis zum Nutzer  

## Unterschiede

| Aspekt | 3-Schichten-Modell | 5-Schichten-Modell |
|-------|--------------------|--------------------|
| Detailgrad | grob | detailliert |
| Middleware | nicht vorhanden | vorhanden |
| Geschäftslogik | fehlt | eigene Schicht |
| Realitätsnähe | eingeschränkt | sehr hoch |
| Geeignet für komplexe Systeme | weniger | ja |

> Das 5-Schichten-Modell deckt moderne IoT-Architekturen deutlich besser ab.

---

# Zuordnung: OSI ↔ IoT-5-Schichten

| OSI-Schicht | IoT-5-Schichten-Modell |
|-------------|-------------------------|
| 7 Anwendung (Application) | Application Layer |
| 6 Darstellung (Presentation) | Service Management Layer |
| 5 Sitzung (Session) | Service Management Layer |
| 4 Transport | Object Abstraction Layer |
| 3 Netzwerk | Object Abstraction Layer |
| 2 Sicherung (Data Link) | Objects Layer |
| 1 Bitübertragung (Physical) | Objects Layer |

---

# Kompakte Kurzübersicht

> Die 5 IoT-Schichten in einem Satz:  
> Sensoren sammeln Daten → Kommunikationsschicht überträgt → Middleware verarbeitet → App stellt dar → Business-Schicht analysiert und optimiert.

> Merksatz für OSI-Schichten:  
> Alle Priester Saufen Tequila Nach Der Predigt.

