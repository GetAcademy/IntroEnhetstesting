function translate(text){
    let translation = '';
    for(let letter of text){  
        translation += 'aeiouyæøå'.includes(letter) ? letter : letter + 'o' + letter;
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


// Terje
// Toterorjoje