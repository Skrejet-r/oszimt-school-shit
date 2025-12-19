
## Aufgaben und Lösungen

### 1. **Zustände, die Switchports durchlaufen**
Switchports durchlaufen verschiedene Zustände im Spanning Tree Protocol (STP) während ihrer Konvergenzphase. Diese Zustände helfen, Netzwerkloops zu vermeiden und die Netzwerkstabilität zu gewährleisten.

**Portzustände:**
- **Forwarding**: Der Switchport ist aktiv und leitet Frames weiter. Dieser Zustand tritt auf, wenn der Port ordnungsgemäß mit dem Netzwerk verbunden ist.
- **Blocking**: Der Port blockiert den Datenverkehr und leitet keine Frames weiter. Dieser Zustand tritt ein, wenn der Port nicht für den Datenverkehr benötigt wird, um Schleifen zu vermeiden.
- **Listening**: Der Switchport hört auf BPDU-Pakete (Bridge Protocol Data Units), aber leitet noch keine Frames weiter. Dies ist der Zustand, in dem der Port lernt und sich auf den Übergang in den Forwarding-Zustand vorbereitet.
- **Learning**: Der Switchport lernt MAC-Adressen, die an diesem Port empfangen werden, aber leitet immer noch keine Daten weiter. Dies hilft bei der Erstellung der MAC-Adresse-Tabelle.

**Quellen:**
- STP-Portzustände und -rollen:contentReference[oaicite:0]{index=0}.

### 2. **Warum die Bridge Priority standardmäßig 32768 ist**
Die Bridge Priority ist standardmäßig auf 32768 gesetzt, da dies den Mittelwert des möglichen Bereichs für die Priorität darstellt. Die Bridge Priority ist ein 16-Bit-Wert, der zusammen mit der MAC-Adresse des Switches verwendet wird, um die Root-Bridge zu bestimmen.

- **Bedeutung der Bridge Priority**: Eine niedrigere Priorität hat Vorrang, was bedeutet, dass Switches mit einer niedrigen Priorität wahrscheinlicher zur Root-Bridge gewählt werden. Der Standardwert 32768 wurde gewählt, um eine ausgewogene Wahl der Root-Bridge zu ermöglichen, ohne dass zu viele Switches als Root-Bridge kandidieren.

**Quellen:**
- STP-Konfiguration und Bridge Priority:contentReference[oaicite:1]{index=1}.

### 3. **Vorteile von Redundanz (Switches, Router, Netzteile, RAID etc.)**
Redundanz ist ein kritischer Bestandteil der Netzwerksicherheit und -verfügbarkeit. Die grundlegenden Vorteile von Redundanz umfassen:

- **Hohe Verfügbarkeit**: Redundante Systeme wie Switches und Router ermöglichen eine kontinuierliche Verbindung, selbst wenn eine Komponente ausfällt.
- **Fehlertoleranz**: Durch redundante Netzteile, Switches oder RAID-Systeme wird das Risiko eines vollständigen Systemausfalls verringert.
- **Lastverteilung**: Bei redundanten Links oder Geräten wird der Datenverkehr auf mehrere Pfade verteilt, wodurch die Leistung und Bandbreite verbessert wird.

**Quellen:**
- Redundante Netzwerke und Ausfallsicherheit:contentReference[oaicite:2]{index=2}.

### 4. **Problematik ohne STP**
Ohne das Spanning Tree Protocol (STP) könnten Netzwerkloops entstehen, da Switches in redundanten Netzwerken fälschlicherweise mehrere Pfade für die gleiche Verbindung nutzen. Dies führt zu:

- **Broadcast-Stürmen**: Schleifen verursachen unendliche Wiederholungen von Broadcasts.
- **Instabilität der MAC-Adresse-Tabelle**: Switches können nicht mehr eindeutig bestimmen, wohin sie Frames senden sollen.
- **Mehrfachzustellung von Frames**: Ein Frame kann mehrmals an seinen Zielort gesendet werden, was die Netzwerklast erhöht.

**Quellen:**
- Probleme ohne STP:contentReference[oaicite:3]{index=3}.

### 5. **Bedeutung der LED-Farben im Packet Tracer**
Im Cisco Packet Tracer zeigen die LED-Farben an Switchports den aktuellen Status der Verbindung an:

- **Grün**: Der Port ist aktiv und funktioniert ordnungsgemäß, d.h., der Port ist in einem "Forwarding"-Zustand.
- **Orange**: Der Port hat ein Problem und befindet sich möglicherweise im "Err-disabled"-Zustand oder einem anderen problematischen Zustand (wie Blocked).

**Quellen:**
- LED-Anzeigen im Packet Tracer:contentReference[oaicite:4]{index=4}.

### 6. **STP-Algorithmus und Wahl der Root-Bridge**
Der STP-Algorithmus dient der Vermeidung von Schleifen in einem Netzwerk. Die Wahl der Root-Bridge erfolgt anhand der **Bridge ID** (BID), die sich aus der Priorität und der MAC-Adresse des Switches zusammensetzt. Der Switch mit der niedrigsten BID wird als Root-Bridge gewählt.

- **Algorithmus:**
  - Alle Switches senden BPDUs (Bridge Protocol Data Units), um Informationen über sich selbst auszutauschen.
  - Der Switch mit der niedrigsten BID wird zur Root-Bridge.
  - Alle anderen Switches wählen den besten Port (Root Port), der den kürzesten Pfad zur Root-Bridge bietet.
  - Nicht-Root-Ports, die Daten zum Root-Switch weiterleiten, werden als Designated Ports festgelegt.

**Beispiel:**
- Die Priorität für VLAN 1 ist 32768, und die MAC-Adresse des Switches entscheidet, welcher Switch als Root-Bridge gewählt wird. Eine niedrigere Priorität oder eine kleinere MAC-Adresse führt dazu, dass der Switch als Root-Bridge ausgewählt wird.

**Quellen:**
- STP-Algorithmus und Root-Bridge-Wahl:contentReference[oaicite:5]{index=5}.

---

## Tags und Eigenschaften
- **Tags**: #STP #SpanningTree #Switchports #Redundanz #Netzwerkdesign #Cisco #Switching

---

## Weitere Ressourcen
- [Cisco Spanning Tree Protocol Guide](https://www.cisco.com/c/en/us/solutions/collateral/enterprise-networks/spanning-tree-protocol/guide_c07-734469.html)
