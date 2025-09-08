/**
 * @author Maxim Göring
 * A4.2.2
 */

import java.util.Scanner;

public class A422_GroessterWert {
    public static void main(String[] args) {
        Scanner tastatur = new Scanner(System.in);
        int a, b, c, max;

        // Eingabe
        System.out.print("a: ");
        a = tastatur.nextInt();
        System.out.print("b: ");
        b = tastatur.nextInt();
        System.out.print("c: ");
        c = tastatur.nextInt();

        // Verarbeitung
        if (a >= b) { 
            if (a >= c) { 
                max = a; 
            } else {
                max = c; 
            }
        } else {
            if (b >= c) { 
                max = b;
            } else {
                max = c; 
            }
        }

        // Ausgabe
        System.out.println("Der größte eingegebene Wert ist: " + max);
    }
}
