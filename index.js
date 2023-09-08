function countA(text) {
    if (typeof text !== "string") return 0;
    let count = 0;
    for (let letter of text) {
        if (letter == 'a') count++;
    }
    return count;
}