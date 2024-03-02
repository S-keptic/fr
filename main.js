let dynamicContent = document.getElementById('dynamic-text');

const phrases = ["Mangaka...", "Aararagi's lover...."];
let letterIndex = 0;
let phraseIndex = 0;
let typingSpeed = 150;
let erasingSpeed = 100

function printLetters(phrase) {
    if (letterIndex === phrase.length) {
        clearLetters();
    } else {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(function() {
            printLetters(phrase);
        }, typingSpeed);
    }
}

function clearLetters() {
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length
        letterIndex=0
        printLetters(phrases[phraseIndex])
    }
    else if (letterIndex > -1) {
        let updatedPhrase = "";
        for (let index = 0; index < letterIndex; index++) {
            updatedPhrase += phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent = updatedPhrase;
        letterIndex--;
        setTimeout(clearLetters, erasingSpeed);
    }
}

printLetters(phrases[phraseIndex]);
