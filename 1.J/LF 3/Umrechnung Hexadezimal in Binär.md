1. **Jede Ziffer im Hexadezimalsystem entspricht 4 Bits im Binärsystem:**
    - Hexadezimalziffern 0−90-90−9 entsprechen ihren Binäräquivalenten 0000−10010000-10010000−1001.
    - Hexadezimalziffern A−FA-FA−F entsprechen 1010−11111010-11111010−1111.
2. **Beispiel:**  
    Hexadezimal 200120012001:  
    2=0010,0=0000,0=0000,1=00012 = 0010, 0 = 0000, 0 = 0000, 1 = 00012=0010,0=0000,0=0000,1=0001  
    Ergebnis: 0010 0000 0000 00010010\ 0000\ 0000\ 00010010 0000 0000 0001


---

#### Umrechnung: Binär in Hexadezimal

1. **Teile die Binärzahl in Gruppen zu je 4 Bits (beginnend von rechts).**
2. **Jede 4-Bit-Gruppe wird in eine Hexadezimalziffer umgewandelt.**
3. **Beispiel:**  
    Binär 110011101010110111001110101011011100111010101101:  
    Gruppen: 1100 1110 1010 11011100\ 1110\ 1010\ 11011100 1110 1010 1101  
    1100=C,1110=E,1010=A,1101=D1100 = C, 1110 = E, 1010 = A, 1101 = D1100=C,1110=E,1010=A,1101=D  
    Ergebnis: CEADCEADCEAD


---

#### Umrechnung: Dezimal in Hexadezimal

1. **Teile die Dezimalzahl wiederholt durch 16.**
2. **Notiere den Rest jeder Division.**
3. **Die Hexadezimalzahl wird aus den Resten (von unten nach oben gelesen) gebildet.**
4. **Beispiel:**  
    Dezimal 192192192:  
    192÷16=12 Rest 0192 ÷ 16 = 12 \ \text{Rest} \ 0192÷16=12 Rest 0  
    12÷16=0 Rest 12 (entspricht C)12 ÷ 16 = 0 \ \text{Rest} \ 12\ (\text{entspricht C})12÷16=0 Rest 12 (entspricht C)  
    Ergebnis: C0C0C0


---

#### Umrechnung: Hexadezimal in Dezimal

1. **Berechne den Dezimalwert, indem du jede Hexadezimalziffer mit 16n16^n16n (n = Stellenwert) multiplizierst.**
2. **Beispiel:**  
    Hexadezimal ACACAC:  
    A=10×161=160,C=12×160=12A = 10 \times 16^1 = 160, C = 12 \times 16^0 = 12A=10×161=160,C=12×160=12  
    Ergebnis: 160+12=172160 + 12 = 172160+12=172


---

#### Zusammenfassung

Die Umwandlung zwischen Zahlensystemen folgt festen Regeln:

- Hexadezimal zu Binär: Jede Hexadezimalziffer → 4 Bits.
- Binär zu Hexadezimal: 4 Bits → Eine Hexadezimalziffer.
- Dezimal zu Hexadezimal: Wiederholte Division durch 16.
- Hexadezimal zu Dezimal: Multiplikation nach Stellenwert.

Mit diesen Grundlagen lassen sich die Aufgaben effizient lösen.