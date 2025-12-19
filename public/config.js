// ========================================
// THEMEN- UND STYLE-KONFIGURATION
// ========================================
// Hier können alle visuellen Einstellungen und Texte angepasst werden

const themeConfig = {
    // ========================================
    // TEXTE UND LABELS
    // ========================================
    texts: {
        // Header
        siteTitle: 'oszimt-school-shit',
        skipToContent: 'Zum Hauptinhalt springen',
        startPage: 'Startseite',
        
        // Sidebar
        tableOfContents: 'Inhaltsverzeichnis',
        searchPlaceholder: 'Thema suchen...',
        selectTopic: 'Bitte wählen Sie links ein Thema aus, um den Inhalt anzuzeigen.',
        loading: 'Inhalt wird geladen...',
        
        // Footer
        copyright: '© 2025 Ihr Name/Unternehmen.',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        
        // Fehlermeldungen
        errorLoadingIndex: 'Fehler beim Laden des Inhaltsverzeichnisses.',
        errorLoadingFile: 'Fehler: Die Datei konnte nicht geladen werden.',
        errorCheckPath: 'Überprüfen Sie, ob der Pfad in der fileIndex.json korrekt ist.',
    },

    // ========================================
    // SCHRIFTARTEN
    // ========================================
    fonts: {
        primary: "'Montserrat', sans-serif",
        // Weitere Schriftarten können hier hinzugefügt werden
        // secondary: "'Arial', sans-serif",
    },

    // ========================================
    // SCHRIFTGRÖSSEN
    // ========================================
    fontSizes: {
        // Header
        headerTitle: '1.5em',        // Haupttitel im Header
        headerNav: '1em',            // Navigationslinks im Header
        
        // Footer
        footer: '0.9em',             // Footer-Text
        
        // Sidebar
        sidebarTitle: '1.2em',       // "Inhaltsverzeichnis" Überschrift
        categoryTitle: '1em',        // Kategorie-Titel (z.B. "LF 6")
        tocLink: '0.95em',           // Links im Inhaltsverzeichnis
        searchInput: '1em',          // Suchfeld
        
        // Content
        contentBase: '1em',          // Basis-Schriftgröße für Inhalte
        contentH1: '2em',            // H1 im Content
        contentH2: '1.75em',         // H2 im Content
        contentH3: '1.5em',          // H3 im Content
        contentParagraph: '1em',     // Absätze im Content
    },

    // ========================================
    // FARBEN
    // ========================================
    colors: {
        // Primary Colors (Rot)
        primary: '#9B120F',                 // Hauptfarbe (Rot)
        primaryHover: '#7a0e0c',            // Hover-Farbe (dunkleres Rot)
        
        // Header
        headerBackground: '#9B120F',        // Hintergrundfarbe Header (Rot)
        headerText: '#ffffff',              // Textfarbe Header
        headerNavHover: 'rgba(255, 255, 255, 0.15)', // Hover-Hintergrund für Nav-Links
        
        // Footer
        footerBackground: '#ffffff',        // Hintergrundfarbe Footer
        footerText: '#6e6e80',             // Textfarbe Footer (Text Secondary)
        footerLink: '#9B120F',             // Link-Farbe Footer (Primary Rot)
        footerBorder: '#e5e5e5',            // Border-Farbe Footer
        
        // Sidebar
        sidebarBackground: '#ffffff',       // Hintergrundfarbe Sidebar
        sidebarBorder: '#e5e5e5',          // Border-Farbe Sidebar
        categoryTitle: '#2e2e2e',          // Kategorie-Titel Farbe (Text Primary)
        tocLink: '#6e6e80',                // Link-Farbe im TOC (Text Secondary)
        tocLinkHover: '#2e2e2e',           // Hover-Farbe im TOC (Text Primary)
        tocLinkActive: '#9B120F',          // Aktive Link-Farbe (Primary Rot)
        searchInputBorder: '#e5e5e5',      // Border-Farbe Suchfeld
        searchInputFocus: '#9B120F',       // Focus-Farbe Suchfeld (Primary Rot)
        searchInputBackground: '#f7f7f8',  // Hintergrund Suchfeld
        
        // Content
        contentText: '#2e2e2e',            // Haupttextfarbe (Text Primary)
        contentTextSecondary: '#6e6e80',    // Sekundärer Text (Text Secondary)
        contentLink: '#9B120F',            // Link-Farbe im Content (Primary Rot)
        contentLinkHover: '#7a0e0c',       // Hover-Farbe für Links (Primary Hover)
        contentBackground: '#ffffff',      // Hintergrundfarbe Content
        contentBorder: '#e5e5e5',          // Border-Farbe Content
        
        // Allgemein
        bodyBackground: '#f7f7f8',         // Hintergrundfarbe Body (Background Light)
        errorText: '#9B120F',              // Fehlertext-Farbe (Primary Rot)
        loadingText: '#6e6e80',            // "Wird geladen..." Text (Text Secondary)
    },

    // ========================================
    // ABSTÄNDE & PADDING
    // ========================================
    spacing: {
        // Header
        headerPadding: '15px 30px',         // Padding Header
        
        // Footer
        footerPadding: '20px 20px',         // Padding Footer
        footerMarginTop: '40px',            // Margin-Top Footer
        
        // Main
        mainPadding: '20px',                // Padding Main
        mainGap: '20px',                    // Abstand zwischen Sidebar und Content
        
        // Sidebar
        sidebarWidth: '250px',              // Breite Sidebar
        sidebarPaddingRight: '15px',       // Padding rechts Sidebar
        tocItemMargin: '5px 0',             // Margin TOC-Items
        tocSubListPadding: '20px',          // Padding für Unterlisten
        categoryTitleMarginTop: '10px',    // Margin-Top Kategorie-Titel
        searchInputPadding: '10px',         // Padding Suchfeld
        searchInputMarginBottom: '20px',   // Margin-Bottom Suchfeld
        
        // Content
        contentPadding: '0',                // Padding Content-Bereich
    },

    // ========================================
    // SHADOWS & BORDERS
    // ========================================
    effects: {
        headerShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Box-Shadow Header
        footerBorderTop: '1px solid #ccc',              // Border-Top Footer
        sidebarBorderRight: '1px solid #ddd',           // Border-Right Sidebar
        searchInputBorder: '1px solid #ccc',            // Border Suchfeld
        searchInputBorderRadius: '4px',                 // Border-Radius Suchfeld
    },

    // ========================================
    // TRANSITIONEN & ANIMATIONEN
    // ========================================
    transitions: {
        navLinkHover: 'color 0.3s ease',    // Transition für Nav-Link Hover
        general: '0.3s ease',                // Allgemeine Transition
    },

    // ========================================
    // RESPONSIVE BREAKPOINTS
    // ========================================
    breakpoints: {
        tablet: '768px',                     // Tablet-Breakpoint
        mobile: '480px',                     // Mobile-Breakpoint
    },

    // ========================================
    // RESPONSIVE ANPASSUNGEN
    // ========================================
    responsive: {
        // Mobile Header
        mobileHeaderPadding: '10px 20px',
        mobileHeaderTitleSize: '1.3em',
        
        // Mobile Main
        mobileMainPadding: '10px',
        mobileMainGap: '40px',
        
        // Mobile Sidebar
        mobileSidebarPadding: '0 10px',
        mobileSidebarPaddingBottom: '20px',
        mobileSearchInputWidth: 'calc(100% - 22px)',
        
        // Mobile Content
        mobileContentPadding: '0 10px',
        
        // Mobile Footer
        mobileFooterPadding: '15px 10px',
        mobileFooterFontSize: '0.85em',
    },
};

