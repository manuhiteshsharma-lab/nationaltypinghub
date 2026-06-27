/**
 * National Typing Hub - Production Remington GAIL Unicode Engine
 * Implements FSM context-aware text shaping, Chhoti Ee shifting, Reph jumping, and Alt-Code mappings.
 */

const RemingtonEngine = (function() {
    
    // Base Key Mapping for Remington Gail Unicode[cite: 5, 7]
    const baseMap = { 
        '`':'\u093C', '~':'\u0926\u094D\u092F', '1':'1', '!':'\u0964', '2':'2', '@':'/', '3':'3', '#':':', '4':'4', '$':'*', '5':'5', '%':'-', '6':'6', '^':'‘', '7':'7', '&':'’', '8':'8', '*':'\u0926\u094D\u0927', '9':'9', '(':'\u0924\u094D\u0930', '0':'0', ')':'\u090B', '-':';', '_':'.', '=':'\u0943', '+':'\u094D', 
        'q':'\u0941', 'Q':'फ', 'w':'\u0942', 'W':'ॅ', 'e':'म', 'E':'म्', 'r':'त', 'R':'त्', 't':'ज', 'T':'ज्', 'y':'ल', 'Y':'ल्', 'u':'न', 'U':'न्', 'i':'प', 'I':'प्', 'o':'व', 'O':'व्', 'p':'च', 'P':'च्', '[':'ख्', '{':'क्ष', ']':',', '}':'द्व', '\\':'?', '|':'छ',
        'a':'ं', 'A':'\u093E', 's':'े', 'S':'ै', 'd':'क', 'D':'क्', 'f':'ि', 'F':'थ्', 'g':'ह', 'G':'ळ', 'h':'ी', 'H':'भ्', 'j':'र', 'J':'श्र', 'k':'ा', 'K':'ज्ञ', 'l':'स', 'L':'स्', ';':'य', ':':'रू', '\'':'श्', '"':'ष्', 
        'z':'\u094D\u0930', 'Z':'\u0930\u094D', 'x':'ग', 'X':'ग्', 'c':'ब', 'C':'ब्', 'v':'अ', 'V':'ट', 'b':'इ', 'B':'ठ', 'n':'द', 'N':'छ', 'm':'उ', 'M':'ड', ',':'ए', '<':'ढ', '.':'ण्', '>':'झ', '/':'ध्', '?':'घ्' 
    };

    // Alt Code Dictionary based on Smart Typing Solution Chart[cite: 6]
    const altCodeMap = {
        '033': '!', '034': '"', '035': '#', '036': '$', '037': '%', '038': '&', '039': "'", 
        '040': '(', '041': ')', '042': '*', '043': '+', '044': ',', '045': '-', '046': '.', 
        '047': '/', '058': ':', '059': ';', '060': '<', '061': '=', '062': '>', '063': '?', 
        '064': '@', '091': '[', '092': '\\', '093': ']', '094': '^', '095': '_', '096': '`', 
        '0123': '{', '0124': '|', '0125': '}', '0145': '‘', '0146': '’', '0147': '“', 
        '0148': '”', '0149': '•', '0150': '–', '0151': '—', '0152': '˜', '0153': '™', 
        '0154': 'š', '0155': '›', '0156': 'œ', '0169': '©', '0184': '¸', '0185': '¹', 
        '0189': '½', '0190': '¾', '0215': '×', '0216': 'Ø', '0222': 'Þ', '0223': 'ß', '0247': '÷'
    };

    let activeAltCode = "";
    let isAltPressed = false;

    /**
     * Applies special FSM visual combinations[cite: 6]
     */
    function applyCombinations(text) {
        return text
            .replace(/अा/g, 'आ')
            .replace(/आे/g, 'ओ')
            .replace(/आै/g, 'औ')
            .replace(/आॅ/g, 'ऑ')
            .replace(/ाे/g, 'ो')
            .replace(/ाै/g, 'ौ')
            .replace(/ाॅ/g, 'ॉ')
            .replace(/एॅ/g, 'ऍ')
            .replace(/एे/g, 'ऐ')
            .replace(/ॅं/g, 'ँ')
            .replace(/उु/g, 'ऊ')
            .replace(/इर्/g, 'ई');
    }

    /**
     * Context-Aware Engine Logic for Remington Edge Cases
     */
    function processTextState(textBefore, mappedChar, textAfter) {
        
        // 1. Z-Key (Reph) Logic[cite: 5, 7]
        // If 'र्' is typed, it jumps before the preceding consonant cluster.
        if (mappedChar === '\u0930\u094D') {
            let isStartOfWord = textBefore.length === 0 || textBefore.endsWith(' ') || textBefore.endsWith('\n');
            if (!isStartOfWord) {
                const rephRegex = /([\u0915-\u0939\u0958-\u095F][\u093E-\u094C\u094D\u093F\u0902]*)$/;
                if (rephRegex.test(textBefore)) {
                    textBefore = textBefore.replace(rephRegex, '\u0930\u094D$1');
                    mappedChar = '';
                }
            }
        }
        
        // 2. Trailing Halant Vowel Consumption
        // E.g., if typing 'ा' over a halant, consume the halant.
        else if (mappedChar === '\u093E' && textBefore.endsWith('\u094D')) {
            textBefore = textBefore.slice(0, -1);
            mappedChar = '';
        }

        // 3. Localized Chhoti Ee (ि) FSM Shift
        // Shifts the 'ि' AFTER the typed consonant automatically.
        if (textBefore.endsWith('\u093F') && /^[\u0915-\u0939\u0958-\u095F\u094D]/.test(mappedChar)) {
            textBefore = textBefore.slice(0, -1);
            mappedChar = mappedChar + '\u093F';
        }

        // Form string and apply FSM combo rules
        let newText = textBefore + mappedChar + textAfter;
        newText = applyCombinations(newText);

        // Global Chhoti Ee catch-all for complex conjuncts
        const orphanIRegex = /(?<![\u0915-\u0939\u0958-\u095F])\u093F((?:[\u0915-\u0939\u0958-\u095F]\u094D)*)([\u0915-\u0939\u0958-\u095F])(?!\u094D)/g;
        newText = newText.replace(orphanIRegex, '$1$2\u093F');

        return {
            newText: newText,
            addedLength: newText.length - (textBefore.length + textAfter.length)
        };
    }

    /**
     * Intercepts and processes raw input keystrokes
     */
    function handleKeyDown(e, inputElement) {
        // Track Alt Codes[cite: 6]
        if (e.key === "Alt") {
            isAltPressed = true;
            activeAltCode = "";
            return;
        }

        if (isAltPressed && e.code.startsWith('Numpad')) {
            e.preventDefault();
            activeAltCode += e.key;
            return;
        }

        // Handle standard key mappings
        if (!e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1) {
            let char = e.key;
            let mappedChar = baseMap[char];

            if (mappedChar) {
                e.preventDefault();
                let start = inputElement.selectionStart;
                let end = inputElement.selectionEnd;
                let textBefore = inputElement.value.substring(0, start);
                let textAfter = inputElement.value.substring(end);

                let processed = processTextState(textBefore, mappedChar, textAfter);

                inputElement.value = processed.newText;
                inputElement.selectionStart = inputElement.selectionEnd = start + processed.addedLength;

                // Dispatch event for simulator word-tracking
                const event = new Event('input', { bubbles: true }); 
                inputElement.dispatchEvent(event);
            }
        }
    }

    /**
     * Processes Alt-Code execution on keyup[cite: 6]
     */
    function handleKeyUp(e, inputElement) {
        if (e.key === "Alt") {
            isAltPressed = false;
            
            if (activeAltCode.length > 0 && altCodeMap[activeAltCode]) {
                e.preventDefault();
                let mappedChar = altCodeMap[activeAltCode];
                let start = inputElement.selectionStart;
                let end = inputElement.selectionEnd;
                
                let textBefore = inputElement.value.substring(0, start);
                let textAfter = inputElement.value.substring(end);
                
                inputElement.value = textBefore + mappedChar + textAfter;
                inputElement.selectionStart = inputElement.selectionEnd = start + mappedChar.length;
                
                const event = new Event('input', { bubbles: true }); 
                inputElement.dispatchEvent(event);
            }
            activeAltCode = "";
        }
    }

    return {
        init: function(inputElementId) {
            const el = document.getElementById(inputElementId);
            if(el) {
                el.addEventListener('keydown', (e) => handleKeyDown(e, el));
                el.addEventListener('keyup', (e) => handleKeyUp(e, el));
            }
        }
    };
})();
