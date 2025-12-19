## Überblick
Dieses Diagramm zeigt ein typisches Spanning Tree Protocol (STP)-Netzwerkdesign. Die Hauptkomponenten sind:
- **Root Bridge (Wurzelbrücke)**
- **Verteilerschicht (Distribution Layer)**
- **Zugangsschicht (Access Layer)**
- **Pfadkosten (Path Costs)**
- **RP (Root Port)** und **DP (Designated Port)**

![[Pasted image 20251219090111.png]]

## Diagrammbeschreibung

### 1. **Root Bridge**
- **Root Bridge** ist der zentrale Switch im Netzwerk, der als Ausgangspunkt für das STP dient. Dieser Switch hat den geringsten Pfadkostenwert und ist für die Root-Topologie verantwortlich.
  - In diesem Diagramm sind die Root Brücken durch den grünen Text markiert. Sie befinden sich in der Mitte des Netzwerks.
  - Beispiel: `0000.0c65.99c0` (Root Bridge)

### 2. **Root Port (RP)**
- Der **Root Port** ist der Port auf einem Switch, der den besten (kostengünstigsten) Pfad zum Root Bridge darstellt.
- In der Grafik sind **RP**-Ports durch "RP" markiert.
  - Beispiel: `RP` auf `Fa0/1` oder `Gig0/2`

### 3. **Designated Port (DP)**
- Der **Designated Port** ist der Port, über den der Datenverkehr zum Root Bridge und zu anderen Switches weitergeleitet wird.
- **DP** wird in der Grafik durch das Label „DP“ markiert.
  - Beispiel: `DP` auf `Gig0/1` oder `Fa0/2`

### 4. **Pfadkosten (Path Costs)**
- **Pfadkosten** geben die "Kosten" an, die erforderlich sind, um von einem Switch zum Root Bridge zu gelangen.
- Niedrigere Pfadkosten bedeuten einen besseren (schnelleren) Pfad. Höhere Pfadkosten sind weniger bevorzugt.
  - Beispiel: In der Grafik sind Pfadkosten wie folgt angegeben:
    - **Pfadkosten = 4**
    - **Pfadkosten = 19**

## Schritte zur Analyse eines Spanning Tree Netzwerks

### Schritt 1: Identifizierung der Root Bridge
- Die Root Bridge ist der Switch mit den niedrigsten Pfadkosten. Sie wird als Referenz für alle anderen Berechnungen verwendet.
  - Beispiel: `0000.0c65.99c0` ist die Root Bridge.

### Schritt 2: Bestimmung der Root Ports (RP)
- Jeder Switch, der nicht die Root Bridge ist, hat einen Root Port. Dies ist der Port, der den Switch mit der Root Bridge verbindet. Der Root Port hat immer den besten Pfad.
  - Beispiel: Auf dem Switch `0000.16b5.1ae5` zeigt der Root Port auf `Gig0/2` oder `Fa0/1`.

### Schritt 3: Bestimmung der Designated Ports (DP)
- Designated Ports sind die Ports, die den Datenverkehr zu anderen Switches weiterleiten. Diese Ports sind nicht unbedingt die direkteste Verbindung zum Root Bridge, sondern repräsentieren die besten Verbindungen innerhalb des Netzwerks.
  - Beispiel: Auf dem Switch `3560` ist `Fa0/1` ein Designated Port.

### Schritt 4: Analyse der Pfadkosten
- Die Pfadkosten zeigen an, wie effizient ein Pfad von einem Switch zur Root Bridge ist. Der Switch mit den geringsten Pfadkosten zum Root Bridge wird bevorzugt.
  - Beispiel: In der Grafik haben einige Switches Pfadkosten von `4` und andere von `19`.

### Schritt 5: Fehlerbehebung
- In einem echten Netzwerk könnten Verbindungen fehlschlagen oder nicht korrekt konfiguriert sein. Dies zeigt sich in der Grafik, wenn Verbindungen mit roten X gekennzeichnet sind. Diese Verbindungen sollten überprüft und ggf. neu konfiguriert werden.

## Tags und Eigenschaften

- **Tags:**
  - #STP #SpanningTree #RootBridge #RootPort #DesignatedPort #Pfadkosten
  - #Netzwerkdesign #Fehlerbehebung #Switches

- **Eigenschaften:**
  - **Root Pfadkosten**: Zeigen die Pfadkosten vom Root Bridge zum jeweiligen Switch.
  - **Designated Port (DP)**: Der Port, der den Datenverkehr zum Root Bridge und anderen Switches weiterleitet.
  - **Root Port (RP)**: Der Port, der den besten (geringsten Pfadkosten) Weg zur Root Bridge darstellt.

## Lösungsansatz für STP-Aufgaben

1. **Schritt 1**: Identifizieren Sie die Root Bridge und notieren Sie die Pfadkosten von allen anderen Switches zur Root Bridge.
2. **Schritt 2**: Bestimmen Sie den Root Port (RP) für jeden Switch, der nicht die Root Bridge ist.
3. **Schritt 3**: Bestimmen Sie die Designated Ports (DP) für alle Verbindungen, die zum Root Bridge führen.
4. **Schritt 4**: Überprüfen Sie, ob es fehlerhafte Verbindungen gibt (rote X), und beheben Sie diese, indem Sie die Verbindung prüfen und ggf. neu konfigurieren.

## Beispielaufgabe

**Frage**: Welcher Port auf Switch `3560` hat den besten Pfad zum Root Bridge und warum?

**Antwort**: Der Root Port auf Switch `3560` ist `Gig0/1`, da dies der Port mit den niedrigsten Pfadkosten zum Root Bridge ist. Die Pfadkosten sind in der Grafik mit `4` markiert.

---

## Weitere Ressourcen
- [Cisco Spanning Tree Protocol Guide](https://www.cisco.com/c/en/us/solutions/collateral/enterprise-networks/spanning-tree-protocol/guide_c07-734469.html)
