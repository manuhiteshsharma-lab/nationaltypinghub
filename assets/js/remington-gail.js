/**
 * NATIONAL TYPING HUB - MANGAL REMINGTON GAIL ENGINE
 * File: assets/js/remington-gail.js
 * Purpose: Transliterates physical English keystrokes into Hindi Remington Gail Unicode.
 */

const remingtonMap = {
    'a':'ं', 'b':'इ', 'c':'ब', 'd':'क', 'e':'म', 'f':'ि', 'g':'ह', 'h':'ी', 'i':'प', 'j':'र', 'k':'ा', 'l':'स', 'm':'उ', 'n':'द', 'o':'व', 'p':'च', 'q':'ु', 'r':'त', 's':'े', 't':'ज', 'u':'न', 'v':'अ', 'w':'ू', 'x':'ग', 'y':'ल', 'z':'्र',
    'A':'ँ', 'B':'ठ', 'C':'ब्', 'D':'क्', 'E':'म्', 'F':'थ्', 'G':'ळ', 'H':'भ्', 'I':'प्', 'J':'श्र', 'K':'ज्ञ', 'L':'स्', 'M':'ढ', 'N':'ड', 'O':'व्', 'P':'च्', 'Q':'फ', 'R':'त्', 'S':'ै', 'T':'ज्', 'U':'न्', 'V':'ट', 'W':'ॅ', 'X':'ग्', 'Y':'ल्', 'Z':'र्',
    '0':'0', '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9',
    '`':'़', '~':'़', '-':'-', '_':'=', '=':'ृ', '+':'त्र', '[':'ख', '{':'ख्', ']':',', '}':'द्व', '\\':'?', '|':'छ', ';':'य', ':':'रू', '\'':'श', '"':'श्', ',':'ए', '<':'ण', '.':'ण्', '>':'ढ', '/':'ध्', '?':'घ्'
};

function processRemingtonGail(englishText) {
    let mapped = "";
    
    // 1. Map physical keys to Hindi characters
    for (let i = 0; i < englishText.length; i++) {
        let char = englishText[i];
        mapped += remingtonMap[char] || char;
    }

    // 2. The Short 'i' Matra (ि) Unicode Fix
    // In Remington, 'ि' is typed before the letter. In Unicode, it must render after.
    // This Regex finds 'ि' followed by any Hindi consonant (with or without half-character combinations) and swaps them.
    let regex = /ि([कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञश्र])/g;
    
    // Run the swap twice to catch rapid double-typing scenarios
    mapped = mapped.replace(regex, '$1ि');
    mapped = mapped.replace(regex, '$1ि');

    return mapped;
}
