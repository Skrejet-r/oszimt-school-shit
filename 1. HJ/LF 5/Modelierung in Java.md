Schueler.java:
```java
public class Schueler {
    // Attribute
    private String name;
    private int alter; 

    // Konstruktoren
    public Schueler(){}
    public Schueler(String name, int alter){
        this.name = name; 
        this.alter = alter;
        odermankannsonamesetzen = name; // neue Variable

    }

    // Verwaltungsmethoden
    // getter/setter
    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name; 
    }

    public int getAlter(){
        return this.alter; 
    }

    public void setAlter(int alter){
        this.alter = alter; 
    }

    // weitere Methoden
    public void lernen(){
        // fuck off
    }
}
```

SchuelerTest.java:
```java
public class SchuelerTest {
    public static void main(String[] args){
        //Objekterzeugung
        Schueler s1 = new Schueler();
        Schueler s2 = new Schueler("Muhamed", 43);
        Lehrer k1 = new Lehrer();


        //Objektmanipulation
        s1.setName("Ahmed");
        s1.setAlter(55);

        k1.setFach("Mathe");
        k1.setName("Artem");

        // Ausgabe der Attributswerte
        System.out.println("Schüler s1 heißt " + s1.getName());
        System.out.println("Schüler s2 heißt " + s2.getName());
        System.out.println("Lehrer k1 unterichtet " + k1.getFach());
    }
}
```

