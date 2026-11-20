/**
 * National Typing Hub - RSSB LDC / JA Hindi MS Word 2013 Efficiency Question Bank
 * File: assets/js/rssb-word-sets.js
 * 3 Complete 15-Question Papers (25 Marks Each | 10 Minutes)
 */
window.RSSB_WORD_SETS = {
    set1: {
        id: "set1",
        name: "Set 1: Official RSSB 2026 Pattern (Library Passage & Table)",
        difficulty: "Exam Level (Most Expected)",
        paragraphs: [
            "अब उनकी कहानी प्रत्येक व्यक्ति जानता है। कम उम्र में उनकी शादी एक बड़े उम्र के आदमी से कर दी गई। अन्ततः उन्होंने प्रताड़ना से भरी अपनी वैवाहिक जिंदगी से बाहर आने का निर्णय किया और अपने बच्चों के साथ दिल्ली पहुंच गईं। वहां उन्हें मुन्शी प्रेमचन्द के नाती के यहां काम मिला।",
            "उन्हें पुस्तकालय की साफ सफाई के दौरान धूल फांकती महाश्वेता देवी और तसलीमा नसरीन की पुस्तकों को पुस्तकालय की नौकरी के दौरान देखने का अवसर मिला। पुस्तकालय की इस कार्यशैली ने उन्हें पढ़ने के लिए प्रोत्साहित किया।",
            "अब वे कलकत्ता में यौनकर्मियों के बच्चों को पढ़ाती हैं। वे उन्हें बांग्ला और हिन्दी सिखाती हैं। बच्चों की माताएँ भी उन्हें अपने जीवन की प्रताड़ना भरी कहानियाँ सुनाती हैं और बच्चों को आगे बढ़ाने के लिए सलाह और मार्गदर्शन मांगती हैं।",
            "अब वह बहुत ही अच्छा तथा सुकून का जीवन व्यतीत कर रही हैं। परोपकार के भाव से किया गया प्रत्येक कार्य आत्मसंतोष प्रदान करता है तथा उनके जीवन से हम सबको प्रेरणा लेनी चाहिए।",
            "राजस्थान कर्मचारी चयन बोर्ड जयपुर द्वारा आयोजित लिपिक ग्रेड द्वितीय एवं कनिष्ठ सहायक परीक्षा में हिन्दी दक्षता परीक्षण का विशेष महत्व है। नियमित अभ्यास से आप राजस्थान में सरकारी सेवा का लक्ष्य प्राप्त कर सकते हैं।"
        ],
        table: {
            headers: ["क्रम संख्या", "शहर का नाम", "पुस्तकालयों की अनुमानित संख्या", "पुस्तकालयों में रखी पुस्तकों की अनुमानित संख्या"],
            rows: [
                ["1", "जयपुर", "50", "500000"],
                ["2", "मुम्बई", "550", "750000"],
                ["3", "कलकत्ता", "800", "600000"],
                ["4", "दिल्ली", "620", "850000"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) की Line Spacing को 1.5 lines सेट करें।",
                solution: "Paragraph 1 पर क्लिक करें ➔ Home Tab ➔ Line Spacing ड्रॉपडाउन ➔ 1.5 चुनें।",
                check: (s) => s.paras[0].lineSpacing === "1.5"
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) का Alignment 'Justify' करें तथा इसे Italic फॉर्मेट दें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Justify आइकन क्लिक करें ➔ Font ग्रुप में 'I' (Italic) क्लिक करें।",
                check: (s) => s.paras[1].align === "justify" && s.paras[1].italic === true
            },
            {
                id: 3, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) पर पीला (Yellow) Text Highlight Color लगाएं।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Highlight Color ड्रॉपडाउन ➔ Yellow चुनें।",
                check: (s) => s.paras[1].highlight === "yellow"
            },
            {
                id: 4, marks: 2.0,
                q: "तृतीय पैराग्राफ (3rd Paragraph) को Bold करें और इसका Font Size 16 pt सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ 'B' (Bold) क्लिक करें ➔ Font Size ड्रॉपडाउन से 16 चुनें।",
                check: (s) => s.paras[2].bold === true && s.paras[2].fontSize === "16pt"
            },
            {
                id: 5, marks: 2.0,
                q: "तृतीय पैराग्राफ (3rd Paragraph) का Left Indent 0.5 inch (0.5\") सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Page Layout Tab ➔ Left Indent ड्रॉपडाउन से 0.5\" चुनें।",
                check: (s) => s.paras[2].leftIndent === "0.5in"
            },
            {
                id: 6, marks: 1.5,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) की Line Spacing को 1.25 lines सेट करें।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Line Spacing ड्रॉपडाउन ➔ 1.25 चुनें।",
                check: (s) => s.paras[3].lineSpacing === "1.25"
            },
            {
                id: 7, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) को Double Underline फॉर्मेट प्रदान करें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ Font ग्रुप में Double Underline (U=) बटन क्लिक करें।",
                check: (s) => s.paras[4].doubleUnderline === true
            },
            {
                id: 8, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'पुस्तकालय' शब्द को Find & Replace द्वारा Double Strikethrough फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace क्लिक करें ➔ Find What में 'पुस्तकालय' लिखें ➔ Format में 'Double Strikethrough' चुनें ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("पुस्तकालय") && a.format === "doubleStrike")
            },
            {
                id: 9, marks: 1.5,
                q: "डॉक्यूमेंट का Page Orientation 'Landscape' तथा Margins 'Narrow' सेट करें।",
                solution: "Page Layout Tab ➔ Orientation ➔ Landscape चुनें ➔ Margins ➔ Narrow चुनें।",
                check: (s) => s.page.orientation === "landscape" && s.page.margins === "narrow"
            },
            {
                id: 10, marks: 1.5,
                q: "संपूर्ण डॉक्यूमेंट पर 1.5 pt चौड़ाई (Width) वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders क्लिक करें ➔ Style 'Box' तथा Width '1.5 pt' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "1.5pt"
            },
            {
                id: 11, marks: 2.0,
                q: "डॉक्यूमेंट में Header जोड़ें, उसमें 'RSSB LDC EXAM' लिखें और उसे Center Align करें।",
                solution: "Insert Tab ➔ Header क्लिक करें ➔ 'RSSB LDC EXAM' टाइप करें ➔ Alignment 'Center' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "RSSB LDC EXAM" && s.page.headerAlign === "center"
            },
            {
                id: 12, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Header Row / Row 1) के सभी सेल्स का Alignment 'Align Center' सेट करें।",
                solution: "टेबल की Row 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Row ➔ Align Center क्लिक करें।",
                check: (s) => s.table.rowStyles[0].align === "center"
            },
            {
                id: 13, marks: 2.0,
                q: "टेबल की तृतीय डेटा पंक्ति (Row 3 - मुम्बई वाली पंक्ति) में 'Light Blue' बैकग्राउंड Shading लगाएं।",
                solution: "टेबल की Row 3 (मुम्बई) पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ड्रॉपडाउन ➔ Light Blue चुनें।",
                check: (s) => s.table.rowStyles[2].shading === "lightblue"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल के द्वितीय कॉलम (Column 2 - शहर का नाम) के सभी सेल्स का Alignment 'Align Center Right' सेट करें।",
                solution: "टेबल के Column 2 में किसी सेल पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Align Center Right क्लिक करें।",
                check: (s) => s.table.colStyles[1].align === "right"
            },
            {
                id: 15, marks: 1.5,
                q: "पूरी टेबल पर Solid 'All Borders' लागू करें (Color: Black, Width: 1.5 pt)।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Black', Weight '1.5 pt' चुनें ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderWidth === "1.5pt"
            }
        ]
    },

    set2: {
        id: "set2",
        name: "Set 2: Standard Merit Paper (Indents, Shading & Page Setup)",
        difficulty: "Medium-Hard",
        paragraphs: [
            "राजस्थान भारत का क्षेत्रफल की दृष्टि से सबसे बड़ा राज्य है। इसकी राजधानी जयपुर को गुलाबी नगरी के नाम से जाना जाता है। प्रशासनिक दक्षता बढ़ाने के लिए राज्य सरकार डिजिटल सेवाओं को बढ़ावा दे रही है।",
            "कनिष्ठ सहायक एवं लिपिक ग्रेड द्वितीय सरकारी कार्यालयों की रीढ़ होते हैं। पत्राचार, फाइल संधारण और डेटा प्रविष्टि जैसे महत्वपूर्ण कार्य इन्हीं कर्मचारियों द्वारा संपादित किए जाते हैं।",
            "दक्षता परीक्षा में शुद्धता एवं समय प्रबंधन दोनों आवश्यक हैं। अभ्यर्थियों को केवल उन्हीं निर्देशों का पालन करना चाहिए जो प्रश्न पत्र में स्पष्ट रूप से पूछे गए हैं।",
            "डिजिटल राजस्थान अभियान के अंतर्गत राज्य के सभी विभागों में ई-फाइल प्रणाली और राजकाज पोर्टल का उपयोग अनिवार्य किया गया है। इससे कार्यप्रणाली पारदर्शी और तेज हुई है।",
            "समय का सदुपयोग ही सफलता की कुंजी है। जो अभ्यर्थी प्रतिदिन दस मिनट टंकण एवं दक्षता का अभ्यास करते हैं, वे अंतिम मेरिट सूची में उत्कृष्ट स्थान प्राप्त करते हैं।"
        ],
        table: {
            headers: ["संभाग कोड", "संभाग का नाम", "कुल जिले", "प्रमुख कार्यालय"],
            rows: [
                ["RJ01", "जयपुर", "7", "शासन सचिवालय"],
                ["RJ02", "जोधपुर", "6", "उच्च न्यायालय"],
                ["RJ03", "उदयपुर", "5", "जनजाति आयोग"],
                ["RJ04", "कोटा", "4", "शिक्षा निदेशालय"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Alignment 'Justify' करें तथा Font Family 'Arial' सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Justify क्लिक करें ➔ Font Family ड्रॉपडाउन से Arial चुनें।",
                check: (s) => s.paras[0].align === "justify" && s.paras[0].fontFamily === "Arial"
            },
            {
                id: 2, marks: 2.0,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) का Left Indent 1.25 inch (1.25\") सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Page Layout Tab ➔ Left Indent ड्रॉपडाउन से 1.25\" चुनें।",
                check: (s) => s.paras[1].leftIndent === "1.25in"
            },
            {
                id: 3, marks: 2.0,
                q: "तृतीय पैराग्राफ (3rd Paragraph) को Italic तथा Double Underline फॉर्मेट दें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ 'I' (Italic) और 'U=' (Double Underline) दोनों आइकन क्लिक करें।",
                check: (s) => s.paras[2].italic === true && s.paras[2].doubleUnderline === true
            },
            {
                id: 4, marks: 2.0,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) की Line Spacing 1.35 lines सेट करें।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Line Spacing ड्रॉपडाउन ➔ 1.35 चुनें।",
                check: (s) => s.paras[3].lineSpacing === "1.35"
            },
            {
                id: 5, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) को Bold करें और पीला (Yellow) Highlight Color दें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ 'B' (Bold) क्लिक करें ➔ Highlight Color से Yellow चुनें।",
                check: (s) => s.paras[4].bold === true && s.paras[4].highlight === "yellow"
            },
            {
                id: 6, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'राजस्थान' शब्द को Find & Replace द्वारा Double Strikethrough फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace क्लिक करें ➔ Find What में 'राजस्थान' लिखें ➔ Format 'Double Strikethrough' चुनें ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("राजस्थान") && a.format === "doubleStrike")
            },
            {
                id: 7, marks: 1.5,
                q: "डॉक्यूमेंट का Paper Size 'A4' तथा Orientation 'Landscape' सेट करें।",
                solution: "Page Layout Tab ➔ Size 'A4' चुनें ➔ Orientation 'Landscape' चुनें।",
                check: (s) => s.page.size === "A4" && s.page.orientation === "landscape"
            },
            {
                id: 8, marks: 2.0,
                q: "डॉक्यूमेंट में Header जोड़ें: 'GOVERNMENT OF RAJASTHAN' लिखें और उसे Center Align करें।",
                solution: "Insert Tab ➔ Header क्लिक करें ➔ 'GOVERNMENT OF RAJASTHAN' टाइप करें ➔ Center Align चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "GOVERNMENT OF RAJASTHAN" && s.page.headerAlign === "center"
            },
            {
                id: 9, marks: 1.5,
                q: "संपूर्ण डॉक्यूमेंट पर 3 pt चौड़ाई (Width) वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders ➔ Style 'Box', Width '3 pt' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "3pt"
            },
            {
                id: 10, marks: 1.5,
                q: "पूरे डॉक्यूमेंट में 'CONFIDENTIAL' टेक्स्ट का Diagonal Watermark लगाएं।",
                solution: "Design Tab ➔ Watermark क्लिक करें ➔ Text में 'CONFIDENTIAL' लिखें ➔ Diagonal चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.watermarkText.trim().toUpperCase() === "CONFIDENTIAL" && s.page.watermarkDiagonal === true
            },
            {
                id: 11, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1 - Header Row) को 'Align Top Center' अलाइनमेंट दें।",
                solution: "टेबल की Row 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Align Top Center क्लिक करें।",
                check: (s) => s.table.rowStyles[0].align === "top-center"
            },
            {
                id: 12, marks: 1.5,
                q: "टेबल की तृतीय पंक्ति (Row 3 - जोधपुर वाली पंक्ति) में 'Light Green' Shading भरें।",
                solution: "टेबल की Row 3 (जोधपुर) पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Green चुनें।",
                check: (s) => s.table.rowStyles[2].shading === "lightgreen"
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की द्वितीय पंक्ति (Row 2 - जयपुर वाली पंक्ति) में 'Light Grey' Shading भरें।",
                solution: "टेबल की Row 2 (जयपुर) पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Grey चुनें।",
                check: (s) => s.table.rowStyles[1].shading === "lightgrey"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की अंतिम पंक्ति (Row 5 - कोटा वाली पंक्ति) के टेक्स्ट को Bold करें।",
                solution: "टेबल की Row 5 (कोटा) पर क्लिक करें ➔ Home Tab ➔ 'B' (Bold) आइकन क्लिक करें।",
                check: (s) => s.table.rowStyles[4].bold === true
            },
            {
                id: 15, marks: 1.5,
                q: "पूरी टेबल पर Red कलर और 1.5 pt चौड़ाई वाला 'All Borders' लागू करें।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Red', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "red" && s.table.borderWidth === "1.5pt"
            }
        ]
    },

    set3: {
        id: "set3",
        name: "Set 3: Advanced Layout Paper (Watermark, Footnote, Columns & Drop Cap)",
        difficulty: "Advanced / High Merit",
        paragraphs: [
            "राजस्थान कर्मचारी चयन बोर्ड द्वारा आयोजित लिपिक भर्ती के द्वितीय चरण में एमएस वर्ड के उन्नत विकल्पों का परीक्षण किया जाता है। Rajasthan Portal के माध्यम से सभी आधिकारिक सूचनाएं जारी की जाती हैं।",
            "सरकारी दस्तावेजों की सुरक्षा और मानकीकरण हेतु वॉटरमार्क, हेडर, फुटर तथा फुटनोट का सही प्रयोग आवश्यक है। प्रत्येक अनुभाग की सेटिंग्स सावधानीपूर्वक की जानी चाहिए।",
            "तीसरे पैराग्राफ से पहले पेज ब्रेक लगाकर दस्तावेज को अगले पृष्ठ पर व्यवस्थित किया जा सकता है। यह आधिकारिक रिपोर्ट और आदेश तैयार करने में अत्यंत उपयोगी है।",
            "समाचार पत्रों और राजपत्र अधिसूचनाओं में सामग्री को दो कॉलम में विभाजित किया जाता है। दो कॉलम के बीच विभाजन रेखा लगाने से पाठ अधिक स्पष्ट और पठनीय हो जाता है।",
            "अंतिम पैराग्राफ में ड्रॉप कैप तथा आधिकारिक वेबसाइट लिंक (Click Here) का उपयोग दस्तावेज को पेशेवर स्वरूप प्रदान करता है। किसी भी शॉर्टकट कुंजी के बिना रिबन से कार्य करना ही इस परीक्षा की वास्तविक चुनौती है।"
        ],
        table: {
            headers: ["dept_code", "विभाग का नाम", "post_name", "स्वीकृत पद"],
            rows: [
                ["fin_01", "वित्त विभाग", "ldc_grade2", "120"],
                ["rev_02", "राजस्व मंडल", "jr_asst", "240"],
                ["edu_03", "शिक्षा विभाग", "clerk_gr2", "310"],
                ["pwd_04", "सार्वजनिक निर्माण", "office_asst", "95"]
            ]
        },
        questions: [
            {
                id: 1, marks: 2.0,
                q: "संपूर्ण डॉक्यूमेंट में लाल रंग (Red) का Diagonal Text Watermark लगाएं जिसका टेक्स्ट 'CONFIDENTIAL' हो।",
                solution: "Design Tab ➔ Watermark ➔ Text 'CONFIDENTIAL', Color 'Red', Diagonal चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.watermarkText.trim().toUpperCase() === "CONFIDENTIAL" && s.page.watermarkColor === "red" && s.page.watermarkDiagonal === true
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) में Character Spacing को 'Expanded 2 pt' सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Character Spacing ड्रॉपडाउन से 'Expanded 2 pt' चुनें।",
                check: (s) => s.paras[1].charSpacing === "2pt"
            },
            {
                id: 3, marks: 2.0,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) के अंत में Footnote जोड़ें: 'Based on official RSSB data.'",
                solution: "Paragraph 2 चुनें ➔ References Tab ➔ Insert Footnote क्लिक करें ➔ टेक्स्ट टाइप करें ➔ Apply क्लिक करें।",
                check: (s) => s.page.footnotes.some(f => f.paraIndex === 1 && f.text.toLowerCase().includes("rssb"))
            },
            {
                id: 4, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) के प्रारंभ में 'Page Break' डालें।",
                solution: "Paragraph 3 चुनें ➔ Insert Tab ➔ Page Break आइकन क्लिक करें।",
                check: (s) => s.paras[2].pageBreakBefore === true
            },
            {
                id: 5, marks: 2.0,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) को Two-Column लेआउट में बदलें तथा उनके बीच 'Line Between' सक्षम करें।",
                solution: "Paragraph 4 चुनें ➔ Page Layout Tab ➔ Columns ड्रॉपडाउन ➔ 'Two Columns + Line Between' चुनें।",
                check: (s) => s.paras[3].columns === 2 && s.paras[3].columnRule === true
            },
            {
                id: 6, marks: 2.0,
                q: "पंचम पैराग्राफ (5th Paragraph) पर 'Dropped' (3 Lines) Drop Cap लागू करें।",
                solution: "Paragraph 5 चुनें ➔ Insert Tab ➔ Drop Cap ➔ 'Dropped (3 Lines)' चुनें।",
                check: (s) => s.paras[4].dropCap === true
            },
            {
                id: 7, marks: 2.0,
                q: "पंचम पैराग्राफ के शब्द 'Click Here' पर 'https://rsmssb.rajasthan.gov.in' का Hyperlink जोड़ें।",
                solution: "Paragraph 5 चुनें ➔ Insert Tab ➔ Hyperlink क्लिक करें ➔ Text 'Click Here' और URL 'https://rsmssb.rajasthan.gov.in' डालें ➔ Apply क्लिक करें।",
                check: (s) => s.page.hyperlinks.some(h => h.text.toLowerCase().includes("click here") && h.url.toLowerCase().includes("rsmssb.rajasthan.gov.in"))
            },
            {
                id: 8, marks: 1.5,
                q: "डॉक्यूमेंट के Left में 0.5 inch (0.5\") का Custom Gutter Margin सेट करें।",
                solution: "Page Layout Tab ➔ Margins ड्रॉपडाउन ➔ 'Custom Gutter 0.5\" Left' चुनें।",
                check: (s) => s.page.gutter === "0.5in"
            },
            {
                id: 9, marks: 1.5,
                q: "डॉक्यूमेंट में 'Restart Each Page' विकल्प के साथ Line Numbers सक्रिय करें।",
                solution: "Page Layout Tab ➔ Line Numbers ➔ 'Restart Each Page' चुनें।",
                check: (s) => s.page.lineNumbers === "restart"
            },
            {
                id: 10, marks: 1.5,
                q: "डॉक्यूमेंट के Header में 'OFFICIAL USE ONLY' लिखें और उसे Right Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'OFFICIAL USE ONLY' टाइप करें ➔ Alignment 'Right' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "OFFICIAL USE ONLY" && s.page.headerAlign === "right"
            },
            {
                id: 11, marks: 2.0,
                q: "डॉक्यूमेंट के Footer में Center Aligned Page Number जोड़ें जिसकी गिनती '5' से शुरू (Start at: 5) हो।",
                solution: "Insert Tab ➔ Page Number क्लिक करें ➔ Position 'Bottom Center' और 'Start at: 5' भरें ➔ Apply क्लिक करें।",
                check: (s) => s.page.pageNumberEnabled === true && Number(s.page.pageNumberStart) === 5
            },
            {
                id: 12, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1) के सभी सेल्स को Merge करें।",
                solution: "टेबल की Row 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ 'Merge Row Cells' क्लिक करें।",
                check: (s) => s.table.row1Merged === true
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल के Column 1 (dept_code) और Column 3 (post_name) के टेक्स्ट को UPPERCASE में बदलें।",
                solution: "Column 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Home Tab ➔ Change Case ➔ UPPERCASE (इसी प्रकार Column 3 पर करें)।",
                check: (s) => s.table.colStyles[0].textTransform === "uppercase" && s.table.colStyles[2].textTransform === "uppercase"
            },
            {
                id: 14, marks: 1.5,
                q: "पूरी टेबल पर Red कलर और 1.5 pt चौड़ाई वाला Solid 'All Borders' लगाएं।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Red', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "red" && s.table.borderWidth === "1.5pt"
            },
            {
                id: 15, marks: 1.0,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Font Size 16 pt सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Font Size ड्रॉपडाउन से 16 pt चुनें।",
                check: (s) => s.paras[0].fontSize === "16pt"
            }
        ]
    }
};
