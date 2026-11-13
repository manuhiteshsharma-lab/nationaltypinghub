/** 
 */
(function () {
    // ===== 
    // =========================================================
    const ADSENSE_CLIENT = "ca-pub-9429441787625546";
    const SLOT_VERTICAL = "8401284447";
    const SLOT_HORIZONTAL = "2480913357";

    const currentHost = window.location.hostname.toLowerCase();
    const isAuthorizedDomain = (
        currentHost === "nationaltypinghub.in" || 
        currentHost === "www.nationaltypinghub.in"
    );

    const isFramed = (window.self !== window.top);
    if (isFramed) {
        try { window.top.location = window.self.location; } catch (e) {}
    }

    let adClickCount = parseInt(sessionStorage.getItem('nth_ad_clicks') || '0', 10);
    window.addEventListener('blur', function () {
        setTimeout(() => {
            if (document.activeElement && document.activeElement.tagName === 'IFRAME' && document.activeElement.src.includes('google')) {
                adClickCount++;
                sessionStorage.setItem('nth_ad_clicks', adClickCount.toString());
                if (adClickCount >= 2) {
                    document.querySelectorAll('.adsbygoogle, .nth-ad-slot ins').forEach(el => {
                        el.style.display = 'none';
                    });
                }
            }
        }, 100);
    });

    const allowLiveAds = isAuthorizedDomain && !isFramed && (adClickCount < 2);

    // =========================================================
    // 2. MAS)
    // =========================================================
    const NTH_SITEMAP_POOL = {
        simulators: [
            { url: "rssb-typingtest-simulator.html", icon: "🎯", title: "RSSB LDC / JA Simulator", desc: "Practice new 2026 RSSB pattern (0.05 & 0.0625 marks/word) with Word-Lock Backspace.", btn: "Start RSSB Test" },
            { url: "cpct-simulator.html", icon: "💻", title: "MP CPCT Typing Simulator", desc: "Official 15-minute Hindi (Remington Gail / Inscript) & English mock test.", btn: "Start CPCT Test" },
            { url: "hartron-typingtest-simulator.html", icon: "⚡", title: "HARTRON SETC Simulator", desc: "Official 5-minute Haryana SETC test in Kruti Dev 010 & English.", btn: "Start SETC Test" },
            { url: "ssc-simulator.html", icon: "🏛️", title: "SSC CGL / CHSL Simulator", desc: "Practice official SSC DEST keystroke (KDPH) evaluation & error percentage.", btn: "Take SSC Test" },
            { url: "rrb-ntpc-simulator.html", icon: "🚆", title: "RRB NTPC Typing Simulator", desc: "Railway NTPC skill test simulator with strict 30 WPM English & 25 WPM Hindi rules.", btn: "Start RRB Test" },
            { url: "uppcl-simulator.html", icon: "💡", title: "UPPCL Camp Assistant Test", desc: "Practice UP Power Corporation Hindi Kruti Dev 010 & English typing test.", btn: "Start UPPCL Test" },
            { url: "beltron-simulator.html", icon: "🖥️", title: "Bihar BELTRON DEO Simulator", desc: "Official Mangal Remington Gail Hindi & English typing simulator for BELTRON.", btn: "Start BELTRON" },
            { url: "upsssc-simulator.html", icon: "📋", title: "UPSSSC Junior Assistant", desc: "UP Junior Assistant Hindi & English typing test simulator with live WPM.", btn: "Start UPSSSC" },
            { url: "crpf-simulator.html", icon: "🛡️", title: "CRPF HCM Typing Simulator", desc: "High-accuracy CRPF Head Constable Ministerial skill test environment.", btn: "Start CRPF Test" },
            { url: "dsssb-simulator.html", icon: "🏢", title: "DSSSB LDC / JJA Simulator", desc: "Delhi Subordinate Services 35 WPM English & 30 WPM Hindi skill test.", btn: "Start DSSSB" },
            { url: "rssb-ia-simulator.html", icon: "🖧", title: "Rajasthan Informatics Asst (IA)", desc: "Qualifying 15-minute Hindi & English typing test for RSSB IA exam.", btn: "Start IA Test" },
            { url: "rhc-simulator.html", icon: "⚖️", title: "Rajasthan High Court LDC", desc: "Practice RHC JJA / Clerk Grade-II speed test in Kruti Dev 010 & English.", btn: "Start RHC Test" },
            { url: "ph-hc-simulator.html", icon: "🏛️", title: "Punjab & Haryana High Court", desc: "30 WPM computer typing test simulator for PHHC Clerk recruitment.", btn: "Start PHHC Test" },
            { url: "uksssc-simulator.html", icon: "🏔️", title: "UKSSSC Clerk Typing Test", desc: "Uttarakhand Junior Assistant Hindi & English typing test simulator.", btn: "Start UKSSSC" },
            { url: "jssc-simulator.html", icon: "🌿", title: "JSSC LDC Typing Simulator", desc: "Jharkhand Clerk Hindi Kruti Dev 010 & English typing mock test.", btn: "Start JSSC Test" },
            { url: "cg-vyapam-simulator.html", icon: "🌾", title: "CG Vyapam DEO Simulator", desc: "Chhattisgarh Data Entry Operator & Assistant Grade-3 typing test.", btn: "Start CG Test" },
            { url: "hpssc-joa-simulator.html", icon: "🏔️", title: "HPSSC JOA (IT) Simulator", desc: "Himachal Pradesh Junior Office Assistant (IT) typing skill test.", btn: "Start JOA Test" },
            { url: "corporate-bank-simulator.html", icon: "🏦", title: "Corporate & Bank Typing Test", desc: "High-speed banking & corporate data entry assessment simulator.", btn: "Start Bank Test" },
            { url: "typing-simulators.html", icon: "🎯", title: "All 18+ Govt Exam Simulators", desc: "Choose from RSSB, CPCT, SSC, RRB, HARTRON, High Court & state exams.", btn: "Explore All" }
        ],
        guides: [
            { url: "rssb-ldc-typing-efficiency-guide.html", icon: "📘", title: "RSSB LDC Phase-II 2026 Guide", desc: "Complete guide to 0.05/0.0625 marks formula, Word-Lock Backspace & Efficiency.", btn: "Read Guide" },
            { url: "mp-cpct-typing-strategy.html", icon: "📗", title: "MP CPCT 2026 Strategy Guide", desc: "How to clear both MCQ and Hindi/English typing sections in first attempt.", btn: "Read CPCT Guide" },
            { url: "hartron-setc-typing-test-guide.html", icon: "📙", title: "HARTRON SETC Complete Guide", desc: "Official 5-stroke word formula, exemption rules & 30 WPM strategy.", btn: "Read SETC Guide" },
            { url: "ssc-typing-test-rules.html", icon: "📐", title: "SSC Typing Error Calculation", desc: "Understand half-mistakes, full-mistakes, and KDPH evaluation rules.", btn: "Read SSC Rules" },
            { url: "ssc-chsl-preparation-guide.html", icon: "🏆", title: "SSC CHSL Typing Prep Plan", desc: "Day-by-day practice schedule to hit 35+ WPM with 98% accuracy.", btn: "View Plan" },
            { url: "kruti-dev-alt-codes.html", icon: "🔢", title: "Kruti Dev 010 Alt Codes Chart", desc: "Complete printable chart of special Hindi characters & Alt combinations.", btn: "View Alt Chart" },
            { url: "kruti-vs-mangal-guide.html", icon: "⚖️", title: "Kruti Dev 010 vs Mangal Font", desc: "Which Hindi typing layout should you learn first for government jobs?", btn: "Compare Fonts" },
            { url: "mobile-otg-typing-guide.html", icon: "📱", title: "Practice Typing on Mobile (OTG)", desc: "How to connect a USB keyboard to your phone for exam typing practice.", btn: "Read OTG Guide" },
            { url: "best-typing-keyboards.html", icon: "⌨️", title: "Best Keyboards for Govt Exams", desc: "Top soft-key membrane keyboards used in TCS iON & RSSB exam centers.", btn: "See Keyboards" },
            { url: "best-laptops-for-freelance-typists.html", icon: "💻", title: "Best Laptops for Typists", desc: "Top budget & ergonomic laptops for long Hindi/English typing sessions.", btn: "View Laptops" },
            { url: "best-ergonomic-chairs.html", icon: "🪑", title: "Best Ergonomic Study Chairs", desc: "Prevent back & wrist pain during 4-hour daily typing practice sessions.", btn: "View Chairs" },
            { url: "increase-typing-speed.html", icon: "🚀", title: "How to Double Typing Speed", desc: "Proven finger-placement drills to jump from 20 WPM to 45+ WPM.", btn: "Boost Speed" },
            { url: "rajasthan-rssb-typing-guide.html", icon: "🏰", title: "Rajasthan Typing Exams Guide", desc: "Comparison of RSSB LDC, Informatics Assistant & Rajasthan High Court.", btn: "Read Guide" },
            { url: "rvunl-junior-assistant-strategy.html", icon: "⚡", title: "RVUNL Junior Assistant Guide", desc: "Complete typing weightage and Phase-II strategy for Rajasthan Vidyut.", btn: "Read Strategy" },
            { url: "upsssc-font-guide.html", icon: "📝", title: "UPSSSC Kruti Dev vs Inscript", desc: "Font selection rules and qualifying criteria for UP clerk exams.", btn: "Read UP Guide" },
            { url: "beltron-typing-syllabus.html", icon: "📄", title: "Bihar BELTRON Syllabus & Tips", desc: "Complete syllabus and Remington Gail typing tips for BELTRON DEO.", btn: "View Syllabus" },
            { url: "blog.html", icon: "📚", title: "Official Typing Exam Blogs", desc: "Read all latest government typing notifications, formulas & tips.", btn: "All Articles" }
        ],
        tools: [
            { url: "custom-hindi-kruti-devlys-test.html", icon: "📋", title: "Custom Kruti Dev / DevLys Test", desc: "Paste your own coaching passage or choose Easy/Hard Hindi topics.", btn: "Paste & Practice" },
            { url: "speed-test.html", icon: "⚡", title: "1-Min to 30-Min Speed Test", desc: "Quick typing speed test with downloadable Certificate of Completion.", btn: "Check Speed" },
            { url: "hindi-letter-pad.html", icon: "📝", title: "Hindi Letter Pad (Unicode)", desc: "Draft formal Hindi applications, RTI & office orders on mobile or PC.", btn: "Open Letter Pad" },
            { url: "english-letter-pad.html", icon: "✉️", title: "English Official Letter Pad", desc: "Ready-to-use formal templates for official letters & applications.", btn: "Draft Letter" },
            { url: "kruti-to-unicode.html", icon: "🔄", title: "Kruti Dev ➔ Unicode Converter", desc: "Convert legacy Kruti Dev 010 text into Mangal Unicode in 1 click.", btn: "Convert Now" },
            { url: "unicode-to-kruti.html", icon: "🔁", title: "Unicode ➔ Kruti Dev Converter", desc: "Convert Mangal Unicode Hindi text into Kruti Dev 010 font instantly.", btn: "Convert Now" },
            { url: "learn-hindi.html", icon: "🇮🇳", title: "Learn Hindi Touch Typing", desc: "Step-by-step interactive home-row lessons for Kruti Dev & Mangal.", btn: "Start Lessons" },
            { url: "learn-english.html", icon: "🔤", title: "Learn English Touch Typing", desc: "Master QWERTY finger placement without looking at the keyboard.", btn: "Start Lessons" },
            { url: "typing-game.html", icon: "🎮", title: "Typing Speed Arcade Game", desc: "Build reflex speed and accuracy while playing our interactive game.", btn: "Play Game" }
        ]
    };

    // =========================================================
    // 3. IN
    // =========================================================
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

        /* SAFE AD SPACING & UNFILLED FALLBACKS */
        .nth-ad-slot { padding: 8px 0; margin: 12px 0; box-sizing: border-box; }
        .ad-label { display: block; font-size: 10px; color: var(--muted, #64748b); text-align: center; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.6px; }
        .fallback-banner { display: none; position: relative; overflow: hidden; width: 100%; padding: 15px 14px; background: var(--accent-dim, #eff6ff); border: 1.5px dashed var(--accent, #2563eb); color: var(--accent, #2563eb); text-align: center; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; box-sizing: border-box; transition: border-color 0.25s, transform 0.25s; }
        .fallback-banner:hover { background: #dbeafe; transform: translateY(-1px); }
        .fallback-vertical { display: none; position: relative; overflow: hidden; width: 160px; min-height: 175px; padding: 18px 10px; background: var(--panel, #ffffff); border: 1.5px dashed var(--accent, #2563eb); color: var(--accent, #2563eb); text-align: center; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 0.82rem; line-height: 1.45; box-sizing: border-box; transition: border-color 0.25s, transform 0.25s; }
        .fallback-vertical:hover { background: var(--accent-dim, #eff6ff); transform: translateY(-2px); }
        ins[data-ad-status="unfilled"] { display: none !important; }
        ins[data-ad-status="unfilled"] ~ .fallback-banner,
        ins[data-ad-status="unfilled"] ~ .fallback-vertical { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }
        .nth-ad-slot:has(ins[data-ad-status="unfilled"]) .ad-label { display: none; }

        /* =========================================================
           ✨ GPU-ACCELERATED GRADIENT FLASH SHIMMER ON SWAP
           ========================================================= */
        .funnel-card, .promo-box {
            position: relative !important;
            overflow: hidden !important;
            min-height: 195px;
            justify-content: space-between;
        }
        .nth-cat-pill {
            display: inline-block;
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            padding: 2px 9px;
            border-radius: 50px;
            background: var(--accent-dim, #eff6ff);
            color: var(--accent, #2563eb);
            margin-bottom: 6px;
            border: 1px solid rgba(37, 99, 235, 0.25);
        }
        .nth-gradient-flash::after {
            content: "";
            position: absolute;
            top: 0;
            left: -120%;
            width: 80%;
            height: 100%;
            background: linear-gradient(
                115deg,
                transparent 0%,
                rgba(59, 130, 246, 0.18) 35%,
                rgba(250, 204, 21, 0.38) 50%,
                rgba(59, 130, 246, 0.18) 65%,
                transparent 100%
            );
            transform: skewX(-20deg);
            pointer-events: none;
            animation: nthShimmerSweep 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .nth-gradient-flash {
            border-color: #f59e0b !important;
            box-shadow: 0 0 18px rgba(245, 158, 11, 0.22) !important;
        }
        @keyframes nthShimmerSweep {
            0% { left: -120%; }
            100% { left: 160%; }
        }
        body.exam-focus-mode .nth-gradient-flash::after {
            animation: none !important;
        }
    `;
    document.head.appendChild(style);

    // =========================================================
    // 4. UN
    // =========================================================
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
                            <a href="custom-hindi-kruti-devlys-test.html">Custom Kruti Dev Practice 🆕</a>
                            <a href="kruti-to-unicode.html">Kruti Dev ➔ Unicode</a>
                            <a href="unicode-to-kruti.html">Unicode ➔ Kruti Dev</a>
                            <a href="hindi-letter-pad.html">Hindi Letter Pad</a>
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
                <div class="icon-controls" style="display:flex; gap:10px; align-items:center;">
                    <button class="icon-btn" onclick="window.nthHandleLanguage()" id="langBtn" title="Change Language">A / अ</button>
                    <button class="icon-btn" onclick="window.nthToggleTheme()" id="themeBtn" title="Toggle Dark Mode">🌙</button>
                </div>
            </div>
        </nav>`;
    }

    function renderFooter() {
        const footerTarget = document.getElementById('nth-footer');
        if (!footerTarget) return;

        footerTarget.innerHTML = `
        <footer translate="no" class="notranslate nth-shared-footer">
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="speed-test.html">Speed Test</a>
                <a href="typing-simulators.html">Simulators 🎯</a>
                <a href="custom-hindi-kruti-devlys-test.html">Custom Kruti Practice 🆕</a>
                <a href="hindi-letter-pad.html">Hindi Letter Pad</a>
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

    // =========================================================
    // 5. RAWARE)
    // =========================================================
    function initAdSlots() {
        const slots = document.querySelectorAll('.nth-ad-slot');
        const path = window.location.pathname;
        const isRapidScorecard = path.includes('scorecard.html');
        
        let verticalSlotCounter = 0;
        let horizontalSlotCounter = 0;
        
        const isSmallScreen = window.innerWidth < 1024;
        const maxAllowedVerticalAds = isSmallScreen ? 0 : 2;

        slots.forEach(slot => {
            if (slot.dataset.loaded === "true") return;
            const type = slot.dataset.adType || 'horizontal';
            const fallbackUrl = slot.dataset.fallbackUrl || 'typing-simulators.html';
            const fallbackText = slot.dataset.fallbackText || '🎯 Practice Official Government Exam Typing Simulators ➔';
            const isVert = (type === 'vertical' || type === 'vertical-auto');

            if (!allowLiveAds || (isRapidScorecard && isVert)) {
                slot.innerHTML = `<a href="${fallbackUrl}" class="${isVert ? 'fallback-vertical' : 'fallback-banner'}" style="display:flex;">${fallbackText}</a>`;
                slot.dataset.loaded = "true";
                return;
            }

            if (isVert) {
                verticalSlotCounter++;
                if (verticalSlotCounter > maxAllowedVerticalAds) {
                    slot.innerHTML = `<a href="${fallbackUrl}" class="fallback-vertical" style="display:flex;">${fallbackText}</a>`;
                    slot.dataset.loaded = "true";
                    return;
                }
                
                slot.innerHTML = `
                    <span class="ad-label">Advertisement</span>
                    <ins class="adsbygoogle"
                         style="display:block; width:160px; min-height:600px;"
                         data-ad-client="${ADSENSE_CLIENT}"
                         data-ad-slot="${SLOT_VERTICAL}"
                         data-ad-format="vertical"
                         data-full-width-responsive="false"></ins>
                    <a href="${fallbackUrl}" class="fallback-vertical">${fallbackText}</a>
                `;
            } else {
                horizontalSlotCounter++;
                if (isSmallScreen && horizontalSlotCounter > 1) {
                    slot.innerHTML = `<a href="${fallbackUrl}" class="fallback-banner" style="display:flex;">${fallbackText}</a>`;
                    slot.dataset.loaded = "true";
                    return;
                }
                
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

    if (allowLiveAds && !document.querySelector('script[src*="adsbygoogle.js"]')) {
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
        adScript.crossOrigin = "anonymous";
        document.head.appendChild(adScript);
    }

    // =========================================================
    // 6.
    // =========================================================
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    function pickRandomFiltered(list) {
        const valid = list.filter(item => item.url !== currentFile);
        return valid[Math.floor(Math.random() * valid.length)] || list[0];
    }

    function triggerGradientFlash(el) {
        if (!el) return;
        el.classList.remove('nth-gradient-flash');
        void el.offsetWidth; // GPU-safe class reset
        el.classList.add('nth-gradient-flash');
        setTimeout(() => {
            el.classList.remove('nth-gradient-flash');
        }, 1050);
    }

    function bindHoverLock(el) {
        if (!el || el.dataset.hoverBound === "true") return;
        el.addEventListener('mouseenter', () => { el.dataset.hovered = "true"; });
        el.addEventListener('mouseleave', () => { el.dataset.hovered = "false"; });
        el.addEventListener('touchstart', () => { el.dataset.hovered = "true"; }, { passive: true });
        el.addEventListener('touchend', () => {
            setTimeout(() => { el.dataset.hovered = "false"; }, 2500);
        }, { passive: true });
        el.dataset.hoverBound = "true";
    }

    // Ro)
    function rotateFunnelAndPromoCards(withFlash) {
        if (document.body.classList.contains('exam-focus-mode')) return;

        const categories = [
            { pool: NTH_SITEMAP_POOL.simulators, label: "🎯 Exam Simulator" },
            { pool: NTH_SITEMAP_POOL.guides, label: "📘 Official Guide" },
            { pool: NTH_SITEMAP_POOL.tools, label: "⚡ Practice Tool" }
        ];

        // 1. 
        const funnelCards = document.querySelectorAll('.funnel-card');
        funnelCards.forEach((card, idx) => {
            bindHoverLock(card);
            if (card.dataset.hovered === "true") return;

            const cat = categories[idx % categories.length];
            const item = pickRandomFiltered(cat.pool);
            card.innerHTML = `
                <span class="nth-cat-pill">${cat.label}</span>
                <div class="funnel-icon" style="font-size:2rem; margin-bottom:8px;">${item.icon}</div>
                <h4 style="margin:0 0 8px 0; color:var(--text); font-size:1.12rem; font-weight:700;">${item.title}</h4>
                <p style="margin:0 0 16px 0; color:var(--muted); font-size:0.9rem; line-height:1.45;">${item.desc}</p>
                <a href="${item.url}" class="funnel-btn">${item.btn} ➔</a>
            `;
            if (withFlash) triggerGradientFlash(card);
        });

        // 2html)
        const promoBoxes = document.querySelectorAll('.promo-box');
        promoBoxes.forEach((box, idx) => {
            bindHoverLock(box);
            if (box.dataset.hovered === "true") return;

            const cat = categories[idx % categories.length];
            const item = pickRandomFiltered(cat.pool);
            box.href = item.url;
            box.innerHTML = `
                <div><span class="nth-cat-pill">${cat.label}</span></div>
                <div class="promo-title">${item.icon} <span>${item.title}</span></div>
                <div class="promo-desc">${item.desc}</div>
                <div><span class="promo-btn">${item.btn} ➔</span></div>
            `;
            if (withFlash) triggerGradientFlash(box);
        });
    }

    // Rotates visible .fallback-vertical and .fallback-banner ad slots
    function rotateVisibleAdFallbacks(withFlash) {
        if (document.body.classList.contains('exam-focus-mode')) return;

        const allItems = [
            ...NTH_SITEMAP_POOL.simulators,
            ...NTH_SITEMAP_POOL.guides,
            ...NTH_SITEMAP_POOL.tools
        ];

        const fallbacks = document.querySelectorAll('.fallback-vertical, .fallback-banner');
        fallbacks.forEach(fb => {
            // Only rotate if the fallback is currently visible on screen
            if (fb.offsetParent === null) return;
            bindHoverLock(fb);
            if (fb.dataset.hovered === "true") return;

            const item = pickRandomFiltered(allItems);
            fb.href = item.url;
            if (fb.classList.contains('fallback-vertical')) {
                fb.innerHTML = `
                    <div style="font-size:1.75rem; margin-bottom:4px;">${item.icon}</div>
                    <div style="font-weight:800; color:var(--text, #1e293b); font-size:0.85rem; margin-bottom:4px;">${item.title}</div>
                    <div style="font-size:0.75rem; color:var(--muted, #64748b); font-weight:500; margin-bottom:8px;">${item.desc}</div>
                    <span style="background:var(--accent, #2563eb); color:#fff; padding:5px 10px; border-radius:6px; font-size:0.75rem; font-weight:700;">${item.btn} ➔</span>
                `;
            } else {
                fb.innerHTML = `${item.icon} <strong>${item.title}:</strong> ${item.desc} <span style="text-decoration:underline; margin-left:6px;">${item.btn} ➔</span>`;
            }
            if (withFlash) triggerGradientFlash(fb);
        });
    }

    // =========================================================
    // 7. 
    // =========================================================
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

        // Initial shuffle 1.5s after page load (Preserves static HTML for Googlebot first)
        setTimeout(() => {
            rotateFunnelAndPromoCards(true);
            rotateVisibleAdFallbacks(true);
        }, 1500);

        // Live Option 2 Timed Rotation every 11 seconds with Gradient Flash
        setInterval(() => {
            rotateFunnelAndPromoCards(true);
            rotateVisibleAdFallbacks(true);
        }, 11000);
    });
})();
