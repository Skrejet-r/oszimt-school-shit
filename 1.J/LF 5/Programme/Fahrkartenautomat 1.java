/*
 * @author Maxim Göring (FI-A 46)
 * 
 * A4.3: Ticketgrenzen im Fahrkartenautomat 
 */
import java.util.Scanner;

public class Fahrkartenautomat {
    public static void main(String[] args) {
        Scanner tastatur = new Scanner(System.in);

        double zuZahlenderBetrag;
        double eingezahlterGesamtbetrag;
        double eingeworfeneMuenze;
        double rueckgabebetrag;
        double nochZuZahlen;
        int anzahlTickets;

        // Geldbetrag eingeben
        System.out.print("Ticketpreis (Euro): ");
        zuZahlenderBetrag = tastatur.nextDouble();
        
        if (zuZahlenderBetrag <= 0) {
            System.out.println("Fehlerhafte Eingabe - Ticketpreis wird auf 1 gesetzt.");
            zuZahlenderBetrag = 1;
        }

        System.out.print("Anzahl Tickets: ");
        anzahlTickets = tastatur.nextInt();

        if (anzahlTickets <= 0 || anzahlTickets > 10) {
            System.out.println("Fehlerhafte Eingabe - Ticketanzahl wird auf 1 gesetzt.");
            anzahlTickets = 1;
        }

        zuZahlenderBetrag *= anzahlTickets;
        zuZahlenderBetrag = Math.round(zuZahlenderBetrag * 100.0) / 100.0; // runden

        // Geldeinwurf
        eingezahlterGesamtbetrag = 0.0;

        while (eingezahlterGesamtbetrag < zuZahlenderBetrag) {
            nochZuZahlen = zuZahlenderBetrag - eingezahlterGesamtbetrag;
            nochZuZahlen = Math.round(nochZuZahlen * 100.0) / 100.0; // runden

            System.out.printf("Noch zu zahlen: %.2f Euro\n", nochZuZahlen);
            System.out.print("Eingabe (mind. 5 Cent, höchstens 2 Euro): ");
            eingeworfeneMuenze = tastatur.nextDouble();

            eingezahlterGesamtbetrag += eingeworfeneMuenze;
            eingezahlterGesamtbetrag = Math.round(eingezahlterGesamtbetrag * 100.0) / 100.0; // runden
        }

        // Fahrscheinausgabe
        System.out.println("\nFahrschein wird ausgegeben");
        for (int i = 0; i < 8; i++) {
            System.out.print("=");
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("\n\n");

        // Rückgeldberechnung und -ausgabe
        rueckgabebetrag = eingezahlterGesamtbetrag - zuZahlenderBetrag;
        rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // runden

        if (rueckgabebetrag > 0.0) {
            System.out.printf("Der Rückgabebetrag in Höhe von %.2f Euro\n", rueckgabebetrag);
            System.out.println("wird in folgenden Münzen ausgezahlt:");

            while (Math.round(rueckgabebetrag * 100) >= Math.round(2.0 * 100)) { // 2-Euro-Münzen
                System.out.println("2 Euro");
                rueckgabebetrag -= 2.0;
                rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // Runden
            }
            while (Math.round(rueckgabebetrag * 100) >= Math.round(1.0 * 100)) { // 1-Euro-Münzen
                System.out.println("1 Euro");
                rueckgabebetrag -= 1.0;
                rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // Runden
            }
            while (Math.round(rueckgabebetrag * 100) >= Math.round(0.5 * 100)) { // 50-Cent-Münzen
                System.out.println("50 Cent");
                rueckgabebetrag -= 0.5;
                rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // Runden
            }
            while (Math.round(rueckgabebetrag * 100) >= Math.round(0.2 * 100)) { // 20-Cent-Münzen
                System.out.println("20 Cent");
                rueckgabebetrag -= 0.2;
                rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // Runden
            }
            while (Math.round(rueckgabebetrag * 100) >= Math.round(0.1 * 100)) { // 10-Cent-Münzen
                System.out.println("10 Cent");
                rueckgabebetrag -= 0.1;
                rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // Runden
            }
            while (Math.round(rueckgabebetrag * 100) >= Math.round(0.05 * 100)) { // 5-Cent-Münzen
                System.out.println("5 Cent");
                rueckgabebetrag -= 0.05;
                rueckgabebetrag = Math.round(rueckgabebetrag * 100.0) / 100.0; // Runden
            }
        }

        System.out.println("\nVergessen Sie nicht, den Fahrschein\n" + "vor Fahrtantritt entwerten zu lassen!\n"
                + "Wir wünschen Ihnen eine gute Fahrt.");

        tastatur.close();
    }
}
