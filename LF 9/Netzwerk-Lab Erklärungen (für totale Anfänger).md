## 🧠 Worum geht es hier?
Dies ist eine Grundübung im Bereich Cisco-Netzwerktechnik. Ziel:
- VLANs erstellen
- Trunk-Ports konfigurieren
- Router-on-a-Stick einrichten
- PCs konfigurieren
- Ping zwischen PCs aus unterschiedlichen VLANs ermöglichen

---

## 🔌 Geräte im Rack
- Cisco Switch SW1, SW2, SW3
- Cisco Router R1, R2
- Ein PC, der per USB/COM-Kabel seriell mit dem Switch/Router spricht
- HyperTerminal läuft auf dem PC

---

## 🖥️ Was ist HyperTerminal?
HyperTerminal ist ein Terminalprogramm, das über COM-Ports
mit Netzwerkgeräten kommuniziert. Cisco Geräte haben anfangs
keine IP-Adresse – daher braucht man die serielle Verbindung.

---

## 📡 Die Aufgabe (Diagramm)
VLAN 10 → 192.168.10.0/24  
VLAN 20 → 192.168.20.0/24

Ein PC im VLAN 10  
Ein PC im VLAN 20  
Beide hängen an zwei Switches  
Switches verbinden sich über einen Trunk  
Router macht Routing zwischen VLANs (Router-on-a-Stick)

---

## 🔧 Schritt 1: VLANs auf den Switches erstellen
```
enable
conf t
vlan 10
name VLAN10
vlan 20
name VLAN20
```

---

## 🔧 Schritt 2: Ports als Access-Ports konfigurieren
Port, wo PC1 eingesteckt ist:

```
int fa0/1
switchport mode access
switchport access vlan 10
```

Port, wo PC2 eingesteckt ist:

```
int fa0/2
switchport mode access
switchport access vlan 20
```

---## 🔧 Schritt 3: Trunk zwischen den Switches

```
int fa0/24
switchport mode trunk
switchport trunk allowed vlan 10,20
```

---

## 🔧 Schritt 4: Router-on-a-Stick Konfiguration
Router Interface g0/0 wird unterteilt:

```
conf t
int g0/0
no shut

int g0/0.10
encapsulation dot1q 10
ip addr 192.168.10.1 255.255.255.0

int g0/0.20
encapsulation dot1q 20
ip addr 192.168.20.1 255.255.255.0
```

---

## 🔧 Schritt 5: PCs konfigurieren
PC1 (VLAN 10):
```
IP: 192.168.10.50  
Mask: 255.255.255.0  
Gateway: 192.168.10.1  
```

PC2 (VLAN 20):
```
IP: 192.168.20.50  
Mask: 255.255.255.0  
Gateway: 192.168.20.1  
```

---

## 🧪 Schritt 6: Ping Test
Von PC1 zu:

```
ping 192.168.20.50
```

Wenn:
- VLAN ok
- Trunk ok
- Router Subinterfaces ok
- PC IPs ok

Dann klappt der Ping.

---

## 🔍 Wichtige Show-Befehle
Auf dem Switch:

```
show vlan brief
show interfaces trunk
```

Auf dem Router:

```
show ip interface brief
```