
## IPv4-Adressen
- Eine IPv4-Adresse ist eine 32-Bit-Adresse, dargestellt in Dezimalnotation (z. B. `192.168.0.1`).
- Sie besteht aus zwei Teilen:
  1. **Netzwerkanteil:** Identifiziert das Netzwerk.
  2. **Hostanteil:** Identifiziert einen spezifischen Host im Netzwerk.

### Netzmaske
- Die Netzmaske definiert, wie viele Bits der IPv4-Adresse zum Netzwerkanteil gehören.
- Beispiel:
  - Netzmaske: `255.255.255.0` (in CIDR: `/24`)
  - Die ersten 24 Bits gehören zum Netzwerkanteil, die letzten 8 Bits zum Hostanteil.

### Netzadresse
- Die Netzadresse ist die erste Adresse in einem Subnetz und repräsentiert das Netzwerk selbst.
- Sie wird berechnet, indem alle Host-Bits auf `0` gesetzt werden.
- Beispiel:
  - IP-Adresse: `192.168.1.10`
  - Netzmaske: `255.255.255.0`
  - Netzadresse: `192.168.1.0`

### Broadcast-Adresse
- Die Broadcast-Adresse ist die letzte Adresse in einem Subnetz. Sie wird verwendet, um alle Hosts im Netzwerk anzusprechen.
- Sie wird berechnet, indem alle Host-Bits auf `1` gesetzt werden.
- Beispiel:
  - Netzadresse: `192.168.1.0`
  - Netzmaske: `255.255.255.0`
  - Broadcast-Adresse: `192.168.1.255`

### Anzahl der Host-Adressen
- Die Anzahl der möglichen Host-Adressen in einem Subnetz wird berechnet mit:
  ```
  Anzahl der Hosts = 2^(Anzahl der Host-Bits) - 2
  ```
  (Abzug von 2 wegen der Netz- und Broadcast-Adresse.)
- Beispiel:
  - Netzmaske: `255.255.255.0` (/24)
  - Host-Bits: 32 - 24 = 8
  - Anzahl der Hosts: `2^8 - 2 = 254`

## Beispielrechnung
1. **Gegeben:**
   - IP-Adresse: `192.168.10.5`
   - Netzmaske: `255.255.255.128` (/25)
2. **Berechnungen:**
   - **Netzadresse:**
     - Binär: `192.168.10.00000000`
     - Ergebnis: `192.168.10.0`
   - **Broadcast-Adresse:**
     - Binär: `192.168.10.01111111`
     - Ergebnis: `192.168.10.127`
   - **Anzahl der Hosts:**
     - Host-Bits: 32 - 25 = 7
     - Anzahl: `2^7 - 2 = 126`

## CIDR (Classless Inter-Domain Routing)
- CIDR-Notation vereinfacht die Angabe von Subnetzen.
- Beispiel:
  - `192.168.10.0/24`: 24 Bits für den Netzwerkanteil.

## Wichtige Punkte
1. **Subnetzgröße:** Je kleiner die Netzmaske, desto mehr Hosts pro Subnetz.
2. **Netz- und Broadcast-Adresse:** Immer reserviert, können nicht als Host-Adressen verwendet werden.
3. **Praxis:** Verwende Online-Rechner oder Tools wie `ipcalc`, um schnell Subnetzinformationen zu berechnen.
