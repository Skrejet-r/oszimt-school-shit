
| **Befehl**                                     | **Erklärung**                                             |
| ---------------------------------------------- | --------------------------------------------------------- |
| `enable`                                       | Wechselt in den privilegierten EXEC-Modus.                |
| `disable`                                      | Wechselt zurück in den Benutzer EXEC-Modus.               |
| `configure terminal`                           | Wechselt in den globalen Konfigurationsmodus.             |
| `show running-config`                          | Zeigt die aktuelle Konfiguration des Routers/Switches.    |
| `show startup-config`                          | Zeigt die Konfiguration, die beim Neustart geladen wird.  |
| `copy running-config startup-config`           | Speichert die aktuelle Konfiguration im Startup-Config.   |
| `reload`                                       | Startet das Gerät neu.                                    |
| `show version`                                 | Zeigt Informationen zur Hardware- und Softwareversion.    |
| `show interfaces`                              | Zeigt den Status aller Interfaces an.                     |
| `show ip interface brief`                      | Zeigt eine zusammengefasste Übersicht der Interfaces.     |
| `show vlan brief`                              | Zeigt eine Übersicht der VLANs auf einem Switch.          |
| `vlan <ID>`                                    | Erstellt oder bearbeitet ein VLAN.                        |
| `name <VLAN-Name>`                             | Setzt den Namen eines VLANs.                              |
| `interface <interface>`                        | Wechselt in den Interface-Konfigurationsmodus.            |
| `switchport mode access`                       | Setzt den Switchport auf Access-Modus.                    |
| `switchport access vlan <ID>`                  | Weist einem Port ein VLAN zu.                             |
| `show mac address-table`                       | Zeigt die MAC-Adresstabelle an.                           |
| `show ip route`                                | Zeigt die Routing-Tabelle an.                             |
| `ip route <Ziel-IP> <Subnetz-Maske> <Gateway>` | Fügt eine statische Route hinzu.                          |
| `ping <IP-Adresse>`                            | Sendet einen Ping-Befehl, um die Konnektivität zu testen. |
| `traceroute <IP-Adresse>`                      | Verfolgt den Pfad zu einer Ziel-IP-Adresse.               |
| `show ip dhcp binding`                         | Zeigt die DHCP-Bindungen an.                              |
| `ip dhcp pool <Name>`                          | Erstellt einen DHCP-Pool.                                 |
| (config)# interface fa0/1                      | oder → einzelne Ports konfigurieren                       |
| (config)# interface range fa0/1 – 10           | → Port Bereiche konfigurieren                             |
| (config-if-range)# duplex {full                | half                                                      |
| (config-if-range)# speed {10                   | 100                                                       |
| (config-if-range)# shutdown                    | → Ports können abgeschaltet werden                        |
| (config)# interface Vlan1                      | → Standard-Verwaltungsinterface                           |
| (config-if)# ip address x.x.x.x y.y.y.y        |                                                           |
| (config-if)# exit                              | → x – IP; y – Netmask                                     |
| (config)# ip default-gateway <Gateway-IP>      | → um aus einem anderen Netz administrieren zu können      |
| (config)# line vty 0 15                        |                                                           |
| (config-line)# password <pwd>                  |                                                           |
| (config-line)# login                           | → Anzahl der vty's ist abhängig vom Modell                |





