**Fakeshop-Erkennungsmerkmale (Zusammenfassung der Ergebnisse):**

1. Ungewöhnlich niedrige Preise
2. Verdächtige Webadresse
3. Fehlende oder gefälschte Gütesiegel
4. Fehlerhafte Rechtstexte
5. Fehlendes oder falsches Impressum
6. Keine sicheren Zahlungsmethoden, u. U. nur Vorkasse
7. Webseite evt. übersetzt, hat ggf. Übersetzungsfehler
8. Grammatikfehler auf der Webseite
9. Schlechtes, unprofessionelles Design der Webseite
10. Eingabe-Objekte, die nicht klickbar sind
11. Keine oder gefälschte Kundenbewertungen
12. Keine SSL-Verschlüsselung (kein "https" in der URL)
13. Keine Möglichkeit, per Rechnung oder PayPal zu bezahlen
14. Logos schlecht gefälscht
15. Keine oder gefakte Kontaktmöglichkeiten zum Shop
16. Webshop existiert erst kurz
17. Anmeldevorgang schwierig

---

## Phishing-Mails

**Wichtige Merkmale:**

- **Unpersönliche Anrede:** Allgemeine Anreden statt persönlicher Namen.
- **Dringlichkeit/Drohung:** Eile und negative Folgen werden betont.
- **Schnelle Handlung gefordert:** Auffällige Buttons/Links drängen zur sofortigen Reaktion.
- **Fehlende Kontaktinfos:** Keine Rückfragemöglichkeiten.
- **Allgemeiner Absender:** Unspezifische Absenderangaben.
- **Unglaubwürdige Angebote:** Zu gute Angebote.
- **Aktuelle Ereignisse als Tarnung:** Nutzung von Nachrichten zur Täuschung.
- **Falsche Datumsangaben:** Nutzung nicht vorhandener Datumsangaben (z.B. der 29. Februar 2025).
- **Merkwürdige Betreffzeilen**: Betreffzeilen die keinen Sinn ergeben oder sehr unüblich sind.
- **Gefährliche Hyperlinks** Die Url sollte dringend geprüft werden.

**Zusätzliche Tipps:**

- Seien Sie misstrauisch bei unerwarteten Nachrichten.
- Überprüfen Sie den Absender genau.
- Klicken Sie nicht auf Links in verdächtigen E-Mails.
- Geben Sie niemals persönliche Daten per E-Mail weiter.
---
## Social-Engineering-Tricks:

- **pretexting:** Methode, bei der sich der Täter durch geschickte Gesprächsführung als eine wichtige Person ausgibt
- **baiting:** Methode, bei der ein Köder, z.B. ein kostenloser Download, eingesetzt wird
- **honeypot:** Methode, bei der eine attraktive Person eingesetzt wird, um an Informationen zu kommen
- **vishing:** Methode, bei der dem Opfer per Telefonanruf Informationen entlockt werden sollen
- **CEO-Fraud:** Methode, bei der sich jemand z.B. als Chef ausgibt
- **Shoulder Surfing:** Methode eines Angriffs durch heimliches über die Schulter gucken
- **Tailgating:** Methode, sich durch Vortäuschen einer falschen Identität Zutritt zu einem geschützten Bereich zu verschaffen
- **Trashing:** Methode, bei der nach Informationen in Mülleimern gesucht wird
- **Smishing:** Methode, bei der Textdienste, SMS, WhatsApp, etc. für den Angriff benutzt werden
- **Piggybacking:** Methode, bei der jemand, unerlaubt jemand anderen hinterherschleicht
- **Media Dropping:** Methode, bei der ein infiziertes Speichergerät, z.B. USB-Stick bewusst platziert wird
- **Pharming:** Methode, bei der die Attacke über eine gefälschte Webseite abläuft
- **Whaling:** Methode, bei der ein hochrangiges Ziel attakiert wird
- **Quid pro Quo:** Methode, bei der dem Opfer ein Tauschobjekt, z.B. ein kostenloses Programm, angeboten wird.

---
![[Pasted image 20250402104021.png]]
---
## Beispiel zu fishing Mail Analyse: 

![[Pasted image 20250402100638.png]]
## Begriffe

- **SPF** = Sender-Policy-Framework = Verfahren zum Überprüfen, ob eine Absender seriös ist bzw. authentifiziert, eine Mail zu versenden 
- **MIME** = Multipurpose Internet Mail Extension = erweiteter Standard zur Formatierung bzw. den, in einer Mail, eingesetzten Datenformaten inklusive dem Anhang
- **ESMTPS** =  Extended Simple Mail Transfer Protocol Secured (bzw SSL) = erweitete, verschlüsselte einfaches Email-Sendeprotokoll
- **SKIM** = Domain Keys Identified Internet Mail, prüft Integrität einer Mail bzw. ob die Mail unterwegs verändert wurde
- **Return-Path** = Adresse, an die unzustellbare Mails zurückgesendet werden

## Zusammenfassung

Diese E-Mail stammt vom GMX Magazin und weist keine Anzeichen für Phishing auf. Die Header-Informationen sind konsistent und zeigen, dass die E-Mail von authentifizierten GMX-Servern gesendet wurde.

## Header-Details

* **Return-Path:** `&lt;mailings@mailings.gmx.net>`
    * Legitime Rücksendeadresse von GMX.
* **DKIM:** `dkim=pass header.i=@mailings.gmx.net`
    * DKIM-Signatur erfolgreich überprüft.
* **ESMTPS (Received-Header):**
    * `from mout-csbulk.land1.com ([212.227.126.227]) by mx-ha.gmx.net (mxgmx107 [212.227.17.5])`
    * E-Mail wurde innerhalb des GMX-Netzwerks übertragen.
* **Absender:** `GMX Magazin &lt;mailings@mailings.gmx.net>`
    * Legitimer Absender von GMX.
* **IP-Adresse Sender:** `212.227.126.227, 212.227.17.5`
    * IP-Adressen gehören zu GMX.
* **Übereinstimmung IP/Name:** `Ja, gehört zu GMX`
    * IP-Adressen stimmen mit dem GMX-Domainnamen überein.
* **Letzter Empfänger:** `oskar.opfer@gmx.de`
    * Gültige Empfänger Emailadresse.
* **Zeitpunkt Versand:** `Tue, 04 Feb 2025 17:24:55 +0100`
    * gültiger Zeitstempel.
* **MIME:**
    * `MIME-Version: 1.0`
    * `Content-Type: multipart/alternative; boundary="b1=_4T1KhaXT7ffSfEDW2QkoQNJvvPk7kBVHg207vmj1E"`
    * Standard-MIME-Informationen.
* **Verschlüsselung:** `ESMTPS/TLS, DKIM`
    * Sichere Übertragung und Authentifizierung.
* **Mail Inhalt:** `Subject: oskar opfer, Ihr 25 GB Handytarif für dauerhaft 9,99 € mtl.1`
    * Unauffälliger Betreff.
* **Spam?:** `X-GMX-Antispam: 0 (Mail was not recognized as spam)`
    * Von GMX nicht als Spam eingestuft.
* **Phishing?:** `Keine klaren Anzeichen im Header`
    * Keine verdächtigen Elemente.
* **SPF Funktion:** `Authentifizierung der sendenden Server einer Domain`
    * SPF-Authentifizierung erfolgreich.


## Fazit

Diese E-Mail ist wahrscheinlich legitim. Alle Header-Informationen stimmen überein und deuten auf einen Versand durch offizielle GMX Server hin.