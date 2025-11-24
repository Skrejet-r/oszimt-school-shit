---
author: ChatGPT
title: Smart-Home Stromversorgung – Grundlagen
tags:
  - smart-home
  - batterien
  - elektronik
  - stromversorgung
  - grundlagen
  - schulung
created: 2025-02-14
---

> Dieses Dokument erklärt die technischen Hintergründe der Themen, die in den Aufgaben angesprochen werden.  
> Keine Aufgabenlösungen – nur das Fachwissen, das man dafür verstehen muss.

---

## 1. Warum manche Geräte keine Akkus akzeptieren

### 1.1 Technische Eigenschaften von Akkus (besonders NiMH)

Akkus (NiMH) haben eine niedrigere Nennspannung als Einweg-Batterien:

- Alkali-Batterien: 1,5 V  
- NiMH-Akkus: 1,2 V  

Geräte, die 2 Batterien in Reihe verwenden, erwarten oft 3,0 V.  
Mit Akkus stehen aber nur 2,4 V zur Verfügung.

Folgen:
- Gerät startet nicht sicher  
- Funkreichweite sinkt  
- Motorantriebe (z. B. Thermostate) bekommen zu wenig Kraft  
- Gerät meldet „Batterie leer“, obwohl Akku voll ist  

### 1.2 Gilt das für alle Akku-Typen?

Nein.

| Akku-Typ | Spannung | Problem? |
|----------|----------|----------|
| NiMH | 1,2 V | Ja – zu niedrig |
| Li-IIon 18650 | 3,6–3,7 V | Zu hoch, gefährlich |
| LiFePO4 AA | 1,5 V | Meist geeignet |
| Zink-Kohle | 1,5 V | Kein Akku, aber ungeeignet |

Merke: Das Verbot bezieht sich fast immer auf NiMH-Akkus.

---

## 2. Warum Zink-Kohle-Batterien ungeeignet sind

Zink-Kohle-Batterien haben:
- hohen Innenwiderstand  
- starke Spannungseinbrüche unter Last  
- geringe Kapazität  

Smart-Home-Geräte (Funk, Motoren) benötigen kurzzeitig hohe Ströme.  
Zink-Kohle bricht ein → Gerät funktioniert nicht stabil.

> Für Smart-Home: immer Alkali oder Lithium.

---

## 3. Energetische Betrachtung bei Rauchmeldern

Formel:  
E = U × Q

Vergleich:

| Bauform | Spannung | Kapazität | Energie (Wh) |
|---------|----------|-----------|--------------|
| 9V-Lithiumblock | 9 V | 1,2–1,5 Ah | 10,8–13,5 Wh |
| CR123A Lithium | 3 V | 1,4–1,6 Ah | 4,2–4,8 Wh |

Der 9V-Block enthält mehr Energie.

Sehr sparsame Rauchmelder nutzen trotzdem CR123A:
- klein  
- günstig  
- Ruhestrom sehr niedrig  

---

## 4. Kapazitäts-Faustformel AA vs. AAA

Typische Kapazitäten:
- AA: 2000–3000 mAh  
- AAA: 800–1200 mAh  

Faustformel:
> AA ≈ 2,5–3 × Kapazität von AAA.

---

## 5. Lebensdauer einer Batterie bei LED-Dauerbetrieb

Gegeben:
- LED-Leistung: 10 mW  
- Spannung: 3,0 V  
- Kapazität: 3000 mAh = 3 Ah  

Formeln:
- I = P / U  
- t = Kapazität / I  

Berechnung:
- I = 0,01 W / 3 V = 0,00333 A  
- t = 3 Ah / 0,00333 A ≈ 900 h = ca. 37,5 Tage  

> Eine AA-Batterie hält bei 10 mW Dauerbetrieb etwa 5–6 Wochen.

---

## 6. Warum Batterien oft kürzer halten als Herstellerangaben

Einflussfaktoren:
- schlechte Funkverbindung → Wiederholungen  
- viele Stellbewegungen  
- kalte Umgebung  
- hartgängige Ventile  
- häufige Automationen  
- Firmwareupdates  

Beispiel:
> Ein Thermostat am schlechten Funkstandort halbiert seine Batterielebensdauer.

---

## 7. Grundwissen Batterie-Schaltungen

### Reihenschaltung
- Spannung addiert sich  
- Kapazität bleibt  

Beispiel:  
2× AA → 3,0 V, 3000 mAh

### Parallelschaltung
- Spannung bleibt  
- Kapazität addiert sich  

Beispiel:  
2× AA parallel → 1,5 V, 6000 mAh

---

## 8. Übersicht Batterietypen

| Typ | Spannung | Innenwiderstand | Kapazität | Eignung Smart-Home |
|------|----------|-----------------|-----------|---------------------|
| Alkali AA/AAA | 1,5 V | mittel | gut | sehr gut |
| Zink-Kohle | 1,5 V | hoch | gering | schlecht |
| NiMH Akku | 1,2 V | niedrig | gut | oft ungeeignet |
| Lithium AA | 1,5 V | sehr niedrig | sehr gut | hervorragend |
| CR123A Lithium | 3,0 V | sehr niedrig | gut | hervorragend |

---