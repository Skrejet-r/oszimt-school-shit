/**
 * @author Maxim Göring
 * A4.2.1
 */

import java.util.Scanner;

public class A421_Rabattsystem {

    public static void main(String[] args) {
        // Scanner
        Scanner eingabeScanner = new Scanner(System.in);

        // Eingabe
        System.out.print("Bitte geben Sie Ihren Bestellwert ein: ");
        double bestellwert = eingabeScanner.nextDouble();

        // Preisberechnung
        double rabatt = berechneRabatt(bestellwert);
        double endbetrag = bestellwert - rabatt;

        //Ausgabe
        System.out.printf("Der Bestellwert abzüglich Rabatt beträgt %.2f EUR%n", endbetrag);

        //Ende 
        eingabeScanner.close();
    }

    // Berechnung des Preises mit Rabatt
    public static double berechneRabatt(double bestellwert) {
        if (bestellwert > 0 && bestellwert <= 100) {
            return bestellwert * 0.10; // 10% Rabatt
        } else if (bestellwert > 100 && bestellwert <= 500) {
            return bestellwert * 0.15; // 15% Rabatt
        } else if (bestellwert > 500) {
            return bestellwert * 0.20; // 20% Rabatt
        } else {
            return 0; //Fals kein Rabatt / Negativ / Fehler
        }
    }
}
                  