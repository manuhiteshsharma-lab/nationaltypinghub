/**
 * NATIONAL TYPING HUB - MASTER TYPING ENGINE
 * A decoupled, universal engine for evaluating Hindi (Kruti/Mangal) and English speed tests.
 * Utilizes a Dual-Pillar Architecture for independent Speed and Error metric calculations.
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
            errorDefinition: profile.errorDefinition || "STANDARD", // "STANDARD" or "FULL_HALF"
            
            textPool: profile.textPool || [],
            onTestComplete: profile.onTestComplete || function(results) {}
        };

        // 2. Internal Tracking Variables
        this.wordsArray = [];
        this.typedHistory = [];
        this.currentWordIndex = 0;
        
        this.totalGrossStrokes = 0;
        this.totalErrorStrokes = 0;
        this.fullErrors = 0;
        this.halfErrors = 0;
        this.correctWordsCount = 0; 
        
        this.startTime = null;
        this.timerInt = null;
        this.isRunning = false;
        this.lastInputValue = "";
        
        this.currentMetrics = {
            grossWpm: 0,
            netWpm: 0,
            accuracy: 100,
            errorRate: 0,
            keyPresses: 0
        };

        // 3. Mangal Inscript Key Mapping
        this.inscriptMap = {
            'q':'ौ','w':'ै','e':'ा','r':'ी','t':'ू','y':'ब','u':'ह','i':'ग','o':'द','p':'ज','[':'ड',']':'़','a':'ो','s':'े','d':'्','f':'ि','g':'ु','h':'प','j':'र','k':'क','l':'त',';':'च',"'":'ट','z':'ॅ','x':'ं','c':'म','v':'न','b':'व','n':'ल','m':'स',',':',','.':'.','/':'य',
            'Q':'औ','W':'ऐ','E':'आ','R':'ई','T':'ऊ','Y':'भ','U':'ङ','I':'घ','O':'ध','P':'झ','{':'ढ','}':'ञ','A':'ओ','S':'ए','D':'अ','F':'इ','G':'उ','H':'फ','J':'ऱ','K':'ख','L':'थ',':':'छ','"':'ठ','Z':'ऍ','X':'ँ','C':'ण','V':'ऩ','B':'ळ','N':'ऴ','M':'श','<':'ष','>':'।','?':'य़', 
            '`':'ृ', '~':'ञ', '+':'ृ', '=':'ृ', '^':'त्र', '&':'क्ष', '*':'श्र', '_':'ः', '\\':'ॉ', '|':'ऑ'
        };
    }

    // HTML Sanitization for Kruti Dev compatibility
    escapeHTML(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // ==========================================================
    // INITIALIZATION & TIMING
    // ==========================================================
    start() {
        if (!this.config.textPool || this.config.textPool.length === 0) {
            console.error("MasterTypingEngine Error: Text pool is empty.");
            return;
        }

        // Shuffle and load text randomly
        let targetText = this.config.textPool[Math.floor(Math.random() * this.config.textPool.length)].trim();
        this.wordsArray = targetText.repeat(15).trim().split(/\s+/); 
        this.typedHistory = [];

        // Setup the DOM interface
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

        // Reset tracking metrics
        this.currentWordIndex = 0;
        this.totalGrossStrokes = 0;
        this.totalErrorStrokes = 0;
        this.fullErrors = 0;
        this.halfErrors = 0;
        this.correctWordsCount = 0;
        this.lastInputValue = "";

        // Trigger session
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

    // ==========================================================
    // KEYSTROKE HANDLING & INSCRIPT MAPPING
    // ==========================================================
    handleInput(event) {
        if (!this.isRunning) return;
        const inputObj = document.getElementById('typingBox');

        // Apply Inscript Mapping for Mangal Unicode exams
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

        let currentVal = inputObj.value;

        // Strict Mode Enforcement
        if (this.config.strictMode && currentVal.length < this.lastInputValue.length) {
            inputObj.value = this.lastInputValue;
            return;
        }

        // Spacebar evaluation logic
        if (currentVal.endsWith(' ')) {
            let typedWord = currentVal.trim();
            
            if (typedWord === "") {
                inputObj.value = "";
                this.lastInputValue = "";
                return;
            }

            this.typedHistory.push(typedWord);
            let targetWord = this.wordsArray[this.currentWordIndex];
            if (!targetWord) return;

            let span = document.getElementById(`word-${this.currentWordIndex}`);
            span.classList.remove('active-word');

            if (typedWord === targetWord) {
                span.classList.add('correct');
                this.totalGrossStrokes += targetWord.length + 1; // +1 for the spacebar stroke
                this.correctWordsCount++;
            } else {
                span.classList.add('incorrect');
                this.totalGrossStrokes += typedWord.length + 1;
                this.totalErrorStrokes += Math.max(typedWord.length, targetWord.length) + 1;
                this.categorizeError(typedWord, targetWord);
            }

            this.currentWordIndex++;
            inputObj.value = "";
            this.lastInputValue = "";

            // Advance scroll positioning
            if (this.currentWordIndex < this.wordsArray.length) {
                let nextSpan = document.getElementById(`word-${this.currentWordIndex}`);
                nextSpan.classList.add('active-word');
                
                const display = document.getElementById('displayArea');
                if (nextSpan.offsetTop > display.scrollTop + 120) {
                    display.scrollTop = nextSpan.offsetTop - 50;
                }
            } else {
                this.finishTest();
            }
        } else {
            this.lastInputValue = inputObj.value;
        }

        this.calculateLiveStats(document.getElementById('typingBox').value.trim());
    }

    categorizeError(typedWord, targetWord) {
        // Algorithm evaluating structural damage for Full/Half error penalties
        let lengthDiff = Math.abs(typedWord.length - targetWord.length);
        if (lengthDiff > 1 || typedWord === "") {
            this.fullErrors++;
        } else {
            this.halfErrors++;
        }
    }

    // ==========================================================
    // THE DUAL-ASPECT SCORING ENGINE
    // ==========================================================
    calculateLiveStats(currentTypedWord) {
        let elapsedMins = (new Date() - this.startTime) / 60000;
        if (elapsedMins < 0.02) return;

        // Factor in the un-submitted active word
        let targetWord = this.wordsArray[this.currentWordIndex] || "";
        let liveErrors = 0;
        for (let i = 0; i < currentTypedWord.length; i++) {
            if (currentTypedWord[i] !== targetWord[i]) liveErrors++;
        }

        let currentGrossStrokes = this.totalGrossStrokes + currentTypedWord.length;
        
        // ---------------------------------------------------------
        // ASPECT 1: GROSS SPEED CALCULATION
        // ---------------------------------------------------------
        let grossWpm = 0;
        let totalWordsEvaluated = 0;

        if (this.config.wordDefinition === "ACTUAL_WORDS") {
            totalWordsEvaluated = this.currentWordIndex + (currentTypedWord.length > 0 ? 1 : 0);
            grossWpm = totalWordsEvaluated / elapsedMins;
        } else {
            // Default to 5_STROKE rule
            totalWordsEvaluated = currentGrossStrokes / 5;
            grossWpm = totalWordsEvaluated / elapsedMins;
        }

        // ---------------------------------------------------------
        // ASPECT 2: ERROR & ACCURACY CALCULATION
        // ---------------------------------------------------------
        let totalPenaltyWords = 0;

        if (this.config.errorDefinition === "FULL_HALF") {
            totalPenaltyWords = this.fullErrors + (this.halfErrors / 2);
        } else {
            // Default STANDARD rule
            totalPenaltyWords = this.fullErrors + this.halfErrors;
        }

        // Calculate both Accuracy % and Error % natively
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

        // Store exhaustive metrics in the class instance to pass to the final report
        this.currentMetrics = {
            grossWpm: Math.round(grossWpm),
            netWpm: Math.round(netWpm),
            accuracy: accuracyPercent.toFixed(2),
            errorRate: errorRatePercent.toFixed(2),
            keyPresses: currentGrossStrokes
        };

        // Push standard visual metrics to the UI display (if visible)
        let uiGross = document.getElementById('liveGross');
        let uiNet = document.getElementById('liveWpm');
        let uiKeys = document.getElementById('liveKeys');
        let uiAcc = document.getElementById('liveAcc');

        if(uiGross) uiGross.innerText = this.currentMetrics.grossWpm;
        if(uiNet) uiNet.innerText = this.currentMetrics.netWpm;
        if(uiKeys) uiKeys.innerText = this.currentMetrics.keyPresses;
        if(uiAcc) uiAcc.innerText = Math.round(accuracyPercent) + "%";
    }

    // ==========================================================
    // EXPORT REPORT & REVIEW GENERATION
    // ==========================================================
    generateReportHTML(net, gross, acc, keys) {
        let originalTextFragment = this.wordsArray.slice(0, this.currentWordIndex).join(" ");
        let typedHighlighted = "";
        
        // Generates the comparative error highlighting layout
        this.typedHistory.forEach((word, idx) => {
            let target = this.wordsArray[idx] || "";
            let safeWord = this.escapeHTML(word);
            if (word === target) {
                typedHighlighted += `<span>${safeWord}</span> `;
            } else {
                typedHighlighted += `<span style="color: #ef4444; font-weight: bold; text-decoration: underline;">${safeWord}</span> `;
            }
        });

        let targetFontFamily = (this.config.languageCss === 'font-en') ? "Arial, sans-serif" : 
                               (this.config.languageCss === 'font-kruti') ? "'KrutiDevMobile', 'Kruti Dev 010', sans-serif" : 
                               "'Noto Sans Devanagari', sans-serif";
        let targetFontSize = (this.config.languageCss === 'font-en') ? "11pt" : "15pt";

        return `
            <div style="font-family: Arial, sans-serif; color: #000; padding: 15px; max-width: 800px; margin: 0 auto; background: #fff;">
                <h2 style="text-align: center; color: #2563eb; margin-bottom: 5px; font-family: Arial, sans-serif;">${this.config.examName} Performance Report</h2>
                <hr style="border: 1px solid #ccc; margin-bottom: 20px;">
                
                <h3 style="background: #f1f5f9; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; font-family: Arial, sans-serif; font-size: 14pt;">Assessment Metrics</h3>
                <table style="width: 100%; border-collapse: collapse; text-align: center; margin-bottom: 20px; font-family: Arial, sans-serif;">
                    <tr style="background: #e2e8f0;">
                        <th style="border: 1px solid #ccc; padding: 10px;">Net WPM</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Gross WPM</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Accuracy</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Error Rate</th>
                        <th style="border: 1px solid #ccc; padding: 10px;">Key Presses</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 10px; font-weight: bold; font-size: 14pt; color: #2563eb;">${net} WPM</td>
                        <td style="border: 1px solid #ccc; padding: 10px;">${gross} WPM</td>
                        <td style="border: 1px solid #ccc; padding: 10px; color: #10b981; font-weight: bold;">${acc}%</td>
                        <td style="border: 1px solid #ccc; padding: 10px; color: #ef4444; font-weight: bold;">${this.currentMetrics.errorRate}%</td>
                        <td style="border: 1px solid #ccc; padding: 10px;">${keys}</td>
                    </tr>
                </table>

                <div style="margin-bottom: 15px;">
                    <strong style="font-family: Arial, sans-serif; font-size:12pt; color:#000;">Provided Actual Text:</strong>
                    <div style="font-family: ${targetFontFamily}; font-size: ${targetFontSize}; color: #444; padding: 10px; background: #f9f9f9; border: 1px solid #ddd; margin-top: 5px; line-height: 1.6;">
                        ${this.escapeHTML(originalTextFragment)}
                    </div>
                </div>
                <div style="margin-bottom: 30px;">
                    <strong style="font-family: Arial, sans-serif; font-size:12pt; color:#000;">Your Typed Text (Errors Highlighted in Red):</strong>
                    <div style="font-family: ${targetFontFamily}; font-size: ${targetFontSize}; color: #000; padding: 10px; border: 1px solid #ddd; margin-top: 5px; line-height: 1.6;">
                        ${typedHighlighted || 'No characters typed.'}
                    </div>
                </div>

                <hr style="border: 1px solid #ccc; margin-top: 30px; margin-bottom: 10px;">
                <p style="text-align: center; font-size: 10pt; color: #666; font-family: Arial, sans-serif;">Generated securely by <strong><a href="https://nationaltypinghub.in" style="color: #2563eb; text-decoration: none;">NationalTypingHub.in</a></strong></p>
            </div>
        `;
    }

    finishTest() {
        this.isRunning = false;
        clearInterval(this.timerInt);
        
        const typingBox = document.getElementById('typingBox');
        if (typingBox) typingBox.disabled = true;

        // Build the isolated strike-through error review block natively
        let reviewHTML = "";
        for (let i = 0; i < this.currentWordIndex; i++) {
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

        // Package all end-of-test components cleanly and hand off to the external shell's callback function
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
            reportDocumentHTML: this.generateReportHTML(
                this.currentMetrics.netWpm,
                this.currentMetrics.grossWpm,
                Math.round(this.currentMetrics.accuracy),
                this.currentMetrics.keyPresses
            )
        };

        this.config.onTestComplete(testResults);
    }
}