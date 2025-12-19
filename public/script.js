document.addEventListener('DOMContentLoaded', () => {
    const tocList = document.getElementById('toc-list');
    const contentArea = document.getElementById('md-content');
    
    // Bestimme contentBasePath dynamisch basierend auf der aktuellen URL
    // Wenn wir in /public/index.html sind und Dateien im Root liegen, brauchen wir ../
    // Wenn der Server im Root läuft, ist der Pfad relativ zur aktuellen Seite
    const currentPath = window.location.pathname;
    let contentBasePath = '../'; // Standard: vom public-Ordner eine Ebene nach oben
    
    // Prüfe verschiedene Szenarien
    if (currentPath.includes('/public/')) {
        // Wir sind in /public/index.html, Dateien sind im Root
        contentBasePath = '../';
    } else if (currentPath.startsWith('/public')) {
        // Alternative Schreibweise
        contentBasePath = '../';
    } else {
        // Server läuft direkt im Root, Dateien sind im gleichen Verzeichnis
        contentBasePath = './';
    }
    
    console.log('=== Server-Konfiguration ===');
    console.log('Content Base Path:', contentBasePath);
    console.log('Aktuelle URL:', window.location.href);
    console.log('Aktueller Pfad:', currentPath);

    // 1. Lade den statischen Dateiverzeichnis-Index (fileIndex.json)
    fetch('fileIndex.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Fehler beim Laden des Index: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            buildTableOfContents(data, tocList);
            // Optional: Laden Sie die erste Datei standardmäßig
            // loadContent(data[0].path + '/' + data[0].files[0].path); 

            // Überprüfe, ob eine Datei über den URL-Parameter geladen werden soll
            const params = new URLSearchParams(window.location.search);
            const initialFilePath = params.get('file');

            if (initialFilePath) {
                // URL-Parameter ist bereits decodiert, verwende direkt
                loadContent(decodeURIComponent(initialFilePath));
            }
        })
        .catch(error => {
            console.error('Fehler beim Initialisieren der Seite:', error);
            const errorColor = themeConfig?.colors?.errorText || '#d32f2f';
            contentArea.innerHTML = `<p style="color: ${errorColor};">Fehler beim Laden des Inhaltsverzeichnisses.</p>`;
        });


    // 2. Funktion zum Erstellen des Inhaltsverzeichnisses (TOC)
    function buildTableOfContents(data, container) {
        container.innerHTML = ''; // Vorherigen Inhalt leeren

        data.forEach(category => {
            // Erstelle das li-Element für die Hauptkategorie (z.B. LF 6)
            const categoryLi = document.createElement('li');
            
            // Fügen Sie den Titel der Kategorie direkt hinzu
            const categoryTitle = document.createElement('span');
            categoryTitle.textContent = category.title;
            categoryTitle.className = 'category-title';
            
            // Wende Konfigurationsstile an
            if (themeConfig?.colors?.categoryTitle) {
                categoryTitle.style.color = themeConfig.colors.categoryTitle;
            }
            if (themeConfig?.fontSizes?.categoryTitle) {
                categoryTitle.style.fontSize = themeConfig.fontSizes.categoryTitle;
            }
            if (themeConfig?.spacing?.categoryTitleMarginTop) {
                categoryTitle.style.marginTop = themeConfig.spacing.categoryTitleMarginTop;
            }
            
            categoryLi.appendChild(categoryTitle);

            // Erstelle die Unterliste für die Dateien
            const subUl = document.createElement('ul');

            category.files.forEach(file => {
                const fileLi = document.createElement('li');
                const fileLink = document.createElement('a');

                // Der vollständige Pfad zur MD-Datei (z.B. LF 6/Troubleshooting Smart-Home-System.md)
                const fullPath = `${category.path}/${file.path}`;

                fileLink.textContent = file.title;
                // URL-Encoding für den href
                const encodedPath = encodeURIComponent(fullPath);
                fileLink.href = `?file=${encodedPath}`; // Setze URL-Parameter für Ladefunktion
                
                // Wende Konfigurationsfarben an
                if (themeConfig?.colors?.tocLink) {
                    fileLink.style.color = themeConfig.colors.tocLink;
                }
                
                // Event-Listener, um die Datei beim Klick dynamisch zu laden
                fileLink.addEventListener('click', (e) => {
                    e.preventDefault(); // Verhindert das Neuladen der Seite
                    loadContent(fullPath);
                    // Aktualisiert die Browser-URL, ohne die Seite neu zu laden
                    history.pushState(null, '', `?file=${encodedPath}`); 
                });

                fileLi.appendChild(fileLink);
                subUl.appendChild(fileLi);
            });

            categoryLi.appendChild(subUl);
            container.appendChild(categoryLi);
        });
    }


    // 3. Funktion zum Konvertieren von Obsidian-Syntax zu Standard-Markdown
    function convertObsidianSyntax(markdownText, currentFilePath) {
        let converted = markdownText;
        
        // Bestimme den Basis-Pfad der aktuellen Markdown-Datei
        const lastSlashIndex = currentFilePath.lastIndexOf('/');
        const basePath = lastSlashIndex >= 0 ? currentFilePath.substring(0, lastSlashIndex + 1) : '';
        
        // 1. Konvertiere Obsidian-Bilder: ![[image.png]] -> ![alt](path/to/image.png)
        // Unterstützt verschiedene Bildformate und auch ohne Extension
        converted = converted.replace(/!\[\[([^\]]+)\]\]/gi, (match, imagePath) => {
            const cleanPath = imagePath.trim();
            
            // Prüfe ob es eine Dateiendung hat
            const hasExtension = /\.(png|jpg|jpeg|gif|svg|webp|bmp|pdf)$/i.test(cleanPath);
            
            // Wenn keine Extension, versuche .png und .jpg
            const imagePaths = hasExtension 
                ? [cleanPath]
                : [`${cleanPath}.png`, `${cleanPath}.jpg`, `${cleanPath}.jpeg`, cleanPath];
            
            // Verwende den ersten Pfad (relativ zum Markdown-Datei-Ordner)
            const imageUrl = imagePaths[0];
            const altText = cleanPath.replace(/\.[^/.]+$/, ''); // Dateiname ohne Extension als Alt-Text
            
            // Erstelle Markdown-Bildsyntax mit relativem Pfad
            return `![${altText}](${imageUrl})`;
        });
        
        // 2. Konvertiere Obsidian-Wiki-Links: [[Link]] -> [Link](Link.md) (optional)
        // Nur wenn es noch nicht als Bild behandelt wurde
        converted = converted.replace(/\[\[([^\]]+)\]\]/g, (match, linkText) => {
            // Überspringe wenn es bereits ein Bild ist (wurde oben behandelt)
            if (match.startsWith('!')) {
                return match;
            }
            
            // Wenn es kein Bild ist, konvertiere zu Link
            const cleanLink = linkText.trim();
            const hasExtension = /\.(md|markdown|txt)$/i.test(cleanLink);
            const linkPath = hasExtension ? cleanLink : `${cleanLink}.md`;
            
            return `[${cleanLink}](${linkPath})`;
        });
        
        return converted;
    }

    // 4. Funktion zum Korrigieren von Bildpfaden im gerenderten HTML
    function fixImagePaths(htmlContent, currentFilePath) {
        // Erstelle ein temporäres div-Element für die Manipulation
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        const basePath = currentFilePath.substring(0, currentFilePath.lastIndexOf('/') + 1);
        const basePathEncoded = basePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
        const baseUrl = contentBasePath + basePathEncoded;
        
        const images = tempDiv.querySelectorAll('img');
        
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:') && !src.startsWith('/')) {
                // Wenn der Pfad relativ ist, versuche verschiedene mögliche Pfade
                const srcEncoded = encodeURIComponent(src);
                const possiblePaths = [
                    baseUrl + srcEncoded,
                    baseUrl + 'assets/' + srcEncoded,
                    baseUrl + 'images/' + srcEncoded,
                    baseUrl + 'Attachments/' + srcEncoded,
                    baseUrl + src, // Auch ohne Encoding versuchen
                ];
                
                // Setze den ersten möglichen Pfad
                img.setAttribute('src', possiblePaths[0]);
                
                // Fallback-Mechanismus: Wenn Bild nicht lädt, versuche nächsten Pfad
                let currentPathIndex = 0;
                img.onerror = function() {
                    currentPathIndex++;
                    if (currentPathIndex < possiblePaths.length) {
                        this.src = possiblePaths[currentPathIndex];
                    } else {
                        // Alle Pfade fehlgeschlagen - zeige Platzhalter
                        this.alt = `Bild konnte nicht geladen werden: ${src}`;
                        this.style.border = '1px dashed #ccc';
                        this.style.padding = '20px';
                    }
                };
            }
        });
        
        return tempDiv.innerHTML;
    }

    // 3. Funktion zum Laden und Rendern des Markdown-Inhalts
    function loadContent(filePath) {
        console.log('=== Datei wird geladen ===');
        console.log('Original-Pfad:', filePath);
        console.log('Content Base Path:', contentBasePath);
        
        // Erstelle verschiedene mögliche URL-Varianten
        const encodedPath = filePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
        const manualEncodedPath = filePath.replace(/ /g, '%20');
        
        const possibleURLs = [
            contentBasePath + encodedPath,                    // Vollständig encodiert
            contentBasePath + manualEncodedPath,             // Manuell encodiert (nur Leerzeichen)
            contentBasePath + filePath,                      // Original ohne Encoding
            '../' + encodedPath,                             // Alternative Base Path
            '../' + filePath,                                // Alternative Base Path ohne Encoding
        ];
        
        console.log('Mögliche URLs:', possibleURLs);

        contentArea.innerHTML = `<h2 style="color: ${themeConfig?.colors?.loadingText || '#666'};">Inhalt wird geladen...</h2>`;

        // Versuche alle möglichen URLs nacheinander
        let lastError = null;
        let triedURLs = [];
        
        const tryFetch = async (url, index) => {
            triedURLs.push(url);
            console.log(`Versuch ${index + 1}/${possibleURLs.length}: ${url}`);
            
            try {
                const response = await fetch(url);
                console.log(`Antwort Status: ${response.status} ${response.statusText}`);
                
                if (response.ok) {
                    console.log('✓ Datei erfolgreich geladen von:', url);
                    return response;
                } else {
                    console.log(`✗ Fehler ${response.status}: ${response.statusText}`);
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                console.log(`✗ Fetch-Fehler:`, error.message);
                lastError = error;
                throw error;
            }
        };

        // Versuche alle URLs nacheinander
        let currentIndex = 0;
        const attemptFetch = async () => {
            while (currentIndex < possibleURLs.length) {
                try {
                    const response = await tryFetch(possibleURLs[currentIndex], currentIndex);
                    return response.text();
                } catch (error) {
                    currentIndex++;
                    if (currentIndex >= possibleURLs.length) {
                        // Alle Versuche fehlgeschlagen
                        throw new Error('Alle Versuche fehlgeschlagen');
                    }
                    // Versuche nächste URL
                    continue;
                }
            }
        };

        attemptFetch()
            .then(markdownText => {
                console.log('✓ Markdown-Text erfolgreich geladen, Länge:', markdownText.length);
                
                // Konvertiere Obsidian-Syntax zu Standard-Markdown
                const convertedMarkdown = convertObsidianSyntax(markdownText, filePath);
                console.log('✓ Obsidian-Syntax konvertiert');
                
                // Konvertiere Markdown (MD) in HTML
                const htmlContent = marked.parse(convertedMarkdown); 
                console.log('✓ Markdown zu HTML konvertiert');
                
                // Korrigiere Bildpfade im HTML
                const fixedHtml = fixImagePaths(htmlContent, filePath);
                console.log('✓ Bildpfade korrigiert');
                
                // Füge den Inhalt in den Hauptbereich ein
                contentArea.innerHTML = fixedHtml;
                console.log('✓ Inhalt erfolgreich angezeigt');

                // Optional: Scroll zum Anfang des neuen Inhalts
                contentArea.scrollIntoView({ behavior: 'smooth' });

            })
            .catch(error => {
                console.error('=== FEHLER BEIM LADEN DER DATEI ===');
                console.error('Datei-Pfad:', filePath);
                console.error('Fehler:', error);
                console.error('Alle versuchten URLs:', triedURLs);
                console.error('Letzter Fehler:', lastError);
                
                const errorColor = themeConfig?.colors?.errorText || '#d32f2f';
                const warningColor = '#ff9800';
                
                // Erstelle detaillierte Fehlermeldung
                let errorHTML = `
                    <div style="padding: 20px; border: 2px solid ${errorColor}; border-radius: 8px; background-color: #fff5f5;">
                        <h2 style="color: ${errorColor}; margin-top: 0;">❌ Fehler beim Laden der Datei</h2>
                        <p style="font-size: 1.1em; margin-bottom: 10px;">
                            Die Datei <strong style="color: ${errorColor};">${filePath}</strong> konnte nicht geladen werden.
                        </p>
                        
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                            <h3 style="margin-top: 0; color: ${warningColor}; font-size: 1em;">📋 Technische Details:</h3>
                            <ul style="margin: 10px 0; padding-left: 20px;">
                                <li><strong>Original-Pfad:</strong> <code style="background: #e0e0e0; padding: 2px 6px; border-radius: 3px;">${filePath}</code></li>
                                <li><strong>Content Base Path:</strong> <code style="background: #e0e0e0; padding: 2px 6px; border-radius: 3px;">${contentBasePath}</code></li>
                                <li><strong>Fehlertyp:</strong> ${error.name || 'Unknown'}</li>
                                <li><strong>Fehlermeldung:</strong> ${error.message || 'Keine Details verfügbar'}</li>
                            </ul>
                        </div>
                        
                        <div style="background-color: #fff9e6; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid ${warningColor};">
                            <h3 style="margin-top: 0; color: ${warningColor}; font-size: 1em;">🔍 Versuchte URLs:</h3>
                            <ol style="margin: 10px 0; padding-left: 20px;">
                                ${triedURLs.map((url, idx) => `
                                    <li style="margin: 5px 0;">
                                        <code style="background: #e0e0e0; padding: 2px 6px; border-radius: 3px; word-break: break-all; display: inline-block; max-width: 100%;">${url}</code>
                                    </li>
                                `).join('')}
                            </ol>
                        </div>
                        
                        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #2196F3;">
                            <h3 style="margin-top: 0; color: #1976D2; font-size: 1em;">💡 Mögliche Lösungen:</h3>
                            <ul style="margin: 10px 0; padding-left: 20px;">
                                <li>Überprüfen Sie, ob die Datei im erwarteten Verzeichnis existiert</li>
                                <li>Überprüfen Sie die <code>fileIndex.json</code> auf korrekte Pfadangaben</li>
                                <li>Stellen Sie sicher, dass der Webserver Zugriff auf das Verzeichnis hat</li>
                                <li>Überprüfen Sie die Browser-Konsole (F12) für weitere Details</li>
                                <li>Stellen Sie sicher, dass der <code>contentBasePath</code> korrekt ist (aktuell: <code>${contentBasePath}</code>)</li>
                            </ul>
                        </div>
                        
                        <p style="font-size: 0.9em; color: #666; margin-top: 15px;">
                            <strong>Hinweis:</strong> Öffnen Sie die Browser-Konsole (F12) für detaillierte Debug-Informationen.
                        </p>
                    </div>
                `;
                
                contentArea.innerHTML = errorHTML;
            });
    }
    
// 4. Suchlogik initialisieren
const searchInput = document.getElementById('search-input');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterTableOfContents(searchTerm);
    });
}


