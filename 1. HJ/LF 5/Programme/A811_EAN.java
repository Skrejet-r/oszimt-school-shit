/*
 * @author Maxim Göring (FI-A 46)
 * A8.1.1 EAN ⭐⭐
*/

import java.util.Scanner;

public class A811_EAN {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Gib EAN-13-Code ein: ");
        long eanCode = scanner.nextLong(); 

        if (String.valueOf(eanCode).length() != 13) {
            System.out.println("Code muss 13-stellig sein!!");
        } else {
            if (UltraEANValidator(eanCode)) {
                System.out.println(eanCode + " - gültig");
            } else {
                System.out.println(eanCode + " - ungültig");
            }
        }
        scanner.close(); 
    }

    public static boolean UltraEANValidator(long eanCode) {
        int[] eanDigits = new int[13];
        for (int i = 12; i >= 0; i--) {
            eanDigits[i] = (int) (eanCode % 10);
            eanCode /= 10;
        }

        int totalSum = 0;
        for (int i = 0; i < 12; i++) {
            if ((i + 1) % 2 == 0) {
                totalSum += eanDigits[i] * 3;
            } else {
                totalSum += eanDigits[i];
            }
        }

        int rest = totalSum % 10;
        int result = (rest == 0) ? 0 : 10 - rest;

        return result == eanDigits[12];
    }
}