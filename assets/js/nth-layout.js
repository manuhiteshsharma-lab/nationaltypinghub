/**
 * National Typing Hub - Universal Layout, Theme & AdSense Manager
 * File: assets/js/nth-layout.js
 */
(function () {
    const ADSENSE_CLIENT = "ca-pub-9429441787625546";
    const SLOT_VERTICAL = "8401284447";
    const SLOT_HORIZONTAL = "2480913357";

    // 1. Inject Shared Navbar, Footer & Ad Fallback CSS
    const style = document.createElement('style');
    style.innerHTML = `
        /* SHARED NAVBAR & FOOTER CSS */
        nav#mainNav { background: var(--panel, #ffffff); padding: 15px 5%; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border, #cbd5e1); position: sticky; top: 0; z-index: 1000; flex-wrap: wrap; gap: 15px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: background-color 0.3s, border-color 0.3s; }
        .logo-brand { display: flex; align-items: center; gap: 8px; text-decoration: none; cursor: pointer; }
        .brand-icon { width: 34px; height: 34px; color: var(--accent, #2563eb); background: var(--accent-dim, #eff6ff); padding: 5px; border-radius: 8px; box-sizing: border-box; }
        .brand-text { font-weight: 700; font-size: 1.4rem; color: var(--text, #1e293b); letter-spacing: 0.5px; display: flex; align-items: baseline; }
        .brand-text .cap { font-size: 1.9rem; font-weight: 900; }
        .brand-text .accent { color: var(--accent, #2563eb); }
        .hamburger { display: none; font-size: 1.8rem; background: none; border: none; color: var(--text, #1e293b); cursor: pointer; z-index: 1001; }
        .menu-container { display: flex; align-items: center; gap: 15px; flex-wrap: wrap; }
        .menu { display: flex; gap: 5px; flex-wrap: wrap; align-items: center; }
        .menu a, .dropbtn { text-decoration: none; background: transparent; border: none; color: var(--muted, #64748b); font-weight: 600; font-size: 0.95rem; transition: 0.2s; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-family: 'Poppins', sans-serif; }
        .menu a:hover, .dropbtn:hover, .menu a.active { color: var(--accent, #2563eb); background: var(--accent-dim, #eff6ff); }
        .dropdown { position: relative; display: inline-block; }
        .dropdown-content { display: none; position: absolute; background-color: var(--panel, #ffffff); min-width: 220px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border, #cbd5e1); z-index: 1001; top: 100%; left: 0; overflow: hidden; }
        .dropdown-content a { color: var(--text, #1e293b); padding: 12px 16px; display: block; border-radius: 0; font-weight: 500; border-bottom: 1px solid var(--border, #cbd5e1); }
        .dropdown-content a:hover { background-color: var(--accent-dim, #eff6ff); color: var(--accent, #2563eb); }
        @media (min-width: 769px) { .dropdown:hover .dropdown-content { display: block; } }
        .icon-btn { background: var(--border, #cbd5e1); border: none; color: var(--text, #1e293b); font-size: 1.1rem; cursor: pointer; padding: 8px 12px; border-radius: 8px; font-weight: bold; transition: 0.2s; }
        @media (max-width: 768px) {
            .brand-text { font-size: 1.15rem; } .brand-text .cap { font-size: 1.5rem; }
            .hamburger { display: block; }
            .menu-container { display: none; flex-direction: column; width: 100%; align-items: flex-start; margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border, #cbd5e1); }
            .menu-container.show { display: flex; }
            .menu { flex-direction: column; width: 100%; align-items: flex-start; }
            .menu a, .dropbtn { width: 100%; text-align: left; padding: 12px; font-size: 1rem; }
            .dropdown { width: 100%; }
            .dropdown-content { position: static; box-shadow: none; border: none; border-left: 2px solid var(--accent, #2563eb); margin-left: 10px; width: calc(100% - 10px); display: none; }
            .dropdown.active .dropdown-content { display: block; }
        }
        footer.nth-shared-footer { background: var(--panel, #ffffff); border-top: 1px solid var(--border, #cbd5e1); padding: 40px 20px 20px; text-align: center; margin-top: auto; }
        .footer-links { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 15px; }
        .footer-links a { color: var(--muted, #64748b); text-decoration: none; font-family: 'Poppins', sans-serif; font-weight: 500; transition: 0.2s; }
        .footer-links a:hover { color: var(--accent, #2563eb); }
        .global-disclaimer { margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(100, 116, 139, 0.2); font-size: 0.78rem; color: var(--muted, #64748b); opacity: 0.85; line-height: 1.6; max-width: 900px; margin-left: auto; margin-right: auto; text-align: center; }

        /* AD SLOTS & UNFILLED FALLBACKS */
        .ad-label { display: block; font-size: 10px; color: var(--muted, #64748b); text-align: center; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
        .fallback-banner { display: none; width: 100%; padding: 15px 14px; background: var(--accent-dim, #eff6ff); border: 1.5px dashed var(--accent, #2563eb); color: var(--accent, #2563eb); text-align: center; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; box-sizing: border-box; transition: 0.2s; }
        .fallback-banner:hover { background: #dbeafe; }
        .fallback-vertical { display: none; width: 160px; padding: 20px 10px; background: var(--panel, #ffffff); border: 1.5px dashed var(--accent, #2563eb); color: var(--accent, #2563eb); text-align: center; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 0.82rem; line-height: 1.45; box-sizing: border-box; }
        ins[data-ad-status="unfilled"] { display: none !important; }
        ins[data-ad-status="unfilled"] ~ .fallback-banner,
        ins[data-ad-status="unfilled"] ~ .fallback-vertical { display: block; }
        .nth-ad-slot:has(ins[data-ad-status="unfilled"]) .ad-label { display: none; }
    `;
    document.head.appendChild(style);

    // 2. Universal Navbar HTML
    function renderNavbar() {
        const navTarget = document.getElementById('nth-nav');
        if (!navTarget) return;
        const path = window.location.pathname;

        navTarget.innerHTML = `
        <div id="google_translate_container" style="display:none; position:absolute; right:5%; top:70px; z-index:2000; background:var(--panel); padding:15px; border:1px solid var(--border); border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.1);">
            <div style="font-size:0.85rem; font-weight:600; color:var(--text); margin-bottom:8px;">Select Language:</div>
            <div id="google_translate_element"></div>
        </div>
        <nav id="mainNav" translate="no" class="notranslate">
            <a class="logo-brand" href="index.html">
                <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="6" y1="12" x2="6.01" y2="12"></line><line x1="10" y1="12" x2="10.01" y2="12"></line><line x1="14" y1="12" x2="14.01" y2="12"></line><line x1="18" y1="12" x2="18.01" y2="12"></line><line x1="7" y1="16" x2="17" y2="16"></line></svg>
                <div class="brand-text"><span class="cap">N</span>ational<span class="cap accent">T</span>yping<span class="cap accent">H</span>ub</div>
            </a>
            <button class="hamburger" onclick="window.nthToggleMobileMenu()">☰</button>
            <div class="menu-container" id="menuContainer">
                <div class="menu">
                    <a href="index.html" class="${path.endsWith('index.html') || path === '/' ? 'active' : ''}">Home</a>
                    <a href="speed-test.html" class="${path.includes('speed-test') ? 'active' : ''}">Speed Test</a>
                    <a href="blog.html" class="${path.includes('blog') || path.includes('guide') ? 'active' : ''}">Blog</a>
                    <div class="dropdown">
                        <button class="dropbtn" onclick="window.nthToggleDropdown(this.parentElement)">Tools & Converters ▾</button>
                        <div class="dropdown-content">
                            <a href="kruti-to-unicode.html">Kruti Dev ➔ Unicode</a>
                            <a href="unicode-to-kruti.html">Unicode ➔ Kruti Dev</a>
                            <a href="hindi-letter-pad.html">Hindi Letter Pad 🆕</a>
                            <a href="english-letter-pad.html">English Letter Pad</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn" onclick="window.nthToggleDropdown(this.parentElement)">Learn Typing ▾</button>
                        <div class="dropdown-content">
                            <a href="learn-english.html">Learn English Typing</a>
                            <a href="learn-hindi.html">Learn Hindi Typing</a>
                            <a href="typing-game.html">Typing Game</a>
                        </div>
                    </div>
                    <a href="typing-simulators.html" class="${path.includes('simulator') || path.includes('scorecard') || path.includes('typed-text') ? 'active' : ''}" style="color: var(--accent); font-weight: 700;">Simulators 🎯</a>
                </div>
                <div class="icon-controls" style="display:flex; gap:10px;">
                    <button class="icon-btn" onclick="window.nthHandleLanguage()" id="langBtn" title="Change Language">A / अ</button>
                    <button class="icon-btn" onclick="window.nthToggleTheme()" id="themeBtn" title="Toggle Dark Mode">🌙</button>
                </div>
            </div>
        </nav>`;
    }

    // 3. Universal Footer HTML
    function renderFooter() {
        const footerTarget = document.getElementById('nth-footer');
        if (!footerTarget) return;

        footerTarget.innerHTML = `
        <footer translate="no" class="notranslate nth-shared-footer">
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="speed-test.html">Speed Test</a>
                <a href="typing-simulators.html">Simulators 🎯</a>
                <a href="hindi-letter-pad.html">Hindi Letter Pad 🆕</a>
                <a href="kruti-to-unicode.html">Kruti Dev ➔ Unicode</a>
                <a href="blog.html">Blog</a>
            </div>
            <div class="footer-links" style="margin-top: 10px;">
                <a href="about.html">About Us</a>
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="feedback.html">Feedback & Support</a>
            </div>
            <div style="color: var(--muted); font-size: 0.85rem; margin-top: 15px;">
                © 2026 National Typing Hub. Supporting English, Mangal Unicode, and DevLys / Kruti Dev 010 Aspirants.
            </div>
            <div class="global-disclaimer">
                🔒 <strong>Privacy & Terms of Use:</strong> This tool is provided for educational practice. Exam rules, typing formats, and official guidelines are subject to change based on official notifications. National Typing Hub is an independent platform and is not responsible for rule changes during actual examinations.
            </div>
        </footer>`;
    }

    // 4. Universal Ad Slot Injector (Supports vertical, vertical-auto 2x2, and horizontal)
    function initAdSlots() {
        const slots = document.querySelectorAll('.nth-ad-slot');
        slots.forEach(slot => {
            if (slot.dataset.loaded === "true") return;
            const type = slot.dataset.adType || 'horizontal';
            const fallbackUrl = slot.dataset.fallbackUrl || 'typing-simulators.html';
            const fallbackText = slot.dataset.fallbackText || '🎯 Practice Official Government Exam Typing Simulators (CPCT, RSSB, SSC) ➔';

            if (type === 'vertical' || type === 'vertical-auto') {
                slot.innerHTML = `
                    <span class="ad-label">Advertisement</span>
                    <ins class="adsbygoogle"
                         style="display:block; width:160px; min-height:280px;"
                         data-ad-client="${ADSENSE_CLIENT}"
                         data-ad-slot="${SLOT_VERTICAL}"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                    <a href="${fallbackUrl}" class="fallback-vertical">${fallbackText}</a>
                `;
            } else {
                slot.innerHTML = `
                    <span class="ad-label">Advertisement</span>
                    <ins class="adsbygoogle"
                         style="display:block; width:100%;"
                         data-ad-client="${ADSENSE_CLIENT}"
                         data-ad-slot="${SLOT_HORIZONTAL}"
                         data-ad-format="horizontal"
                         data-full-width-responsive="true"></ins>
                    <a href="${fallbackUrl}" class="fallback-banner">${fallbackText}</a>
                `;
            }
            slot.dataset.loaded = "true";
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {}
        });
    }

    // 5. Global Helper Controls
    window.nthToggleTheme = function () {
        let current = document.body.getAttribute('data-theme') || 'light';
        let next = current === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('nth_theme', next);
        const btn = document.getElementById('themeBtn');
        if (btn) btn.innerText = next === 'dark' ? '☀️' : '🌙';
    };

    window.nthToggleMobileMenu = function () {
        const m = document.getElementById('menuContainer');
        if (m) m.classList.toggle('show');
    };

    window.nthToggleDropdown = function (el) {
        if (window.innerWidth <= 768 && el) {
            document.querySelectorAll('.dropdown').forEach(d => { if (d !== el) d.classList.remove('active'); });
            el.classList.toggle('active');
        }
    };

    let isTranslateLoaded = false;
    window.nthHandleLanguage = function () {
        if (typeof window.toggleLanguage === 'function') {
            window.toggleLanguage();
            return;
        }
        const container = document.getElementById('google_translate_container');
        if (!container) return;
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            if (!isTranslateLoaded) {
                let s = document.createElement('script');
                s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.body.appendChild(s);
                isTranslateLoaded = true;
            }
        } else {
            container.style.display = 'none';
        }
    };

    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'hi,en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('nth_theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        renderNavbar();
        renderFooter();
        const btn = document.getElementById('themeBtn');
        if (btn) btn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
        initAdSlots();
    });
})();
