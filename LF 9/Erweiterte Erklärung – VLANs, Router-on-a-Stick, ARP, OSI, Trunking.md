## 🏛️ OSI-Modell (kurz & einfach)
1 – Physical (Kabel, Bits)  
2 – Data Link (MAC, Switching, VLAN, dot1q)  
3 – Network (IP, Routing)  
4 – Transport (TCP/UDP)  
7 – Application (Browser, Ping, SSH)

Wichtig:
- Switch = Layer 2  
- Router = Layer 3  
- Ping-Test = Layer 3  

---

## 🧩 ARP – Wie findet man die MAC-Adresse?
PC sendet Broadcast:
„Wer hat IP X.X.X.X?“

Ziel-PC antwortet mit seiner MAC.
Switch & Router lernen die Adressen.

Wichtig:
- Ohne ARP → kein Ping  
- VLAN trennt ARP-Broadcasts  

---

## 🔌 Access-Port
- gehört zu einem VLAN  
- z.B. für PCs  

switchport mode access
switchport access vlan 10

## 🚛 Trunk-Port
- transportiert mehrere VLANs gleichzeitig  
- benutzt dot1q-Tagging  

```
switchport mode trunk
switchport trunk allowed vlan 10,20
```

---

## 🟥 Router-on-a-Stick
Router teilt ein Interface in mehrere virtuelle:

```
int g0/0.10
encapsulation dot1Q 10
ip address 192.168.10.1 255.255.255.0

int g0/0.20
encapsulation dot1Q 20
ip address 192.168.20.1 255.255.255.0
```

---

## ❌ Warum Ping nicht geht (typische Fehler)
- VLAN falsch  
- Port falsch  
- Trunk fehlt  
- Router Subinterface fehlt  
- Gateway falsch  
- Kabel steckt im falschen Port  

---

## 🔍 Fehleranalyse
```
show vlan brief  
show interfaces trunk  
show ip interface brief  
show arp  
ping Gateway
```