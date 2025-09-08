
## Themen und Erklärungen

### 1. Broadcast-Adresse

- **Definition:** Die Broadcast-Adresse ist eine spezielle IP-Adresse in einem Netzwerk, die verwendet wird, um Daten an alle Hosts innerhalb dieses Netzwerks zu senden.
- **Berechnung:**
    1. Identifiziere die Subnetzmaske (z. B. /16 entspricht 255.255.0.0).
    2. Setze alle Host-Bits der IP-Adresse auf `1`.
    3. Beispiel: IP-Adresse: 172.16.17.17/16
        - Netzmaske: 255.255.0.0 → Netzanteil ist 172.16, Host-Anteil ist 0.0
        - Broadcast-Adresse: 172.16.255.255 (alle Host-Bits auf `1` gesetzt).

### 2. Subnetzmasken und IP-Adressen

- **Subnetzmaske:** Bestimmt die Größe eines Netzwerks und wie viele Hosts darin enthalten sein können.
- **Berechnung der Hostanzahl:**
    1. Zähle die verbleibenden Host-Bits (z. B. bei /27 sind es 5 Bits: 32-27=5).
    2. Formel: 2Host-Bits−22^{\text{Host-Bits}} - 2 (für Netz- und Broadcast-Adresse).
    3. Beispiel: Netzmaske 255.255.255.224 (/27)
        - Host-Bits: 5
        - 2^5 - 2 = 30 nutzbare Adressen.

### 3. MAC-Adresse (Media Access Control)

- **Definition:** Eine eindeutige Hardware-Adresse, die einer Netzwerkkarte (NIC) zugewiesen wird.
- **Eigenschaften:**
    - Besteht aus 48 Bits (6 Bytes) und wird in Hexadezimalnotation dargestellt.
    - Wird fest in die Hardware eingebrannt, kann aber mit speziellen Tools überschrieben werden (Spoofing).
- **Darstellung:** In der Regel als `00:1A:2B:3C:4D:5E` oder `001A.2B3C.4D5E`.

### 4. Hexadezimal-, Dezimal- und Dualsystem

- **Hexadezimal:** Basis-16-System, verwendet Ziffern 0-9 und Buchstaben A-F.
- **Dual:** Basis-2-System, verwendet nur die Ziffern 0 und 1.
- **Umrechnung:**
    - **Hexadezimal → Dual:** Jede Hexadezimalziffer entspricht 4 Bit (z. B. `F` = `1111`).
    - **Hexadezimal → Dezimal:** Multipliziere jede Stelle mit der entsprechenden Potenz von 16:
        - Beispiel: `0F`
            - `F = 15`
            - `0*16 + 15 = 15`

### 5. Netzwerkgeräte

- **Router:** Verbindet verschiedene Netzwerke und ermöglicht die Kommunikation zwischen ihnen. Arbeitet auf Schicht 3 (Netzwerkschicht) des OSI-Modells.
- **Switch:** Verbindet Geräte innerhalb eines lokalen Netzwerks. Arbeitet auf Schicht 2 (Sicherungsschicht).
- **Hub:** Einfache Verbindung mehrerer Geräte, sendet Daten an alle Ports (veraltet).

### 6. Subnetting

- **Ziel:** Netzwerke in kleinere Subnetze aufteilen, um IP-Adressen effizient zu nutzen.
- **Berechnung:**
    1. Anzahl der Subnetze: 2n2^n, wobei nn die Anzahl der geliehenen Bits ist.
    2. Hosts pro Subnetz: 2m−22^m - 2, wobei mm die verbleibenden Host-Bits ist.
    3. Beispiel:
        - Netzmaske /26 → 6 geliehene Bits → 2^6 = 64 Adressen pro Subnetz.
        - Nutze: 2^6 - 2 = 62 nutzbare Hosts.

### 7. Netzwerktopologie und Protokolle

- **Topologie:** Die physische oder logische Anordnung von Netzwerkgeräten (z. B. Bus-, Ring-, Stern-Topologie).
- **Protokolle:** Regeln, die die Kommunikation in Netzwerken steuern (z. B. TCP/IP, UDP, ICMP).

## Tipps zur Vorbereitung

1. **Subnetting üben:** Erstelle eigene Beispiele und berechne Netz-, Broadcast- und Host-Adressen.
2. **Umrechnungen trainieren:** Hexadezimal-, Dual- und Dezimalzahlen regelmäßig umwandeln.
3. **Gerätefunktionalität verstehen:** Unterschiede zwischen Router, Switch und Hub klar machen.
4. **Praxisnah lernen:** Simuliere Netzwerke mit Tools wie Cisco Packet Tracer oder GNS3.
5. **Fragen formulieren:** Überlege dir eigene Szenarien, um deine Kenntnisse anzuwenden und zu testen.

## Fokus für den Test

- Verstehe die Grundlagen der Netzwerkadressierung (IPv4, Subnetze, MAC-Adressen).
- Sei sicher im Umgang mit Umrechnungen und Berechnungen.
- Kenne die Aufgaben und Funktionen von Netzwerkgeräten.
- Trainiere praxisnahe Szenarien zur Netzwerkplanung und Fehlersuche.