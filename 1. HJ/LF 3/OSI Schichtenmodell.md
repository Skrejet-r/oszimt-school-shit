# OSI-Schichtenmodell

Das **OSI-Schichtenmodell** (Open Systems Interconnection) ist ein Referenzmodell für die Kommunikation in Netzwerken. Es besteht aus sieben Schichten, die jeweils spezifische Aufgaben in der Datenübertragung übernehmen.

---

## Überblick der Schichten
[[OSI-Modell]] <-- Verkürzt 

1. **Physikalische Schicht (Physical Layer)**  
   - Übertragung von Bits (0 und 1) über ein physisches Medium.  
   - Geräte: Kabel, Switches, Hubs.  
   - Aufgaben: Signalübertragung, Modulation, Steckverbindungen.  

2. **Sicherungsschicht (Data Link Layer)**  
   - Aufbau und Abbau von Verbindungen zwischen direkt verbundenen Geräten.  
   - Fehlererkennung und -korrektur.  
   - Geräte: Switches, Netzwerkadapter.  

3. **Netzwerkschicht (Network Layer)**  
   - Zuständig für die logische Adressierung (z. B. IP-Adressen).  
   - Routing zwischen Netzwerken.  
   - Geräte: Router.  

4. **Transportschicht (Transport Layer)**  
   - Steuerung des Datenflusses und Fehlerbehebung.  
   - Protokolle: TCP (Transmission Control Protocol), UDP (User Datagram Protocol).  

5. **Sitzungsschicht (Session Layer)**  
   - Aufbau, Verwaltung und Beendigung von Sitzungen.  
   - Aufgaben: Synchronisation, Dialogsteuerung.  

6. **Darstellungsschicht (Presentation Layer)**  
   - Datenumwandlung in ein einheitliches Format.  
   - Verschlüsselung und Komprimierung.  

7. **Anwendungsschicht (Application Layer)**  
   - Schnittstelle für Anwendungen zur Netzwerkkommunikation.  
   - Beispiele: HTTP, FTP, SMTP.  

---

## Unterschied: ISO/OSI-Referenzmodell

- **ISO/OSI-Referenzmodell** ist ein theoretisches Modell, das die Struktur und Funktionen von Netzwerkkommunikation beschreibt.  
- Es dient als Standard und Vergleichsgrundlage für reale Netzwerkprotokolle wie **TCP/IP**, die praktisch umgesetzt werden.

---

## Fokus: Transportschicht

- **Protokolle:**  
  - **TCP**: Verbindungsorientiert, zuverlässige Datenübertragung.  
  - **UDP**: Verbindungslos, schneller, aber weniger zuverlässig.  
- **Aufgaben:**  
  - **Segmentierung**: Daten werden in kleinere Pakete zerlegt.  
  - **Flusskontrolle**: Steuerung der Übertragungsrate.  
  - **Fehlerkontrolle**: Sicherstellung der korrekten Übertragung.  

---

## Fokus: Anwendungsschicht

- **Hauptaufgabe:**  
  - Bereitstellung von Protokollen für die Interaktion mit Anwendungen.  
- **Typische Protokolle:**  
  - **HTTP/HTTPS**: Webkommunikation.  
  - **SMTP**: E-Mail-Versand.  
  - **DNS**: Namensauflösung von IP-Adressen.  

---

## Vorteile des OSI-Modells

1. **Standardisierung**: Einheitliche Grundlage für unterschiedliche Systeme.  
2. **Flexibilität**: Änderungen in einer Schicht beeinflussen andere Schichten nicht direkt.  
3. **Fehlerbehebung**: Probleme können leichter auf eine Schicht eingegrenzt werden.  

---




# Ergänzende Informationen zum OSI-Schichtenmodell

## Begriffe und ihre Definitionen

### **PDU (Protocol Data Unit)**
- Allgemeiner Begriff für Daten in den einzelnen Schichten des OSI-Modells.

### **Segmentierung**
- Unterteilung von Datenströmen in kleinere Einheiten, die für eine effizientere und fehlerfreie Übertragung geeignet sind.

### **MAC-Adresse**
- Genormte physikalische Adresse der Sicherungsschicht (Schicht 2).
- Besteht aus 6 Byte und identifiziert eindeutig jedes Gerät in einem lokalen Netzwerk.

### **IP-Adresse**
- Logische Adressierung der Netzwerkschicht (Schicht 3), die Geräte im Netzwerk eindeutig identifiziert.

### **Segment**
- Protokolldateneinheit (PDU) der Transportschicht (Schicht 4).

---

## Portnummern und zugehörige Protokolle

| **Port** | **Protokoll**              |
|----------|----------------------------|
| 443      | HTTPS                      |
| 23       | Telnet                     |
| 25       | SMTP                       |
| 53       | DNS                        |
| 69       | TFTP                       |
| 80       | HTTP                       |
| 110      | POP3                       |

---

## Unterschiede zwischen TCP und UDP

### **TCP (Transmission Control Protocol)**
- Verbindungsorientiert.
- Zuverlässige Datenübertragung mit Sequenznummern.
- Kontrolliert die Reihenfolge der Pakete.
- Geeignet für Anwendungen, die hohe Zuverlässigkeit benötigen (z. B. HTTP, SMTP).

### **UDP (User Datagram Protocol)**
- Verbindungslos.
- Schneller, aber weniger zuverlässig.
- Keine Garantie für die Reihenfolge der Pakete.
- Geeignet für Echtzeitanwendungen (z. B. DNS, TFTP, SNMP).

---

## Kapselungsprozess

1. **Bilder und Texte in Daten umwandeln.**  
   (Anwendungsschicht)
2. **Daten segmentieren.**  
   (Transportschicht)
3. **IP-Adresse einfügen.**  
   (Netzwerkschicht)
4. **Header der Sicherungsschicht einfügen.**  
   (Sicherungsschicht)
5. **Daten in Bits umwandeln.**  
   (Bitübertragungsschicht)

---

## Wichtige UDP-Protokolle
- **DNS (Domain Name System)**
- **TFTP (Trivial File Transfer Protocol)**
- **SNMP (Simple Network Management Protocol)**

---

## Zusätzliche Fragen und Antworten

### **Wozu dienen TCP- und UDP-Ports?**
- Sie identifizieren spezifische Anwendungen oder Dienste auf einem Gerät.

### **Was befindet sich im Header eines Segments oder Datagramms?**
- **TCP-Header**: Quell- und Zielport, Sequenznummer, Prüfsumme.  
- **UDP-Header**: Quell- und Zielport, Länge, Prüfsumme.

### **Wozu dient die Sequenznummer?**
- Sie stellt sicher, dass die Pakete in der korrekten Reihenfolge zusammengesetzt werden (TCP).

---

