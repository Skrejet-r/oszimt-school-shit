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

    // Globale Variable für alle Daten
    let allData = [];
    let filteredData = [];

    // 1. Lade den statischen Dateiverzeichnis-Index (fileIndex.json)
    fetch('fileIndex.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Fehler beim Laden des Index: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            allData = data;
            filteredData = data;
            
            // Fülle Ordner-Auswahl
            populateFolderSelect(data);
            
            // Baue Inhaltsverzeichnis
            buildTableOfContents(data, tocList);
            
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
            const errorColor = themeConfig?.colors?.errorText || '#9B120F';
            const errorText = themeConfig?.texts?.errorLoadingIndex || 'Fehler beim Laden des Inhaltsverzeichnisses.';
            contentArea.innerHTML = `<p style="color: ${errorColor};">${errorText}</p>`;
        });

    // Funktion zum Befüllen der Ordner-Auswahl
    function populateFolderSelect(data) {
        const folderSelect = document.getElementById('folder-select');
        if (!folderSelect) return;
        
        // Sammle alle eindeutigen Basis-Ordner
        const baseFolders = new Set();
        data.forEach(category => {
            const pathParts = category.path.split('/');
            if (pathParts.length > 0) {
                baseFolders.add(pathParts[0]);
            }
        });
        
        // Sortiere und füge Optionen hinzu
        const sortedFolders = Array.from(baseFolders).sort();
        sortedFolders.forEach(folder => {
            const option = document.createElement('option');
            option.value = folder;
            option.textContent = folder;
            folderSelect.appendChild(option);
        });
        
        // Event-Listener für Ordner-Auswahl
        folderSelect.addEventListener('change', (e) => {
            const selectedFolder = e.target.value;
            filterByFolder(selectedFolder);
        });
    }

    // Funktion zum Filtern nach Ordner
    function filterByFolder(folderName) {
        if (!folderName) {
            // Zeige alle Ordner
            filteredData = allData;
        } else {
            // Filtere nach Basis-Ordner
            filteredData = allData.filter(category => {
                const pathParts = category.path.split('/');
                return pathParts[0] === folderName;
            });
        }
        
        // Baue Inhaltsverzeichnis neu auf
        buildTableOfContents(filteredData, tocList);
        
        // Aktualisiere auch die Suche, falls aktiv
        const searchInput = document.getElementById('search-input');
        if (searchInput && searchInput.value) {
            filterTableOfContents(searchInput.value.toLowerCase());
        }
    }


    // 2. Funktion zum Gruppieren von 1.J Kategorien
    function groupCategories(data) {
        const grouped = {};
        const result = [];
        
        data.forEach(category => {
            const pathParts = category.path.split('/');
            
            // Wenn es eine 1.J Unterkategorie ist (z.B. "1.J / LF 1")
            if (pathParts.length > 1 && pathParts[0] === '1.J') {
                const mainCategory = '1.J';
                
                if (!grouped[mainCategory]) {
                    grouped[mainCategory] = {
                        title: mainCategory,
                        path: mainCategory,
                        files: [],
                        subcategories: []
                    };
                }
                
                // Füge als Unterkategorie hinzu
                grouped[mainCategory].subcategories.push({
                    title: category.title.replace('1.J / ', ''), // Entferne "1.J / " Präfix
                    path: category.path,
                    files: category.files
                });
            } else {
                // Normale Kategorie
                result.push(category);
            }
        });
        
        // Füge gruppierte 1.J Kategorie hinzu
        if (grouped['1.J']) {
            result.unshift(grouped['1.J']);
        }
        
        // Sortiere: 1.J und Days zuerst, dann alphabetisch
        return result.sort((a, b) => {
            const aTitle = a.title.toLowerCase();
            const bTitle = b.title.toLowerCase();
            
            // 1.J und Days zuerst
            if (aTitle === '1.j' && bTitle !== '1.j') return -1;
            if (aTitle !== '1.j' && bTitle === '1.j') return 1;
            if (aTitle.startsWith('days') && !bTitle.startsWith('days')) return -1;
            if (!aTitle.startsWith('days') && bTitle.startsWith('days')) return 1;
            
            // Dann alphabetisch
            return aTitle.localeCompare(bTitle);
        });
    }

    // 2. Funktion zum Erstellen des Inhaltsverzeichnisses (TOC)
    function buildTableOfContents(data, container) {
        container.innerHTML = ''; // Vorherigen Inhalt leeren

        // Gruppiere 1.J Kategorien
        const groupedData = groupCategories(data);

        groupedData.forEach(category => {
            // Erstelle das li-Element für die Hauptkategorie (z.B. LF 6)
            const categoryLi = document.createElement('li');
            categoryLi.className = 'category-item';
            
            // Erstelle einen klickbaren Titel mit Klapp-Funktion
            const categoryTitle = document.createElement('span');
            categoryTitle.textContent = category.title;
            categoryTitle.className = 'category-title';
            
            // Klapp-Icon hinzufügen (besseres Design)
            const icon = document.createElement('span');
            icon.className = 'category-icon';
            icon.innerHTML = '▼';
            icon.style.marginLeft = '8px';
            icon.style.fontSize = '0.75em';
            icon.style.transition = 'transform 0.2s ease';
            icon.style.opacity = '0.7';
            
            const titleWrapper = document.createElement('div');
            titleWrapper.className = 'category-header';
            titleWrapper.style.display = 'flex';
            titleWrapper.style.alignItems = 'center';
            titleWrapper.style.cursor = 'pointer';
            titleWrapper.style.userSelect = 'none';
            titleWrapper.style.padding = '8px 12px';
            titleWrapper.style.borderRadius = '6px';
            titleWrapper.style.transition = 'background-color 0.2s ease';
            titleWrapper.appendChild(categoryTitle);
            titleWrapper.appendChild(icon);
            
            // Hover-Effekt
            titleWrapper.addEventListener('mouseenter', () => {
                titleWrapper.style.backgroundColor = 'rgba(155, 18, 15, 0.08)';
                icon.style.opacity = '1';
            });
            titleWrapper.addEventListener('mouseleave', () => {
                titleWrapper.style.backgroundColor = 'transparent';
                icon.style.opacity = '0.7';
            });
            
            // Wende Konfigurationsstile an
            if (themeConfig?.colors?.categoryTitle) {
                categoryTitle.style.color = themeConfig.colors.categoryTitle;
            }
            if (themeConfig?.fontSizes?.categoryTitle) {
                categoryTitle.style.fontSize = themeConfig.fontSizes.categoryTitle;
            }
            if (themeConfig?.spacing?.categoryTitleMarginTop) {
                titleWrapper.style.marginTop = themeConfig.spacing.categoryTitleMarginTop;
            }
            
            categoryLi.appendChild(titleWrapper);

            // Erstelle die Unterliste für die Dateien
            const subUl = document.createElement('ul');
            subUl.className = 'category-files';
            subUl.style.display = 'block'; // Standardmäßig geöffnet
            subUl.style.paddingLeft = '20px';

            // Wenn es Unterkategorien gibt (z.B. 1.J mit LF 1, LF 2, etc.)
            if (category.subcategories && category.subcategories.length > 0) {
                category.subcategories.forEach(subcat => {
                    const subcatLi = document.createElement('li');
                    subcatLi.style.marginTop = '10px';
                    
                    const subcatTitle = document.createElement('div');
                    subcatTitle.textContent = subcat.title;
                    subcatTitle.style.fontWeight = '600';
                    subcatTitle.style.fontSize = '0.9em';
                    subcatTitle.style.color = 'var(--text-secondary)';
                    subcatTitle.style.marginBottom = '5px';
                    subcatLi.appendChild(subcatTitle);
                    
                    const subcatUl = document.createElement('ul');
                    subcatUl.style.paddingLeft = '15px';
                    
                    subcat.files.forEach(file => {
                        let fullPath = subcat.path + '/' + file.path;
                        if (file.path.includes('/')) {
                            fullPath = file.path;
                        }
                        
                        const fileLi = document.createElement('li');
                        const fileLink = document.createElement('a');
                        fileLink.textContent = file.title;
                        const encodedPath = encodeURIComponent(fullPath);
                        fileLink.href = `?file=${encodedPath}`;
                        
                        if (themeConfig?.colors?.tocLink) {
                            fileLink.style.color = themeConfig.colors.tocLink;
                        }
                        
                        fileLink.addEventListener('click', (e) => {
                            e.preventDefault();
                            loadContent(fullPath);
                            history.pushState(null, '', `?file=${encodedPath}`);
                        });
                        
                        fileLi.appendChild(fileLink);
                        subcatUl.appendChild(fileLi);
                    });
                    
                    subcatLi.appendChild(subcatUl);
                    subUl.appendChild(subcatLi);
                });
            } else {
                // Normale Dateien
                category.files.forEach(file => {
                // Verwende den vollständigen Pfad aus file.path, falls vorhanden
                // Sonst konstruiere ihn aus category.path und file.path
                let fullPath;
                if (file.path.includes('/')) {
                    // Vollständiger Pfad ist bereits in file.path
                    fullPath = file.path;
                } else {
                    // Konstruiere Pfad aus category.path und file.path
                    fullPath = `${category.path}/${file.path}`;
                }

                const fileLi = document.createElement('li');
                const fileLink = document.createElement('a');

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
            }

            categoryLi.appendChild(subUl);
            
            // Klapp-Funktion
            let isExpanded = true;
            titleWrapper.addEventListener('click', () => {
                isExpanded = !isExpanded;
                if (isExpanded) {
                    subUl.style.display = 'block';
                    icon.innerHTML = '▼';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    subUl.style.display = 'none';
                    icon.innerHTML = '▶';
                    icon.style.transform = 'rotate(-90deg)';
                }
            });
            
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
            
            // Prüfe ob es eine Bilddatei ist (nicht .docx, .doc, .pdf als Bild, etc.)
            const isImageFile = /\.(png|jpg|jpeg|gif|svg|webp|bmp)$/i.test(cleanPath);
            const isNonImageFile = /\.(docx?|xlsx?|pptx?|pdf|txt|md)$/i.test(cleanPath);
            
            // Wenn es eine Nicht-Bild-Datei ist, erstelle einen Link statt eines Bildes
            if (isNonImageFile) {
                const fileUrl = cleanPath;
                const fileName = cleanPath.replace(/\.[^/.]+$/, '');
                return `[📄 ${fileName}](${fileUrl})`;
            }
            
            // Prüfe ob es eine Dateiendung hat
            const hasExtension = isImageFile;
            
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
        
        // 2. Stelle sicher, dass Standard-Markdown-Bilder korrekt sind
        // Konvertiere Bilder mit Leerzeichen im Dateinamen
        converted = converted.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, altText, imagePath) => {
            // Wenn der Bildpfad Leerzeichen enthält, aber nicht bereits encodiert ist
            if (imagePath.includes(' ') && !imagePath.includes('%20')) {
                // Behalte die Markdown-Syntax, aber markiere für spätere Behandlung
                return match; // Wird später in fixImagePaths behandelt
            }
            return match;
        });
        
        // 3. Konvertiere Obsidian-Wiki-Links: [[Link]] -> [Link](Link.md) (optional)
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

    // 4. Funktion zum Korrigieren von Bildpfaden und Links im gerenderten HTML
    function fixImagePaths(htmlContent, currentFilePath) {
        // Erstelle ein temporäres div-Element für die Manipulation
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        // Berechne den korrekten Base-Pfad
        const lastSlashIndex = currentFilePath.lastIndexOf('/');
        const basePath = lastSlashIndex >= 0 ? currentFilePath.substring(0, lastSlashIndex + 1) : '';
        
        // Base-URL: Da der Server im Root läuft, müssen wir vom Root aus navigieren
        // contentBasePath ist '../' (vom public-Ordner eine Ebene nach oben)
        // basePath ist z.B. 'ENG/' (relativ zum Root)
        // Also: '../' + 'ENG/' = '../ENG/' -> wird zu 'ENG/' vom Browser aus gesehen
        const basePathEncoded = basePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
        
        // Wichtig: contentBasePath ist '../', also vom public-Ordner eine Ebene nach oben
        // Das bedeutet: ../ENG/ wird zu ENG/ vom Server-Root aus
        const baseUrl = contentBasePath + basePathEncoded;
        
        // 1. Korrigiere Bilder
        const images = tempDiv.querySelectorAll('img');
        
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:') && !src.startsWith('/')) {
                // Wenn der Pfad relativ ist, versuche verschiedene mögliche Pfade
                // Encode den Dateinamen korrekt (auch Leerzeichen)
                const srcEncoded = encodeURIComponent(src);
                const srcWithSpaces = src.replace(/ /g, '%20'); // Manuelle Leerzeichen-Encoding
                
                // Erstelle verschiedene Base-URL-Varianten
                // Der Server läuft im Root, also müssen Pfade relativ zum Root sein
                // contentBasePath ist '../' (vom public-Ordner), basePath ist z.B. 'ENG/'
                // Also: '../ENG/' wird zu 'ENG/' vom Browser aus gesehen
                
                // Wichtig: basePath ist bereits relativ zum Root (z.B. "ENG/")
                // contentBasePath ist "../" (vom public-Ordner eine Ebene nach oben)
                // Also: contentBasePath + basePath = "../ENG/" -> wird zu "ENG/" vom Server-Root
                
                const possiblePaths = [];
                
                // Basis-Pfade: direkt im Verzeichnis der Markdown-Datei
                const baseVariants = [
                    contentBasePath + basePath,                  // ../ENG/
                    basePath,                                     // ENG/ (direkt, falls contentBasePath leer)
                ];
                
                baseVariants.forEach(base => {
                    // Direkte Pfade im gleichen Verzeichnis
                    possiblePaths.push(
                        base + srcEncoded,                        // ../ENG/Mocktest.docx.png (encodiert)
                        base + srcWithSpaces,                    // ../ENG/Mocktest.docx.png (Leerzeichen encodiert)
                        base + src                                // ../ENG/Mocktest.docx.png (original)
                    );
                    
                    // Unterordner-Varianten (Obsidian-Standard)
                    possiblePaths.push(
                        base + 'Attachments/' + srcEncoded,      // ../ENG/Attachments/Mocktest.docx.png
                        base + 'Attachments/' + srcWithSpaces,
                        base + 'Attachments/' + src,
                        base + 'assets/' + srcEncoded,
                        base + 'assets/' + srcWithSpaces,
                        base + 'assets/' + src,
                        base + 'images/' + srcEncoded,
                        base + 'images/' + srcWithSpaces,
                        base + 'images/' + src,
                    );
                });
                
                // Entferne Duplikate
                const uniquePaths = [...new Set(possiblePaths)];
                
                console.log('Bild gefunden:', src);
                console.log('Base URL:', baseUrl);
                console.log('Mögliche Bildpfade:', uniquePaths);
                
                // Setze den ersten möglichen Pfad
                img.setAttribute('src', uniquePaths[0]);
                
                // Fallback-Mechanismus: Wenn Bild nicht lädt, versuche nächsten Pfad
                let currentPathIndex = 0;
                img.onerror = function() {
                    currentPathIndex++;
                    if (currentPathIndex < uniquePaths.length) {
                        console.log(`Bildpfad ${currentPathIndex} fehlgeschlagen, versuche: ${uniquePaths[currentPathIndex]}`);
                        this.src = uniquePaths[currentPathIndex];
                    } else {
                        // Alle Pfade fehlgeschlagen - zeige Platzhalter
                        console.error('Alle Bildpfade fehlgeschlagen für:', src);
                        this.alt = `Bild konnte nicht geladen werden: ${src}`;
                        this.style.border = '1px dashed #ccc';
                        this.style.padding = '20px';
                        this.style.backgroundColor = '#f5f5f5';
                        this.style.display = 'block';
                        this.style.minHeight = '100px';
                    }
                };
                
                img.onload = function() {
                    console.log('✓ Bild erfolgreich geladen:', this.src);
                };
            }
        });
        
        // 2. Korrigiere Links zu Markdown-Dateien
        const links = tempDiv.querySelectorAll('a[href$=".md"]');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('/')) {
                // Relativer Link zu einer Markdown-Datei
                // Konstruiere den vollständigen Pfad relativ zur aktuellen Datei
                let linkPath;
                
                if (href.startsWith('../')) {
                    // Link geht eine Ebene nach oben
                    const parentPath = basePath.split('/').slice(0, -2).join('/') + '/';
                    linkPath = parentPath + href.replace('../', '');
                } else if (href.startsWith('./')) {
                    // Link ist im gleichen Verzeichnis
                    linkPath = basePath + href.replace('./', '');
                } else {
                    // Link ist relativ zum aktuellen Verzeichnis
                    linkPath = basePath + href;
                }
                
                // Erstelle URL-Parameter für die Navigation
                const encodedPath = encodeURIComponent(linkPath);
                link.href = `?file=${encodedPath}`;
                
                // Event-Listener für Navigation
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadContent(linkPath);
                    history.pushState(null, '', `?file=${encodedPath}`);
                });
                
                console.log('Link korrigiert:', href, '->', linkPath);
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
        
        // Bestimme verschiedene Base-Path-Varianten
        const basePaths = [
            contentBasePath,
            '../',
            './',
            '/',
        ];
        
        const possibleURLs = [];
        
        // Kombiniere alle Base-Paths mit allen Encoding-Varianten
        basePaths.forEach(base => {
            possibleURLs.push(
                base + encodedPath,                    // Vollständig encodiert
                base + manualEncodedPath,             // Manuell encodiert (nur Leerzeichen)
                base + filePath                       // Original ohne Encoding
            );
        });
        
        // Entferne Duplikate
        const uniqueURLs = [...new Set(possibleURLs)];
        
        console.log('Mögliche URLs:', uniqueURLs);

        const loadingText = themeConfig?.texts?.loading || 'Inhalt wird geladen...';
        const loadingColor = themeConfig?.colors?.loadingText || '#666';
        contentArea.innerHTML = `<h2 style="color: ${loadingColor};">${loadingText}</h2>`;

        // Versuche alle möglichen URLs nacheinander
        let lastError = null;
        let triedURLs = [];
        
        const tryFetch = async (url, index) => {
            triedURLs.push(url);
            console.log(`Versuch ${index + 1}/${uniqueURLs.length}: ${url}`);
            
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
            while (currentIndex < uniqueURLs.length) {
                try {
                    const response = await tryFetch(uniqueURLs[currentIndex], currentIndex);
                    return response.text();
                } catch (error) {
                    currentIndex++;
                    if (currentIndex >= uniqueURLs.length) {
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
                // Verwende marked mit erweiterten Optionen für bessere Bild-Unterstützung
                const htmlContent = marked.parse(convertedMarkdown, {
                    breaks: true,
                    gfm: true,
                }); 
                console.log('✓ Markdown zu HTML konvertiert');
                
                // Korrigiere Bildpfade und Links im HTML (muss nach dem Parsen passieren)
                const fixedHtml = fixImagePaths(htmlContent, filePath);
                console.log('✓ Bildpfade und Links korrigiert');
                
                // Füge den Inhalt in den Hauptbereich ein
                contentArea.innerHTML = fixedHtml;
                console.log('✓ Inhalt erfolgreich angezeigt');
                
                // Warte kurz, damit Bilder geladen werden können, dann prüfe nochmal
                setTimeout(() => {
                    // Prüfe alle Bilder erneut und korrigiere Pfade falls nötig
                    const allImages = contentArea.querySelectorAll('img');
                    allImages.forEach(img => {
                        if (!img.complete || img.naturalHeight === 0) {
                            // Bild wurde nicht geladen, versuche alternative Pfade
                            const originalSrc = img.getAttribute('data-original-src') || img.src;
                            if (!img.hasAttribute('data-original-src')) {
                                img.setAttribute('data-original-src', originalSrc);
                            }
                            // Die onerror-Funktion sollte bereits alternative Pfade versuchen
                        }
                    });
                }, 100);

                // Optional: Scroll zum Anfang des neuen Inhalts
                contentArea.scrollIntoView({ behavior: 'smooth' });

            })
            .catch(error => {
                console.error('=== FEHLER BEIM LADEN DER DATEI ===');
                console.error('Datei-Pfad:', filePath);
                console.error('Fehler:', error);
                console.error('Alle versuchten URLs:', triedURLs);
                console.error('Letzter Fehler:', lastError);
                
                const errorColor = themeConfig?.colors?.errorText || '#9B120F';
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



