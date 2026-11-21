/**
 * National Typing Hub - RSSB LDC / JA Hindi MS Word 2013 Efficiency Question Bank
 * File: assets/js/rssb-word-sets.js
 * 10 Complete 15-Question Papers (25 Marks Each | 10 Minutes)
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
    },

    set4: {
        id: "set4",
        name: "Set 4: Simple Practice Paper (जल संरक्षण एवं स्वच्छता अभियान)",
        difficulty: "Simple",
        paragraphs: [
            "जल ही जीवन है और इसका संरक्षण प्रत्येक नागरिक का प्रथम कर्तव्य है। राजस्थान जैसे मरुस्थलीय प्रदेश में वर्षा जल संचयन की परंपरा प्राचीन काल से चली आ रही है।",
            "स्वच्छ भारत अभियान के माध्यम से शहरों और गांवों में साफ-सफाई के प्रति जन-जागरूकता बढ़ी है। कचरा प्रबंधन एवं प्लास्टिक मुक्त समाज बनाना आज की प्रमुख आवश्यकता है।",
            "तालाब, बावड़ी और कुओं का जीर्णोद्धार करने से भूजल स्तर में उल्लेखनीय सुधार होता है। स्थानीय निकायों द्वारा प्रत्येक वार्ड में स्वच्छता समितियां गठित की गई हैं।",
            "विद्यालयों में बच्चों को जल बचाने और स्वच्छ वातावरण बनाए रखने की शिक्षा दी जा रही है। छोटे-छोटे प्रयासों से हम पर्यावरण को सुरक्षित और हरा-भरा रख सकते हैं।",
            "यदि प्रत्येक परिवार प्रतिदिन अनावश्यक जल की बर्बादी रोके, तो आने वाली पीढ़ियों के लिए पर्याप्त पेयजल उपलब्ध रहेगा। स्वच्छता और जल संरक्षण ही स्वस्थ समाज का आधार हैं।"
        ],
        table: {
            headers: ["क्रम संख्या", "जिला का नाम", "निर्मित जल संरचनाएं", "लाभान्वित गांव"],
            rows: [
                ["1", "जयपुर", "145", "320"],
                ["2", "जोधपुर", "180", "410"],
                ["3", "बीकानेर", "110", "260"],
                ["4", "अजमेर", "95", "195"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) को Bold करें।",
                solution: "Paragraph 1 पर क्लिक करें ➔ Home Tab ➔ 'B' (Bold) आइकन क्लिक करें।",
                check: (s) => s.paras[0].bold === true
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) का Alignment 'Justify' सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Paragraph ग्रुप में Justify आइकन क्लिक करें।",
                check: (s) => s.paras[1].align === "justify"
            },
            {
                id: 3, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) की Line Spacing 1.5 lines सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Line Spacing ड्रॉपडाउन ➔ 1.5 चुनें।",
                check: (s) => s.paras[1].lineSpacing === "1.5"
            },
            {
                id: 4, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) को Italic फॉर्मेट दें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ 'I' (Italic) आइकन क्लिक करें।",
                check: (s) => s.paras[2].italic === true
            },
            {
                id: 5, marks: 2.0,
                q: "तृतीय पैराग्राफ (3rd Paragraph) का Font Size 14 pt तथा Left Indent 0.5 inch (0.5\") सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ Font Size 14 pt ➔ Page Layout Tab ➔ Left Indent 0.5\" चुनें।",
                check: (s) => s.paras[2].fontSize === "14pt" && s.paras[2].leftIndent === "0.5in"
            },
            {
                id: 6, marks: 1.5,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) पर पीला (Yellow) Highlight Color लगाएं।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Highlight Color ड्रॉपडाउन ➔ Yellow चुनें।",
                check: (s) => s.paras[3].highlight === "yellow"
            },
            {
                id: 7, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) को Double Underline फॉर्मेट दें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ Double Underline (U=) बटन क्लिक करें।",
                check: (s) => s.paras[4].doubleUnderline === true
            },
            {
                id: 8, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'स्वच्छता' शब्द को Find & Replace द्वारा Bold फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace क्लिक करें ➔ Find What में 'स्वच्छता' लिखें ➔ Format 'Bold' चुनें ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("स्वच्छता") && a.format === "bold")
            },
            {
                id: 9, marks: 1.5,
                q: "डॉक्यूमेंट का Paper Size 'A4' सेट करें।",
                solution: "Page Layout Tab ➔ Size ड्रॉपडाउन ➔ A4 चुनें।",
                check: (s) => s.page.size === "A4"
            },
            {
                id: 10, marks: 2.0,
                q: "डॉक्यूमेंट के Header में 'JAL SANRAKSHAN' लिखें और उसे Center Align करें।",
                solution: "Insert Tab ➔ Header क्लिक करें ➔ 'JAL SANRAKSHAN' टाइप करें ➔ Center Align चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "JAL SANRAKSHAN" && s.page.headerAlign === "center"
            },
            {
                id: 11, marks: 2.0,
                q: "संपूर्ण डॉक्यूमेंट पर 1.5 pt चौड़ाई वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders ➔ Setting 'Box', Width '1.5 pt' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "1.5pt"
            },
            {
                id: 12, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1 - Header Row) को Bold करें और 'Align Center' सेट करें।",
                solution: "Row 1 चुनें ➔ Home Tab ➔ Bold क्लिक करें ➔ Table Tools (Layout Tab) ➔ Align Center क्लिक करें।",
                check: (s) => s.table.rowStyles[0].bold === true && s.table.rowStyles[0].align === "center"
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की द्वितीय पंक्ति (Row 2 - जयपुर) में 'Light Blue' Shading भरें।",
                solution: "Row 2 (जयपुर) पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Blue चुनें।",
                check: (s) => s.table.rowStyles[1].shading === "lightblue"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की चतुर्थ पंक्ति (Row 4 - बीकानेर) में 'Light Grey' Shading भरें।",
                solution: "Row 4 (बीकानेर) पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Grey चुनें।",
                check: (s) => s.table.rowStyles[3].shading === "lightgrey"
            },
            {
                id: 15, marks: 2.0,
                q: "पूरी टेबल पर Black कलर और 1.5 pt चौड़ाई वाला 'All Borders' लगाएं।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Black', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "black" && s.table.borderWidth === "1.5pt"
            }
        ]
    },

    set5: {
        id: "set5",
        name: "Set 5: Simple Practice Paper (राजस्थान पर्यटन एवं ऐतिहासिक धरोहर)",
        difficulty: "Simple",
        paragraphs: [
            "राजस्थान अपनी समृद्ध संस्कृति, भव्य किलों और ऐतिहासिक महलों के कारण विश्व भर के पर्यटकों के आकर्षण का केंद्र है। पधारो म्हारे देश यहां की प्रसिद्ध अतिथि परंपरा है।",
            "जयपुर का आमेर किला, हवा महल और जंतर मंतर यूनेस्को की विश्व धरोहर सूची में शामिल हैं। प्रतिवर्ष लाखों देशी एवं विदेशी सैलानी यहां भ्रमण के लिए आते हैं।",
            "उदयपुर को झीलों की नगरी कहा जाता है, जबकि जैसलमेर अपने सुनहरे रेतीले धोरों और सोनार किले के लिए प्रसिद्ध है। जोधपुर का मेहरानगढ़ दुर्ग स्थापत्य कला का अद्भुत उदाहरण है।",
            "पर्यटन उद्योग से राज्य की अर्थव्यवस्था को बड़ी मजबूती मिलती है और स्थानीय हस्तशिल्प, होटल व परिवहन क्षेत्र में रोजगार के नए अवसर उत्पन्न होते हैं।",
            "हम सभी का दायित्व है कि इन ऐतिहासिक स्मारकों को स्वच्छ रखें और आने वाली पीढ़ियों के लिए अपनी गौरवशाली विरासत का संरक्षण करें।"
        ],
        table: {
            headers: ["क्र.सं.", "पर्यटन स्थल", "प्रमुख जिला", "प्रसिद्ध पहचान"],
            rows: [
                ["1", "हवा महल", "जयपुर", "गुलाबी नगरी"],
                ["2", "पिछोला झील", "उदयपुर", "झीलों की नगरी"],
                ["3", "सोनार किला", "जैसलमेर", "स्वर्ण नगरी"],
                ["4", "मेहरानगढ़", "जोधपुर", "सूर्य नगरी"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Alignment 'Center' सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Center Align बटन क्लिक करें।",
                check: (s) => s.paras[0].align === "center"
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) का Font Size 16 pt सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Font Size ड्रॉपडाउन से 16 pt चुनें।",
                check: (s) => s.paras[1].fontSize === "16pt"
            },
            {
                id: 3, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) की Line Spacing 1.25 lines सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ Line Spacing ड्रॉपडाउन ➔ 1.25 चुनें।",
                check: (s) => s.paras[2].lineSpacing === "1.25"
            },
            {
                id: 4, marks: 2.0,
                q: "तृतीय पैराग्राफ (3rd Paragraph) को Bold तथा Italic दोनों फॉर्मेट दें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ 'B' (Bold) और 'I' (Italic) दोनों आइकन क्लिक करें।",
                check: (s) => s.paras[2].bold === true && s.paras[2].italic === true
            },
            {
                id: 5, marks: 1.5,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) पर हल्का हरा (Light Green) Highlight Color लगाएं।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Highlight Color ड्रॉपडाउन ➔ Light Green चुनें।",
                check: (s) => s.paras[3].highlight === "lightgreen"
            },
            {
                id: 6, marks: 1.5,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) का Left Indent 0.5 inch (0.5\") सेट करें।",
                solution: "Paragraph 4 चुनें ➔ Page Layout Tab ➔ Left Indent ➔ 0.5\" चुनें।",
                check: (s) => s.paras[3].leftIndent === "0.5in"
            },
            {
                id: 7, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) का Alignment 'Justify' करें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ Justify बटन क्लिक करें।",
                check: (s) => s.paras[4].align === "justify"
            },
            {
                id: 8, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'राजस्थान' शब्द को Find & Replace द्वारा Italic फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace ➔ Find What में 'राजस्थान' लिखें ➔ Format 'Italic' चुनें ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("राजस्थान") && a.format === "italic")
            },
            {
                id: 9, marks: 1.5,
                q: "डॉक्यूमेंट का Margins 'Narrow' सेट करें।",
                solution: "Page Layout Tab ➔ Margins ड्रॉपडाउन ➔ Narrow चुनें।",
                check: (s) => s.page.margins === "narrow"
            },
            {
                id: 10, marks: 1.5,
                q: "डॉक्यूमेंट का Page Orientation 'Landscape' सेट करें।",
                solution: "Page Layout Tab ➔ Orientation ड्रॉपडाउन ➔ Landscape चुनें।",
                check: (s) => s.page.orientation === "landscape"
            },
            {
                id: 11, marks: 2.0,
                q: "डॉक्यूमेंट में Header जोड़ें: 'RAJASTHAN TOURISM' लिखें और उसे Right Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'RAJASTHAN TOURISM' टाइप करें ➔ Alignment 'Right' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "RAJASTHAN TOURISM" && s.page.headerAlign === "right"
            },
            {
                id: 12, marks: 2.0,
                q: "डॉक्यूमेंट के Footer में Page Number जोड़ें जिसकी गिनती '1' से शुरू (Start at: 1) हो।",
                solution: "Insert Tab ➔ Page Number ➔ Start at: 1 रखें ➔ Apply Page Number क्लिक करें।",
                check: (s) => s.page.pageNumberEnabled === true && Number(s.page.pageNumberStart) === 1
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1) में 'Light Grey' Shading भरें।",
                solution: "Row 1 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Grey चुनें।",
                check: (s) => s.table.rowStyles[0].shading === "lightgrey"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की तृतीय पंक्ति (Row 3 - पिछोला झील) में 'Light Green' Shading भरें।",
                solution: "Row 3 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Green चुनें।",
                check: (s) => s.table.rowStyles[2].shading === "lightgreen"
            },
            {
                id: 15, marks: 2.0,
                q: "टेबल के प्रथम कॉलम (Column 1 - क्र.सं.) का Alignment 'Align Center' सेट करें।",
                solution: "Column 1 के किसी सेल पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Align Center क्लिक करें।",
                check: (s) => s.table.colStyles[0].align === "center"
            }
        ]
    },

    set6: {
        id: "set6",
        name: "Set 6: Easy-Medium Paper (डिजिटल इंडिया एवं ई-मित्र सेवाएं)",
        difficulty: "Easy-Medium",
        paragraphs: [
            "डिजिटल इंडिया कार्यक्रम ने देश में सरकारी सेवाओं को नागरिकों तक सरलता और पारदर्शिता से पहुंचाने का कार्य किया है। अब अधिकांश आवेदन ऑनलाइन माध्यम से किए जा सकते हैं।",
            "राजस्थान में ई-मित्र कियोस्क प्रणाली नागरिकों के लिए वरदान साबित हुई है। जन्म प्रमाण पत्र, मूल निवास, जाति प्रमाण पत्र और बिजली-पानी के बिल का भुगतान एक ही छत के नीचे संभव है।",
            "जन आधार कार्ड और एसएसओ पोर्टल (SSO Portal) के माध्यम से राज्य की सभी जनकल्याणकारी योजनाओं का सीधा लाभ पात्र परिवारों के बैंक खातों में पहुंचता है।",
            "ऑनलाइन सेवाओं के विस्तार से कार्यालयों में कागज की खपत कम हुई है तथा आमजन के समय और धन दोनों की बचत हो रही है।",
            "डिजिटल साक्षरता को बढ़ावा देने के लिए ग्रामीण क्षेत्रों में आरएससीआईटी (RSCIT) जैसे कंप्यूटर प्रशिक्षण पाठ्यक्रम सफलतापूर्वक संचालित किए जा रहे हैं।"
        ],
        table: {
            headers: ["service_id", "ई-मित्र सेवा", "निर्धारित समय", "शुल्क स्थिति"],
            rows: [
                ["em_101", "मूल निवास प्रमाण पत्र", "7 कार्य दिवस", "न्यूनतम शुल्क"],
                ["em_102", "जाति प्रमाण पत्र", "7 कार्य दिवस", "न्यूनतम शुल्क"],
                ["em_103", "बिजली बिल भुगतान", "तत्काल", "निःशुल्क"],
                ["em_104", "राशन कार्ड संशोधन", "15 कार्य दिवस", "न्यूनतम शुल्क"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Font Family 'Arial' और Alignment 'Justify' सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Font Family 'Arial' ➔ Justify क्लिक करें।",
                check: (s) => s.paras[0].fontFamily === "Arial" && s.paras[0].align === "justify"
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) की Line Spacing 1.5 lines सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Line Spacing ➔ 1.5 चुनें।",
                check: (s) => s.paras[1].lineSpacing === "1.5"
            },
            {
                id: 3, marks: 2.0,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) को Bold करें और पीला (Yellow) Highlight Color लगाएं।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ 'B' (Bold) ➔ Highlight Color 'Yellow' चुनें।",
                check: (s) => s.paras[1].bold === true && s.paras[1].highlight === "yellow"
            },
            {
                id: 4, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) का Font Size 14 pt सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ Font Size ड्रॉपडाउन से 14 pt चुनें।",
                check: (s) => s.paras[2].fontSize === "14pt"
            },
            {
                id: 5, marks: 2.0,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) का Left Indent 1.25 inch (1.25\") सेट करें।",
                solution: "Paragraph 4 चुनें ➔ Page Layout Tab ➔ Left Indent ड्रॉपडाउन से 1.25\" चुनें।",
                check: (s) => s.paras[3].leftIndent === "1.25in"
            },
            {
                id: 6, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) को Italic तथा Double Underline फॉर्मेट दें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ 'I' (Italic) और 'U=' (Double Underline) क्लिक करें।",
                check: (s) => s.paras[4].italic === true && s.paras[4].doubleUnderline === true
            },
            {
                id: 7, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'ई-मित्र' शब्द को Find & Replace द्वारा Double Strikethrough फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace ➔ Find What में 'ई-मित्र' लिखें ➔ Format 'Double Strikethrough' ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("ई-मित्र") && a.format === "doubleStrike")
            },
            {
                id: 8, marks: 1.5,
                q: "डॉक्यूमेंट का Paper Size 'A4' तथा Margins 'Narrow' सेट करें।",
                solution: "Page Layout Tab ➔ Size 'A4' ➔ Margins 'Narrow' चुनें।",
                check: (s) => s.page.size === "A4" && s.page.margins === "narrow"
            },
            {
                id: 9, marks: 1.5,
                q: "पूरे डॉक्यूमेंट पर 1.5 pt चौड़ाई वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders ➔ Setting 'Box', Width '1.5 pt' ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "1.5pt"
            },
            {
                id: 10, marks: 2.0,
                q: "डॉक्यूमेंट में 'DIGITAL RAJASTHAN' टेक्स्ट का Diagonal Watermark लगाएं।",
                solution: "Design Tab ➔ Watermark ➔ Text 'DIGITAL RAJASTHAN', Layout 'Diagonal' चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.watermarkText.trim().toUpperCase() === "DIGITAL RAJASTHAN" && s.page.watermarkDiagonal === true
            },
            {
                id: 11, marks: 1.5,
                q: "डॉक्यूमेंट के Header में 'E-MITRA PORTAL' लिखें और उसे Left Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'E-MITRA PORTAL' टाइप करें ➔ Align Left चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "E-MITRA PORTAL" && s.page.headerAlign === "left"
            },
            {
                id: 12, marks: 2.0,
                q: "टेबल के प्रथम कॉलम (Column 1 - service_id) के टेक्स्ट को UPPERCASE में बदलें।",
                solution: "Column 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Home Tab ➔ Change Case ➔ UPPERCASE चुनें।",
                check: (s) => s.table.colStyles[0].textTransform === "uppercase"
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1) का Alignment 'Align Top Center' सेट करें।",
                solution: "Row 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Row ➔ Align Top Center क्लिक करें।",
                check: (s) => s.table.rowStyles[0].align === "top-center"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की पंचम पंक्ति (Row 5 - राशन कार्ड) में 'Light Blue' Shading लगाएं।",
                solution: "Row 5 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Blue चुनें।",
                check: (s) => s.table.rowStyles[4].shading === "lightblue"
            },
            {
                id: 15, marks: 1.5,
                q: "पूरी टेबल पर Black कलर और 1.5 pt चौड़ाई वाला 'All Borders' लागू करें।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Black', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "black" && s.table.borderWidth === "1.5pt"
            }
        ]
    },

    set7: {
        id: "set7",
        name: "Set 7: Easy-Medium Paper (शिक्षा का महत्व एवं विद्यालय विकास)",
        difficulty: "Easy-Medium",
        paragraphs: [
            "शिक्षा किसी भी राष्ट्र के सामाजिक और आर्थिक विकास की सबसे मजबूत नींव है। शिक्षित नागरिक न केवल अपने परिवार का, बल्कि पूरे समाज का मार्गदर्शन करता है।",
            "सरकारी विद्यालयों में गुणवत्तापूर्ण शिक्षा सुनिश्चित करने के लिए स्मार्ट क्लासरूम, कंप्यूटर लैब और समृद्ध पुस्तकालयों की स्थापना की जा रही है।",
            "बालिका शिक्षा को प्रोत्साहित करने हेतु राज्य सरकार द्वारा साइकिल वितरण, छात्रवृत्ति और निशुल्क पाठ्यपुस्तक जैसी महत्वपूर्ण योजनाएं चलाई जा रही हैं।",
            "नियमित उपस्थिति और अनुशासन विद्यार्थियों के सर्वांगीण विकास में सहायक होते हैं। शिक्षकों एवं अभिभावकों के मध्य संवाद से परीक्षा परिणाम बेहतर होते हैं।",
            "प्रतियोगी परीक्षाओं की तैयारी करने वाले युवाओं के लिए डिजिटल लाइब्रेरी और ऑनलाइन मॉक टेस्ट अत्यंत लाभकारी सिद्ध हो रहे हैं।"
        ],
        table: {
            headers: ["सत्र वर्ष", "कुल विद्यालय", "उत्तीर्ण प्रतिशत", "छात्रवृत्ति लाभार्थी"],
            rows: [
                ["2022-23", "1450", "88.5%", "42000"],
                ["2023-24", "1520", "91.2%", "48500"],
                ["2024-25", "1610", "93.0%", "54000"],
                ["2025-26", "1690", "94.8%", "61200"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Font Size 16 pt तथा Bold सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Font Size 16 pt ➔ 'B' (Bold) क्लिक करें।",
                check: (s) => s.paras[0].fontSize === "16pt" && s.paras[0].bold === true
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) का Alignment 'Justify' और Line Spacing 1.35 lines सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Justify ➔ Line Spacing 1.35 चुनें।",
                check: (s) => s.paras[1].align === "justify" && s.paras[1].lineSpacing === "1.35"
            },
            {
                id: 3, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) पर पीला (Yellow) Text Highlight Color लगाएं।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ Highlight Color ➔ Yellow चुनें।",
                check: (s) => s.paras[2].highlight === "yellow"
            },
            {
                id: 4, marks: 2.0,
                q: "तृतीय पैराग्राफ (3rd Paragraph) के प्रारंभ में 'Page Break' डालें।",
                solution: "Paragraph 3 चुनें ➔ Insert Tab ➔ Page Break आइकन क्लिक करें।",
                check: (s) => s.paras[2].pageBreakBefore === true
            },
            {
                id: 5, marks: 1.5,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) को Italic फॉर्मेट दें और Left Indent 0.5 inch (0.5\") सेट करें।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Italic ➔ Page Layout Tab ➔ Left Indent 0.5\" चुनें।",
                check: (s) => s.paras[3].italic === true && s.paras[3].leftIndent === "0.5in"
            },
            {
                id: 6, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) की Line Spacing 2.0 lines सेट करें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ Line Spacing ➔ 2.0 चुनें।",
                check: (s) => s.paras[4].lineSpacing === "2.0"
            },
            {
                id: 7, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'शिक्षा' शब्द को Find & Replace द्वारा Bold फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace ➔ Find What में 'शिक्षा' लिखें ➔ Format 'Bold' ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("शिक्षा") && a.format === "bold")
            },
            {
                id: 8, marks: 1.5,
                q: "डॉक्यूमेंट का Orientation 'Landscape' और Paper Size 'A4' सेट करें।",
                solution: "Page Layout Tab ➔ Orientation 'Landscape' ➔ Size 'A4' चुनें।",
                check: (s) => s.page.orientation === "landscape" && s.page.size === "A4"
            },
            {
                id: 9, marks: 2.0,
                q: "डॉक्यूमेंट के Header में 'EDUCATION DEPARTMENT' लिखें और उसे Center Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'EDUCATION DEPARTMENT' टाइप करें ➔ Center Align ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "EDUCATION DEPARTMENT" && s.page.headerAlign === "center"
            },
            {
                id: 10, marks: 2.0,
                q: "डॉक्यूमेंट के Footer में Page Number जोड़ें जिसकी गिनती '3' से शुरू (Start at: 3) हो।",
                solution: "Insert Tab ➔ Page Number ➔ Start at: 3 भरें ➔ Apply क्लिक करें।",
                check: (s) => s.page.pageNumberEnabled === true && Number(s.page.pageNumberStart) === 3
            },
            {
                id: 11, marks: 1.5,
                q: "संपूर्ण डॉक्यूमेंट पर 3 pt चौड़ाई वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders ➔ Setting 'Box', Width '3 pt' ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "3pt"
            },
            {
                id: 12, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1) के सभी सेल्स का Alignment 'Align Center' करें।",
                solution: "Row 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Row ➔ Align Center क्लिक करें।",
                check: (s) => s.table.rowStyles[0].align === "center"
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की चतुर्थ पंक्ति (Row 4 - 2024-25) में 'Light Green' Shading भरें।",
                solution: "Row 4 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Green चुनें।",
                check: (s) => s.table.rowStyles[3].shading === "lightgreen"
            },
            {
                id: 14, marks: 2.0,
                q: "टेबल की पंचम पंक्ति (Row 5 - 2025-26) के टेक्स्ट को Bold करें और 'Light Blue' Shading दें।",
                solution: "Row 5 पर क्लिक करें ➔ Home Tab ➔ Bold ➔ Table Tools (Design Tab) ➔ Shading 'Light Blue' चुनें।",
                check: (s) => s.table.rowStyles[4].bold === true && s.table.rowStyles[4].shading === "lightblue"
            },
            {
                id: 15, marks: 1.5,
                q: "टेबल के तृतीय कॉलम (Column 3 - उत्तीर्ण प्रतिशत) का Alignment 'Align Center Right' सेट करें।",
                solution: "Column 3 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Align Center Right क्लिक करें।",
                check: (s) => s.table.colStyles[2].align === "right"
            }
        ]
    },

    set8: {
        id: "set8",
        name: "Set 8: Medium Practice Paper (कृषि, सिंचाई एवं किसान कल्याण)",
        difficulty: "Medium",
        paragraphs: [
            "भारत एक कृषि प्रधान देश है और राजस्थान के अधिकांश ग्रामीण परिवार अपनी आजीविका के लिए कृषि एवं पशुपालन पर निर्भर हैं। सरसों, बाजरा और गेहूं राज्य की प्रमुख फसलें हैं।",
            "आधुनिक सिंचाई तकनीकों जैसे बूंद-बूंद सिंचाई (ड्रिप इरिगेशन) और फव्वारा पद्धति से कम पानी में अधिक उत्पादन प्राप्त किया जा रहा है।",
            "मृदा स्वास्थ्य कार्ड योजना के अंतर्गत किसानों को अपने खेत की मिट्टी की जांच करवाकर संतुलित उर्वरक उपयोग करने की सलाह दी जाती है।",
            "जैविक खेती को बढ़ावा देने से न केवल भूमि की उर्वरा शक्ति बनी रहती है, बल्कि उपभोक्ताओं को भी रसायन मुक्त एवं पौष्टिक अनाज उपलब्ध होता है।",
            "कृषि उपज मंडियों के ऑनलाइन एकीकरण (e-NAM) से किसानों को अपनी फसल का उचित और पारदर्शी मूल्य सीधे बैंक खाते में मिल रहा है।"
        ],
        table: {
            headers: ["फसल कोड", "फसल का नाम", "बुवाई मौसम", "प्रमुख उत्पादक क्षेत्र"],
            rows: [
                ["cr_01", "बाजरा", "खरीफ", "पश्चिमी राजस्थान"],
                ["cr_02", "सरसों", "रबी", "पूर्वी राजस्थान"],
                ["cr_03", "गेहूं", "रबी", "श्रीगंगानगर"],
                ["cr_04", "मक्का", "खरीफ", "दक्षिणी राजस्थान"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Alignment 'Justify' तथा Line Spacing 1.5 lines सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Justify ➔ Line Spacing 1.5 चुनें।",
                check: (s) => s.paras[0].align === "justify" && s.paras[0].lineSpacing === "1.5"
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) का Font Family 'Times New Roman' और Font Size 14 pt सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Font Family 'Times New Roman' ➔ Font Size 14 pt चुनें।",
                check: (s) => s.paras[1].fontFamily === "Times New Roman" && s.paras[1].fontSize === "14pt"
            },
            {
                id: 3, marks: 2.0,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) में Character Spacing को 'Expanded 2 pt' सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Character Spacing ड्रॉपडाउन से 'Expanded 2 pt' चुनें।",
                check: (s) => s.paras[1].charSpacing === "2pt"
            },
            {
                id: 4, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) को Double Underline फॉर्मेट दें।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ Double Underline (U=) बटन क्लिक करें।",
                check: (s) => s.paras[2].doubleUnderline === true
            },
            {
                id: 5, marks: 2.0,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) को Two-Column लेआउट में बदलें (बिना Line Between के या सहित)।",
                solution: "Paragraph 4 चुनें ➔ Page Layout Tab ➔ Columns ड्रॉपडाउन ➔ Two Columns चुनें।",
                check: (s) => s.paras[3].columns === 2
            },
            {
                id: 6, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) पर हल्का हरा (Light Green) Highlight Color लगाएं।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ Highlight Color ➔ Light Green चुनें।",
                check: (s) => s.paras[4].highlight === "lightgreen"
            },
            {
                id: 7, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'कृषि' शब्द को Find & Replace द्वारा Double Strikethrough फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace ➔ Find What में 'कृषि' लिखें ➔ Format 'Double Strikethrough' ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("कृषि") && a.format === "doubleStrike")
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
                id: 10, marks: 2.0,
                q: "डॉक्यूमेंट में 'KRISHI VIBHAG' टेक्स्ट का Diagonal Watermark (Grey कलर) लगाएं।",
                solution: "Design Tab ➔ Watermark ➔ Text 'KRISHI VIBHAG', Color 'Grey', Diagonal चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.watermarkText.trim().toUpperCase() === "KRISHI VIBHAG" && s.page.watermarkDiagonal === true
            },
            {
                id: 11, marks: 1.5,
                q: "डॉक्यूमेंट के Header में 'KISAN KALYAN' लिखें और उसे Right Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'KISAN KALYAN' टाइप करें ➔ Align Right ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "KISAN KALYAN" && s.page.headerAlign === "right"
            },
            {
                id: 12, marks: 1.5,
                q: "टेबल के प्रथम कॉलम (Column 1 - फसल कोड) के टेक्स्ट को UPPERCASE में बदलें।",
                solution: "Column 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Home Tab ➔ Change Case ➔ UPPERCASE चुनें।",
                check: (s) => s.table.colStyles[0].textTransform === "uppercase"
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की तृतीय पंक्ति (Row 3 - सरसों) में 'Light Blue' Shading लगाएं।",
                solution: "Row 3 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Blue चुनें।",
                check: (s) => s.table.rowStyles[2].shading === "lightblue"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1) को Bold करें और 'Align Center' सेट करें।",
                solution: "Row 1 पर क्लिक करें ➔ Home Tab ➔ Bold ➔ Table Tools (Layout Tab) ➔ Align Center क्लिक करें।",
                check: (s) => s.table.rowStyles[0].bold === true && s.table.rowStyles[0].align === "center"
            },
            {
                id: 15, marks: 2.0,
                q: "पूरी टेबल पर Red कलर और 1.5 pt चौड़ाई वाला 'All Borders' लागू करें।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Red', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "red" && s.table.borderWidth === "1.5pt"
            }
        ]
    },

    set9: {
        id: "set9",
        name: "Set 9: Medium Practice Paper (स्वास्थ्य, योग एवं चिकित्सा सेवाएं)",
        difficulty: "Medium",
        paragraphs: [
            "स्वस्थ शरीर में ही स्वस्थ मन का निवास होता है। नियमित योग, प्राणायाम और संतुलित आहार अपनाकर अनेक गंभीर बीमारियों से बचा जा सकता है।",
            "प्रतिवर्ष 21 जून को अंतरराष्ट्रीय योग दिवस पूरे विश्व में उत्साहपूर्वक मनाया जाता है। योग न केवल शारीरिक लचीलापन बढ़ाता है बल्कि मानसिक तनाव भी कम करता है।",
            "राजस्थान सरकार द्वारा राजकीय चिकित्सालयों में निशुल्क दवा एवं निशुल्क जांच योजना के माध्यम से लाखों मरीजों को बेहतर स्वास्थ्य सुविधाएं प्रदान की जा रही हैं।",
            "टेलीमेडिसिन और ऑनलाइन ओपीडी पंजीकरण प्रणाली से दूरदराज के ग्रामीण मरीजों को विशेषज्ञ चिकित्सकों से परामर्श लेना अत्यंत आसान हो गया है।",
            "स्वास्थ्य विभाग की आधिकारिक जानकारी और योजनाओं का विवरण Health Portal पर उपलब्ध है, जिसका लाभ प्रत्येक नागरिक उठा सकता है।"
        ],
        table: {
            headers: ["चिकित्सालय कोड", "चिकित्सालय का नाम", "बेड क्षमता", "शहर"],
            rows: [
                ["H01", "एसएमएस अस्पताल", "2500", "जयपुर"],
                ["H02", "एमडीएम अस्पताल", "1200", "जोधपुर"],
                ["H03", "एमबी अस्पताल", "1100", "उदयपुर"],
                ["H04", "पीबीएम अस्पताल", "1400", "बीकानेर"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Alignment 'Justify' और Font Size 16 pt सेट करें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Justify ➔ Font Size 16 pt चुनें।",
                check: (s) => s.paras[0].align === "justify" && s.paras[0].fontSize === "16pt"
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) को Bold करें और Line Spacing 1.25 lines सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Bold ➔ Line Spacing 1.25 चुनें।",
                check: (s) => s.paras[1].bold === true && s.paras[1].lineSpacing === "1.25"
            },
            {
                id: 3, marks: 2.0,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) के अंत में Footnote जोड़ें: 'International Yoga Day - 21 June'",
                solution: "Paragraph 2 चुनें ➔ References Tab ➔ Insert Footnote ➔ टेक्स्ट टाइप करें ➔ Apply क्लिक करें।",
                check: (s) => s.page.footnotes.some(f => f.paraIndex === 1 && f.text.toLowerCase().includes("yoga"))
            },
            {
                id: 4, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) का Left Indent 0.5 inch (0.5\") सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Page Layout Tab ➔ Left Indent 0.5\" चुनें।",
                check: (s) => s.paras[2].leftIndent === "0.5in"
            },
            {
                id: 5, marks: 1.5,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) को Italic करें और पीला (Yellow) Highlight Color लगाएं।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Italic ➔ Highlight Color 'Yellow' चुनें।",
                check: (s) => s.paras[3].italic === true && s.paras[3].highlight === "yellow"
            },
            {
                id: 6, marks: 2.0,
                q: "पंचम पैराग्राफ (5th Paragraph) पर 'Dropped' (3 Lines) Drop Cap लागू करें।",
                solution: "Paragraph 5 चुनें ➔ Insert Tab ➔ Drop Cap (Dropped 3 Lines) बटन क्लिक करें।",
                check: (s) => s.paras[4].dropCap === true
            },
            {
                id: 7, marks: 2.0,
                q: "पंचम पैराग्राफ के शब्द 'Health Portal' पर 'https://rajswasthya.nic.in' का Hyperlink जोड़ें।",
                solution: "Paragraph 5 चुनें ➔ Insert Tab ➔ Hyperlink ➔ Text 'Health Portal' और URL 'https://rajswasthya.nic.in' डालें ➔ Apply क्लिक करें।",
                check: (s) => s.page.hyperlinks.some(h => h.text.toLowerCase().includes("health portal") && h.url.toLowerCase().includes("rajswasthya"))
            },
            {
                id: 8, marks: 1.5,
                q: "पूरे डॉक्यूमेंट में 'योग' शब्द को Find & Replace द्वारा Bold फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace ➔ Find What में 'योग' लिखें ➔ Format 'Bold' ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("योग") && a.format === "bold")
            },
            {
                id: 9, marks: 1.5,
                q: "डॉक्यूमेंट का Margins 'Narrow' और Paper Size 'A4' सेट करें।",
                solution: "Page Layout Tab ➔ Margins 'Narrow' ➔ Size 'A4' चुनें।",
                check: (s) => s.page.margins === "narrow" && s.page.size === "A4"
            },
            {
                id: 10, marks: 1.5,
                q: "संपूर्ण डॉक्यूमेंट पर 1.5 pt चौड़ाई वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders ➔ Setting 'Box', Width '1.5 pt' ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "1.5pt"
            },
            {
                id: 11, marks: 2.0,
                q: "डॉक्यूमेंट में लाल रंग (Red) का Diagonal Watermark लगाएं जिसका टेक्स्ट 'HEALTHY INDIA' हो।",
                solution: "Design Tab ➔ Watermark ➔ Text 'HEALTHY INDIA', Color 'Red', Diagonal चुनें ➔ Apply क्लिक करें।",
                check: (s) => s.page.watermarkText.trim().toUpperCase() === "HEALTHY INDIA" && s.page.watermarkColor === "red" && s.page.watermarkDiagonal === true
            },
            {
                id: 12, marks: 1.5,
                q: "डॉक्यूमेंट के Header में 'SWASTHYA VIBHAG' लिखें और उसे Center Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'SWASTHYA VIBHAG' टाइप करें ➔ Center Align ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "SWASTHYA VIBHAG" && s.page.headerAlign === "center"
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल की प्रथम पंक्ति (Row 1) के सभी सेल्स को Merge करें।",
                solution: "Row 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ 'Merge Row Cells' क्लिक करें।",
                check: (s) => s.table.row1Merged === true
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की द्वितीय पंक्ति (Row 2 - एसएमएस अस्पताल) में 'Light Green' Shading लगाएं।",
                solution: "Row 2 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Green चुनें।",
                check: (s) => s.table.rowStyles[1].shading === "lightgreen"
            },
            {
                id: 15, marks: 2.0,
                q: "पूरी टेबल पर Black कलर और 1.5 pt चौड़ाई वाला 'All Borders' लागू करें।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Black', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "black" && s.table.borderWidth === "1.5pt"
            }
        ]
    },

    set10: {
        id: "set10",
        name: "Set 10: Medium Exam Revision Paper (सड़क सुरक्षा एवं यातायात नियम)",
        difficulty: "Medium (Full Revision)",
        paragraphs: [
            "सड़क सुरक्षा प्रत्येक वाहन चालक और पैदल यात्री के जीवन की रक्षा के लिए अत्यंत महत्वपूर्ण है। यातायात नियमों का पालन करने से सड़क दुर्घटनाओं में भारी कमी लाई जा सकती है।",
            "दोपहिया वाहन चलाते समय आईएसआई मार्क हेलमेट पहनना तथा चारपहिया वाहन में सीट बेल्ट लगाना कानूनी रूप से अनिवार्य है। वाहन चलाते समय मोबाइल फोन का प्रयोग कभी नहीं करना चाहिए।",
            "परिवहन विभाग द्वारा प्रत्येक वर्ष सड़क सुरक्षा माह आयोजित कर विद्यालयों, महाविद्यालयों और आम नागरिकों को यातायात संकेतों के प्रति जागरूक किया जाता है।",
            "निर्धारित गति सीमा के भीतर वाहन चलाने और ट्रैफिक सिग्नल का सम्मान करने से न केवल स्वयं की सुरक्षा होती है बल्कि अन्य राहगीरों का जीवन भी सुरक्षित रहता है।",
            "डिजिटल ड्राइविंग लाइसेंस और ई-चालान व्यवस्था ने यातायात प्रबंधन को अधिक आधुनिक, पारदर्शी और प्रभावी बना दिया है।"
        ],
        table: {
            headers: ["rto_code", "जिला परिवहन कार्यालय", "पंजीकृत वाहन", "सड़क सुरक्षा श्रेणी"],
            rows: [
                ["rj_14", "जयपुर", "245000", "श्रेणी A"],
                ["rj_19", "जोधपुर", "162000", "श्रेणी A"],
                ["rj_20", "कोटा", "118000", "श्रेणी B"],
                ["rj_27", "उदयपुर", "134000", "श्रेणी B"]
            ]
        },
        questions: [
            {
                id: 1, marks: 1.5,
                q: "प्रथम पैराग्राफ (1st Paragraph) का Alignment 'Justify' करें तथा इसे Bold फॉर्मेट दें।",
                solution: "Paragraph 1 चुनें ➔ Home Tab ➔ Justify ➔ 'B' (Bold) क्लिक करें।",
                check: (s) => s.paras[0].align === "justify" && s.paras[0].bold === true
            },
            {
                id: 2, marks: 1.5,
                q: "द्वितीय पैराग्राफ (2nd Paragraph) की Line Spacing 1.5 lines और Font Size 14 pt सेट करें।",
                solution: "Paragraph 2 चुनें ➔ Home Tab ➔ Line Spacing 1.5 ➔ Font Size 14 pt चुनें।",
                check: (s) => s.paras[1].lineSpacing === "1.5" && s.paras[1].fontSize === "14pt"
            },
            {
                id: 3, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) का Left Indent 1.25 inch (1.25\") सेट करें।",
                solution: "Paragraph 3 चुनें ➔ Page Layout Tab ➔ Left Indent 1.25\" चुनें।",
                check: (s) => s.paras[2].leftIndent === "1.25in"
            },
            {
                id: 4, marks: 1.5,
                q: "तृतीय पैराग्राफ (3rd Paragraph) पर पीला (Yellow) Highlight Color लगाएं।",
                solution: "Paragraph 3 चुनें ➔ Home Tab ➔ Highlight Color ➔ Yellow चुनें।",
                check: (s) => s.paras[2].highlight === "yellow"
            },
            {
                id: 5, marks: 2.0,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) को Italic तथा Double Underline फॉर्मेट दें।",
                solution: "Paragraph 4 चुनें ➔ Home Tab ➔ Italic ('I') और Double Underline ('U=') क्लिक करें।",
                check: (s) => s.paras[3].italic === true && s.paras[3].doubleUnderline === true
            },
            {
                id: 6, marks: 2.0,
                q: "चतुर्थ पैराग्राफ (4th Paragraph) को Two-Column लेआउट में बदलें तथा 'Line Between' सक्रिय करें।",
                solution: "Paragraph 4 चुनें ➔ Page Layout Tab ➔ Columns ➔ 'Two Columns + Line Between' चुनें।",
                check: (s) => s.paras[3].columns === 2 && s.paras[3].columnRule === true
            },
            {
                id: 7, marks: 1.5,
                q: "पंचम पैराग्राफ (5th Paragraph) का Font Family 'Arial' सेट करें।",
                solution: "Paragraph 5 चुनें ➔ Home Tab ➔ Font Family ड्रॉपडाउन से Arial चुनें।",
                check: (s) => s.paras[4].fontFamily === "Arial"
            },
            {
                id: 8, marks: 2.0,
                q: "पूरे डॉक्यूमेंट में 'यातायात' शब्द को Find & Replace द्वारा Double Strikethrough फॉर्मेट दें।",
                solution: "Home Tab ➔ Replace ➔ Find What में 'यातायात' लिखें ➔ Format 'Double Strikethrough' ➔ Replace All क्लिक करें।",
                check: (s) => s.replaceActions.some(a => a.find.includes("यातायात") && a.format === "doubleStrike")
            },
            {
                id: 9, marks: 1.5,
                q: "डॉक्यूमेंट का Page Orientation 'Landscape' और Margins 'Narrow' सेट करें।",
                solution: "Page Layout Tab ➔ Orientation 'Landscape' ➔ Margins 'Narrow' चुनें।",
                check: (s) => s.page.orientation === "landscape" && s.page.margins === "narrow"
            },
            {
                id: 10, marks: 1.5,
                q: "संपूर्ण डॉक्यूमेंट पर 3 pt चौड़ाई वाला 'Box' Page Border लगाएं।",
                solution: "Design Tab ➔ Page Borders ➔ Setting 'Box', Width '3 pt' ➔ Apply क्लिक करें।",
                check: (s) => s.page.border === "box" && s.page.borderWidth === "3pt"
            },
            {
                id: 11, marks: 2.0,
                q: "डॉक्यूमेंट के Header में 'ROAD SAFETY RAJASTHAN' लिखें और उसे Center Align करें।",
                solution: "Insert Tab ➔ Header ➔ 'ROAD SAFETY RAJASTHAN' टाइप करें ➔ Center Align ➔ Apply क्लिक करें।",
                check: (s) => s.page.headerText.trim().toUpperCase() === "ROAD SAFETY RAJASTHAN" && s.page.headerAlign === "center"
            },
            {
                id: 12, marks: 2.0,
                q: "डॉक्यूमेंट के Footer में Page Number जोड़ें जिसकी गिनती '2' से शुरू (Start at: 2) हो।",
                solution: "Insert Tab ➔ Page Number ➔ Start at: 2 भरें ➔ Apply क्लिक करें।",
                check: (s) => s.page.pageNumberEnabled === true && Number(s.page.pageNumberStart) === 2
            },
            {
                id: 13, marks: 1.5,
                q: "टेबल के प्रथम कॉलम (Column 1 - rto_code) के टेक्स्ट को UPPERCASE में बदलें।",
                solution: "Column 1 पर क्लिक करें ➔ Table Tools (Layout Tab) ➔ Select Column ➔ Home Tab ➔ Change Case ➔ UPPERCASE चुनें।",
                check: (s) => s.table.colStyles[0].textTransform === "uppercase"
            },
            {
                id: 14, marks: 1.5,
                q: "टेबल की तृतीय पंक्ति (Row 3 - जोधपुर) में 'Light Blue' Shading भरें।",
                solution: "Row 3 पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Shading ➔ Light Blue चुनें।",
                check: (s) => s.table.rowStyles[2].shading === "lightblue"
            },
            {
                id: 15, marks: 1.5,
                q: "पूरी टेबल पर Red कलर और 1.5 pt चौड़ाई वाला 'All Borders' लागू करें।",
                solution: "टेबल पर क्लिक करें ➔ Table Tools (Design Tab) ➔ Pen Color 'Red', Weight '1.5 pt' ➔ All Borders क्लिक करें।",
                check: (s) => s.table.borderStyle === "all" && s.table.borderColor === "red" && s.table.borderWidth === "1.5pt"
            }
        ]
    }
};
