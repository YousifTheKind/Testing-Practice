function caesarCipher(str, factor) {
    const input = [...str];
    const result = [];
    input.forEach((char) => {
        if (char == char.match(/[.,:!?" "]/)) {
            result.push(char);
        } else if (char === char.toUpperCase()) {
            result.push(
                getShiftedLetter(char.toLowerCase(), factor).toUpperCase()
            );
        } else if (char === char.toLowerCase()) {
            result.push(getShiftedLetter(char, factor));
        }
    });
    function getShiftedLetter(char, factor) {
        const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
        const indexOfChar = alphabet.indexOf(char);

        if (indexOfChar + factor > 25) {
            return alphabet[indexOfChar + factor - 26];
        } else return alphabet[indexOfChar + factor];
    }
    return result.join("");
}

export { caesarCipher };
