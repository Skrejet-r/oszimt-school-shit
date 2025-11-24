---
author: gamz
title: "Elektrische Grundgrößen – U, Q, P, Eel"
tags: [elektronik, grundlagen, physik, stromversorgung, einheiten]
created: 2025-02-14
---

> Dieses Dokument erklärt die wichtigsten Größen, die in batteriebetriebenen Geräten und Smart-Home-Aufgaben vorkommen:  
> Spannung U, Kapazität Q, Leistung P und elektrische Energie Eel – mit Einheiten und Rechenbeispielen.

---

## 1. Spannung U in Volt (V)

Die **elektrische Spannung U** ist der „Druck“, mit dem Elektronen durch einen Leiter „gedrückt“ werden.

- Einheit: Volt  
- Symbol: U  
- Typische Werte:
  - AA-Batterie: 1,5 V  
  - NiMH-AA-Akku: 1,2 V  
  - USB: 5 V

> Merke: Höhere Spannung bedeutet mehr „Potentialunterschied“, aber nicht automatisch mehr Energie – dafür zählt auch die Kapazität bzw. der Strom.

---

## 2. Kapazität Q in Ah und mAh

Die **Kapazität Q** beschreibt, wie viel Ladung eine Batterie speichern kann.  
Sie sagt aus, wie lange eine Batterie bei einem bestimmten Strom liefern kann.

- Einheit: Amperestunden (Ah)  
- Typische Schreibweise bei Batterien: Milliamperestunden (mAh)

Umrechnung:  
1 Ah = 1000 mAh

Beispiele:
- 3000 mAh = 3 Ah  
- 800 mAh = 0,8 Ah

Faustformel:
> Wenn ein Verbraucher 1 A zieht, dann hält eine 1-Ah-Batterie theoretisch 1 Stunde.  
> Allgemein: t = Q / I

Beispielrechnung:
- Q = 2 Ah  
- I = 0,5 A  
- t = Q / I = 2 Ah / 0,5 A = 4 h

---

## 3. Leistung P in W, kW, mW

Die **elektrische Leistung P** sagt, wie viel Energie pro Zeit umgesetzt wird.

Formel:  
P = U * I

- P: Leistung in Watt (W)  
- U: Spannung in Volt (V)  
- I: Strom in Ampere (A)

### Einheiten

- 1 W = 1 Watt  
- 1 kW = 1000 W  
- 1 mW = 0,001 W (1/1000 W)

Beispiele:
- 10 mW = 0,01 W  
- 50 W = 0,05 kW  
- 2 kW = 2000 W

### Beispiel: LED-Leistung

Gegeben:
- U = 3 V  
- I = 5 mA = 0,005 A  

Rechnung:
P = U * I = 3 V * 0,005 A = 0,015 W = 15 mW

---

## 4. Elektrische Energie Eel: Wh, kWh, mWh, Ws

**Elektrische Energie** ist die „Menge an Arbeit“, die ein elektrisches System verrichtet.  
Oft berechnet aus Leistung und Zeit.

Grundformeln:

- Eel = P * t  
- oder: Eel = U * I * t  

### 4.1 Einheiten

Häufig verwendet:
- Wh (Wattstunden)  
- kWh (Kilowattstunden)  
- Ws (Wattsekunden, auch Joule: 1 Ws = 1 J)  
- mWh (Milliwattstunden)

Umrechnungen:
- 1 Wh = 3600 Ws (weil 1 h = 3600 s)  
- 1 kWh = 1000 Wh  
- 1 Wh = 1000 mWh

Beispiel:
- 2 Wh = 2000 mWh  
- 0,5 kWh = 500 Wh

---

## 5. Batterie-Energie aus Spannung und Kapazität

Mit Spannung U in Volt und Kapazität Q in Ah kann man die gespeicherte Energie in Wh berechnen:

Formel:  
Eel = U * Q

Wichtig:  
Q muss in Ah sein, nicht in mAh.

Beispiele:

### Beispiel 1: AA-Batterie

Gegeben:
- U = 1,5 V  
- Q = 2000 mAh = 2 Ah  

Rechnung:
Eel = U * Q = 1,5 V * 2 Ah = 3 Wh

### Beispiel 2: Zwei AA in Reihe

- 2 × AA in Reihe: U = 3,0 V  
- Kapazität bleibt: Q = 3000 mAh = 3 Ah  

Eel = 3,0 V * 3 Ah = 9 Wh

---

## 6. Energieverbrauch eines Geräts über die Zeit

Formeln:

- P = U * I  
- Eel = P * t

### Beispiel 3: Funkgerät mit 0,5 W für 2 Stunden

Gegeben:
- P = 0,5 W  
- t = 2 h  

Eel = 0,5 W * 2 h = 1 Wh

### Beispiel 4: LED mit 10 mW für 100 Stunden

Gegeben:
- P = 10 mW = 0,01 W  
- t = 100 h  

Eel = 0,01 W * 100 h = 1 Wh

→ Diese LED verbraucht in 100 Stunden genau 1 Wh Energie.

---

## 7. Batterielebensdauer mit Leistung und Energie abschätzen

Vorgehen:
1. Batterie-Energie berechnen: Ebat = U * Q  
2. Geräteleistung P kennen  
3. Lebensdauer: t = Ebat / P

### Beispiel 5: 9-Wh-Batterie und 0,01-W-LED

Gegeben:
- Ebat = 9 Wh  
- P = 0,01 W (10 mW)

Rechnung:
t = Ebat / P = 9 Wh / 0,01 W = 900 h

Umrechnung in Tage:
900 h / 24 ≈ 37,5 Tage

---

## 8. Kurz-Zusammenfassung der wichtigsten Formeln (Textform)

- P = U * I  
- Eel = P * t  
- Eel = U * I * t  
- Eel (in Wh) = U (in V) * Q (in Ah)  
- t (in h) = Q (in Ah) / I (in A)

Einheiten:
- U in V  
- Q in Ah oder mAh  
- P in W, mW, kW  
- Eel in Wh, kWh, mWh, Ws  

> Wenn du Spannung, Kapazität und Verbrauchsleistung verstehst, kannst du fast jede Batterie-Laufzeit grob abschätzen.
