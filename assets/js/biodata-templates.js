/**
 * National Typing Hub - Marriage Biodata Vector Template Engine
 * File: assets/js/biodata-templates.js
 * 12 Distinct Inline-SVG Templates across 3 Structural Layouts:
 *   1. 'classic-right' (Traditional card with photo on top-right)
 *   2. 'top-centered'  (Royal arch / floral header with centered portrait)
 *   3. 'left-sidebar'  (Modern two-column split with accent left panel)
 */

(function (global) {
    // =========================================================
    // REUSABLE VECTOR SVG GENERATORS (100% CORS-Safe for html2canvas)
    // =========================================================

    function makeCornerSet(svgInner, size, pad = 0) {
        const s = size;
        return `
            <div class="bio-svg-corner c-tl" style="position:absolute;top:${pad}px;left:${pad}px;width:${s}px;height:${s}px;pointer-events:none;z-index:2;">
                <svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">${svgInner}</svg>
            </div>
            <div class="bio-svg-corner c-tr" style="position:absolute;top:${pad}px;right:${pad}px;width:${s}px;height:${s}px;pointer-events:none;z-index:2;transform:scaleX(-1);">
                <svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">${svgInner}</svg>
            </div>
            <div class="bio-svg-corner c-bl" style="position:absolute;bottom:${pad}px;left:${pad}px;width:${s}px;height:${s}px;pointer-events:none;z-index:2;transform:scaleY(-1);">
                <svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">${svgInner}</svg>
            </div>
            <div class="bio-svg-corner c-br" style="position:absolute;bottom:${pad}px;right:${pad}px;width:${s}px;height:${s}px;pointer-events:none;z-index:2;transform:scale(-1,-1);">
                <svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">${svgInner}</svg>
            </div>
        `;
    }

    // 1. Quarter-Circle Classic (Exact match to Priya Sharma reference)
    function cornersQuarterCircle(c) {
        const inner = `
            <path d="M0,0 L72,0 A72,72 0 0,1 0,72 Z" fill="${c.corner}"/>
            <path d="M0,0 L54,0 A54,54 0 0,1 0,54 Z" fill="${c.border}" opacity="0.22"/>
            <circle cx="22" cy="22" r="5" fill="${c.bg}" opacity="0.7"/>
        `;
        return makeCornerSet(inner, 60, 0);
    }

    // 2. Intricate Quarter-Mandala Filigree
    function cornersMandala(c) {
        const inner = `
            <path d="M0,0 L90,0 A90,90 0 0,1 0,90 Z" fill="${c.corner}" opacity="0.14"/>
            <path d="M0,0 L72,0 A72,72 0 0,1 0,72 Z" fill="none" stroke="${c.border}" stroke-width="2.5"/>
            <path d="M0,0 L52,0 A52,52 0 0,1 0,52 Z" fill="none" stroke="${c.inner}" stroke-width="2" stroke-dasharray="5 3"/>
            <path d="M0,0 L30,0 A30,30 0 0,1 0,30 Z" fill="${c.corner}" opacity="0.45"/>
            <path d="M12,68 Q26,48 48,26 Q68,12 86,8" fill="none" stroke="${c.border}" stroke-width="2"/>
            <circle cx="62" cy="18" r="4" fill="${c.border}"/>
            <circle cx="44" cy="44" r="5" fill="${c.accent}"/>
            <circle cx="18" cy="62" r="4" fill="${c.border}"/>
            <path d="M8,8 L38,16 L24,24 L16,38 Z" fill="${c.border}" opacity="0.85"/>
        `;
        return makeCornerSet(inner, 88, 6);
    }

    // 3. Art-Deco Geometric Royal Diamond
    function cornersArtDeco(c) {
        const inner = `
            <polyline points="4,92 4,4 92,4" fill="none" stroke="${c.border}" stroke-width="5"/>
            <polyline points="16,78 16,16 78,16" fill="none" stroke="${c.inner}" stroke-width="2.5"/>
            <polygon points="16,16 38,16 16,38" fill="${c.border}"/>
            <polygon points="36,36 52,20 68,36 52,52" fill="none" stroke="${c.accent}" stroke-width="2.5"/>
            <polygon points="44,36 52,28 60,36 52,44" fill="${c.inner}"/>
            <line x1="28" y1="28" x2="72" y2="28" stroke="${c.border}" stroke-width="1.5" opacity="0.5"/>
            <line x1="28" y1="28" x2="28" y2="72" stroke="${c.border}" stroke-width="1.5" opacity="0.5"/>
        `;
        return makeCornerSet(inner, 84, 8);
    }

    // 4. Delicate Floral Vine & Rose Petals
    function cornersFloral(c) {
        const inner = `
            <path d="M8,92 C8,46 46,8 92,8" fill="none" stroke="${c.border}" stroke-width="2.5"/>
            <path d="M18,86 C20,52 52,20 86,18" fill="none" stroke="${c.inner}" stroke-width="1.8" stroke-dasharray="4 3"/>
            <path d="M24,24 C34,8 50,14 42,28 C54,22 58,40 40,42 C46,54 28,58 26,42 C12,50 8,32 24,24 Z" fill="${c.corner}" opacity="0.28" stroke="${c.border}" stroke-width="1.8"/>
            <circle cx="32" cy="32" r="6" fill="${c.accent}"/>
            <path d="M56,16 Q68,6 78,16 Q66,24 56,16 Z" fill="${c.inner}" opacity="0.7"/>
            <path d="M16,56 Q6,68 16,78 Q24,66 16,56 Z" fill="${c.inner}" opacity="0.7"/>
            <circle cx="84" cy="14" r="3" fill="${c.border}"/>
            <circle cx="14" cy="84" r="3" fill="${c.border}"/>
        `;
        return makeCornerSet(inner, 92, 6);
    }

    // 5. Classic Vintage Scroll Brackets
    function cornersScroll(c) {
        const inner = `
            <path d="M6,94 L6,18 C6,10 10,6 18,6 L94,6" fill="none" stroke="${c.border}" stroke-width="4"/>
            <path d="M16,84 L16,28 C16,20 20,16 28,16 L84,16" fill="none" stroke="${c.inner}" stroke-width="2"/>
            <path d="M24,24 C40,24 44,44 28,44 C18,44 20,30 30,32" fill="none" stroke="${c.border}" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M44,16 C52,26 64,26 70,16" fill="none" stroke="${c.border}" stroke-width="2"/>
            <path d="M16,44 C26,52 26,64 16,70" fill="none" stroke="${c.border}" stroke-width="2"/>
            <circle cx="28" cy="28" r="3.5" fill="${c.accent}"/>
        `;
        return makeCornerSet(inner, 84, 8);
    }

    // 6. Rajasthani Jharokha / Palace Scalloped Top Arch
    function topJharokhaArch(c) {
        return `
            <div style="position:absolute;top:0;left:0;right:0;height:128px;pointer-events:none;z-index:2;overflow:hidden;">
                <svg viewBox="0 0 800 128" width="100%" height="128" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L800,0 L800,66 Q750,66 730,40 Q690,72 645,44 Q600,76 555,44 Q510,74 465,40 Q432,20 400,6 Q368,20 335,40 Q290,74 245,44 Q200,76 155,44 Q110,72 70,40 Q50,66 0,66 Z" fill="${c.border}"/>
                    <path d="M0,74 Q52,74 74,48 Q112,80 156,52 Q200,84 246,52 Q290,82 336,48 Q368,28 400,15 Q432,28 464,48 Q510,82 554,52 Q600,84 644,52 Q688,80 726,48 Q748,74 800,74" fill="none" stroke="${c.inner}" stroke-width="3"/>
                </svg>
            </div>
        `;
    }

    // 7. Mughal / Pointed Crescent Arch Top
    function topMughalArch(c) {
        return `
            <div style="position:absolute;top:0;left:0;right:0;height:115px;pointer-events:none;z-index:2;overflow:hidden;">
                <svg viewBox="0 0 800 115" width="100%" height="115" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L800,0 L800,92 C690,92 610,64 530,42 C460,24 425,18 400,4 C375,18 340,24 270,42 C190,64 110,92 0,92 Z" fill="${c.border}"/>
                    <path d="M0,100 C112,100 192,72 272,50 C342,32 375,26 400,13 C425,26 458,32 528,50 C608,72 688,100 800,100" fill="none" stroke="${c.inner}" stroke-width="3"/>
                </svg>
            </div>
        `;
    }

    // Header Sacred / Decorative Motifs
    function getHeaderMotifSVG(type, c) {
        if (type === 'lotus') {
            return `<svg width="28" height="24" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,4 C25,12 26,20 20,28 C14,20 15,12 20,4 Z" fill="${c.accent}"/>
                <path d="M20,28 C12,24 8,16 10,9 C15,14 18,20 20,28 Z" fill="${c.inner}" opacity="0.85"/>
                <path d="M20,28 C28,24 32,16 30,9 C25,14 22,20 20,28 Z" fill="${c.inner}" opacity="0.85"/>
                <path d="M20,28 C10,27 3,22 4,15 C9,18 14,23 20,28 Z" fill="${c.border}" opacity="0.6"/>
                <path d="M20,28 C30,27 37,22 36,15 C31,18 26,23 20,28 Z" fill="${c.border}" opacity="0.6"/>
            </svg>`;
        }
        if (type === 'mandala') {
            return `<svg width="26" height="26" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="14" fill="none" stroke="${c.accent}" stroke-width="1.6" stroke-dasharray="3 2"/>
                <path d="M18,5 L21,15 L31,18 L21,21 L18,31 L15,21 L5,18 L15,15 Z" fill="${c.inner}" opacity="0.35" stroke="${c.accent}" stroke-width="1.4"/>
                <circle cx="18" cy="18" r="3" fill="${c.accent}"/>
            </svg>`;
        }
        if (type === 'diamond') {
            return `<svg width="22" height="22" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <polygon points="14,2 26,14 14,26 2,14" fill="none" stroke="${c.accent}" stroke-width="2"/>
                <polygon points="14,7 21,14 14,21 7,14" fill="${c.inner}"/>
            </svg>`;
        }
        if (type === 'star') {
            return `<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="7" width="18" height="18" fill="none" stroke="${c.accent}" stroke-width="1.8"/>
                <rect x="7" y="7" width="18" height="18" fill="none" stroke="${c.inner}" stroke-width="1.8" transform="rotate(45 16 16)"/>
                <circle cx="16" cy="16" r="3" fill="${c.accent}"/>
            </svg>`;
        }
        return '';
    }

    // Decorative Horizontal Divider under Name
    function getDividerSVG(c) {
        return `<div style="display:flex;justify-content:center;margin:6px 0 8px 0;">
            <svg width="220" height="14" viewBox="0 0 220 14" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="7" x2="88" y2="7" stroke="${c.inner}" stroke-width="1.6"/>
                <polygon points="110,1 118,7 110,13 102,7" fill="${c.accent}"/>
                <circle cx="94" cy="7" r="2.2" fill="${c.border}"/>
                <circle cx="126" cy="7" r="2.2" fill="${c.border}"/>
                <line x1="132" y1="7" x2="220" y2="7" stroke="${c.inner}" stroke-width="1.6"/>
            </svg>
        </div>`;
    }

    // =========================================================
    // MASTER 12 DISTINCT SVG TEMPLATES ARRAY
    // =========================================================
    const NTH_BIODATA_TEMPLATES = [
        {
            id: "royal_cream_classic",
            name: "1. Royal Cream & Gold",
            tag: "Classic",
            layout: "classic-right",
            motif: "mandala",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "double",
            colors: {
                bg: "#fffdf4", border: "#a05a17", inner: "#d49a3a", corner: "#d99335",
                accent: "#9b5212", name: "#6b2e07", label: "#7a3e0e", text: "#4a260a", secBg: "#fbf2d5"
            },
            renderDecoration: (c) => cornersQuarterCircle(c),
            renderDivider: (c) => ""
        },
        {
            id: "rajasthani_jharokha",
            name: "2. Rajasthani Jharokha",
            tag: "Royal Arch",
            layout: "top-centered",
            motif: "lotus",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "double",
            headerTopPad: 82,
            colors: {
                bg: "#fffaf2", border: "#7f1d1d", inner: "#d97706", corner: "#991b1b",
                accent: "#991b1b", name: "#6b0f1a", label: "#7f1d1d", text: "#3b1313", secBg: "#fee2e2"
            },
            renderDecoration: (c) => topJharokhaArch(c) + makeCornerSet(`<path d="M6,94 L6,6 L94,6" fill="none" stroke="${c.inner}" stroke-width="3"/><circle cx="20" cy="20" r="5" fill="${c.border}"/>`, 56, 8),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "mandala_saffron",
            name: "3. Mandala Filigree",
            tag: "Traditional",
            layout: "classic-right",
            motif: "lotus",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "solid",
            colors: {
                bg: "#fffbf0", border: "#c2410c", inner: "#f59e0b", corner: "#ea580c",
                accent: "#c2410c", name: "#7c2d12", label: "#9a3412", text: "#431407", secBg: "#ffedd5"
            },
            renderDecoration: (c) => cornersMandala(c),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "lotus_rose_vine",
            name: "4. Lotus Rose Vine",
            tag: "Floral",
            layout: "top-centered",
            motif: "lotus",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "double",
            headerTopPad: 18,
            colors: {
                bg: "#fff7fa", border: "#be185d", inner: "#f472b6", corner: "#db2777",
                accent: "#9d174d", name: "#831843", label: "#9d174d", text: "#4a152c", secBg: "#fce7f3"
            },
            renderDecoration: (c) => cornersFloral(c),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "executive_navy_sidebar",
            name: "5. Executive Navy Split",
            tag: "Sidebar",
            layout: "left-sidebar",
            motif: "diamond",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "clean",
            colors: {
                bg: "#ffffff", border: "#1e3a8a", inner: "#d4af37", corner: "#1d4ed8",
                accent: "#1e3a8a", name: "#ffffff", label: "#1e3a8a", text: "#1e293b", secBg: "#eff6ff",
                sidebarBg: "#0f2557", sidebarText: "#f8fafc", sidebarMuted: "#cbd5e1"
            },
            renderDecoration: (c) => "",
            renderDivider: (c) => ""
        },
        {
            id: "artdeco_peacock",
            name: "6. Art-Deco Peacock",
            tag: "Geometric",
            layout: "classic-right",
            motif: "diamond",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "solid",
            colors: {
                bg: "#f4fdfc", border: "#0f766e", inner: "#ca8a04", corner: "#115e59",
                accent: "#0f766e", name: "#134e4a", label: "#0f766e", text: "#1e293b", secBg: "#ccfbf1"
            },
            renderDecoration: (c) => cornersArtDeco(c),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "emerald_mughal_arch",
            name: "7. Emerald Royal Arch",
            tag: "Arch",
            layout: "top-centered",
            motif: "star",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "double",
            headerTopPad: 76,
            colors: {
                bg: "#f4fcf7", border: "#065f46", inner: "#ca8a04", corner: "#047857",
                accent: "#065f46", name: "#064e3b", label: "#065f46", text: "#143529", secBg: "#d1fae5"
            },
            renderDecoration: (c) => topMughalArch(c) + cornersArtDeco(c),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "royal_maroon_sidebar",
            name: "8. Shahi Maroon Split",
            tag: "Sidebar",
            layout: "left-sidebar",
            motif: "mandala",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "clean",
            colors: {
                bg: "#fffdf7", border: "#7f1d1d", inner: "#f59e0b", corner: "#991b1b",
                accent: "#7f1d1d", name: "#fef3c7", label: "#7f1d1d", text: "#3b1313", secBg: "#fef3c7",
                sidebarBg: "#6b0f1a", sidebarText: "#fffbeb", sidebarMuted: "#fde68a"
            },
            renderDecoration: (c) => "",
            renderDivider: (c) => ""
        },
        {
            id: "golden_temple_classic",
            name: "9. Golden Anand Karaj",
            tag: "Traditional",
            layout: "classic-right",
            motif: "mandala",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "double",
            colors: {
                bg: "#fefce8", border: "#a16207", inner: "#991b1b", corner: "#ca8a04",
                accent: "#854d0e", name: "#7f1d1d", label: "#854d0e", text: "#422006", secBg: "#fef08a"
            },
            renderDecoration: (c) => cornersMandala(c),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "vintage_scroll_ivory",
            name: "10. Vintage Scroll",
            tag: "Heritage",
            layout: "classic-right",
            motif: "star",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "solid",
            colors: {
                bg: "#faf5e8", border: "#713f12", inner: "#a16207", corner: "#854d0e",
                accent: "#713f12", name: "#422006", label: "#713f12", text: "#3b230c", secBg: "#f3e6c8"
            },
            renderDecoration: (c) => cornersScroll(c),
            renderDivider: (c) => getDividerSVG(c)
        },
        {
            id: "modern_slate_sidebar",
            name: "11. Modern Officer Split",
            tag: "Sidebar",
            layout: "left-sidebar",
            motif: "none",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "clean",
            colors: {
                bg: "#ffffff", border: "#334155", inner: "#3b82f6", corner: "#2563eb",
                accent: "#1e40af", name: "#ffffff", label: "#1e293b", text: "#334155", secBg: "#f1f5f9",
                sidebarBg: "#1e293b", sidebarText: "#f8fafc", sidebarMuted: "#94a3b8"
            },
            renderDecoration: (c) => "",
            renderDivider: (c) => ""
        },
        {
            id: "classic_bw_print",
            name: "12. Classic B&W Print",
            tag: "Print Ready",
            layout: "classic-right",
            motif: "diamond",
            fontHeading: "'Playfair Display', 'Noto Sans Devanagari', serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            borderStyle: "double",
            colors: {
                bg: "#ffffff", border: "#1e293b", inner: "#64748b", corner: "#334155",
                accent: "#0f172a", name: "#000000", label: "#1e293b", text: "#111827", secBg: "#f1f5f9"
            },
            renderDecoration: (c) => cornersScroll(c),
            renderDivider: (c) => getDividerSVG(c)
        }
    ];

    global.NTH_BIODATA_TEMPLATES = NTH_BIODATA_TEMPLATES;
    global.nthGetHeaderMotifSVG = getHeaderMotifSVG;
})(window);
