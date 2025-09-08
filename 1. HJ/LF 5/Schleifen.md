
---

## For-Schleife 

```java
int erg = 0; 
for (int i = 1; i <= myInt; i++) { 
	erg = erg + i; 
} 
System.out.println(erg);
```

### Erklärung:

- **Initialisierung**: `int i = 1` – Startwert für die Schleife.
- **Bedingung**: `i <= myInt` – Schleife läuft, solange die Bedingung wahr ist.
- **Inkrementierung**: `i++` – Erhöht den Wert von `i` nach jeder Iteration.
- **Berechnung**: Addiert jeden Wert von `i` zur Summe `erg`.

### Beispiel:

- Eingabe: `myInt = 3`
- Berechnung:
    - Iteration 1: `erg = 0 + 1 = 1`
    - Iteration 2: `erg = 1 + 2 = 3`
    - Iteration 3: `erg = 3 + 3 = 6`
- Ausgabe: `6`

---

## While-Schleife

```java
erg = 0; 
int zaehler = 0; 
while (zaehler <= myInt) { 
	erg = erg + zaehler; 
	zaehler++; 
} 
System.out.println(erg);
```

### Erklärung:

- **Initialisierung**: `zaehler = 0` – Startwert.
- **Bedingung**: `zaehler <= myInt` – Schleife läuft, solange die Bedingung wahr ist.
- **Inkrementierung**: `zaehler++` – Erhöht den Zähler nach jeder Iteration.
- **Berechnung**: Addiert `zaehler` zu `erg`.

### Beispiel:

- Eingabe: `myInt = 3`
- Berechnung:
    - Iteration 1: `erg = 0 + 0 = 0`
    - Iteration 2: `erg = 0 + 1 = 1`
    - Iteration 3: `erg = 1 + 2 = 3`
    - Iteration 4: `erg = 3 + 3 = 6`
- Ausgabe: `6`

---

## Do-While-Schleife

```java
erg = 0;
zaehler = 0;
do {
    erg = erg + zaehler;
    zaehler++;
} while (zaehler <= myInt);
System.out.println(erg);

```

### Erklärung:

- **Initialisierung**: `zaehler = 0` – Startwert.
- **Berechnung**: Schleifeninhalt wird **mindestens einmal** ausgeführt.
- **Inkrementierung**: `zaehler++` – Erhöht den Zähler nach jeder Iteration.
- **Bedingung**: `zaehler <= myInt` – Wird nach der Iteration geprüft.

### Beispiel:

- Eingabe: `myInt = 3`
- Berechnung:
    - Iteration 1: `erg = 0 + 0 = 0`
    - Iteration 2: `erg = 0 + 1 = 1`
    - Iteration 3: `erg = 1 + 2 = 3`
    - Iteration 4: `erg = 3 + 3 = 6`
- Ausgabe: `6`

---

## Vergleich der Schleifen 
| Schleife       | Wann verwenden?                                                        | Besonderheit                              |
|----------------|-------------------------------------------------------------------------|------------------------------------------|
| **For**        | Wenn die Anzahl der Iterationen bekannt ist.                           | Kontrollierte Iteration.                 |
| **While**      | Wenn Iterationen von einer Bedingung abhängen, die vor der Ausführung geprüft wird. | Flexibel, Bedingung vor Schleifenbeginn. |
| **Do-While**   | Wenn der Code mindestens einmal ausgeführt werden muss.                | Bedingung wird am Ende geprüft.          |

---

## Fazit

Die Wahl der Schleifenart hängt vom Anwendungsfall ab:

- **For-Schleife**: Am besten für bekannte Anzahl von Iterationen.
- **While-Schleife**: Ideal bei bedingungsbasierten Iterationen.
- **Do-While-Schleife**: Nützlich, wenn der Schleifeninhalt mindestens einmal ausgeführt werden muss.