// 5. Funktion zum Filtern des Inhaltsverzeichnisses
function filterTableOfContents(searchTerm) {
    const categories = tocList.querySelectorAll('li > span.category-title');
    
    // Durchlaufe alle Hauptkategorien (LF 6, LF 7, etc.)
    categories.forEach(categoryTitleElement => {
        const categoryLi = categoryTitleElement.closest('li');
        const subList = categoryLi.querySelector('ul');
        let categoryMatches = false;

        // Durchlaufe alle Unterpunkte (MD-Dateien)
        if (subList) {
            const fileItems = subList.querySelectorAll('li');
            let subItemVisibleCount = 0;

            fileItems.forEach(fileLi => {
                const fileLink = fileLi.querySelector('a');
                const fileText = fileLink ? fileLink.textContent.toLowerCase() : '';
                
                // Prüft, ob der Unterpunkt den Suchbegriff enthält
                const matches = fileText.includes(searchTerm);
                
                // Zeige/verstecke den Unterpunkt
                fileLi.style.display = matches ? 'block' : 'none';

                if (matches) {
                    subItemVisibleCount++;
                    categoryMatches = true; // Markiere die Hauptkategorie als "passend"
                }
            });

            // Wenn die Hauptkategorie selbst den Suchbegriff enthält, 
            // sollte sie sichtbar bleiben (auch wenn keine Unterpunkte matchen)
            if (categoryTitleElement.textContent.toLowerCase().includes(searchTerm)) {
                categoryMatches = true;
                // Zeige alle Unterpunkte an, wenn die Kategorie selbst gesucht wird
                fileItems.forEach(fileLi => fileLi.style.display = 'block');
            }
        }
        
        // Zeige/verstecke die Hauptkategorie basierend auf Treffern
        // Nur die Kategorie anzeigen, wenn die Kategorie selbst passt ODER mindestens ein Unterpunkt passt
        categoryLi.style.display = categoryMatches ? 'block' : 'none';
    });
}
});



