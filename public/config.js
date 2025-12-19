// ========================================
// THEMEN- UND STYLE-KONFIGURATION
// ========================================
// Hier können alle visuellen Einstellungen angepasst werden

const themeConfig = {
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
        // Header
        headerBackground: '#333',           // Hintergrundfarbe Header
        headerText: '#ffffff',              // Textfarbe Header
        headerNavHover: '#4CAF50',          // Hover-Farbe für Nav-Links
        
        // Footer
        footerBackground: '#f8f8f8',        // Hintergrundfarbe Footer
        footerText: '#333',                 // Textfarbe Footer
        footerLink: '#0056b3',              // Link-Farbe Footer
        footerBorder: '#ccc',               // Border-Farbe Footer
        
        // Sidebar
        sidebarBorder: '#ddd',              // Border-Farbe Sidebar
        categoryTitle: '#333',              // Kategorie-Titel Farbe
        tocLink: '#0056b3',                 // Link-Farbe im TOC
        tocLinkHover: '#0056b3',            // Hover-Farbe im TOC (kann gleich bleiben)
        searchInputBorder: '#ccc',          // Border-Farbe Suchfeld
        searchInputFocus: '#4CAF50',        // Focus-Farbe Suchfeld
        
        // Content
        contentText: '#333',                // Haupttextfarbe
        contentLink: '#0056b3',             // Link-Farbe im Content
        contentLinkHover: '#003d82',        // Hover-Farbe für Links
        contentBackground: '#ffffff',        // Hintergrundfarbe Content
        
        // Allgemein
        bodyBackground: '#ffffff',          // Hintergrundfarbe Body
        errorText: '#d32f2f',               // Fehlertext-Farbe (rot)
        loadingText: '#666',                // "Wird geladen..." Text
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
    root.style.setProperty('--color-header-bg', themeConfig.colors.headerBackground);
    root.style.setProperty('--color-header-text', themeConfig.colors.headerText);
    root.style.setProperty('--color-header-nav-hover', themeConfig.colors.headerNavHover);
    root.style.setProperty('--color-footer-bg', themeConfig.colors.footerBackground);
    root.style.setProperty('--color-footer-text', themeConfig.colors.footerText);
    root.style.setProperty('--color-footer-link', themeConfig.colors.footerLink);
    root.style.setProperty('--color-footer-border', themeConfig.colors.footerBorder);
    root.style.setProperty('--color-sidebar-border', themeConfig.colors.sidebarBorder);
    root.style.setProperty('--color-category-title', themeConfig.colors.categoryTitle);
    root.style.setProperty('--color-toc-link', themeConfig.colors.tocLink);
    root.style.setProperty('--color-toc-link-hover', themeConfig.colors.tocLinkHover);
    root.style.setProperty('--color-search-input-border', themeConfig.colors.searchInputBorder);
    root.style.setProperty('--color-search-input-focus', themeConfig.colors.searchInputFocus);
    root.style.setProperty('--color-content-text', themeConfig.colors.contentText);
    root.style.setProperty('--color-content-link', themeConfig.colors.contentLink);
    root.style.setProperty('--color-content-link-hover', themeConfig.colors.contentLinkHover);
    root.style.setProperty('--color-content-bg', themeConfig.colors.contentBackground);
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
        sidebar.style.borderRight = themeConfig.effects.sidebarBorderRight;
    }
    
    // Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.style.padding = themeConfig.spacing.searchInputPadding;
        searchInput.style.marginBottom = themeConfig.spacing.searchInputMarginBottom;
        searchInput.style.border = themeConfig.effects.searchInputBorder;
        searchInput.style.borderRadius = themeConfig.effects.searchInputBorderRadius;
        searchInput.style.fontSize = themeConfig.fontSizes.searchInput;
    }
    
    // TOC Links
    const tocLinks = document.querySelectorAll('#toc-list a');
    tocLinks.forEach(link => {
        link.style.color = themeConfig.colors.tocLink;
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

