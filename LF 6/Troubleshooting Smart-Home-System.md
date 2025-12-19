#SmartHome #CCU3 #DutyCycle #Troubleshooting #HomematicIP #Prüfungsvorbereitung

---

## 📌 Übersicht
- a) Bedeutung schnelle blaue LED-Blinkfolge
- b) Recovery-Probleme bei magenta Blinkcode
- c) Fehlerverhalten beim 6-fach Funktaster HmIP-WRC6
- d) Duty Cycle, Firmware-Updates, Funkprobleme & Berechnungen

---

## a) Schnelles blaues Blinken der CCU3

> [!warning] Bedeutung  
> Keine Internetverbindung. Die CCU3 ist zwar im Netzwerk, aber ohne aktiven Zugang ins Internet.

### Auswirkungen auf das System
- Lokale Steuerung und Programme funktionieren weiter
- Zugriff über Smartphone-App nicht möglich
- Keine Cloud-Funktionen, keine Push-Benachrichtigungen
- Firmware-Updates für Geräte werden nicht geladen
- Sprachsteuerung (Alexa / Google) nicht nutzbar
- Fernzugriff nicht möglich

### Typische Ursachen
- Router blockiert Verbindung oder Portfilter aktiv
- LAN verbunden, aber kein Gateway / DNS
- DHCP funktioniert, aber Internet ist offline
- Firewall oder Sicherheitssystem blockiert Verbindung

---

## b) Recovery-System startet, aber kein Zugriff möglich

> [!info] Erwartetes LED-Verhalten laut Anleitung  
> Langsam magenta blinkend → Recovery startet  
> Dauerhaft magenta → Recovery-System aktiv und bereit

### Standard-Wiederherstellung
1. CCU3 vom Strom trennen, 5 s warten  
2. Systemtaste gedrückt halten, Strom neu verbinden  
3. Taste nach ca. 5–6 s loslassen  
4. LED muss dauerhaft magenta leuchten

### Häufige Gründe für „Kein Zugriff“
- CCU3 bekommt neue IP-Adresse im Recovery-Modus (DHCP)
- PC blockiert Zugriff per Firewall/Antivirus
- Zugriff per https statt http versucht
- CCU hängt an Switch ohne DHCP
- Falsches Kabel / kein Link zur CCU3

### Checkliste zur Fehlerbehebung
- IP im Router suchen („Geräteübersicht“)
- Alternativ: NetFinder verwenden
- Test in anderem Browser (Chrome, Firefox)
- Firewall temporär deaktivieren
- PC direkt an CCU3 anschließen, statische IP setzen
- Wenn weiterhin kein Zugriff: Hardware oder Flash-Speicherfehler möglich

---

## c) Fehlermeldung beim Parametrieren des HmIP-WRC6 (6-fach Funktaster)

> [!failure] Fehlerbild  
> Übertragung der Einstellungen schlägt fehl, trotz erfolgreichem Tastendrucktest.  
> Nach „Erneut prüfen“ funktioniert es plötzlich.

### Grund des Problems
- Der Taster ist batteriebetrieben und schläft im Normalbetrieb
- Konfigurationsdaten können nur übertragen werden, wenn das Gerät wach ist
- Erst durch Drücken einer Taste wird es aktiv und erreichbar

### Lösung
1. Eine Taste am WRC6 drücken, bis LED kurz blinkt (Gerät ist wach)
2. Innerhalb von ca. 30 Sekunden Einstellungen erneut senden
3. Nach Fehlermeldung „Erneut prüfen“ klicken → Übertragung läuft

### Merksatz
> Batteriegeräte konfigurieren sich nur im Wake-Up-Fenster.  
> „Taste drücken = Gerät aufwecken.“

---

## d) Duty Cycle, Firmware-Updates und Funkprobleme

### 1. Interpretation der Systemzustände (Duty-Cycle-Anzeige)

| Duty Cycle | Bedeutung | Zustand |
|------------|-----------|---------|
| 80 % | Hohe Funklast | System noch funktionsfähig, aber träge |
| 95 % | Kritischer Bereich | Funk teilweise blockiert, Geräte reagieren verzögert |
| 25 % | Normalbetrieb | Stabile Funkkommunikation |

