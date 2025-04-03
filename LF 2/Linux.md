
## 1. Grundlegende Unterschiede zu Windows
Im Gegensatz zu Windows ist Linux:
- **Open-Source**: Der Quellcode von Linux ist offen und kann von jedem eingesehen, verändert und weiterverbreitet werden.
- **Vielzahl an Distributionen**: Linux gibt es in vielen verschiedenen Versionen, z.B. Ubuntu, Redhat, Knoppix, Kali, Debian, etc.
- **Communities**: Diese Distributionen werden weltweit von Communities weiterentwickelt.
- **Derivate**: Jede Distribution kann verschiedene Derivate haben, z.B. Kubuntu, Edubuntu, Lubuntu.

## 2. Mehrbenutzersystem
- Linux ist ein **Mehrbenutzersystem**, d.h., es gibt verschiedene Benutzer (user), die in Gruppen (groups) organisiert sind.
- **Zugriffsrechte** werden durch den Administrator (root) gesteuert.

## 3. Sicherheits- und Zugriffsrechte
- Linux unterscheidet bei den Zugriffsrechten zwischen:
  - **Besitzer** (User)
  - **Gruppe** (Group)
  - **Andere** (Other)
  
  Die Zugriffsrechte werden mit den Buchstaben **r** (lesen), **w** (schreiben), **x** (ausführen) definiert. Rechte können mit der **chmod**-Befehl vergeben werden.

- Es gibt auch ein **root**-Konto, der Superuser, der vollständige Administrationsrechte hat.

### Beispiel für chmod:
```bash
chmod u+x datei.txt   # Fügt dem Besitzer Ausführungsrechte hinzu
chmod 755 datei.txt    # Besitzer: rwx, Gruppe: r-x, Andere: r-x
```


4. Besonderheiten bei der Benennung
    Case-sensitive: Linux unterscheidet zwischen Groß- und Kleinschreibung, z.B. "Kramer" ist nicht gleich "kramer".

5. Keine Laufwerksbuchstaben
    Anders als Windows verwendet Linux keine Laufwerksbuchstaben (z.B. C: oder D:), sondern eine einzige Verzeichnisstruktur, die mit dem Wurzelverzeichnis / beginnt.

---

## Wichtige Linux-Verzeichnisse

| Verzeichnis   | Beschreibung                                                                 |
|---------------|-----------------------------------------------------------------------------|
| /root         | Admin- bzw. Superuser-Verzeichnis                                            |
| /proc         | Für Prozess- und Systemverwaltung                                            |
| /lost+found   | Enthält Dateifragmente nach Dateisystem-Wiederherstellung                     |
| /bin          | Essentielle Programme, z.B. shutdown                                          |
| /dev          | Geräte-Treiber                                                               |
| /etc          | Konfigurationsdateien, z.B. Passwortdatei                                     |
| /boot         | Enthält Startdatei und Kernel                                                |
| /home         | Benutzerverzeichnisse, z.B. von Frau Kramer oder Herrn Meier                 |
| /server       | Verzeichnis für Dienste (z.B. Webserver)                                     |
| /src          | Häufig für Quellcode, nicht direkt zugeordnet                                |
| /lib          | Wichtige Bibliotheken und Befehle für alle, z.B. ls                         |
| /mnt          | Zum Einhängen (Mounten) von Geräten                                          |
| /usr          | Enthält Desktopumgebungen und weitere Systemprogramme                        |
| /tmp          | Temporäre Dateien, wird beim Booten geleert                                  |
| /sbin         | Wichtige Systembefehle für alle, z.B. ls, shutdown                           |

---

## Weitere wichtige Konzepte
1. Paketverwaltung
In Linux erfolgt die Installation und Verwaltung von Software durch Paketmanager wie apt (Ubuntu/Debian), yum (CentOS/Redhat) oder pacman (Arch Linux). Diese Tools ermöglichen es, Software einfach zu installieren, zu aktualisieren oder zu entfernen.

2. Benutzer- und Gruppenverwaltung
Benutzer werden in Gruppen organisiert. Die Benutzerrechte werden durch die Dateiberechtigungen und die Zugriffssteuerung (ACL) für Dateien und Verzeichnisse definiert.

3. Prozesse und Systemverwaltung
Linux ist ein Mehrbenutzersystem, das eine starke Prozessverwaltung bietet. Jeder Prozess hat eine eindeutige Prozess-ID (PID), und du kannst Prozesse mit Tools wie ps, top und kill überwachen und steuern.

---
## Commands

| Beschreibung                                              | Befehl            |
| --------------------------------------------------------- | ----------------- |
| Einloggen als Root                                        | sudo su / su root |
| Neues Verzeichnis anlegen                                 | mkdir             |
| Verzeichnis löschen                                       | rmdir             |
| In ein Verzeichnis wechseln                               | cd                |
| Zum übergeordneten Verzeichnis wechseln                   | cd ..             |
| Inhalt eines Ordners anzeigen                             | ls                |
| Ordnerstruktur rekursiv anzeigen                          | ls -R             |
| Details zum Inhalt anzeigen (Rechte, Dateityp)            | ls -l             |
| Benutzer einer Gruppe zuordnen                            | usermod           |
| Zugriffsrechte ändern (Lesen, Schreiben, Ausführen)       | chmod             |
| Datei erstellen                                           | touch             |
| Dateiinhalt anzeigen                                      | cat / nano        |
| Gruppeninformationen anzeigen (in der Datei "/etc/group") | cat /etc/group    |
| Passwort eines Benutzers ändern                           | passwd            |

---
## Fazit

>Linux bietet eine hohe Flexibilität und Sicherheit durch die Trennung von Benutzerrechten und der Open-Source-Natur. Das Verständnis der Verzeichnisstruktur, Zugriffsrechte und Systemverwaltung ist entscheidend für die Arbeit mit Linux, besonders bei administrativen Aufgaben.

