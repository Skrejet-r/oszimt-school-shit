  *(für Anwendungsentwickler verständlich erklärt)*

---

## ✅ Inhalt

1. **Einführung: Was ist Subnetting?**
2. **Grundbegriffe einfach erklärt**
3. **Subnetzmasken, Präfixe & Hostanzahl**
4. **Blockgrößen & wie man Subnetze „in den Adressraum legt“**
5. **Aufgabe 1 – /24 in 4 gleich große Netze (/26)**
6. **Aufgabe 2 – /24 in 8 gleich große Netze (/27)**
7. **Aufgabe 3 – VLSM für 192.168.60.0/24 (verschiedene Netzgrößen)**
8. **Aufgabe 4 – Netzadresse? Broadcast? Hostadresse?**
9. **Aufgabe 5 – Bestimmung von NA & BA aus /20**
10. **Cheatsheet & Merksätze zur Prüfungsvorbereitung**

---

## 1️⃣ Einführung – Was ist Subnetting?

> [!info] Kurzdefinition  
> Subnetting bedeutet, **ein großes IP-Netz in mehrere kleinere Netze zu teilen**, z. B. weil Abteilungen getrennt werden sollen oder weil man IP-Adressen sparsam nutzen will.

> [!quote] Warum wird das gemacht?  
> - Sicherheit (Netzwerke trennen)  
> - Übersichtlichkeit (weniger Broadcasts)  
> - bessere IP-Ausnutzung  
> - VLANs & Routing werden möglich

---

## 2️⃣ Grundbegriffe – verständlich erklärt

| Begriff | Bedeutung (kurz & klar) |
|---------|------------------------|
| **IP-Adresse** | Adresse eines Geräts im Netz (z. B. 192.168.1.5) |
| **Oktett** | Eine der 4 Zahlen einer IPv4-Adresse (0–255) |
| **Subnetzmaske** | Legt fest: Wie viel gehört zum Netz, wie viel zu Hosts |
| **Präfix / CIDR (/24, /27, /20 …)** | Kurzform der Netzmaske. /24 = 255.255.255.0 |
| **Netzadresse (NA)** | Erste Adresse eines Subnetzes – NICHT vergebbar |
| **Broadcastadresse (BA)** | Letzte Adresse eines Subnetzes – NICHT vergebbar |
| **Hostadressen** | Alle nutzbaren Adressen im Subnetz |
| **Gateway** | Router-Adresse im Subnetz (oft 1. oder letzte Hostadresse) |
| **VLSM** | Variable Length Subnet Masking = verschiedene Subnetzgrößen |

---

## 3️⃣ Übersicht: Präfix → Hostanzahl → Blockgröße

| Präfix | Netzmaske | Gesamt IPs | Nutzbare Hosts | Blockgröße |
|--------|-----------|------------|----------------|------------|
| /24 | 255.255.255.0 | 256 | 254 | 256 |
| /25 | 255.255.255.128 | 128 | 126 | 128 |
| /26 | 255.255.255.192 | 64 | 62 | 64 |
| /27 | 255.255.255.224 | 32 | 30 | 32 |
| /28 | 255.255.255.240 | 16 | 14 | 16 |
| /29 | 255.255.255.248 | 8 | 6 | 8 |
| /30 | 255.255.255.252 | 4 | 2 | 4 |

> [!tip] Wichtiger Merksatz  
> **"Wähle immer das kleinste Netz, das groß genug ist!"**

---

## 4️⃣ Blockgrößen & „Netze in den Adressraum legen“

> [!important] Blockgröße = 256 − letzter Wert der Subnetzmaske  

Beispiel:  
/27 → Maske 255.255.255.224 → **256 − 224 = 32**  
Das heißt: ein Subnetz hat 32 Adressen → beginnt also immer bei:  
`0, 32, 64, 96, 128, 160, 192, 224`

> [!example] Visualisierung  
```
|----32 IPs----|----32 IPs----|----32 IPs----|
0             31 32          63 64         95
```

---

## 5️⃣ Aufgabe 1 – /24 in **4 gleich große Netze**

### Vorgabe:
```
Netz: 193.10.10.0/24  
4 gleich große Subnetze → 2 zusätzliche Bits → /26
```

|Nr.|NA / Präfix|Maske|Hosts nutzbar|Broadcast|Gateway (erste IP)|
|---|-----------|------|-------------|----------|------------------|
|1|193.10.10.0/26|255.255.255.192|62|193.10.10.63|193.10.10.1|
|2|193.10.10.64/26|255.255.255.192|62|193.10.10.127|193.10.10.65|
|3|193.10.10.128/26|255.255.255.192|62|193.10.10.191|193.10.10.129|
|4|193.10.10.192/26|255.255.255.192|62|193.10.10.255|193.10.10.193|

