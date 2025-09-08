Tags: #windows #bootvorgang #uefi #bios #systemstart #it-grundlagen

---

### Übersicht

Der Bootvorgang eines Windows-PCs läuft in mehreren Phasen ab, abhängig davon, ob das System im **UEFI**- oder **BIOS**-Modus gestartet wird.

---
![[Pasted image 20250404103905.png]]
---
### Boot Phasen (übersichtlich)

| Phase                | Beschreibung                                                    |
| -------------------- | --------------------------------------------------------------- |
| **BIOS Phase**       | POST-Test und Initialisierung von Hardware                      |
| **Bootloader Phase** | Laden des Bootmanagers und Bootloaders (abhängig von UEFI/BIOS) |
| **Kernel Phase**     | Laden und Initialisierung des Windows NT-Kernels                |
| **Logon Phase**      | Anzeigen des Anmeldebildschirms, Start der Benutzerumgebung     |

---

### Vergleich: UEFI vs BIOS Boot

|Schritt|UEFI Boot|BIOS Boot|
|---|---|---|
|Firmware|UEFI Firmware|BIOS Firmware|
|Bootinformationen|NVRAM, Boot-Einträge|MBR und Partitionstabelle|
|Bootmanager|\EFI\Microsoft\Boot\bootmgfw.efi|\bootmgr|
|Bootloader|\Windows\System32\winload.efi|\Windows\System32\winload.exe|
|Partitionstyp|GPT|MBR|

---

### Fachbegriffe erklärt

|Begriff|Erklärung|
|---|---|
|**(Legacy-) BIOS**|Steuert Startvorgang, initialisiert Hardware|
|**UEFI**|Nachfolger von BIOS, mit grafischer Oberfläche|
|**EFI-Systempartition**|Enthält UEFI-Treiber und Bootloader|
|**POST**|Power-On-Self-Test: Hardwaretest beim Einschalten|
|**CMOS-RAM**|Speicher für UEFI-Einstellungen|
|**MBR**|Master Boot Record, enthält Partitionstabelle und Bootstrap|
|**GPT**|Partitionstabelle bei UEFI-Systemen|
|**Bootstrap**|Erster ausführbarer Startcode auf der Festplatte|
|**Bootmanager**|Steuert den Startvorgang (z. B. bootmgr)|
|**Bootmenü**|Auswahlmenü für Betriebssysteme|
|**Multi-Boot-System**|Mehrere installierte Betriebssysteme auf einem System|
|**Beep-Codes**|Audiosignale zur Fehlerdiagnose bei Hardwareproblemen|

---

### Sichtbare Anzeichen beim Start

|Phase|Anzeige|
|---|---|
|POST / BIOS / UEFI|Schwarzer Bildschirm / Herstellerlogo|
|Bootloader|Windows-Logo|
|Kernel-Initialisierung|Lade-Animation (z. B. Fortschrittsring)|
|Anmeldung|Anmeldemaske von Windows|

---
