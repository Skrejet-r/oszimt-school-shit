**Dazugehörige ABs:**
[[WLAN-Sicherheit.pdf]]

---
## 1. Einführung
WLAN-Sicherheit ist essenziell, um unautorisierten Zugriff und Datenmissbrauch zu verhindern. Moderne Sicherheitsstandards sind WPA2 und WPA3, die verschiedene Authentifizierungsmodi unterstützen.

## 2. WPA2 vs. WPA3

### WPA2
- Standard seit 2004, basierend auf IEEE 802.11i.
- Nutzt AES-CCMP-Verschlüsselung.
- Sicherer als WEP und WPA, aber anfällig für Brute-Force- und KRACK-Angriffe.

### WPA3
- Nachfolger von WPA2, seit 2018.
- Verwendet **Simultaneous Authentication of Equals (SAE)** anstelle von PSK.
- Stärkere Verschlüsselung, Schutz vor Offline-Brute-Force-Angriffen.
- Unterstützt Forward Secrecy für bessere Sicherheit.

## 3. WPA2 Personal vs. WPA2 Enterprise

### WPA2 Personal Mode (PSK)
- Alle Geräte nutzen dasselbe Passwort.
- Einfach zu konfigurieren, aber anfällig für Passwort-Angriffe.
- Wenn ein Gerät kompromittiert ist, ist das gesamte Netzwerk gefährdet.

### WPA2 Enterprise Mode (802.1X / EAP)
- Jeder Benutzer hat eigene Anmeldeinformationen.
- Nutzt einen **RADIUS-Server** zur Authentifizierung.
- Sicherer, da Benutzer individuell verwaltet werden können.
- Komplexere Einrichtung, besser für Unternehmen geeignet.

## 4. WLAN-Authentifizierungsverfahren

### 1. Open System Authentication (OSA)
- Keine Authentifizierung, jeder kann sich verbinden.
- Unsicher, meist für öffentliche Netzwerke.

### 2. WPA2/WPA3 Personal (PSK/SAE)
- Passwortbasiert, geeignet für Heimnetzwerke.
- Bei WPA3: Schutz vor Brute-Force-Angriffen.

### 3. WPA2/WPA3 Enterprise (802.1X/EAP)
- Zentrale Authentifizierung mit Benutzerkonten.
- Stärkerer Schutz und individuelle Zugriffsrechte.

### 4. WPS (Wi-Fi Protected Setup)
- Einfacher Verbindungsaufbau per PIN oder Knopfdruck.
- Unsicher, da leicht angreifbar (PIN-Brute-Force).

## 5. Sicherheitsrisiken und Empfehlungen
- **WPA2-PSK**: Schwache Passwörter vermeiden, min. 16 Zeichen.
- **WPA3 bevorzugen**, wenn möglich.
- **WPS deaktivieren** wegen Sicherheitslücken.
- **Regelmäßige Updates** der Router-Firmware durchführen.

## 6. Fazit
WPA3 bietet deutliche Verbesserungen gegenüber WPA2, insbesondere in Bezug auf Passwortsicherheit. Unternehmen sollten **WPA2/WPA3 Enterprise** nutzen, während Heimnutzer auf starke Passwörter und die Deaktivierung von WPS achten sollten.
