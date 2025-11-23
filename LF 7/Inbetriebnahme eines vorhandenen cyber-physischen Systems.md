---
title: Inbetriebnahme eines vorhandenen cyber-physischen Systems
author: ChatGPT
tags:
  - unterricht
  - cps
  - smarthome
  - homematic
---

# LS07.1 – Inbetriebnahme eines vorhandenen cyber-physischen Systems

## Übersicht  
Diese Datei behandelt alle Themen der Lerneinheit:

- Begriffe & Grundlagen  
- Marktübersicht Smart-Home  
- Bewertung von Produktlinien  
- Parametrierung eines Smart-Home-Systems  
- Inbetriebnahme & Troubleshooting (homematic IP)  
- Entwicklung eines smarten Beleuchtungskonzepts  

---

# 1. Grundlagen

## 1.1 Was sind cyber-physische Systeme (CPS)?

> Ein **cyber-physisches System** verbindet *physische Komponenten* (Sensoren, Aktoren, Geräte) mit *digitalen Komponenten* (Software, Netzwerke, Cloud).

### Merkmale eines CPS
- Echtzeit-Datenaustausch  
- Sensor-Aktor-Kopplung  
- Netzwerkfähigkeit  
- Automatisierung & Optimierung durch Software  

### Beispiele  
- autonome Fahrzeuge  
- Smart-Home-Systeme  
- Robotik in der Industrie  
- intelligente Verkehrssteuerung  

---

## 1.2 Smart Home – Begriff & Abgrenzung

### Definition
> Ein **Smart Home** ist ein Wohngebäude, in dem Geräte automatisiert miteinander kommunizieren, gesteuert und überwacht werden können.

### Typische Funktionen
- Beleuchtungssteuerung  
- Heizungsautomatik  
- Überwachung (Kameras, Türkontakte)  
- Beschattung (Rollläden, Jalousien)  
- Energieoptimierung  

---

## 1.3 Gebäudesystemtechnik (GST)

Gebäudesystemtechnik ist der **übergeordnete technische Bereich**, zu dem auch Smart-Home-Systeme gehören.

### Komponenten der GST
- Elektroinstallation  
- Heizungs- und Klimatechnik  
- Sicherheitstechnik  
- Automatisierung / Bussysteme (KNX, Loxone, Modbus …)

### Abgrenzung
| Bereich | Fokus | Beispiel |
|--------|-------|----------|
| **CPS** | Verbindung von digital & physisch | Smart-Home-Systeme |
| **Smart Home** | Wohngebäude, Komfort, Energie | Homematic IP, Philips Hue |
| **GST** | komplette Gebäudetechnik | KNX, Heizungssteuerungen |

---

# 2. Markterkundung Smart-Home

## 2.1 Vorgehen bei der Marktrecherche
1. Hersteller identifizieren  
2. Produktlinien vergleichen  
3. Kriterien anwenden (siehe unten)  
4. Ergebnisse dokumentieren (z. B. Plakat, Tabelle)  

---

## 2.2 Typische Smart-Home-Produktlinien
| Hersteller | Technologie | Besonderheiten |
|-----------|-------------|----------------|
| **homematic IP** | Funk (868 MHz) | sehr zuverlässig, offline möglich |
| **Bosch Smart Home** | Funk/WLAN | hohe Datensicherheit |
| **Philips Hue** | ZigBee | spezialisiert auf Licht |
| **Google Home** | WLAN/Cloud | starke Sprachsteuerung |
| **Amazon Alexa** | WLAN/Cloud | Smart-Home-Zentrale als Zusatz |
| **Apple HomeKit** | WLAN/Thread | starke Integration in Apple-Ökosystem |

---

## 2.3 Bewertungskriterien für Smart-Home-Produktlinien

### Wichtige Kriterien
- **Funktechnologie** (ZigBee, WLAN, 868 MHz …)  
- **Zuverlässigkeit & Reichweite**  
- **Datenschutz / Cloud-Abhängigkeit**  
- **Kompatibilität zu anderen Geräten**  
- **Preis & Erweiterbarkeit**  
- **Einrichtungskomfort**  
- **Design & Bedienbarkeit**  

### Reflexion – Beispiel
> *„Mir ist nach dem Vergleich aufgefallen, dass Systeme wie homematic IP weniger Cloud-Zwang haben und dadurch zuverlässiger laufen. Dafür sind sie schwerer einzurichten als z. B. Google Home.“*

---

# 3. Inbetriebnahme eines Smart-Home-Systems (homematic IP)

## 3.1 Vorbereitung
- App installieren  
- Access Point (HAP) anschließen  
- Geräte bereitstellen (Temperatursensor, Schaltsteckdose, Wandtaster, Aktor …)  

---

## 3.2 Geräte anlernen  
1. App öffnen  
2. „Gerät hinzufügen“  
3. QR-Code scannen  
4. Gerät bestätigt → erscheint in der Geräteliste  

> Tipp: Falls ein Gerät nicht erscheint → Reset durchführen (z. B. 4-Sekunden-Taste drücken).

---

## 3.3 Komponenten parametrieren

### Geräteverknüpfung
> Eine **Geräteverknüpfung** sorgt dafür, dass ein Gerät direkt mit einem anderen kommuniziert – ohne Zentrale.

**Beispiel**  
Wandtaster → schaltet → Schaltsteckdose

### Zentralenverknüpfung
> Die Zentrale (Access Point) übernimmt Automationen, Zeitprofile und Szenarien.

**Beispiel**  
- „Wenn Fenster geöffnet → Heizung aus“  
- „18:00 Uhr → Licht an“  

---

# 4. Troubleshooting im homematic-IP-System

## Häufige Fehler & Lösungen

### 🔧 Kein Gerät erreichbar
- Batterie leer?  
- Zu große Entfernung?  
- Wandmaterial (Beton) dazwischen?  
- Gerät neu anlernen  

### 🔧 Geräte reagieren verzögert
- WLAN instabil  
- Zentrale überlastet  
- Störsignale (868 MHz anderer Funk)  

### 🔧 Automationen funktionieren nicht
- Bedingungen falsch gesetzt  
- Uhrzeitprofil nicht aktiv  
- Gerät nicht mit der Zentrale verknüpft  

---

# 5. Entwicklung eines smarten Beleuchtungskonzepts

## 5.1 Vorgehen
1. Raum analysieren  
2. Lichtzonen definieren (Arbeitslicht, Ambient, Deko)  
3. Sensoren einplanen (Bewegung, Helligkeit)  
4. Aktoren bestimmen (Schaltaktor, Dimmaktor, Hue-Lampen)  
5. Szenen erstellen  

---

## 5.2 Beispiel – Wohnzimmerkonzept

> **Ziel:** Energiesparende und stimmungsvolle Beleuchtung mit Automatikfunktionen.

### Zonen
- **Deckenlicht** → hell, dimmbar  
- **Leselampe** → warmweiß  
- **LED-Strip hinter TV** → Ambientbeleuchtung  

### Sensorik & Steuerung
- Bewegungsmelder für Abendbetrieb  
- Helligkeitssensor für automatische Aktivierung  
- Wandtaster für manuelle Szene „Gemütlich“  

### Beispielautomation
Wenn Helligkeit < 200 lx UND Uhrzeit > 18:00:
Deckenlampe auf 40%
LED-Strip an (20%)