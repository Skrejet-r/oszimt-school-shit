
## **Klassen in Java**

Eine Klasse in Java ist ein Bauplan für Objekte. Sie definiert Attribute (Eigenschaften) und Methoden (Funktionen), die ein Objekt haben kann.

### Beispiel einer Klasse:
```java
public class Hund {
    // Attribute
    String name;
    int alter;

    // Konstruktor
    public Hund(String name, int alter) {
        this.name = name;
        this.alter = alter;
    }

    // Methode
    public void bellen() {
        System.out.println(name + " sagt: Wuff!");
    }
}
```

### Verwendung der Klasse:

```java
public class Main {
    public static void main(String[] args) {
        // Objekt der Klasse Hund erstellen
        Hund meinHund = new Hund("Bello", 3);

        // Methode aufrufen
        meinHund.bellen();  // Ausgabe: Bello sagt: Wuff!
    }
}
```

---

## **Arrays in Java**

Ein Array ist eine Sammlung von Elementen desselben Datentyps. Arrays haben eine feste Größe, die bei der Erstellung definiert wird.

### Beispiel eines Arrays:

```java
public class Main {
    public static void main(String[] args) {
        // Array von Ganzzahlen erstellen
        int[] zahlen = new int[5];

        // Werte zuweisen
        zahlen[0] = 10;
        zahlen[1] = 20;
        zahlen[2] = 30;
        zahlen[3] = 40;
        zahlen[4] = 50;

        // Array durchlaufen und Werte ausgeben
        for (int i = 0; i < zahlen.length; i++) {
            System.out.println(zahlen[i]);
        }
    }
}
```

### Kurzschreibweise für Arrays:

```java
int[] zahlen = {10, 20, 30, 40, 50};
```
---

## **Zusammenhang zwischen Klassen und Arrays**

Arrays können auch Objekte von Klassen speichern.

### Beispiel:

```java
public class Main {
    public static void main(String[] args) {
        // Array von Hund-Objekten erstellen
        Hund[] hunde = new Hund[3];

        // Objekte erstellen und im Array speichern
        hunde[0] = new Hund("Bello", 3);
        hunde[1] = new Hund("Rex", 5);
        hunde[2] = new Hund("Luna", 2);

        // Methoden der Objekte aufrufen
        for (Hund hund : hunde) {
            hund.bellen();
        }
    }
}
```
---

## Zusammenfassung

- **Klassen** sind Baupläne für Objekte und enthalten Attribute und Methoden.
    
- **Arrays** sind Sammlungen von Elementen desselben Datentyps und haben eine feste Größe.
    
- Arrays können auch Objekte von Klassen speichern.


Programmen von heute:
![[A811_EAN.java]]

![[A812_Ziegenproblem.java]]