// ========================================
// FUNKTION ZUM ANWENDEN DER KONFIGURATION
// ========================================
function applyThemeConfig() {
    const root = document.documentElement;
    
    // CSS-Variablen setzen für einfache Verwendung in CSS
    // Fonts
    root.style.setProperty('--font-primary', themeConfig.fonts.primary);
    
    // Font Sizes
    root.style.setProperty('--font-size-header-title', themeConfig.fontSizes.headerTitle);
    root.style.setProperty('--font-size-header-nav', themeConfig.fontSizes.headerNav);
    root.style.setProperty('--font-size-footer', themeConfig.fontSizes.footer);
    root.style.setProperty('--font-size-sidebar-title', themeConfig.fontSizes.sidebarTitle);
    root.style.setProperty('--font-size-category-title', themeConfig.fontSizes.categoryTitle);
    root.style.setProperty('--font-size-toc-link', themeConfig.fontSizes.tocLink);
    root.style.setProperty('--font-size-search-input', themeConfig.fontSizes.searchInput);
    root.style.setProperty('--font-size-content-base', themeConfig.fontSizes.contentBase);
    root.style.setProperty('--font-size-content-h1', themeConfig.fontSizes.contentH1);
    root.style.setProperty('--font-size-content-h2', themeConfig.fontSizes.contentH2);
    root.style.setProperty('--font-size-content-h3', themeConfig.fontSizes.contentH3);
    root.style.setProperty('--font-size-content-paragraph', themeConfig.fontSizes.contentParagraph);
    
    // Colors
    root.style.setProperty('--color-primary', themeConfig.colors.primary);
    root.style.setProperty('--color-primary-hover', themeConfig.colors.primaryHover);
    root.style.setProperty('--color-header-bg', themeConfig.colors.headerBackground);
    root.style.setProperty('--color-header-text', themeConfig.colors.headerText);
    root.style.setProperty('--color-header-nav-hover', themeConfig.colors.headerNavHover);
    root.style.setProperty('--color-footer-bg', themeConfig.colors.footerBackground);
    root.style.setProperty('--color-footer-text', themeConfig.colors.footerText);
    root.style.setProperty('--color-footer-link', themeConfig.colors.footerLink);
    root.style.setProperty('--color-footer-border', themeConfig.colors.footerBorder);
    root.style.setProperty('--color-sidebar-bg', themeConfig.colors.sidebarBackground);
    root.style.setProperty('--color-sidebar-border', themeConfig.colors.sidebarBorder);
    root.style.setProperty('--color-category-title', themeConfig.colors.categoryTitle);
    root.style.setProperty('--color-toc-link', themeConfig.colors.tocLink);
    root.style.setProperty('--color-toc-link-hover', themeConfig.colors.tocLinkHover);
    root.style.setProperty('--color-toc-link-active', themeConfig.colors.tocLinkActive);
    root.style.setProperty('--color-search-input-border', themeConfig.colors.searchInputBorder);
    root.style.setProperty('--color-search-input-focus', themeConfig.colors.searchInputFocus);
    root.style.setProperty('--color-search-input-bg', themeConfig.colors.searchInputBackground);
    root.style.setProperty('--color-content-text', themeConfig.colors.contentText);
    root.style.setProperty('--color-content-text-secondary', themeConfig.colors.contentTextSecondary);
    root.style.setProperty('--color-content-link', themeConfig.colors.contentLink);
    root.style.setProperty('--color-content-link-hover', themeConfig.colors.contentLinkHover);
    root.style.setProperty('--color-content-bg', themeConfig.colors.contentBackground);
    root.style.setProperty('--color-content-border', themeConfig.colors.contentBorder);
    root.style.setProperty('--color-body-bg', themeConfig.colors.bodyBackground);
    root.style.setProperty('--color-error-text', themeConfig.colors.errorText);
    root.style.setProperty('--color-loading-text', themeConfig.colors.loadingText);
    
    // Spacing
    root.style.setProperty('--spacing-header-padding', themeConfig.spacing.headerPadding);
    root.style.setProperty('--spacing-footer-padding', themeConfig.spacing.footerPadding);
    root.style.setProperty('--spacing-footer-margin-top', themeConfig.spacing.footerMarginTop);
    root.style.setProperty('--spacing-main-padding', themeConfig.spacing.mainPadding);
    root.style.setProperty('--spacing-main-gap', themeConfig.spacing.mainGap);
    root.style.setProperty('--spacing-sidebar-width', themeConfig.spacing.sidebarWidth);
    root.style.setProperty('--spacing-sidebar-padding-right', themeConfig.spacing.sidebarPaddingRight);
    root.style.setProperty('--spacing-toc-item-margin', themeConfig.spacing.tocItemMargin);
    root.style.setProperty('--spacing-toc-sublist-padding', themeConfig.spacing.tocSubListPadding);
    root.style.setProperty('--spacing-category-title-margin-top', themeConfig.spacing.categoryTitleMarginTop);
    root.style.setProperty('--spacing-search-input-padding', themeConfig.spacing.searchInputPadding);
    root.style.setProperty('--spacing-search-input-margin-bottom', themeConfig.spacing.searchInputMarginBottom);
    root.style.setProperty('--spacing-content-padding', themeConfig.spacing.contentPadding);
    
    // Effects
    root.style.setProperty('--effect-header-shadow', themeConfig.effects.headerShadow);
    root.style.setProperty('--effect-footer-border-top', themeConfig.effects.footerBorderTop);
    root.style.setProperty('--effect-sidebar-border-right', themeConfig.effects.sidebarBorderRight);
    root.style.setProperty('--effect-search-input-border', themeConfig.effects.searchInputBorder);
    root.style.setProperty('--effect-search-input-border-radius', themeConfig.effects.searchInputBorderRadius);
    
    // Transitions
    root.style.setProperty('--transition-nav-link-hover', themeConfig.transitions.navLinkHover);
    
    // Direkte Anwendung auf Elemente (für Kompatibilität)
    applyDirectStyles();
}