> [!note] Warum /26?  
> /24 + 2 neue Subnetzbits = /26  
> 2² = 4 Subnetze

---

## 6️⃣ Aufgabe 2 – /24 in **8 Subnetze**

### Vorgabe:
```
8 Subnetze benötigt → 3 Bits → /27  
Gateway = letzte nutzbare Adresse
```

|Nr.|NA / Präfix|Maske|Hosts|BA|Gateway (BA − 1)|
|---|-----------|------|------|------|---------------|
|1|10.10.10.0/27|255.255.255.224|30|10.10.10.31|10.10.10.30|
|2|10.10.10.32/27|255.255.255.224|30|10.10.10.63|10.10.10.62|
|3|10.10.10.64/27|255.255.255.224|30|10.10.10.95|10.10.10.94|
|4|10.10.10.96/27|255.255.255.224|30|10.10.10.127|10.10.10.126|
|5|10.10.10.128/27|255.255.255.224|30|10.10.10.159|10.10.10.158|
|6|10.10.10.160/27|255.255.255.224|30|10.10.10.191|10.10.10.190|
|7|10.10.10.192/27|255.255.255.224|30|10.10.10.223|10.10.10.222|
|8|10.10.10.224/27|255.255.255.224|30|10.10.10.255|10.10.10.254|

---

## 7️⃣ Aufgabe 3 – VLSM 192.168.60.0/24

| Abteilung | Benötigte Hosts | Gewähltes Netz | Nutzbare Hosts | Ungenutzt |
|-----------|-----------------|----------------|----------------|-----------|
| Programmierer | 100 | /25 (128) | 126 | 26 |
| Netztechnik | 50 | /26 (64) | 62 | 12 |
| CAD | 28 | /27 (32) | 30 | 2 |
| IP-Telefone | 12 | /28 (16) | 14 | 2 |
| Management | 10 | /28 (16) | 14 | 4 |

|Nr.|NA / Präfix|IP gesamt|BA|Gateway (NA+1)|
|---|-----------|---------|---|--------------|
|1|192.168.60.0/25|128|192.168.60.127|192.168.60.1|
|2|192.168.60.128/26|64|192.168.60.191|192.168.60.129|
|3|192.168.60.192/27|32|192.168.60.223|192.168.60.193|
|4|192.168.60.224/28|16|192.168.60.239|192.168.60.225|
|5|192.168.60.240/28|16|192.168.60.255|192.168.60.241|

---

## 8️⃣ Aufgabe 4 – „Ist das eine Host-Adresse?“

| IP-Adresse | Maske/Präfix | NA | BA | Einsetzbare IP? |
|------------|--------------|----|----|-----------------|
|192.168.1.136|255.255.255.248 (/29)|192.168.1.136|192.168.1.143|❌ Nein (Netzadresse)|
|172.16.17.128|/23 (255.255.254.0)|172.16.16.0|172.16.17.255|✅ Ja|
|12.11.10.9|/27 (255.255.255.224)|12.11.10.0|12.11.10.31|✅ Ja|

---

## 9️⃣ Aufgabe 5 – /20 bestimmen

```
IP: 192.168.132.197
Präfix: /20 → 255.255.240.0
Blockgröße im 3. Oktett: 16
132 → gehört zum Block 128–143
```

| IP | Maske | Präfix | Netzadresse | Broadcast |
|----|--------|--------|-------------|-----------|
|192.168.132.197|255.255.240.0|/20|192.168.128.0|192.168.143.255|

---

## 🔟 Cheatsheet – Kurzfassung

> [!tip] Subnetting in 5 Schritten  
> 1. Anzahl Hosts prüfen  
> 2. passende Maske wählen (Tabelle!)  
> 3. Blockgröße bestimmen (256 − Maskenwert)  
> 4. Netzadresse = Startadresse des Blocks  
> 5. Broadcast = Netzadresse + Blockgröße − 1

> [!important] Host-Berechnung  
> Nutzbare Hosts = **2ⁿ − 2**

> [!note] Gateway-Regeln  
> - Standard: erste Host-IP (NA + 1)  
> - Alternate: letzte Host-IP (BA − 1)

---

✅ **Ende der Datei – kann direkt in Obsidian gespeichert werden**
