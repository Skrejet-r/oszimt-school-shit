/*
 * @author Maxim Göring (FI-A 46)
 * A8.1.2 Ziegenproblem ⭐⭐
*/

import java.util.Random;
import java.util.Scanner;

public class A812_Ziegenproblem { // warum Ziegen?
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.print("Wie viel Simulationen? ");
        int n = scanner.nextInt();
        int winsWithWechseln = 0;
        int winsWithoutWechseln = 0; 

        for (int i = 0; i < n; i++) {
            int prizeDoor = random.nextInt(3);
            int chosenDoor = random.nextInt(3);
            int openedDoor;
            
            do {
                openedDoor = random.nextInt(3);
            } while (openedDoor == chosenDoor || openedDoor == prizeDoor);

            if (chosenDoor == prizeDoor) {
                winsWithoutWechseln++;
            }
            
            int switchedDoor;
            
            do {
                switchedDoor = random.nextInt(3);
            } while (switchedDoor == chosenDoor || switchedDoor == openedDoor);

            if (switchedDoor == prizeDoor) {
                winsWithWechseln++;
            }
        }

        double successRateWithWechseln = (double) winsWithWechseln / n;
        double successRateWithoutWechseln = (double) winsWithoutWechseln / n;

        System.out.println("Wechseln: " + successRateWithWechseln);
        System.out.println("Nichtwechseln: " + successRateWithoutWechseln);

        scanner.close();
    }
}