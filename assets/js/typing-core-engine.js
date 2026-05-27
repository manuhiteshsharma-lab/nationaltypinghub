/**
 * NATIONAL TYPING HUB - MASTER TYPING ENGINE (V2.0)
 * Dual-Pillar Architecture for Speed & Error Metrics
 * Features: Persistent Input, Sync-Scrolling, & Definitive Inscript Mapping
 */

class MasterTypingEngine {
    constructor(profile) {
        // 1. Exam Configuration Profile
        this.config = {
            examName: profile.examName || "Standard Typing Test",
            languageCss: profile.languageCss || "font-en",
            timeLimitSeconds: profile.timeLimitSeconds || 300,
            strictMode: profile.strictMode || false,
            inscriptEnabled: profile.inscriptEnabled || false,
            
            // THE TWO PILLARS OF CALCULATION
            wordDefinition: profile.wordDefinition || "5_STROKE", // "5_STROKE" or "ACTUAL_WORDS"
            errorDefinition: profile.errorDefinition || "STANDARD", // "STANDARD", "FULL_HALF", "SSC_EVALUATION"
            
            textPool: profile.textPool || [],
            onTestComplete: profile.onTestComplete || function(results) {}
        };

        // 2. Internal Tracking Variables
        this.wordsArray = [];
        this.typedHistory = [];
        this.currentWordIndex = 0;
        
        this.totalGrossStrokes = 0;
        this.fullErrors = 0;
        this.halfErrors = 0;
        this.correctWordsCount = 0; 
        
        this.startTime = null;
        this.timerInt = null;
        this.isRunning = false;
        this.lastInputValue = "";
        
        this.currentMetrics = { grossWpm: 0, netWpm: 0, accuracy: 100, errorRate: 0, keyPresses: 0 };

        // 3. Definitive Mangal Inscript Key Mapping (Fully Expanded)
        this.inscriptMap = {
            'q':'ौ','w':'ै','e':'ा','r':'ी','t':'ू','y':'ब','u':'ह','i':'ग','o':'द','p':'ज','[':'ड',']':'़','a':'ो','s':'े','d':'्','f':'ि','g':'ु','h':'प','j':'र','k':'क','l':'त',';':'च',"'":'ट','z':'ॅ','x':'ं','c':'म','v':'न','b':'व','n':'ल','m':'स',',':',','.':'.','/':'य',
            'Q':'औ','W':'ऐ','E':'आ','R':'ई','T':'ऊ','Y':'भ','U':'ङ','I':'घ','O':'ध','P':'झ','{':'ढ','}':'ञ','A':'ओ','S':'ए','D':'अ','F':'इ','G':'उ','H':'फ','J':'ऱ','K':'ख','L':'थ',':':'छ','"':'ठ','Z':'ऍ','X':'ँ','C':'ण','V':'ऩ','B':'ळ','N':'ऴ','M':'श','<':'ष','>':'।','?':'य़', 
            '`':'ृ', '~':'ञ', 
            '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9', '0':'0',
            '-':'-', '_':'ः', '=':'ृ', '+':'ऋ',
            '!':'ऍ', '@':'ॅ', '#':'्र', '$':'र्', '%':'ज्ञ', '^':'त्र', '&':'क्ष', '*':'श्र', '(':'(', ')':')',
            '\\':'ॉ', '|':'ऑ'
        };
    }

