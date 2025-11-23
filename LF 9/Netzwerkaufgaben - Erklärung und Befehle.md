## 🌐 **Überblick**

In diesem Dokument erklären wir, was wir Schritt für Schritt gemacht haben, um die Netzwerkkomponenten zu konfigurieren, einschließlich **Switches**, **Router** und **TFTP-Server**. 

Das Ziel war es, alle Netzwerkgeräte für den **TFTP-Backup-Prozess** vorzubereiten und sicherzustellen, dass alle Geräte miteinander kommunizieren können.

---

## 🖥️ **Was ist ein TFTP-Server?**

TFTP (Trivial File Transfer Protocol) ist ein einfaches Netzwerkprotokoll, das zum **Sichern von Konfigurationen** auf Netzwerkgeräten verwendet wird. In unserem Fall haben wir TFTP verwendet, um die **Running Configs** der Geräte (Switches, Router) auf einem zentralen Server zu speichern.

---

## 🚦 **Was ist Ping?**

Ein **Ping** ist ein Netzwerk-Befehl, mit dem getestet wird, ob ein Gerät im Netzwerk **erreichbar** ist. Der Befehl sendet kleine Pakete an das Zielgerät und wartet auf eine Antwort. Wenn das Zielgerät antwortet, bedeutet das, dass **die Verbindung funktioniert**.

Befehl zum Testen der Verbindung:

```bash
ping <IP-Adresse des Ziels>
```

---

## 📱 **Was ist DMZ?**

Die **DMZ (Demilitarized Zone)** ist ein Netzwerksegment, das zwischen einem internen Netzwerk (z. B. Unternehmensnetzwerk) und einem externen Netzwerk (z. B. Internet) liegt. Sie dient als **Pufferzone**, um das interne Netzwerk vor Angriffen aus dem Internet zu schützen.

In unserer Topologie:
- **DMZ-Switch** verwaltet Geräte im **DMZ-VLAN (z. B. Server)**
- Der **Router (DSL-Router)** ist mit der DMZ und dem Internet verbunden.

---

## 🖥️ **Aufbau des Netzwerks**

In unserem Netzwerk gibt es mehrere Geräte:

1. **Access-SW-01** – Ein **Layer-2-Switch**, der das **Labor-Netzwerk** verwaltet.
    
2. **ML-SW-Core** – Ein **Layer-3-Switch**, der das **Routing** zwischen den VLANs übernimmt.
    
3. **ML-SW-DMZ** – Ein **Layer-3-Switch**, der das **DMZ-Netzwerk** verwaltet.
    
4. **DSL-Router** – Der **Router**, der den Zugriff auf das **Internet** ermöglicht.
    
5. **TFTP-Server** – Ein **Server**, auf dem wir die Konfigurationsdateien der Geräte sichern.
    

---

## 🔧 **Befehle und Aufgaben**

### **1. Netzwerkgeräte konfigurieren**

Zuerst haben wir auf allen Geräten die **Management-IP** und das **Default-Gateway** konfiguriert, damit die Geräte miteinander kommunizieren können.

#### Beispiel: **Access-SW-01 (Layer-2 Switch)**

1. **Management-IP für VLAN 1 setzen:**
```bash
enable configure terminal interface vlan 1  ip address 192.168.50.10 255.255.255.0  no shutdown exit
```

2. **Default-Gateway konfigurieren:**
```bash
ip default-gateway 192.168.50.1 end
```

3. **Verbindung testen (Ping):**
```
ping 192.168.95.200
```

**Erklärung:**
- `ip address`: Setzt eine IP-Adresse für das Management-Interface (VLAN 1).
- `ip default-gateway`: Gibt das Gateway an, über das das Gerät mit anderen Netzwerken kommunizieren kann.
- `ping`: Testet, ob das Gerät den TFTP-Server erreichen kann.

---

### **2. Konfiguration des TFTP-Servers**

Um die **Running Configs** der Geräte zu sichern, haben wir einen **TFTP-Server** verwendet. Der TFTP-Server hat die **IP-Adresse 192.168.95.200** im **VLAN 95**.

**Wichtige Schritte:**

1. **Server einrichten:**
    - TFTP-Server muss auf **„On“** gesetzt werden.
    - **IP-Adresse** des Servers auf `192.168.95.200` setzen.
        
2. **Verbindung prüfen:**
    - Stelle sicher, dass **alle Geräte den Server pingen können**.
        

---

### **3. Sicherung der Konfigurationen**

Nachdem wir sichergestellt haben, dass alle Geräte miteinander kommunizieren, haben wir die **Running Configs** von den Geräten auf den TFTP-Server gesichert.

#### Beispiel: **Backup der Running Config auf TFTP**
```bash
enable copy running-config tftp Address or name of remote host []? 192.168.95.200 Destination filename [running-config]? ML-SW-Core.cfg
```

**Erklärung:**
- **`copy running-config tftp`**: Dieser Befehl kopiert die aktuelle Konfiguration des Geräts auf den TFTP-Server.
- **Ziel-Host**: Die IP-Adresse des TFTP-Servers.
- **Dateiname**: Der Name der Datei auf dem TFTP-Server (z. B. `ML-SW-Core.cfg`).

### **4. Troubleshooting und Probleme**

#### Problem: **Ping funktioniert, aber Backup schlägt fehl**

Wenn der Ping erfolgreich ist, aber der Backup-Befehl fehlschlägt, dann könnte es an der **Namensauflösung** oder an der **Verbindung** zum TFTP-Server liegen.

**Lösungen:**

- Stelle sicher, dass du die **korrekte IP-Adresse** des TFTP-Servers eingibst (kein Domainname).
- Überprüfe die **Verkabelung und VLAN-Konfiguration**.
- **TFTP-Server neustarten**: Stelle sicher, dass der Server in Packet Tracer korrekt läuft.

---

## 📚 **Wichtige Begriffe und Konzepte**

|Begriff|Bedeutung|
|---|---|
|**VLAN**|Virtual Local Area Network. Trennt Netzwerke auf Layer 2.|
|**Layer 3 Switch**|Switch, der auch Routing-Funktionalitäten für unterschiedliche VLANs bietet.|
|**TFTP**|Trivial File Transfer Protocol. Ein einfaches Protokoll für Dateiübertragungen.|
|**Ping**|Ein Tool, um die Netzwerkverbindung zu testen.|
|**Gateway**|Ein Netzwerkgerät, das den Zugang zu einem anderen Netzwerk ermöglicht.|

---

## 📋 **Abschluss**

Nach der Konfiguration und dem Testen der Geräte und der TFTP-Verbindung haben wir nun:

1. **Alle Geräte im Netzwerk korrekt konfiguriert.**
2. **Die Running Configs auf den TFTP-Server gesichert.**
3. **Die Erreichbarkeit der Geräte durch Ping getestet.**

Du kannst nun die **Konfigurationsdateien** auf Moodle hochladen, da alle **Backups** erfolgreich auf dem TFTP-Server gespeichert wurden.