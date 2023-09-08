function translate(text) {
    let translation = '';
    for (let letter of text) {
        let addText = letter;
        const isConsonant = 'bcdfghjklmnpqrstvwxz'.includes(letter.toLowerCase())
        if (isConsonant) addText += 'o' + letter.toLowerCase();
        translation += addText;
    }
    return translation;
}

function countA(text) {
    if (typeof text !== "string") return 0;
    let count = 0;
    for (let letter of text.toLowerCase()) {
        if (letter == 'a') count++;
    }
    return count;
}

function describeNumber(number) {
    if (typeof (number) != 'number') return 'not a number ' + number;
    let description = number + ' ';
    if (Math.abs(number % 2) == 0) {
        description += 'partall';
    } else {
        description += 'oddetall';
    }
    if (number >= 0) {
        description += ' positivt';
    } else {
        description += ' negativt';
    }
    return description;
}


// Terje
// Toterorjoje

// controller
function doubleNumber() {
    number *= 2;
    updateView();
}