Die **Ereignisgesteuerte Prozesskette (EPK)** ist eine grafische Modellierungssprache zur Darstellung von Geschäftsprozessen. Sie visualisiert den zeitlichen und sachlogischen Ablauf von **Funktionen** (Tätigkeiten) und **Ereignissen** (Zustände, die Funktionen auslösen oder deren Ergebnis sind), verbunden durch logische **Konnektoren** (UND, ODER, XOR).

Die Modellierung beider Prozesse, Wareneingangsbearbeitung und Fertigungsdurchführung, erfolgt nach den allgemeinen Regeln der EPK:

- Der Prozess beginnt und endet mit einem Ereignis.
- Ereignisse und Funktionen wechseln sich strikt ab (Ereignis $\to$ Funktion $\to$ Ereignis $\to$ ...).
- Funktionen beschreiben die auszuführenden Aktivitäten (z.B. "Wareneingang buchen").
- Ereignisse beschreiben Zustände (z.B. "Ware ist eingetroffen", "Fertigungsauftrag abgeschlossen").

---

## 📦 EPK: Wareneingangsbearbeitung

Dieser Prozess beschreibt die Schritte, die vom Eintreffen der Ware bis zur Einlagerung und Verbuchung im System notwendig sind.

|**Element**|**Beispiel-EPK-Ablauf (vereinfacht)**|
|---|---|
|**Start-Ereignis**|_Ware ist eingetroffen_|
|**Funktion**|**Warenannahme durchführen** (durch Mitarbeiter Lager)|
|**Ereignis**|_Ware wurde entladen_|
|**Funktion**|**Sicht- und Belegkontrolle prüfen** (durch Mitarbeiter Wareneingang)|
|**Konnektor (XOR)**|**ODER** (_Mangel festgestellt_ **ODER** _Mangel nicht festgestellt_)|
|**Folge-Funktion**|**Wareneingang buchen** (wenn kein Mangel)|
|**End-Ereignis**|_Wareneingang ist gebucht_|

**Mögliche Schritte in der EPK Wareneingangsbearbeitung:**

1. _Ereignis:_ **Ware ist eingetroffen**
2. _Funktion:_ **Warenannahme durchführen** (Kontrolle der Lieferpapiere)
3. _Ereignis:_ **Ware ist zur Prüfung bereit**
4. _Funktion:_ **Wareneingangsprüfung durchführen** (Qualitäts- und Mengenprüfung)
5. _Ereignis:_ **Prüfung abgeschlossen**
6. _Funktion:_ **Wareneingang buchen**
7. _Ereignis:_ **Wareneingang ist gebucht**
8. _Funktion:_ **Lagerplatz zuweisen**
9. _End-Ereignis:_ **Ware ist eingelagert**

---

## ⚙️ EPK: Fertigungsdurchführung

Dieser Prozess beschreibt die Abläufe von der Freigabe eines Fertigungsauftrags bis zum Abschluss der Produktion und der Übergabe des fertigen Produkts.

| **Element**         | **Beispiel-EPK-Ablauf (vereinfacht)**                                  |
| ------------------- | ---------------------------------------------------------------------- |
| **Start-Ereignis**  | _Fertigungsauftrag ist freigegeben_                                    |
| **Funktion**        | **Material bereitstellen** (durch Lagerist)                            |
| **Ereignis**        | _Material ist zur Produktion verfügbar_                                |
| **Funktion**        | **Produktionsschritt 1 ausführen** (durch Facharbeiter)                |
| **Ereignis**        | _Produktionsschritt 1 ist abgeschlossen_                               |
| **Funktion**        | **Qualitätsprüfung durchführen**                                       |
| **Konnektor (AND)** | **UND** (_Prüfergebnis liegt vor_ **UND** _Produktionszeiten erfasst_) |
| **End-Ereignis**    | _Fertigprodukt ist fertiggestellt_                                     |

**Mögliche Schritte in der EPK Fertigungsdurchführung:**

1. _Ereignis:_ **Fertigungsauftrag freigegeben**
2. _Funktion:_ **Materialien kommissionieren**
3. _Ereignis:_ **Materialien bereitgestellt**
4. _Funktion:_ **Vorbereitung und Einrichtung der Maschine**
5. _Ereignis:_ **Maschine ist eingerichtet**
6. _Funktion:_ **Fertigungsprozess starten**
7. _Ereignis:_ **Fertigung ist beendet**
8. _Funktion:_ **Rückmeldung der Fertigungsdaten** (Zeiten, Mengen)
9. _Funktion:_ **Endkontrolle durchführen**
10. _End-Ereignis:_ **Fertigware ist auf Lager**

EPK-Modelle dienen dazu, betriebliche Abläufe transparent zu machen und Optimierungspotenziale aufzuzeigen.

---

Dieses Video gibt eine Einführung in die EPK-Modellierung und erklärt die Grundlagen von Ereignissen, Funktionen und Konnektoren: [EPK erstellen - einfach erklärt - (erweiterte) Ereignisgesteuerte Prozesskette - Vorteile und ÜBUNG](https://www.youtube.com/watch?v=JoSI0AE6Hx8).