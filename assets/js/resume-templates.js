/**
 * National Typing Hub - Free Job Resume Vector Template Engine
 * File: assets/js/resume-templates.js
 * 10 Distinct Premium & ATS-Friendly Resume Templates across 7 Structural Layouts:
 *   1. 'single-classic'     (ATS Harvard Classic & Burgundy Academic)
 *   2. 'left-sidebar'       (Executive Navy Split)
 *   3. 'top-banner'         (Modern Corporate Banner)
 *   4. 'single-accent'      (Tech Minimalist Accent)
 *   5. 'right-sidebar'      (Emerald Executive Right-Split)
 *   6. 'tabular-classic'    (Indian Govt / PSU / Bank Standard with Qualification Table)
 *   7. 'timeline'           (Charcoal & Gold Vertical Timeline)
 *   8. 'left-sidebar-light' (Creative Teal Ink-Friendly Sidebar)
 *   9. 'two-col-header'     (Compact Fresher Pro)
 */

(function (global) {
    // =========================================================
    // 1. SAFE HTML ESCAPER & INLINE CORS-SAFE SVG ICONS
    // =========================================================
    function esc(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function iconSvg(type, color, size) {
        const s = size || 13;
        const c = color || "currentColor";
        const paths = {
            phone: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`,
            email: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
            location: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
            link: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
            linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`
        };
        return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;vertical-align:middle;">${paths[type] || ""}</svg>`;
    }

    // =========================================================
    // 2. 10 UNIQUE PREMIUM RESUME TEMPLATES
    // =========================================================
    const NTH_RESUME_TEMPLATES = [
        {
            id: "ats_harvard_classic",
            name: "1. ATS Harvard Classic",
            tag: "99% ATS",
            bestFor: "MNCs, IT, Campus Placements",
            layout: "single-classic",
            fontHeading: "'Playfair Display', Georgia, serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#111827", accent: "#1f2937",
                muted: "#4b5563", text: "#111827", border: "#111827",
                softBg: "#f3f4f6", badgeBg: "#f3f4f6", badgeText: "#1f2937"
            }
        },
        {
            id: "exec_navy_split",
            name: "2. Executive Navy Split",
            tag: "Left Sidebar",
            bestFor: "Corporate, Banking, Managers",
            layout: "left-sidebar",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#0f2557", accent: "#1d4ed8",
                muted: "#475569", text: "#1e293b", border: "#cbd5e1",
                softBg: "#eff6ff", badgeBg: "rgba(255,255,255,0.14)", badgeText: "#ffffff",
                sidebarBg: "#0f2557", sidebarText: "#f8fafc", sidebarMuted: "#cbd5e1", sidebarAccent: "#60a5fa"
            }
        },
        {
            id: "corp_banner_pro",
            name: "3. Modern Corporate Banner",
            tag: "Top Banner",
            bestFor: "Operations, HR, Sales, MBA",
            layout: "top-banner",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#1e3a8a", accent: "#2563eb",
                muted: "#475569", text: "#1e293b", border: "#dbeafe",
                softBg: "#eff6ff", badgeBg: "#dbeafe", badgeText: "#1e40af",
                bannerBg: "#1e3a8a", bannerText: "#ffffff", bannerMuted: "#bfdbfe"
            }
        },
        {
            id: "tech_minimal_accent",
            name: "4. Tech Minimalist Accent",
            tag: "IT / Dev",
            bestFor: "Software, Data, Designers",
            layout: "single-accent",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#0f172a", accent: "#0284c7",
                muted: "#475569", text: "#0f172a", border: "#e2e8f0",
                softBg: "#f0f9ff", badgeBg: "#e0f2fe", badgeText: "#0369a1"
            }
        },
        {
            id: "emerald_right_sidebar",
            name: "5. Emerald Right Sidebar",
            tag: "Right Split",
            bestFor: "Analysts, Consultants, Finance",
            layout: "right-sidebar",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#064e3b", accent: "#059669",
                muted: "#475569", text: "#1e293b", border: "#d1fae5",
                softBg: "#ecfdf5", badgeBg: "rgba(255,255,255,0.16)", badgeText: "#ffffff",
                sidebarBg: "#064e3b", sidebarText: "#f0fdf4", sidebarMuted: "#a7f3d0", sidebarAccent: "#34d399"
            }
        },
        {
            id: "govt_psu_tabular",
            name: "6. Indian Govt & PSU Format",
            tag: "Table Format",
            bestFor: "Govt Jobs, Clerk, Teaching, DEO",
            layout: "tabular-classic",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#1e293b", accent: "#1d4ed8",
                muted: "#475569", text: "#0f172a", border: "#94a3b8",
                softBg: "#f1f5f9", badgeBg: "#eff6ff", badgeText: "#1e40af"
            }
        },
        {
            id: "charcoal_gold_timeline",
            name: "7. Charcoal & Gold Timeline",
            tag: "Timeline",
            bestFor: "Experienced Professionals",
            layout: "timeline",
            fontHeading: "'Playfair Display', Georgia, serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#18181b", accent: "#b45309",
                muted: "#52525b", text: "#27272a", border: "#e4e4e7",
                softBg: "#fffbeb", badgeBg: "#fef3c7", badgeText: "#92400e",
                bannerBg: "#18181b", bannerText: "#ffffff", bannerMuted: "#fde68a"
            }
        },
        {
            id: "creative_teal_light",
            name: "8. Creative Teal Duo",
            tag: "Print Light",
            bestFor: "Marketing, Media, Startups",
            layout: "left-sidebar-light",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#115e59", accent: "#0f766e",
                muted: "#475569", text: "#1e293b", border: "#99f6e4",
                softBg: "#f0fdfa", badgeBg: "#ccfbf1", badgeText: "#115e59",
                sidebarBg: "#f0fdfa", sidebarText: "#134e4a", sidebarMuted: "#475569", sidebarAccent: "#0f766e"
            }
        },
        {
            id: "burgundy_academic",
            name: "9. Burgundy Academic / Legal",
            tag: "Serif Pro",
            bestFor: "Law, CA, Professors, Senior",
            layout: "single-classic",
            fontHeading: "'Playfair Display', Georgia, serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#7f1d1d", accent: "#991b1b",
                muted: "#57534e", text: "#1c1917", border: "#991b1b",
                softBg: "#fef2f2", badgeBg: "#fee2e2", badgeText: "#7f1d1d"
            }
        },
        {
            id: "compact_fresher_pro",
            name: "10. Compact Fresher Pro",
            tag: "1-Page Pro",
            bestFor: "Freshers, Interns, Graduates",
            layout: "two-col-header",
            fontHeading: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            fontBody: "'Poppins', 'Noto Sans Devanagari', sans-serif",
            colors: {
                bg: "#ffffff", primary: "#312e81", accent: "#4f46e5",
                muted: "#475569", text: "#1e293b", border: "#c7d2fe",
                softBg: "#eef2ff", badgeBg: "#e0e7ff", badgeText: "#3730a3"
            }
        }
    ];

    // =========================================================
    // 3. HELPER BLOCK BUILDERS (AUTO-HIDE EMPTY FIELDS)
    // =========================================================
    function formatBullets(rawText, bulletColor) {
        if (!rawText || !rawText.trim()) return "";
        const lines = rawText.split(/\r?\n/).map(l => l.replace(/^[\s•\-\*]+/, "").trim()).filter(Boolean);
        if (lines.length === 0) return "";
        if (lines.length === 1) {
            return `<div style="font-size:13px;line-height:1.5;margin-top:3px;">${esc(lines[0])}</div>`;
        }
        return `<ul style="margin:4px 0 0 0;padding-left:18px;font-size:12.8px;line-height:1.5;">${lines.map(l => `<li style="margin-bottom:3px;">${esc(l)}</li>`).join("")}</ul>`;
    }

    function buildPhotoHtml(data, c, size, borderColor) {
        if (!data.photoUrl || data.photoShape === "hide") return "";
        const s = size || 92;
        const radius = data.photoShape === "square" ? "10px" : "50%";
        const bClr = borderColor || c.accent;
        return `<div style="width:${s}px;height:${s}px;border-radius:${radius};overflow:hidden;border:3px solid ${bClr};flex-shrink:0;background:#fff;box-sizing:border-box;">
            <img src="${data.photoUrl}" alt="Profile" style="width:100%;height:100%;object-fit:cover;display:block;">
        </div>`;
    }

    function buildContactInline(data, textColor, iconColor) {
        const items = [];
        if (data.phone) items.push(`<span style="display:inline-flex;align-items:center;gap:5px;">${iconSvg("phone", iconColor, 12)} ${esc(data.phone)}</span>`);
        if (data.email) items.push(`<span style="display:inline-flex;align-items:center;gap:5px;">${iconSvg("email", iconColor, 12)} ${esc(data.email)}</span>`);
        if (data.location) items.push(`<span style="display:inline-flex;align-items:center;gap:5px;">${iconSvg("location", iconColor, 12)} ${esc(data.location)}</span>`);
        if (data.linkedin) items.push(`<span style="display:inline-flex;align-items:center;gap:5px;">${iconSvg("linkedin", iconColor, 12)} ${esc(data.linkedin)}</span>`);
        if (data.portfolio) items.push(`<span style="display:inline-flex;align-items:center;gap:5px;">${iconSvg("link", iconColor, 12)} ${esc(data.portfolio)}</span>`);
        if (!items.length) return "";
        return `<div style="display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12.2px;color:${textColor};align-items:center;">${items.join("")}</div>`;
    }

    function buildContactStacked(data, textColor, iconColor) {
        const items = [];
        if (data.phone) items.push(`<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:7px;font-size:12.2px;color:${textColor};word-break:break-word;">${iconSvg("phone", iconColor, 13)}<span>${esc(data.phone)}</span></div>`);
        if (data.email) items.push(`<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:7px;font-size:12.2px;color:${textColor};word-break:break-word;">${iconSvg("email", iconColor, 13)}<span>${esc(data.email)}</span></div>`);
        if (data.location) items.push(`<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:7px;font-size:12.2px;color:${textColor};word-break:break-word;">${iconSvg("location", iconColor, 13)}<span>${esc(data.location)}</span></div>`);
        if (data.linkedin) items.push(`<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:7px;font-size:12.2px;color:${textColor};word-break:break-word;">${iconSvg("linkedin", iconColor, 13)}<span>${esc(data.linkedin)}</span></div>`);
        if (data.portfolio) items.push(`<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:7px;font-size:12.2px;color:${textColor};word-break:break-word;">${iconSvg("link", iconColor, 13)}<span>${esc(data.portfolio)}</span></div>`);
        return items.join("");
    }

    function buildSkillPills(skillsList, bg, text, border) {
        if (!skillsList || !skillsList.length) return "";
        return `<div style="display:flex;flex-wrap:wrap;gap:6px;">${skillsList.map(sk =>
            `<span style="background:${bg};color:${text};${border ? `border:1px solid ${border};` : ""}padding:3px 10px;border-radius:4px;font-size:12px;font-weight:600;display:inline-block;">${esc(sk)}</span>`
        ).join("")}</div>`;
    }

    function buildExperienceItems(expList, c, isTimeline) {
        if (!expList || !expList.length) return "";
        return expList.map(item => {
            if (!item.role && !item.company && !item.desc) return "";
            const header = `
                <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;">
                    <div style="font-weight:700;font-size:14px;color:${c.primary};">${esc(item.role)}${item.company ? ` <span style="font-weight:600;color:${c.accent};">| ${esc(item.company)}</span>` : ""}</div>
                    ${item.duration ? `<div style="font-size:12px;font-weight:600;color:${c.muted};white-space:nowrap;">${esc(item.duration)}</div>` : ""}
                </div>
                ${formatBullets(item.desc, c.accent)}
            `;
            if (isTimeline) {
                return `<div style="position:relative;padding-left:18px;margin-bottom:13px;border-left:2px solid ${c.accent};">
                    <div style="position:absolute;left:-6px;top:4px;width:10px;height:10px;border-radius:50%;background:${c.accent};border:2px solid #fff;"></div>
                    ${header}
                </div>`;
            }
            return `<div style="margin-bottom:12px;">${header}</div>`;
        }).join("");
    }

    function buildEducationItems(eduList, c, isTimeline) {
        if (!eduList || !eduList.length) return "";
        return eduList.map(item => {
            if (!item.degree && !item.institute) return "";
            const content = `
                <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;">
                    <div style="font-weight:700;font-size:13.8px;color:${c.primary};">${esc(item.degree)}</div>
                    ${item.year ? `<div style="font-size:12px;font-weight:600;color:${c.muted};white-space:nowrap;">${esc(item.year)}</div>` : ""}
                </div>
                <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;font-size:12.6px;color:${c.muted};margin-top:2px;">
                    <span>${esc(item.institute)}</span>
                    ${item.score ? `<span style="font-weight:700;color:${c.accent};">${esc(item.score)}</span>` : ""}
                </div>
            `;
            if (isTimeline) {
                return `<div style="position:relative;padding-left:18px;margin-bottom:11px;border-left:2px solid ${c.accent};">
                    <div style="position:absolute;left:-6px;top:4px;width:10px;height:10px;border-radius:50%;background:${c.accent};border:2px solid #fff;"></div>
                    ${content}
                </div>`;
            }
            return `<div style="margin-bottom:10px;">${content}</div>`;
        }).join("");
    }

    function buildEducationTable(eduList, c) {
        const valid = (eduList || []).filter(e => e.degree || e.institute);
        if (!valid.length) return "";
        return `
            <table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-top:6px;">
                <thead>
                    <tr style="background:${c.softBg};color:${c.primary};">
                        <th style="border:1px solid ${c.border};padding:7px 10px;text-align:left;">Qualification / Degree</th>
                        <th style="border:1px solid ${c.border};padding:7px 10px;text-align:left;">Board / University / Institute</th>
                        <th style="border:1px solid ${c.border};padding:7px 10px;text-align:center;width:78px;">Year</th>
                        <th style="border:1px solid ${c.border};padding:7px 10px;text-align:center;width:92px;">Score / %</th>
                    </tr>
                </thead>
                <tbody>
                    ${valid.map(e => `
                        <tr>
                            <td style="border:1px solid ${c.border};padding:7px 10px;font-weight:600;">${esc(e.degree)}</td>
                            <td style="border:1px solid ${c.border};padding:7px 10px;">${esc(e.institute)}</td>
                            <td style="border:1px solid ${c.border};padding:7px 10px;text-align:center;">${esc(e.year)}</td>
                            <td style="border:1px solid ${c.border};padding:7px 10px;text-align:center;font-weight:700;color:${c.accent};">${esc(e.score)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    }

    function buildProjectItems(projList, c) {
        if (!projList || !projList.length) return "";
        return projList.map(p => {
            if (!p.title && !p.desc) return "";
            return `<div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap;">
                    <div style="font-weight:700;font-size:13.6px;color:${c.primary};">${esc(p.title)}</div>
                    ${p.tech ? `<div style="font-size:11.8px;font-weight:600;color:${c.accent};">${esc(p.tech)}</div>` : ""}
                </div>
                ${formatBullets(p.desc, c.accent)}
            </div>`;
        }).join("");
    }

    function buildPersonalDetailsGrid(data, c) {
        const rows = [];
        if (data.fatherName) rows.push(["Father's Name", data.fatherName]);
        if (data.dob) rows.push(["Date of Birth", data.dob]);
        if (data.gender) rows.push(["Gender", data.gender]);
        if (data.maritalStatus) rows.push(["Marital Status", data.maritalStatus]);
        if (data.nationality) rows.push(["Nationality", data.nationality]);
        if (data.languages) rows.push(["Languages Known", data.languages]);
        if (!rows.length) return "";
        return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px 20px;font-size:12.6px;">
            ${rows.map(([k, v]) => `<div><strong style="color:${c.primary};">${k}:</strong> <span style="color:${c.text};">${esc(v)}</span></div>`).join("")}
        </div>`;
    }

    function buildDeclarationHtml(data, c) {
        if (!data.declaration) return "";
        return `
            <div style="margin-top:14px;padding-top:10px;border-top:1px dashed ${c.border};font-size:12px;color:${c.muted};line-height:1.5;">
                <strong style="color:${c.primary};text-transform:uppercase;letter-spacing:0.5px;">Declaration:</strong> ${esc(data.declaration)}
                <div style="display:flex;justify-content:space-between;margin-top:16px;font-weight:700;color:${c.primary};font-size:12.5px;">
                    <span>Place: ${esc(data.location || "India")}</span>
                    <span>(${esc(data.fullName || "Candidate Signature")})</span>
                </div>
            </div>
        `;
    }

    function buildWatermarkHtml(c) {
        return `<div style="margin-top:auto;padding-top:14px;text-align:center;font-size:10.5px;color:${c.muted};opacity:0.65;letter-spacing:0.3px;">
            Created with NationalTypingHub.in
        </div>`;
    }

    // Section Heading Variants
    function secTitle(label, tpl, isSidebar) {
        const c = tpl.colors;
        if (isSidebar) {
            return `<div style="font-size:12.5px;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:${c.sidebarAccent || c.accent};border-bottom:1.5px solid ${c.sidebarAccent || c.accent};padding-bottom:4px;margin:18px 0 10px 0;">${label}</div>`;
        }
        if (tpl.layout === "single-accent") {
            return `<div style="font-size:14px;font-weight:800;text-transform:uppercase;letter-spacing:0.8px;color:${c.primary};border-left:4px solid ${c.accent};padding:2px 0 2px 10px;background:${c.softBg};margin:16px 0 9px 0;">${label}</div>`;
        }
        if (tpl.layout === "tabular-classic") {
            return `<div style="font-size:13.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.6px;color:${c.primary};background:${c.softBg};padding:5px 12px;border-left:4px solid ${c.accent};margin:15px 0 8px 0;">${label}</div>`;
        }
        return `<div style="font-family:${tpl.fontHeading};font-size:14.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.9px;color:${c.primary};border-bottom:2px solid ${c.accent};padding-bottom:4px;margin:16px 0 9px 0;">${label}</div>`;
    }

    // =========================================================
    // 4. MASTER RENDER ENGINE FOR ALL 10 TEMPLATES
    // =========================================================
    function nthRenderResumeHTML(data, templateIndex) {
        const tpl = NTH_RESUME_TEMPLATES[templateIndex] || NTH_RESUME_TEMPLATES[0];
        const c = tpl.colors;
        const isTimeline = tpl.layout === "timeline";
        const skillsArr = (data.skills || "").split(",").map(s => s.trim()).filter(Boolean);
        const certsHtml = formatBullets(data.certifications, c.accent);
        const achHtml = formatBullets(data.achievements, c.accent);

        const typingBadgeHtml = data.typingSpeed ? `
            <div style="background:${c.softBg};border:1px solid ${c.border};border-left:4px solid ${c.accent};padding:8px 12px;border-radius:6px;font-size:12.6px;color:${c.text};margin-top:6px;">
                <strong style="color:${c.primary};">Typing &amp; Computer Proficiency:</strong> ${esc(data.typingSpeed)}
            </div>
        ` : "";

        // ---------------------------------------------------------
        // LAYOUT A: LEFT SIDEBAR (Templates #2 & #8) & RIGHT SIDEBAR (#5)
        // ---------------------------------------------------------
        if (tpl.layout === "left-sidebar" || tpl.layout === "left-sidebar-light" || tpl.layout === "right-sidebar") {
            const isLightSide = tpl.layout === "left-sidebar-light";
            const sidePhoto = buildPhotoHtml(data, c, 108, c.sidebarAccent || c.accent);
            const sidebarCol = `
                <div style="width:255px;flex-shrink:0;background:${c.sidebarBg};color:${c.sidebarText};padding:30px 22px 24px 22px;box-sizing:border-box;display:flex;flex-direction:column;${isLightSide ? `border-right:2px solid ${c.border};` : ""}">
                    ${sidePhoto ? `<div style="display:flex;justify-content:center;margin-bottom:16px;">${sidePhoto}</div>` : ""}
                    <div style="text-align:${sidePhoto ? "center" : "left"};">
                        <div style="font-family:${tpl.fontHeading};font-size:22px;font-weight:800;line-height:1.2;color:${c.sidebarText};">${esc(data.fullName || "Your Name")}</div>
                        ${data.jobTitle ? `<div style="font-size:12.5px;font-weight:600;color:${c.sidebarAccent};margin-top:5px;">${esc(data.jobTitle)}</div>` : ""}
                    </div>

                    ${secTitle("Contact", tpl, true)}
                    ${buildContactStacked(data, c.sidebarText, c.sidebarAccent)}

                    ${skillsArr.length ? `
                        ${secTitle("Key Skills", tpl, true)}
                        ${buildSkillPills(skillsArr, c.badgeBg, c.badgeText, isLightSide ? c.border : "")}
                    ` : ""}

                    ${data.typingSpeed ? `
                        ${secTitle("Typing & Computer", tpl, true)}
                        <div style="font-size:12.2px;line-height:1.5;color:${c.sidebarText};">${esc(data.typingSpeed)}</div>
                    ` : ""}

                    ${data.languages ? `
                        ${secTitle("Languages", tpl, true)}
                        <div style="font-size:12.4px;color:${c.sidebarText};line-height:1.5;">${esc(data.languages)}</div>
                    ` : ""}

                    ${(data.dob || data.fatherName || data.nationality) ? `
                        ${secTitle("Personal Info", tpl, true)}
                        <div style="font-size:12px;color:${c.sidebarMuted};line-height:1.6;">
                            ${data.fatherName ? `<div><strong style="color:${c.sidebarText};">Father:</strong> ${esc(data.fatherName)}</div>` : ""}
                            ${data.dob ? `<div><strong style="color:${c.sidebarText};">DOB:</strong> ${esc(data.dob)}</div>` : ""}
                            ${data.maritalStatus ? `<div><strong style="color:${c.sidebarText};">Status:</strong> ${esc(data.maritalStatus)}</div>` : ""}
                            ${data.nationality ? `<div><strong style="color:${c.sidebarText};">Nationality:</strong> ${esc(data.nationality)}</div>` : ""}
                        </div>
                    ` : ""}
                </div>
            `;

            const mainCol = `
                <div style="flex:1;background:${c.bg};color:${c.text};padding:30px 30px 20px 30px;box-sizing:border-box;display:flex;flex-direction:column;">
                    ${data.summary ? `
                        <div style="font-family:${tpl.fontHeading};font-size:14.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.9px;color:${c.primary};border-bottom:2px solid ${c.accent};padding-bottom:4px;margin:0 0 8px 0;">Career Objective / Summary</div>
                        <div style="font-size:13px;line-height:1.58;color:${c.text};">${esc(data.summary)}</div>
                    ` : ""}

                    ${buildExperienceItems(data.experience, c, false) ? `
                        ${secTitle("Work Experience", tpl, false)}
                        ${buildExperienceItems(data.experience, c, false)}
                    ` : ""}

                    ${buildEducationItems(data.education, c, false) ? `
                        ${secTitle("Education", tpl, false)}
                        ${buildEducationItems(data.education, c, false)}
                    ` : ""}

                    ${buildProjectItems(data.projects, c) ? `
                        ${secTitle("Projects", tpl, false)}
                        ${buildProjectItems(data.projects, c)}
                    ` : ""}

                    ${certsHtml ? `${secTitle("Certifications & Courses", tpl, false)}${certsHtml}` : ""}
                    ${achHtml ? `${secTitle("Achievements", tpl, false)}${achHtml}` : ""}
                    ${buildDeclarationHtml(data, c)}
                    ${buildWatermarkHtml(c)}
                </div>
            `;

            return `
                <div style="width:800px;min-height:1122px;display:flex;background:${c.bg};font-family:${tpl.fontBody};color:${c.text};box-sizing:border-box;">
                    ${tpl.layout === "right-sidebar" ? (mainCol + sidebarCol) : (sidebarCol + mainCol)}
                </div>
            `;
        }

        // ---------------------------------------------------------
        // LAYOUT B: TOP BANNER (Template #3 Corporate & #7 Timeline)
        // ---------------------------------------------------------
        if (tpl.layout === "top-banner" || tpl.layout === "timeline") {
            const photoHtml = buildPhotoHtml(data, c, 94, c.bannerMuted || "#ffffff");
            const banner = `
                <div style="background:${c.bannerBg};color:${c.bannerText};padding:28px 36px;display:flex;justify-content:space-between;align-items:center;gap:22px;border-bottom:4px solid ${c.accent};">
                    <div style="flex:1;min-width:0;">
                        <div style="font-family:${tpl.fontHeading};font-size:30px;font-weight:800;line-height:1.15;color:${c.bannerText};">${esc(data.fullName || "Your Full Name")}</div>
                        ${data.jobTitle ? `<div style="font-size:14.5px;font-weight:600;color:${c.bannerMuted};margin:5px 0 12px 0;">${esc(data.jobTitle)}</div>` : `<div style="height:10px;"></div>`}
                        ${buildContactInline(data, c.bannerText, c.bannerMuted)}
                    </div>
                    ${photoHtml}
                </div>
            `;

            if (tpl.layout === "top-banner") {
                return `
                    <div style="width:800px;min-height:1122px;display:flex;flex-direction:column;background:${c.bg};font-family:${tpl.fontBody};color:${c.text};box-sizing:border-box;">
                        ${banner}
                        <div style="display:flex;gap:26px;padding:24px 36px 20px 36px;flex:1;">
                            <div style="flex:1.45;min-width:0;">
                                ${data.summary ? `${secTitle("Professional Summary", tpl, false)}<div style="font-size:13px;line-height:1.58;">${esc(data.summary)}</div>` : ""}
                                ${buildExperienceItems(data.experience, c, false) ? `${secTitle("Work Experience", tpl, false)}${buildExperienceItems(data.experience, c, false)}` : ""}
                                ${buildProjectItems(data.projects, c) ? `${secTitle("Key Projects", tpl, false)}${buildProjectItems(data.projects, c)}` : ""}
                                ${achHtml ? `${secTitle("Achievements", tpl, false)}${achHtml}` : ""}
                            </div>
                            <div style="flex:0.85;min-width:0;border-left:1.5px solid ${c.border};padding-left:22px;">
                                ${buildEducationItems(data.education, c, false) ? `${secTitle("Education", tpl, false)}${buildEducationItems(data.education, c, false)}` : ""}
                                ${skillsArr.length ? `${secTitle("Core Skills", tpl, false)}${buildSkillPills(skillsArr, c.badgeBg, c.badgeText)}` : ""}
                                ${data.typingSpeed ? `${secTitle("Typing & Computer", tpl, false)}<div style="font-size:12.4px;line-height:1.5;">${esc(data.typingSpeed)}</div>` : ""}
                                ${certsHtml ? `${secTitle("Certifications", tpl, false)}${certsHtml}` : ""}
                                ${data.languages ? `${secTitle("Languages", tpl, false)}<div style="font-size:12.6px;">${esc(data.languages)}</div>` : ""}
                            </div>
                        </div>
                        <div style="padding:0 36px 20px 36px;">
                            ${buildDeclarationHtml(data, c)}
                            ${buildWatermarkHtml(c)}
                        </div>
                    </div>
                `;
            }

            // Template #7: Charcoal & Gold Vertical Timeline
            return `
                <div style="width:800px;min-height:1122px;display:flex;flex-direction:column;background:${c.bg};font-family:${tpl.fontBody};color:${c.text};box-sizing:border-box;">
                    ${banner}
                    <div style="padding:22px 40px 22px 40px;flex:1;display:flex;flex-direction:column;">
                        ${data.summary ? `${secTitle("Profile Summary", tpl, false)}<div style="font-size:13px;line-height:1.58;">${esc(data.summary)}</div>` : ""}
                        ${buildExperienceItems(data.experience, c, true) ? `${secTitle("Experience Timeline", tpl, false)}${buildExperienceItems(data.experience, c, true)}` : ""}
                        ${buildEducationItems(data.education, c, true) ? `${secTitle("Education Timeline", tpl, false)}${buildEducationItems(data.education, c, true)}` : ""}
                        ${skillsArr.length ? `${secTitle("Skills & Expertise", tpl, false)}${buildSkillPills(skillsArr, c.badgeBg, c.badgeText)}` : ""}
                        ${typingBadgeHtml}
                        ${buildProjectItems(data.projects, c) ? `${secTitle("Projects", tpl, false)}${buildProjectItems(data.projects, c)}` : ""}
                        ${certsHtml ? `${secTitle("Certifications", tpl, false)}${certsHtml}` : ""}
                        ${achHtml ? `${secTitle("Achievements", tpl, false)}${achHtml}` : ""}
                        ${buildPersonalDetailsGrid(data, c) ? `${secTitle("Personal Details", tpl, false)}${buildPersonalDetailsGrid(data, c)}` : ""}
                        ${buildDeclarationHtml(data, c)}
                        ${buildWatermarkHtml(c)}
                    </div>
                </div>
            `;
        }

        // ---------------------------------------------------------
        // LAYOUT C: INDIAN GOVT / PSU TABULAR STANDARD (Template #6)
        // ---------------------------------------------------------
        if (tpl.layout === "tabular-classic") {
            const photoHtml = buildPhotoHtml(data, c, 102, c.primary);
            return `
                <div style="width:800px;min-height:1122px;display:flex;flex-direction:column;background:${c.bg};font-family:${tpl.fontBody};color:${c.text};padding:30px 38px 22px 38px;box-sizing:border-box;border:10px solid ${c.softBg};">
                    <div style="text-align:center;font-size:15px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:${c.accent};margin-bottom:12px;border-bottom:2px solid ${c.primary};padding-bottom:6px;">CURRICULUM VITAE / RESUME</div>
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:10px;">
                        <div style="flex:1;">
                            <div style="font-size:26px;font-weight:800;color:${c.primary};line-height:1.2;">${esc(data.fullName || "Your Full Name")}</div>
                            ${data.jobTitle ? `<div style="font-size:14px;font-weight:600;color:${c.accent};margin:3px 0 8px 0;">${esc(data.jobTitle)}</div>` : ""}
                            ${buildContactInline(data, c.text, c.accent)}
                        </div>
                        ${photoHtml}
                    </div>

                    ${data.summary ? `${secTitle("Career Objective", tpl, false)}<div style="font-size:13px;line-height:1.58;">${esc(data.summary)}</div>` : ""}
                    ${buildEducationTable(data.education, c) ? `${secTitle("Academic Qualifications", tpl, false)}${buildEducationTable(data.education, c)}` : ""}
                    ${data.typingSpeed ? `${secTitle("Typing & Computer Qualification", tpl, false)}${typingBadgeHtml}` : ""}
                    ${skillsArr.length ? `${secTitle("Technical & Key Skills", tpl, false)}${buildSkillPills(skillsArr, c.badgeBg, c.badgeText, c.border)}` : ""}
                    ${buildExperienceItems(data.experience, c, false) ? `${secTitle("Work Experience", tpl, false)}${buildExperienceItems(data.experience, c, false)}` : ""}
                    ${buildProjectItems(data.projects, c) ? `${secTitle("Projects / Training", tpl, false)}${buildProjectItems(data.projects, c)}` : ""}
                    ${certsHtml ? `${secTitle("Certifications", tpl, false)}${certsHtml}` : ""}
                    ${achHtml ? `${secTitle("Achievements", tpl, false)}${achHtml}` : ""}
                    ${buildPersonalDetailsGrid(data, c) ? `${secTitle("Personal Details", tpl, false)}${buildPersonalDetailsGrid(data, c)}` : ""}
                    ${buildDeclarationHtml(data, c)}
                    ${buildWatermarkHtml(c)}
                </div>
            `;
        }

        // ---------------------------------------------------------
        // LAYOUT D: COMPACT FRESHER PRO (Template #10 Two-Col Header)
        // ---------------------------------------------------------
        if (tpl.layout === "two-col-header") {
            const photoHtml = buildPhotoHtml(data, c, 86, c.accent);
            return `
                <div style="width:800px;min-height:1122px;display:flex;flex-direction:column;background:${c.bg};font-family:${tpl.fontBody};color:${c.text};padding:30px 38px 22px 38px;box-sizing:border-box;border-top:8px solid ${c.accent};">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding-bottom:14px;border-bottom:2px solid ${c.border};">
                        <div style="display:flex;align-items:center;gap:16px;flex:1.2;">
                            ${photoHtml}
                            <div>
                                <div style="font-size:27px;font-weight:800;color:${c.primary};line-height:1.15;">${esc(data.fullName || "Your Full Name")}</div>
                                ${data.jobTitle ? `<div style="font-size:14px;font-weight:600;color:${c.accent};margin-top:4px;">${esc(data.jobTitle)}</div>` : ""}
                            </div>
                        </div>
                        <div style="flex:0.85;background:${c.softBg};padding:10px 14px;border-radius:8px;border:1px solid ${c.border};">
                            ${buildContactStacked(data, c.text, c.accent)}
                        </div>
                    </div>

                    ${data.summary ? `${secTitle("Career Objective", tpl, false)}<div style="font-size:13px;line-height:1.55;">${esc(data.summary)}</div>` : ""}
                    ${buildEducationItems(data.education, c, false) ? `${secTitle("Education", tpl, false)}${buildEducationItems(data.education, c, false)}` : ""}
                    ${skillsArr.length ? `${secTitle("Skills & Tools", tpl, false)}${buildSkillPills(skillsArr, c.badgeBg, c.badgeText)}` : ""}
                    ${typingBadgeHtml}
                    ${buildProjectItems(data.projects, c) ? `${secTitle("Academic Projects", tpl, false)}${buildProjectItems(data.projects, c)}` : ""}
                    ${buildExperienceItems(data.experience, c, false) ? `${secTitle("Internships & Experience", tpl, false)}${buildExperienceItems(data.experience, c, false)}` : ""}
                    ${certsHtml ? `${secTitle("Certifications", tpl, false)}${certsHtml}` : ""}
                    ${achHtml ? `${secTitle("Achievements & Extracurriculars", tpl, false)}${achHtml}` : ""}
                    ${buildPersonalDetailsGrid(data, c) ? `${secTitle("Personal Details", tpl, false)}${buildPersonalDetailsGrid(data, c)}` : ""}
                    ${buildDeclarationHtml(data, c)}
                    ${buildWatermarkHtml(c)}
                </div>
            `;
        }

        // ---------------------------------------------------------
        // LAYOUT E: SINGLE-COLUMN CLASSIC (#1 Harvard, #9 Burgundy) & TECH ACCENT (#4)
        // ---------------------------------------------------------
        const isCenteredHeader = tpl.layout === "single-classic";
        const photoHtml = buildPhotoHtml(data, c, 86, c.accent);
        const topHeader = isCenteredHeader ? `
            <div style="text-align:center;padding-bottom:14px;border-bottom:${tpl.id === "burgundy_academic" ? `3px double ${c.border}` : `2px solid ${c.border}`};margin-bottom:4px;">
                ${photoHtml ? `<div style="display:flex;justify-content:center;margin-bottom:10px;">${photoHtml}</div>` : ""}
                <div style="font-family:${tpl.fontHeading};font-size:30px;font-weight:800;color:${c.primary};line-height:1.18;">${esc(data.fullName || "Your Full Name")}</div>
                ${data.jobTitle ? `<div style="font-size:14px;font-weight:600;color:${c.accent};margin:4px 0 8px 0;">${esc(data.jobTitle)}</div>` : `<div style="height:6px;"></div>`}
                <div style="display:flex;justify-content:center;">${buildContactInline(data, c.muted, c.accent)}</div>
            </div>
        ` : `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;padding-bottom:14px;border-bottom:2px solid ${c.accent};margin-bottom:4px;">
                <div style="flex:1;">
                    <div style="font-family:${tpl.fontHeading};font-size:29px;font-weight:800;color:${c.primary};line-height:1.15;">${esc(data.fullName || "Your Full Name")}</div>
                    ${data.jobTitle ? `<div style="font-size:14.5px;font-weight:700;color:${c.accent};margin:4px 0 10px 0;">${esc(data.jobTitle)}</div>` : `<div style="height:8px;"></div>`}
                    ${buildContactInline(data, c.muted, c.accent)}
                </div>
                ${photoHtml}
            </div>
        `;

        return `
            <div style="width:800px;min-height:1122px;display:flex;flex-direction:column;background:${c.bg};font-family:${tpl.fontBody};color:${c.text};padding:32px 42px 24px 42px;box-sizing:border-box;">
                ${topHeader}
                ${data.summary ? `${secTitle("Professional Summary", tpl, false)}<div style="font-size:13px;line-height:1.58;">${esc(data.summary)}</div>` : ""}
                ${buildExperienceItems(data.experience, c, false) ? `${secTitle("Work Experience", tpl, false)}${buildExperienceItems(data.experience, c, false)}` : ""}
                ${buildEducationItems(data.education, c, false) ? `${secTitle("Education", tpl, false)}${buildEducationItems(data.education, c, false)}` : ""}
                ${skillsArr.length ? `${secTitle("Technical & Key Skills", tpl, false)}${buildSkillPills(skillsArr, c.badgeBg, c.badgeText)}` : ""}
                ${typingBadgeHtml}
                ${buildProjectItems(data.projects, c) ? `${secTitle("Projects", tpl, false)}${buildProjectItems(data.projects, c)}` : ""}
                ${certsHtml ? `${secTitle("Certifications", tpl, false)}${certsHtml}` : ""}
                ${achHtml ? `${secTitle("Achievements", tpl, false)}${achHtml}` : ""}
                ${buildPersonalDetailsGrid(data, c) ? `${secTitle("Personal Details", tpl, false)}${buildPersonalDetailsGrid(data, c)}` : ""}
                ${buildDeclarationHtml(data, c)}
                ${buildWatermarkHtml(c)}
            </div>
        `;
    }

    global.NTH_RESUME_TEMPLATES = NTH_RESUME_TEMPLATES;
    global.nthRenderResumeHTML = nthRenderResumeHTML;
})(window);
