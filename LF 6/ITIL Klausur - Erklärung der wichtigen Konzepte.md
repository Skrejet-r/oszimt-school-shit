## 1. **Single Point of Failure (SPOF)**

> Ein **Single Point of Failure** (SPOF) bezeichnet eine Stelle im IT-System, deren Ausfall das gesamte System oder einen wesentlichen Teil des Systems zum Stillstand bringen würde. In einem gut strukturierten System sollte es keine SPOFs geben, um die Verfügbarkeit des Systems sicherzustellen.

**Beispiel**:  
Stell dir vor, ein Unternehmen betreibt einen Online-Shop und die gesamte Datenbank ist auf einem einzigen Server gespeichert. Fällt dieser Server aus, ist der gesamte Shop nicht mehr erreichbar, weil der Server als SPOF fungiert.

**Warum wichtig?**  
Die Identifikation und Beseitigung von SPOFs ist wichtig, um Ausfälle zu vermeiden und die Systemverfügbarkeit zu maximieren.

---

## 2. **Gründe für ein Incident**

> Ein **Incident** ist ein unvorhergesehenes Ereignis, das den normalen Betrieb eines IT-Services stört oder unterbricht. In ITIL wird ein Incident schnell und effizient behandelt, um die Auswirkungen auf den Service so gering wie möglich zu halten.

**Beispiele für Incidents**:
- **Hardware-Fehler**: Ein Server fällt aufgrund eines Festplattenausfalls aus.
- **Software-Fehler**: Eine Anwendung stürzt ab oder funktioniert nicht mehr wie erwartet.
- **Sicherheitsverletzung**: Ein Hackerangriff führt dazu, dass Daten gestohlen werden oder ein System lahmgelegt wird.

**Warum wichtig?**  
Incidents müssen schnell bearbeitet werden, um den Service wiederherzustellen und den Geschäftsbetrieb fortzusetzen. Dazu gibt es in der Regel eine festgelegte Vorgehensweise (Incident Management).

---

## 3. **Dokumentation eines Problems**

> Ein **Problem** ist die zugrunde liegende Ursache eines oder mehrerer Incidents. Während ein Incident oft schnell gelöst wird, ist das Problem die Ursache des Vorfalls, die langfristig behoben werden muss. **Problem Management** ist der Prozess, der sich mit der Identifizierung und der Beseitigung von Problemen beschäftigt.

**Wie dokumentiert man ein Problem?**
- **Problem Record**: Dies ist ein offizielles Dokument, das alle relevanten Informationen über das Problem enthält, z. B. die Ursachenanalyse und eventuelle Workarounds.
  
**Beispiel**:  
Ein Unternehmen hat wiederholt Probleme mit der Software XYZ, die immer wieder abstürzt. Die IT-Abteilung dokumentiert das Problem und untersucht die Ursache (z. B. inkompatible Versionen oder ein Fehler in der Software). Sobald die Ursache gefunden wird, kann eine dauerhafte Lösung erarbeitet werden.

---

## 4. **Formale Anfrage eines Anwenders – Service Request**

> Eine **Service Request** ist eine formale Anfrage von einem Benutzer oder Kunden nach einem Service oder einer Änderung des bestehenden Service. Im Gegensatz zu einem Incident geht es hier nicht um eine Störung, sondern um eine regelmäßige Anfrage oder einen Standardprozess.

**Beispiel**:  
Ein Mitarbeiter benötigt einen neuen Laptop. Er stellt eine Service Request bei der IT-Abteilung, um den Laptop zu erhalten. Diese Anfrage wird nach einem Standardprozess bearbeitet.

**Warum wichtig?**  
Service Requests helfen dabei, die Effizienz und den Servicefluss zu optimieren, indem wiederkehrende Anfragen standardisiert und automatisiert werden.

---

## 5. **Arten von Changes nach ITIL**

> In ITIL werden Änderungen (Changes) in drei Hauptarten unterteilt, um sicherzustellen, dass sie richtig bewertet und umgesetzt werden. Jede Art hat ihre eigenen Anforderungen und Prozessvorgaben.

### **1. Standard Change**
Ein **Standard Change** ist eine vorab genehmigte Änderung, die regelmäßig und ohne große Risiken durchgeführt wird.

**Beispiel**:  
Ein Software-Update, das regelmäßig durchgeführt wird, ist ein Standard Change. Da es vorab getestet wurde und keine unerwarteten Auswirkungen hat, muss es nicht jedes Mal neu genehmigt werden.

### **2. Normal Change**
Ein **Normal Change** ist eine Änderung, die eine detaillierte Prüfung und Genehmigung benötigt. Diese Art von Change hat potenziell größere Auswirkungen und wird im Allgemeinen durch das Change Advisory Board (CAB) überprüft.

**Beispiel**:  
Die Einführung eines neuen IT-Systems in einem Unternehmen ist ein Normal Change. Es ist eine komplexe Änderung, die Zeit für Planung und Bewertung benötigt.

### **3. Emergency Change**
Ein **Emergency Change** ist eine Änderung, die aufgrund eines Notfalls oder einer Krise sofort umgesetzt werden muss. Dieser Change wird oft ohne die üblichen Prüfungen vorgenommen, um schnell zu reagieren und die Situation zu beheben.

**Beispiel**:  
Ein kritischer Sicherheitsfehler in einem System, der schnell behoben werden muss, um einen Angriff zu verhindern, ist ein Emergency Change.

---

## 6. **Change Calendar und Forward Schedule of Change (FSC)**