---

### 2. Fachbegriff & Regulierung
> [!info] Definition  
> Duty Cycle = gesetzliche Begrenzung der Sendezeit von Geräten im 868-MHz-Band.

- Deutscher Begriff: **Tastgrad / Sendezeitbegrenzung**
- Maximal erlaubt: **1 % pro Stunde = 36 Sekunden Sendezeit**
- Rechtsgrundlage: ETSI EN 300 220
- Zuständig in Deutschland: **Bundesnetzagentur (BNetzA)**

---

### 3. Berechnung: Dauer eines Firmware-Updates

**Gegeben:**

- Firmwaregröße: 75,9 KiB  
- Umrechnung:  
  - 1 KiB = 1024 B  
  - 75,9 KiB = 77 798 B  
  - in Bit = 77 798 × 8 = **622 384 bit ≈ 622,4 kbit**
- Max. BidCoS-Übertragungsrate: **9,6 kbit/s**

#### Reine Übertragungsdauer ohne Duty Cycle

t = Datenmenge / Datenrate
t = 622,4 kbit / 9,6 kbit/s ≈ 64,8 s

#### Mit gesetzlichem Duty Cycle (1 % = 36 s/h)

t_DC = 64,8 s / 36 s/h ≈ 1,8 h

Ergebnis: **ca. 1,8 Stunden pro Gerät (idealisiert)**

---

### 4. Tatsächliche Dauer im echten System

Da während des Updates weiterhin normaler Funkverkehr läuft, steht nur ein Drittel der Sendezeit zur Verfügung.

t_real ≈ 1,8 h / 0,33 ≈ 5,5 h

Ergebnis: **ca. 5,5 Stunden pro Gerät in Praxis**

---

### 5. Ursachen für Störungen nach CCU-Firmware-Update

- Mehrere Geräte senden Firmwaredaten gleichzeitig
- Duty Cycle steigt schnell durch Wiederholpakete
- Funkreichweite ist schlecht → viele Resends
- Batteriegeräte schlafen → Update dauert sehr lange
- Weitere Geräte im 868-MHz-Band stören (z. B. Wetterstationen, Alarmanlagen, Smart-Meter)

---

### 6. Troubleshooting-Strategien

> [!tip] Maßnahmen zur Stabilisierung  
> (relevant für Prüfung & Praxis)

- Firmware-Updates nicht parallel, sondern nacheinander starten
- Funklast beobachten, Updates erst bei Duty Cycle < 30 % durchführen
- Batteriegeräte vor Update manuell aufwecken
- Funkkanal der Zentrale wechseln (868,3 ↔ 869,5 MHz)
- Repeater / Access Points einsetzen
- Updates abbrechen, wenn Duty Cycle länger > 80 %
- Wenn dauerhaft hohe Funklast: auf Homematic Wired umstellen

---

## 📌 Merke-Bereich (Prüfungsrelevant!)

| Thema | Zahl / Merkpunkt |
|--------|-----------------|
| Max. Duty Cycle | 1 % pro Stunde = 36 s |
| Max. Datenrate BidCoS | 9,6 kbit/s |
| Firmware-Download Kapazität | ca. 65 s rein, ca. 5 h real |
| Schnelles blaues Blinken | Keine Internetverbindung |
| Dauerhaft magenta | Recovery aktiv |
| Batteriegeräte | müssen geweckt werden fürs Parametrieren |

---

## 📌 Platz für eigene Notizen
%% Eigene Ergänzungen hier %%

Code kopieren
%% Typische Lehrerfragen hier %%

Code kopieren
%% Offene Fragen zum Nachschlagen %%

yaml
Code kopieren

---

## ✅ Quellenhinweis
- CCU3 Bedienungsanleitung (Blinkcodes, Recovery, Duty Cycle)
- Homematic IP Funkprotokoll / ETSI-Norm
- Eigene Berechnungen gemäß Aufgabenstellung

---