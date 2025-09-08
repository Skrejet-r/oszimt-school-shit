## 📌 Was ist Netzplantechnik?
Die Netzplantechnik ist eine Methode zur Planung, Steuerung und Überwachung von Projekten. Sie visualisiert Abhängigkeiten von Aufgaben und berechnet Zeitpunkte wie früheste und späteste Anfänge und Enden.

### 📌 Wichtige Begriffe:

1. **Vorgang**: Eine konkrete Aufgabe im Projekt (z. B. "Fundament bauen").
2. **Dauer**: Zeit, die für den Vorgang benötigt wird (in Tagen, Wochen usw.).
3. **Vorgänger**: Aufgaben, die abgeschlossen sein müssen, bevor der Vorgang beginnen kann.

### 📊 Zeitparameter im Netzplan:

| Begriff    | Bedeutung                                                                 |
|------------|--------------------------------------------------------------------------|
| **FAZ**    | Frühester Anfangszeitpunkt: Der früheste Zeitpunkt, an dem ein Vorgang starten kann. |
| **FEZ**    | Frühester Endzeitpunkt: FAZ + Dauer – Der früheste Zeitpunkt, an dem ein Vorgang endet. |
| **SAZ**    | Spätester Anfangszeitpunkt: Der späteste Zeitpunkt, an dem ein Vorgang starten darf, ohne den Projektablauf zu verzögern. |
| **SEZ**    | Spätester Endzeitpunkt: Der späteste Zeitpunkt, an dem ein Vorgang abgeschlossen sein muss. |
| **Puffer** | Zeit, um die ein Vorgang verzögert werden kann, ohne den Endtermin zu beeinflussen (SEZ - FEZ). |

## 📐 Vorwärts- und Rückwärtsrechnung

### 1. **Vorwärtsrechnung (FAZ & FEZ berechnen)**
Ziel: Früheste Zeitpunkte bestimmen – beginnt beim ersten Vorgang.

Formeln:
- FAZ = Max(FEZ der Vorgänger)
- FEZ = FAZ + Dauer

**Beispiel:**

| Vorgang  | Vorgänger | Dauer (Tage) | FAZ  | FEZ  |
|----------|-----------|--------------|------|------|
| A        | -         | 4            | 0    | 4    |
| B        | A         | 7            | 4    | 11   |
| C        | B         | 4            | 11   | 15   |

**Berechnung:**
1. Vorgang A: FAZ = 0, FEZ = 0 + 4 = 4
2. Vorgang B: FAZ = FEZ(A) = 4, FEZ = 4 + 7 = 11
3. Vorgang C: FAZ = FEZ(B) = 11, FEZ = 11 + 4 = 15

### 2. **Rückwärtsrechnung (SAZ & SEZ berechnen)**
Ziel: Späteste Zeitpunkte bestimmen – beginnt beim letzten Vorgang.

Formeln:
- SEZ = Min(SAZ der Nachfolger)
- SAZ = SEZ - Dauer

**Beispiel:**

| Vorgang  | Vorgänger | Dauer (Tage) | SAZ  | SEZ  |
|----------|-----------|--------------|------|------|
| C        | B         | 4            | 11   | 15   |
| B        | A         | 7            | 4    | 11   |
| A        | -         | 4            | 0    | 4    |

**Berechnung:**
1. Vorgang C: SEZ = FEZ = 15, SAZ = 15 - 4 = 11
2. Vorgang B: SEZ = SAZ(C) = 11, SAZ = 11 - 7 = 4
3. Vorgang A: SEZ = SAZ(B) = 4, SAZ = 4 - 4 = 0

## 🔗 Kritischer Pfad
Der **kritische Pfad** ist die längste Kette von Vorgängen ohne Pufferzeit. Verzögerungen im kritischen Pfad führen zu Verzögerungen des gesamten Projekts.

Identifikation:
- Puffer = SEZ - FEZ oder SAZ - FAZ
- Wenn Puffer = 0 → Vorgang gehört zum kritischen Pfad.

### 📊 Beispiel mit kritischem Pfad:

| Bezeichnung | Vorgang              | Vorgänger | Dauer (Tage) | FAZ  | FEZ  | SAZ  | SEZ  | Puffer |
|-------------|----------------------|-----------|--------------|------|------|------|------|--------|
| A           | Bau des Fundamentes  | -         | 4            | 0    | 4    | 0    | 4    | 0      |
| B           | Bau Außenmauer       | A         | 7            | 4    | 11   | 4    | 11   | 0      |
| C           | Innenwände mauern    | B         | 4            | 11   | 15   | 16   | 20   | 5      |
| D           | Dachstuhl            | B         | 7            | 11   | 18   | 11   | 18   | 0      |
| E           | Ziegel aufbringen    | D         | 2            | 18   | 20   | 18   | 20   | 0      |
| F           | Versorgungsleitungen | A         | 3            | 4    | 7    | 17   | 20   | 13     |
| G           | Installation         | C, E, F   | 8            | 20   | 28   | 20   | 28   | 0      |
| H           | Fenster und Türen    | C         | 3            | 15   | 18   | 25   | 28   | 10     |
| I           | Innenputz            | G, H      | 4            | 28   | 32   | 28   | 32   | 0      |

👉 **Kritischer Pfad**: A → B → D → E → G → I

## 📏 Gesamtpuffer (GP) und Freier Puffer (FP)

- **Gesamtpuffer (GP)**: Zeit, um die ein Vorgang maximal verzögert werden kann, ohne das Projekt zu verzögern.
  - Formel: **GP = SEZ - FEZ**

- **Freier Puffer (FP)**: Zeit, um die ein Vorgang verzögert werden kann, ohne nachfolgende Vorgänge zu beeinflussen.
  - Formel: **FP = FAZ(nächster Vorgang) - FEZ(aktueller Vorgang)**

👉 **Wenn GP = 0, gehört der Vorgang zum kritischen Pfad!**

## 📌 Zusammenfassung
1. **Vorwärtsrechnung**: Früheste Zeitpunkte (FAZ, FEZ) bestimmen.
2. **Rückwärtsrechnung**: Späteste Zeitpunkte (SAZ, SEZ) berechnen.
3. **Kritischer Pfad**: Vorgänge mit Puffer = 0.
4. **Gesamtpuffer & Freier Puffer**: Zusätzliche Zeitreserven erkennen.

---
## Beispielaufgabe
[[AB_02-Netzplan (2) (2).pdf]]