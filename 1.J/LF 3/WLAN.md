**Dazugehörige ABs:**
[[WLAN-Technologie.pdf]]
[[WLAN-Grundlagen.pdf]]
[[WLAN-Topologie.pdf]]
[[WLAN-Sicherheit.pdf]]

---
## **1. WLAN-Grundlagen**

### **1.1 Unterschied zwischen „WiFi“ und „WLAN“**
- **WLAN** steht für **Wireless Local Area Network** und bezeichnet die Technologie für drahtlose Netzwerke.
- **WiFi** ist ein **Markenname** für Geräte, die den WLAN-Standards entsprechen und zertifiziert wurden.
  - Alle WiFi-Geräte sind WLAN-Geräte, aber nicht alle WLAN-Geräte sind WiFi-zertifiziert.

---

### 1.2 WLAN-Standards
Es gibt verschiedene WLAN-Standards, die sich in Geschwindigkeit, Reichweite und Frequenzbändern unterscheiden:

| Standard       | IEEE-Bezeichnung | Eigenschaften                                                                 |
|----------------|------------------|-------------------------------------------------------------------------------|
| **WiFi 4**     | 802.11n          | - Älterer Standard.<br>- Gut für einfache Nutzung, aber langsamer als neuere Standards. |
| **WiFi 5**     | 802.11ac         | - Schneller als WiFi 4.<br>- Nutzt nur das 5-GHz-Band (weniger Störungen).    |
| **WiFi 6**     | 802.11ax         | - Aktuellster Standard (seit 2019).<br>- Schneller und effizienter für viele Geräte.<br>- Unterstützt 2,4 GHz und 5 GHz. |
| **WiFi 6E**    | 802.11ax (6E)    | - Wie WiFi 6, aber mit zusätzlichem 6-GHz-Band für mehr Geschwindigkeit.      |
| **WiFi 7**     | 802.11be         | - Kommt voraussichtlich 2024.<br>- Wird noch schneller sein als WiFi 6.       |
#### **Was bedeutet 802.11?**
- **802.11** ist der Name einer Familie von Standards für drahtlose Netzwerke (WLAN).
  - Die Zahlen und Buchstaben dahinter (z. B. **n**, **ac**, **ax**) bezeichnen die Version des Standards.
  - **Einfach erklärt**: 802.11 ist wie eine Familie, und die Buchstaben (n, ac, ax) sind die verschiedenen Familienmitglieder, die immer besser werden.

#### **Was bedeutet 2,4 GHz und 5 GHz?**
- **2,4 GHz** und **5 GHz** sind Frequenzbänder, die für WLAN genutzt werden.
  - **2,4 GHz**: Hat eine größere Reichweite, ist aber langsamer und anfälliger für Störungen (z. B. durch Mikrowellen).
  - **5 GHz**: Ist schneller und weniger störanfällig, hat aber eine kürzere Reichweite.
  - **Einfach erklärt**: 2,4 GHz ist wie eine breite Straße, auf der viele Autos fahren (langsamer, aber weit). 5 GHz ist wie eine Autobahn (schneller, aber nicht so weit).

---

### **1.3 Was ist „WLAN 6“?**
- **WLAN 6** ist der neue Name für den **WiFi 6 (802.11ax)**-Standard.
- Die Nummerierung (WiFi 4, 5, 6) wurde eingeführt, um die Standards einfacher verständlich zu machen.

---

## **2. WLAN-Topologien**

### **2.1 Arten von WLAN-Topologien**
Es gibt drei Hauptarten von WLAN-Topologien:

1. **Infrastruktur-Modus**
   - Zentrale Steuerung durch **Access Points (APs)**.
   - Client-Geräte verbinden sich mit dem AP, nicht direkt miteinander.
   - **Vorteile**: Einfache Verwaltung, hohe Reichweite durch mehrere APs.
   - **Einsatz**: Große Netzwerke (z. B. Firmengelände, Schulen).

2. **Ad-hoc-Modus**
   - Direkte Verbindung zwischen Geräten ohne Access Point.
   - **Einsatz**: Kleine, temporäre Netzwerke (z. B. spontane Dateiübertragungen).
   - **Nachteile**: Begrenzte Reichweite, schlechte Skalierbarkeit.

3. **Mesh-Netzwerk**
   - Mehrere Access Points sind miteinander verbunden.
   - **Vorteile**: Hohe Stabilität, automatische Fehlerbehebung.
   - **Einsatz**: Große Flächen mit vielen Hindernissen (z. B. mehrstöckige Gebäude).

---

### **2.2 Hotspot 2.0**
- **Hotspot 2.0** ist ein Standard für öffentliche WLAN-Netzwerke.
- **Funktionen**:
  - Automatische und sichere Verbindungen zu öffentlichen Hotspots.
  - Verschlüsselte Verbindungen (sicherer als normales öffentliches WLAN).
  - Nahtloses Roaming zwischen Hotspots.

---

## **3. WLAN-Technologie**

### **3.1 WLAN-Rahmenaufbau nach IEEE 802.11**
Ein WLAN-Datenrahmen besteht aus folgenden Teilen:
1. **MAC-Header**: Enthält Steuerinformationen wie Adressen (Sender, Empfänger) und Frame-Typ.
2. **Frame Body**: Enthält die eigentlichen Nutzdaten (z. B. Dateien, Nachrichten).
3. **Frame Check Sequence (FCS)**: Prüfsumme zur Fehlererkennung.

---

### **3.2 Maximale Übertragungsreichweite**
- **Standard mit größter Reichweite**: **IEEE 802.11ah (WiFi Halow)**.
  - Reichweite: Bis zu **1 Kilometer im Freien**.
  - Reichweite in Gebäuden: Ca. **100–200 Meter** (abhängig von Wänden und Hindernissen).
  - **Einsatz**: IoT-Geräte (z. B. Sensoren), nicht für typische WLAN-Netzwerke.

---

### **3.3 Fehlerursachen für geringe Netto-Übertragungsrate**
Mögliche Ursachen sind:
- Störungen durch andere Geräte (z. B. Mikrowellen, Bluetooth-Geräte).
- Zu viele Geräte im Netzwerk, die die Bandbreite teilen.
- Schwaches Signal durch große Entfernung oder Hindernisse (Wände, Decken).
- Veraltete WLAN-Standards (z. B. 802.11b/g statt 802.11ac/ax).
- Falsche Kanalwahl (Überlappung mit anderen WLAN-Netzwerken).

---

## **4. Empfehlungen**
- **Für Unternehmen**: Nutzung von **WiFi 6 (802.11ax)**-Access Points, da sie schnell, effizient und zukunftssicher sind.
- **Für große Flächen**: Einsatz von **Mesh-Netzwerken** oder **Infrastruktur-Modus** mit mehreren APs.
- **Für öffentliche Hotspots**: Implementierung von **Hotspot 2.0** für sichere und nahtlose Verbindungen.

---

## **Zusammenfassung**
- **WLAN-Grundlagen**: Unterschied zwischen WiFi und WLAN, aktuelle Standards (WiFi 6, WiFi 6E, WiFi 7).
- **WLAN-Topologien**: Infrastruktur-Modus, Ad-hoc-Modus, Mesh-Netzwerk, Hotspot 2.0.
- **WLAN-Technologie**: Rahmenaufbau, maximale Reichweite, Fehlerursachen für geringe Übertragungsraten.

---

[[WLAN-Sicherheit]]