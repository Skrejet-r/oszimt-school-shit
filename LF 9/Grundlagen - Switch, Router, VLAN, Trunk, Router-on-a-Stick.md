## 🟦 1. Was macht ein Switch intern?
- lernt MAC-Adressen (MAC-Tabelle)
- leitet Frames basierend auf MAC weiter
- Broadcasts gehen an alle Ports
- VLANs trennen Broadcast-Domains

## 🟩 2. Wie ein Router Frames weiterleitet
- Router arbeitet auf Layer 3 (IP)
- entscheidet anhand Routing-Tabelle
- verbindet verschiedene Netzwerke
- Subinterfaces ermöglichen Routing zwischen VLANs

## 🟥 3. Warum VLANs ohne Router nicht kommunizieren
- VLANs sind vollständig isoliert
- Switch leitet keine Layer-3-Verbindungen weiter
- ARP funktioniert VLAN-übergreifend nicht
- nur Router oder L3-Switch kann VLANs verbinden

## 🟧 4. Warum dot1q nötig ist
- VLAN-Tagging-Standard (802.1Q)
- markiert Frames auf Trunk-Ports mit VLAN-ID
- Access-Port = untagged
- Trunk-Port = tagged

## 🟫 5. Warum der Ping manchmal nicht geht
Typische Ursachen:
- falsches VLAN
- Port nicht als Trunk konfiguriert
- VLAN fehlt auf Trunk (allowed VLANs)
- Router Subinterface fehlt
- Gateway falsch
- Kabel am falschen Port

## 🧭 6. Fehleranalyse

### VLAN prüfen:
```
show vlan brief
```

### Trunk prüfen:
```
show interfaces trunk
```

### Router prüfen:
```
show ip interface brief
```

### PC-IP prüfen:
```
ipconfig /all (Windows)
```

### Verbindung prüfen:
```
ping <Gateway>
ping <anderer_PC>
```


[[Erweiterte Erklärung – VLANs, Router-on-a-Stick, ARP, OSI, Trunking]]