const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let total = ''; 
    for (let i = 0; i < expr.length; i = i + 10) {
        let morseSimbol = expr.slice(i, i + 10);
        if (morseSimbol == '**********') {
            total = total + ' '
        } else  {
            let arr = []
            for (let n = 0; n < morseSimbol.length; n = n + 2) {
                let num = morseSimbol.slice(n, n + 2)
                if (num == '11') {
                    arr.push('-')
                } else if (num == '10'){
                    arr.push('.')
                }
            }
            let str = arr.join('');
            arr = [];
            let letter
                for (key in MORSE_TABLE) {
                    if (key == str) {
                        letter = MORSE_TABLE[key]
                        total = total + letter
                    }
                }
        }
    }
    return total
}

module.exports = {
    decode
}