> Der **Change Calendar** ist ein Instrument zur Verwaltung von Changes. Er zeigt, wann bestimmte Änderungen geplant sind, und stellt sicher, dass keine Änderungen gleichzeitig stattfinden, die sich gegenseitig beeinflussen könnten.

**Beispiel**:  
Das Unternehmen plant, alle zwei Wochen ein regelmäßiges Software-Update durchzuführen. Diese Updates werden im Change Calendar eingeplant, damit alle Beteiligten wissen, wann welche Änderungen stattfinden.

> Eine **Forward Schedule of Change (FSC)** ist der Begriff aus ITIL, der genau das beschreibt: Eine geplante und vorab abgestimmte Zeit für die Durchführung von Änderungen.

---

## 7. **Zuordnung der Practices zu Themen**

> In ITIL gibt es verschiedene **Practices**, die sich auf spezifische Prozesse und Aufgaben konzentrieren. Diese Practices helfen dabei, IT-Services zu verwalten und zu verbessern.

### **a) Known Error – Problem Management**
Ein **Known Error** ist ein Problem, dessen Ursache bereits identifiziert wurde, aber noch nicht vollständig gelöst ist. In diesem Fall wird das Problem im Problem Management dokumentiert.

**Beispiel**:  
Ein Softwarefehler, der zu Abstürzen führt, wird als Known Error bezeichnet, weil die Ursache bekannt ist, aber eine Lösung noch nicht implementiert wurde.

### **b) Workaround – Incident Management**
Ein **Workaround** ist eine temporäre Lösung, die verwendet wird, um die Auswirkungen eines Incidents zu minimieren, bis eine endgültige Lösung gefunden wird. Workarounds werden oft im Incident Management eingesetzt.

**Beispiel**:  
Wenn eine Anwendung abstürzt und der Fehler noch nicht behoben ist, könnte ein Workaround darin bestehen, die Anwendung neu zu starten, damit sie vorübergehend weiterläuft.

### **c) Schließung eines Incidents – Service Desk**
Die **Schließung eines Incidents** erfolgt durch den **Service Desk**. Der Incident wird geschlossen, wenn eine Lösung gefunden oder ein Workaround implementiert wurde.

**Beispiel**:  
Ein Benutzer meldet ein Problem mit dem Drucken. Der Service Desk hilft ihm, den Drucker neu zu starten, und der Incident wird geschlossen, wenn das Problem behoben ist.

### **d) Austausch eines defekten Access Points – Change Enablement**
Der Austausch eines defekten Access Points ist eine Änderung, die im Rahmen des **Change Enablement**-Prozesses geplant, bewertet und genehmigt wird.

**Beispiel**:  
Die IT-Abteilung plant, einen fehlerhaften WLAN-Router durch einen neuen zu ersetzen. Dieser Change wird durch den Change-Prozess geführt und im Change Calendar eingetragen.

### **e) Bereitstellung eines zusätzlichen Access Points – Service Request Management**
Die Bereitstellung eines zusätzlichen Access Points als Teil eines vereinbarten Service fällt unter **Service Request Management**, da es sich um eine Anfrage nach einer neuen Serviceleistung handelt.

**Beispiel**:  
Ein Benutzer beantragt einen zusätzlichen Access Point, weil der bestehende WLAN-Empfang nicht ausreicht. Die IT-Abteilung bearbeitet die Anfrage gemäß den Service-Request-Prozessen.

### **f) CAB (Change Advisory Board) – Change Enablement**
Das **Change Advisory Board (CAB)** ist ein Gremium, das die Verantwortlichkeit für die Bewertung und Genehmigung von Änderungen übernimmt. Dies gehört zum **Change Enablement**-Prozess.

**Beispiel**:  
Das CAB prüft eine geplante Änderung in der Infrastruktur, wie z. B. das Hinzufügen eines neuen Servers, und entscheidet, ob die Änderung durchgeführt werden soll.

---

## 8. **ISO 20000 und ITIL**

> **ISO 20000** ist eine internationale Norm, die Anforderungen an das IT-Service-Management definiert. Sie ist für Unternehmen wichtig, die nachweisen möchten, dass ihre IT-Service-Management-Prozesse den internationalen Standards entsprechen.

**Beispiel**:  
Ein Unternehmen, das ISO 20000 zertifiziert ist, zeigt, dass es beständig hohe Qualitätsstandards im IT-Service-Management aufrechterhält.

> **ITIL** ist ein Framework, das Best Practices für das IT-Service-Management bietet. Im Gegensatz zur ISO 20000-Norm ist ITIL nicht gesetzlich vorgeschrieben, sondern eine Sammlung von bewährten Prozessen, die Unternehmen helfen, ihre IT-Services zu optimieren.

**Beispiel**:  
ITIL beschreibt, wie IT-Services effizient und kundenorientiert bereitgestellt werden können. Ein Unternehmen könnte ITIL implementieren, um die Servicequalität zu verbessern und die Kundenzufriedenheit zu steigern.

---

## 9. **Warum sind Normen und Frameworks im IT-Service sinnvoll?**

> Normen und Frameworks helfen dabei, die Qualität von IT-Services sicherzustellen und zu verbessern. Sie bieten einen strukturierten Ansatz, der auf bewährten Verfahren basiert und dazu beiträgt, Risiken zu minimieren und Effizienz zu steigern.

**Beispiel**:  
Ein Unternehmen, das ISO 20000 und ITIL verwendet, kann die Qualität seines Service-Managements messen und sicherstellen, dass alle IT-Prozesse effektiv und effizient ausgeführt werden.

---