// ========================================
// DIREKTE STYLE-ANWENDUNG
// ========================================
function applyDirectStyles() {
    // Warte bis DOM geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyDirectStyles);
        return;
    }
    
    // Header
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundColor = themeConfig.colors.headerBackground;
        header.style.color = themeConfig.colors.headerText;
        header.style.padding = themeConfig.spacing.headerPadding;
        header.style.boxShadow = themeConfig.effects.headerShadow;
    }
    
    const headerH1 = document.querySelector('header h1');
    if (headerH1) {
        headerH1.style.fontSize = themeConfig.fontSizes.headerTitle;
        if (themeConfig.texts.siteTitle) {
            headerH1.textContent = themeConfig.texts.siteTitle;
        }
    }
    
    const headerNavLinks = document.querySelectorAll('header nav a');
    headerNavLinks.forEach(link => {
        link.style.color = themeConfig.colors.headerText;
        link.style.transition = themeConfig.transitions.navLinkHover;
    });
    
    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.backgroundColor = themeConfig.colors.footerBackground;
        footer.style.color = themeConfig.colors.footerText;
        footer.style.padding = themeConfig.spacing.footerPadding;
        footer.style.marginTop = themeConfig.spacing.footerMarginTop;
        footer.style.borderTop = themeConfig.effects.footerBorderTop;
        footer.style.fontSize = themeConfig.fontSizes.footer;
    }
    
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.style.color = themeConfig.colors.footerLink;
    });
    
    // Sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.width = themeConfig.spacing.sidebarWidth;
        sidebar.style.paddingRight = themeConfig.spacing.sidebarPaddingRight;
        sidebar.style.borderRight = `1px solid ${themeConfig.colors.sidebarBorder}`;
        sidebar.style.backgroundColor = themeConfig.colors.sidebarBackground;
    }
    
    const sidebarTitle = document.querySelector('.sidebar h2');
    if (sidebarTitle && themeConfig.texts.tableOfContents) {
        sidebarTitle.textContent = themeConfig.texts.tableOfContents;
    }
    
    // Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.style.padding = themeConfig.spacing.searchInputPadding;
        searchInput.style.marginBottom = themeConfig.spacing.searchInputMarginBottom;
        searchInput.style.border = `1px solid ${themeConfig.colors.searchInputBorder}`;
        searchInput.style.borderRadius = themeConfig.effects.searchInputBorderRadius;
        searchInput.style.fontSize = themeConfig.fontSizes.searchInput;
        searchInput.style.backgroundColor = themeConfig.colors.searchInputBackground;
        if (themeConfig.texts.searchPlaceholder) {
            searchInput.placeholder = themeConfig.texts.searchPlaceholder;
        }
        // Focus-Styles
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = themeConfig.colors.searchInputFocus;
            this.style.backgroundColor = themeConfig.colors.contentBackground;
            this.style.boxShadow = `0 0 0 3px rgba(155, 18, 15, 0.1)`;
        });
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = themeConfig.colors.searchInputBorder;
            this.style.backgroundColor = themeConfig.colors.searchInputBackground;
            this.style.boxShadow = 'none';
        });
    }
    
    // TOC Links
    const tocLinks = document.querySelectorAll('#toc-list a');
    tocLinks.forEach(link => {
        link.style.color = themeConfig.colors.tocLink;
        link.addEventListener('mouseenter', function() {
            this.style.color = themeConfig.colors.tocLinkHover;
            this.style.backgroundColor = themeConfig.colors.bodyBackground;
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = themeConfig.colors.tocLink;
            this.style.backgroundColor = 'transparent';
        });
    });
    
    // Category Titles
    const categoryTitles = document.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
        title.style.color = themeConfig.colors.categoryTitle;
        title.style.fontSize = themeConfig.fontSizes.categoryTitle;
        title.style.marginTop = themeConfig.spacing.categoryTitleMarginTop;
    });
    
    // Content Area
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.style.padding = themeConfig.spacing.contentPadding;
        contentArea.style.backgroundColor = themeConfig.colors.contentBackground;
        contentArea.style.color = themeConfig.colors.contentText;
    }
    
    // Default Content Text
    const defaultContentText = document.getElementById('default-content-text');
    if (defaultContentText && themeConfig.texts.selectTopic) {
        defaultContentText.textContent = themeConfig.texts.selectTopic;
    }
    
    // Footer Texts
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph && themeConfig.texts.copyright) {
        // Ersetze nur den Copyright-Text, behalte Links
        const imprintLink = footerParagraph.querySelector('a[href="impressum.html"]');
        const privacyLink = footerParagraph.querySelector('a[href="datenschutz.html"]');
        
        if (imprintLink && privacyLink) {
            const imprintText = themeConfig.texts.imprint || 'Impressum';
            const privacyText = themeConfig.texts.privacy || 'Datenschutz';
            imprintLink.textContent = imprintText;
            privacyLink.textContent = privacyText;
            
            // Setze Copyright-Text
            const copyrightText = themeConfig.texts.copyright;
            footerParagraph.innerHTML = `${copyrightText} <a href="impressum.html">${imprintText}</a> | <a href="datenschutz.html">${privacyText}</a>`;
        }
    }
    
    // Header Navigation Links
    const skipLink = document.querySelector('a[href="#inhalt"]');
    if (skipLink && themeConfig.texts.skipToContent) {
        skipLink.textContent = themeConfig.texts.skipToContent;
    }
    
    const startPageLink = document.querySelector('header nav a[href="index.html"]');
    if (startPageLink && themeConfig.texts.startPage) {
        startPageLink.textContent = themeConfig.texts.startPage;
    }
    
    // Body
    document.body.style.backgroundColor = themeConfig.colors.bodyBackground;
    document.body.style.fontFamily = themeConfig.fonts.primary;
}

// ========================================
// KONFIGURATION BEIM LADEN ANWENDEN
// ========================================
// Wird sofort ausgeführt, wenn die Datei geladen wird
applyThemeConfig();

// Wird auch nochmal ausgeführt, wenn DOM vollständig geladen ist
// (für dynamisch hinzugefügte Elemente)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyDirectStyles);
} else {
    applyDirectStyles();
}