    escapeHTML(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    start() {
        if (!this.config.textPool || this.config.textPool.length === 0) {
            console.error("MasterTypingEngine Error: Text pool is empty.");
            return;
        }

        let targetText = this.config.textPool[Math.floor(Math.random() * this.config.textPool.length)].trim();
        this.wordsArray = targetText.repeat(15).trim().split(/\s+/); 
        this.typedHistory = [];

        const display = document.getElementById('displayArea');
        const typingBox = document.getElementById('typingBox');
        
        display.className = this.config.languageCss;
        typingBox.className = "typing-input " + this.config.languageCss;

        display.innerHTML = this.wordsArray.map((w, i) => {
            return `<span id="word-${i}" class="word">${this.escapeHTML(w)}</span>`;
        }).join(' ');

        document.getElementById('word-0').classList.add('active-word');
        
        typingBox.value = "";
        typingBox.disabled = false;
        typingBox.focus();

        this.currentWordIndex = 0;
        this.totalGrossStrokes = 0;
        this.fullErrors = 0;
        this.halfErrors = 0;
        this.correctWordsCount = 0;
        this.lastInputValue = "";

        this.startTime = new Date();
        this.isRunning = true;
        this.timerInt = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        if (!this.isRunning) return;
        let elapsed = Math.floor((new Date() - this.startTime) / 1000);
        let left = this.config.timeLimitSeconds - elapsed;
        
        let m = Math.floor(left / 60).toString().padStart(2, '0');
        let s = (left % 60).toString().padStart(2, '0');
        
        let uiTime = document.getElementById('liveTime');
        if (uiTime) uiTime.innerText = `${m}:${s}`;
        
        if (left <= 0) this.finishTest();
    }

    handleInput(event) {
        if (!this.isRunning) return;
        const inputObj = document.getElementById('typingBox');

        // Apply Inscript Mapping
        if (this.config.inscriptEnabled && event.inputType !== 'insertFromPaste') {
            let start = inputObj.selectionStart;
            let end = inputObj.selectionEnd;
            let text = inputObj.value;
            let mapped = "";
            let changed = false;
           
            for (let i = 0; i < text.length; i++) {
                let char = text[i];
                if (this.inscriptMap[char]) { 
                    mapped += this.inscriptMap[char]; 
                    changed = true; 
                } else { 
                    mapped += char; 
                }
            }
            if (changed) {
                inputObj.value = mapped;
                inputObj.setSelectionRange(start, end);
            }
        }

        let val = inputObj.value;

        // Strict Mode Enforcement
        if (this.config.strictMode && val.length < this.lastInputValue.length) {
            inputObj.value = this.lastInputValue;
            return;
        }
        this.lastInputValue = val;

        // Extract typed words safely ignoring phantom spaces
        let rawWords = val.split(/\s+/);
        let typedWords = rawWords.filter(w => w.length > 0);
        let endsWithSpace = val.endsWith(' ') || val.endsWith('\n');
        
        this.currentWordIndex = typedWords.length;
        if (!endsWithSpace && typedWords.length > 0) {
            this.currentWordIndex--; 
        }

        // Reset real-time accumulators
        this.totalGrossStrokes = 0;
        this.fullErrors = 0;
        this.halfErrors = 0;
        this.typedHistory = [];

        // Clear UI highlights
        document.querySelectorAll('.word').forEach(el => el.classList.remove('correct', 'incorrect', 'active-word'));

        // Core Evaluation Loop
        for (let i = 0; i < typedWords.length; i++) {
            let target = this.wordsArray[i];
            let typed = typedWords[i];
            if (!target) continue;

            if (i === this.currentWordIndex && !endsWithSpace) {
                let activeSpan = document.getElementById(`word-${i}`);
                if (activeSpan) activeSpan.classList.add('active-word');
                continue; 
            }

            this.typedHistory.push(typed);
            let span = document.getElementById(`word-${i}`);
            
            if (typed === target) {
                if (span) span.classList.add('correct');
                this.totalGrossStrokes += target.length + 1; // +1 for the space
            } else {
                if (span) span.classList.add('incorrect');
                this.totalGrossStrokes += typed.length + 1;
                
                // Advanced Structural Damage Calculation
                let errCount = 0;
                let maxLen = Math.max(typed.length, target.length);
                for(let j = 0; j < maxLen; j++) {
                    if(typed[j] !== target[j]) errCount++;
                }
                
                if (errCount > 1 || typed === "") {
                    this.fullErrors++;
                } else {
                    this.halfErrors++;
                }
            }
        }

        // Target next word for highlighting
        if (endsWithSpace || typedWords.length === 0) {
            let activeSpan = document.getElementById(`word-${this.currentWordIndex}`);
            if (activeSpan) activeSpan.classList.add('active-word');
        }

        // Synchronized Scrolling tracking the Active Word
        let activeSpan = document.getElementById(`word-${this.currentWordIndex}`);
        if (activeSpan) {
            let display = document.getElementById('displayArea');
            let spanTop = activeSpan.offsetTop;
            let spanHeight = activeSpan.offsetHeight;
            let displayScroll = display.scrollTop;
            let displayHeight = display.clientHeight;

            if (spanTop + spanHeight > displayScroll + displayHeight - 20) {
                display.scrollTop = (spanTop + spanHeight) - displayHeight + 40; 
            } else if (spanTop < displayScroll + 20) {
                display.scrollTop = spanTop - 40; 
            }
        }

        this.calculateLiveStats();

        // Endless loop protection
        if (this.currentWordIndex >= this.wordsArray.length) {
            this.finishTest();
        }
    }

    calculateLiveStats() {
        let elapsedMins = (new Date() - this.startTime) / 60000;
        if (elapsedMins < 0.02) return;

        // ---------------------------------------------------------
        // ASPECT 1: GROSS SPEED CALCULATION
        // ---------------------------------------------------------
        let grossWpm = 0;
        let totalWordsEvaluated = 0;

        if (this.config.wordDefinition === "ACTUAL_WORDS") {
            totalWordsEvaluated = this.typedHistory.length;
            grossWpm = totalWordsEvaluated / elapsedMins;
        } else {
            totalWordsEvaluated = this.totalGrossStrokes / 5;
            grossWpm = totalWordsEvaluated / elapsedMins;
        }

        // ---------------------------------------------------------
        // ASPECT 2: ERROR & ACCURACY CALCULATION
        // ---------------------------------------------------------
        let totalPenaltyWords = 0;

        if (this.config.errorDefinition === "FULL_HALF" || this.config.errorDefinition === "SSC_EVALUATION") {
            totalPenaltyWords = this.fullErrors + (this.halfErrors / 2);
        } else {
            totalPenaltyWords = this.fullErrors + this.halfErrors;
        }

        let accuracyPercent = 100;
        let errorRatePercent = 0;
        
        if (totalWordsEvaluated > 0) {
            accuracyPercent = Math.max(0, ((totalWordsEvaluated - totalPenaltyWords) / totalWordsEvaluated) * 100);
            errorRatePercent = (totalPenaltyWords / totalWordsEvaluated) * 100;
        }

        // ---------------------------------------------------------
        // FINAL MERGE: NET SPEED
        // ---------------------------------------------------------
        let netWpm = (totalWordsEvaluated - totalPenaltyWords) / elapsedMins;
        netWpm = Math.max(0, netWpm);

        // Strict Floor Clamp
        if (totalPenaltyWords >= totalWordsEvaluated && totalWordsEvaluated > 0) {
            netWpm = 0;
        }

        this.currentMetrics = {
            grossWpm: Math.round(grossWpm),
            netWpm: Math.round(netWpm),
            accuracy: accuracyPercent.toFixed(2),
            errorRate: errorRatePercent.toFixed(2),
            keyPresses: this.totalGrossStrokes
        };

        // UI Push
        let uiGross = document.getElementById('liveGross');
        let uiNet = document.getElementById('liveWpm');
        let uiKeys = document.getElementById('liveKeys');
        let uiAcc = document.getElementById('liveAcc');

        if(uiGross) uiGross.innerText = this.currentMetrics.grossWpm;
        if(uiNet) uiNet.innerText = this.currentMetrics.netWpm;
        if(uiKeys) uiKeys.innerText = this.currentMetrics.keyPresses;
        if(uiAcc) uiAcc.innerText = Math.round(accuracyPercent) + "%";
    }

    generateReportHTML() {
        let typedHighlighted = "";
        
        this.typedHistory.forEach((word, idx) => {
            let target = this.wordsArray[idx] || "";
            let safeWord = this.escapeHTML(word);
            if (word === target) {
                typedHighlighted += `<span>${safeWord}</span> `;
            } else {
                typedHighlighted += `<span style="color: #ef4444; font-weight: bold; text-decoration: underline;">${safeWord}</span> `;
            }
        });

        let targetFontFamily = (this.config.languageCss === 'font-en') ? "Arial, sans-serif" : "'Noto Sans Devanagari', sans-serif";

        return `
            <div style="font-family: Arial, sans-serif; color: #000; padding: 15px; max-width: 800px; margin: 0 auto; background: #fff;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; margin-bottom: 20px; font-family: Arial, sans-serif;">
                    <tr style="background: #e2e8f0;">
                        <th style="border: 1px solid #ccc; padding: 10px;">Net WPM</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Gross WPM</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Accuracy</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Key Presses</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 10px; font-weight: bold; font-size: 14pt; color: #2563eb;">${this.currentMetrics.netWpm} WPM</td>
                        <td style="border: 1px solid #ccc; padding: 10px;">${this.currentMetrics.grossWpm} WPM</td>
                        <td style="border: 1px solid #ccc; padding: 10px; color: #10b981; font-weight: bold;">${Math.round(this.currentMetrics.accuracy)}%</td>
                        <td style="border: 1px solid #ccc; padding: 10px;">${this.currentMetrics.keyPresses}</td>
                    </tr>
                </table>

                <div style="margin-bottom: 30px;">
                    <strong style="font-family: Arial, sans-serif; font-size:12pt; color:#000;">Your Typed Text (Errors Highlighted):</strong>
                    <div style="font-family: ${targetFontFamily}; font-size: 14pt; color: #000; padding: 10px; border: 1px solid #ddd; margin-top: 5px; line-height: 1.6; word-wrap: break-word;">
                        ${typedHighlighted || 'No characters typed.'}
                    </div>
                </div>
            </div>
        `;
    }

    finishTest() {
        this.isRunning = false;
        clearInterval(this.timerInt);
        
        const typingBox = document.getElementById('typingBox');
        if (typingBox) typingBox.disabled = true;

        this.calculateLiveStats();

        let reviewHTML = "";
        for (let i = 0; i < this.typedHistory.length; i++) {
            let target = this.wordsArray[i];
            let typed = this.typedHistory[i] || "";
            let safeTarget = this.escapeHTML(target);
            let safeTyped = this.escapeHTML(typed);
            
            if (target === typed) {
                reviewHTML += `<span style="color: var(--correct);">${safeTarget}</span> `;
            } else {
                reviewHTML += `<span style="color: var(--error); background: rgba(239, 68, 68, 0.1); padding: 2px 6px; border-radius: 4px; margin: 0 4px;"><del style="opacity: 0.7;">${safeTyped}</del> <b>${safeTarget}</b></span> `;
            }
        }

        let testResults = {
            examName: this.config.examName,
            netWpm: this.currentMetrics.netWpm,
            grossWpm: this.currentMetrics.grossWpm,
            accuracy: this.currentMetrics.accuracy,
            errorRate: this.currentMetrics.errorRate,
            keys: this.currentMetrics.keyPresses,
            fullErrors: this.fullErrors,
            halfErrors: this.halfErrors,
            reviewVisualHTML: reviewHTML, 
            reportDocumentHTML: this.generateReportHTML()
        };

        this.config.onTestComplete(testResults);
    }
}
