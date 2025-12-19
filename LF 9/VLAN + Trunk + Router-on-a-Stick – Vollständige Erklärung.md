## 🎯 Thema der Aufgabe
Diese Übung behandelt:
- VLANs erstellen
- Ports richtig zuweisen (Access Ports)
- Switch-to-Switch Trunking
- Router-on-a-Stick konfigurieren
- PCs konfigurieren und Ping testen

Das Ziel ist, dass zwei PCs in verschiedenen VLANs über einen Router kommunizieren können.

---

# 🟦 1. VLANs erstellen

![[Pasted image 20250909083238.png]]

## VLAN erstellen
```
enable
conf t
vlan 10
name VLAN10
vlan 20
name VLAN20
```

Erklärung:
- vlan 10: Erstellt ein neues virtuelles Netzwerk
- name: vergibt einen Namen (optional)

---

# 🟩 2. Ports zu VLANs zuweisen (Access Ports)

## PC in VLAN 10
```
int fa0/1
switchport mode access
switchport access vlan 10
```

## PC in VLAN 20
```
int fa0/2
switchport mode access
switchport access vlan 20
```

Erklärung:
- mode access: Port gehört nur zu einem VLAN
- access vlan X: weist VLAN zu

---

# 🟧 3. Trunk konfigurieren

## Switch zu Switch Verbindung
```
int fa0/24
switchport mode trunk
switchport trunk allowed vlan 10,20
```

Erklärung:
- mode trunk: ermöglicht mehrere VLANs auf einem Kabel
- allowed vlan: definiert, welche VLANs übertragen werden

---

# 🟥 4. Router-on-a-Stick

## Router konfigurieren
```
enable  
conf t
```

### Physisches Interface aktivieren
```
int g0/0
no shut
```

### Subinterfaces
```
int g0/0.10
encapsulation dot1Q 10
ip address 192.168.10.1 255.255.255.0
```

```
int g0/0.20
encapsulation dot1Q 20
ip address 192.168.20.1 255.255.255.0
```

Erklärung:
- g0/0.10: Virtuelles Interface für VLAN 10
- encapsulation dot1Q 10: markiert Frames mit VLAN 10
- Router IP ist das Gateway für alle Geräte im VLAN

---

# 🖥️ 5. PC-Konfiguration

## PC im VLAN 10:
IP: 192.168.10.X  
Mask: 255.255.255.0  
Gateway: 192.168.10.1  

## PC im VLAN 20:
IP: 192.168.20.X  
Mask: 255.255.255.0  
Gateway: 192.168.20.1  

---

# 🧪 6. Tests

## VLANs prüfen:
```
show vlan brief
```

## Trunk prüfen:
```
show interfaces trunk
```

## Router prüfen:
```
show ip interface brief
```

## Ping testen:
```
ping 192.168.20.50
```

---

# 🧠 Kurz-Zusammenfassung
- VLAN = Netzwerk trennen
- Trunk = mehrere VLANs über ein Kabel
- Router-on-a-stick = Router macht Routing für beide VLANs über ein Interface
- PCs müssen richtige IP + Gateway haben