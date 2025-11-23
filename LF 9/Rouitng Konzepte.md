Quelle: CCNAv7: Switching, Routing and Wireless Essentials  
#Routing #Netzwerk #Cisco #Linux

---

## Routenquellen
Wie erfährt ein Router, wohin er Pakete senden kann? → über die **Routing-Tabelle**.

**Quellen:**
- Direkt verbundene Netzwerke  
- Statische Routen  
- Dynamische Routing-Protokolle (OSPF, RIP, BGP etc.)

---

## Routing-Tabellenprinzipien
| Prinzip | Erklärung | Beispiel |
|---------|-----------|----------|
| 1. Jeder Router entscheidet alleine | Router nutzt nur **eigene Routing-Tabelle** | R1 kennt nur eigene Routen, nicht die von R2 |
| 2. Tabellen unterscheiden sich | Routing-Tabelle eines Routers ≠ eines anderen | R1 hat Route über R2, R2 muss das aber nicht wissen |
| 3. Keine Rückwärtsinfo | Routing-Info für Hinweg ≠ automatisch für Rückweg | R1 kennt Weg zu PC1, nicht zwingend Rückweg zu PC3 |

---

## Aufbau einer Routingtabelle
Numerierte Elemente:  
1. **Routenquelle** – wie wurde Route erlernt  
2. **Zielnetzwerk** – Präfix + Länge  
3. **Administrative Distance (AD)** – Vertrauenswürdigkeit (kleiner = besser)  
4. **Metrik** – Kostenwert für Route (kleiner = besser)  
5. **Next Hop** – IP des nächsten Routers  
6. **Zeitstempel** – wann Route gelernt wurde  
7. **Ausgangsschnittstelle** – Interface, über das weitergeleitet wird  

---

## Direkt verbundene Netzwerke
- Entstehen, wenn ein Interface mit IP + Maske aktiviert ist.  
- **Statuscode C** = Connected  
- Zusätzlich: **Lokale Route L**  
  - IPv4: Präfix /32  
  - IPv6: Präfix /128  
- Zweck: Router erkennt, ob Paket für sich selbst bestimmt ist.

---

## Statische Routen
- **Manuell** konfiguriert  
- Vorteile: Sicherheit, weniger Ressourcenverbrauch  
- Nachteil: Keine automatische Anpassung bei Topologieänderung  

**Einsatzfälle:**
1. Kleine Netzwerke (leichte Pflege)  
2. Standardroute für „unbekannte“ Ziele  
3. Stub-Netzwerke (nur ein Nachbar)  

**Stub-Netzwerk:**  
Nur über **eine Route erreichbar**. Beispiel: R1 hat nur Verbindung zu R2.

---

## Vergleich: Cisco vs. Linux Befehle
| Aufgabe | Linux | Cisco | Erklärung |
|---------|-------|-------|-----------|
| Routingtabelle anzeigen | `route`, `route -n`, `netstat -r`, `ip route show` | `show ip route`, `show ipv6 route` | Anzeigen Routingtabellen |
| Interfaces anzeigen | `ifconfig`, `ip addr show` | `sh ip interface brief` | Interfaces prüfen |
| Interface konfigurieren | `ifconfig eth0 192.168.60.2 netmask 255.255.255.0` | `int g0/0` <br> `ip address 192.168.60.1 255.255.255.0` | Interface IP setzen |
| Statische Route anlegen | `route add -net <Netz> netmask <Maske> gw <Ziel-IP>` <br> `ip route add <Netz>/24 via <Ziel-IP>` | `ip route <Netz> <Maske> <Ziel-IP>` | Manuelle Route |
| Default Gateway | `route add default gw <Ziel-IP>` <br> `route add -net 0.0.0.0 netmask 0.0.0.0 gw <Ziel-IP>` | `ip route 0.0.0.0 0.0.0.0 <Ziel-IP>` | Standardroute setzen |

---

## Statuscodes in Routingtabellen
- **C** – Connected (direkt verbunden)  
- **L** – Local (eigene Interface-IP)  
- **S** – Static Route  
- **D** – Dynamisch gelernt (z. B. EIGRP)  
- **O** – OSPF  

---

## Wichtige Hashtags
#Routing #IPv4 #IPv6 #Cisco #Linux #StaticRoute #DynamicRouting #RoutingTable #Networking #CCNA
