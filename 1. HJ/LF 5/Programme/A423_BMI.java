/**
 * @author Maxim Göring
 * A4.2.3
 */

 import java.util.Scanner;

 public class A423_BMI {
 
     public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);
 
         // Eingabe
         System.out.print("Bitte geben Sie Ihre Körpergröße in cm an: ");
         double koerpergroesseInCm = scanner.nextDouble();
 
         System.out.print("Bitte geben Sie jetzt Ihr Gewicht in kg an: ");
         double gewichtInKg = scanner.nextDouble();
 
         System.out.print("Als letztes geben Sie bitte Ihr Geschlecht an (m/w): ");
         char geschlecht = scanner.next().toLowerCase().charAt(0);
 
         // Berechnung des BMI
         double bmi = berechneBMI(koerpergroesseInCm, gewichtInKg);
 
         // Klassifikation des BMI
         String klassifikation = klassifiziereBMI(bmi, geschlecht);
 
         // Ausgabe
         System.out.println("Sie haben " + klassifikation + "\n");
         System.out.printf("BMI: %.2f%n", bmi);
 
         // Scanner schließen
         scanner.close();
     }

     public static double berechneBMI(double koerpergroesseInCm, double gewichtInKg) {
         double koerpergroesseInMeter = koerpergroesseInCm / 100;
         return gewichtInKg / (koerpergroesseInMeter * koerpergroesseInMeter);
     }

     public static String klassifiziereBMI(double bmi, char geschlecht) {
         if (geschlecht == 'w') { // Frauen
             if (bmi < 19) {
                 return "Untergewicht";
             } else if (bmi <= 24) {
                 return "Normalgewicht";
             } else {
                 return "Übergewicht";
             }
         } else if (geschlecht == 'm') { // Männer
             if (bmi < 20) {
                 return "Untergewicht";
             } else if (bmi <= 25) {
                 return "Normalgewicht";
             } else {
                 return "Übergewicht";
             }
         } else {
             return "ein unbekanntes Geschlecht angegeben";
         }
     }
 }
 