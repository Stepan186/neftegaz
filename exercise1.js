// Вводится целое число, обозначающее код символа по таблице ASCII.
// Определить, это код английской буквы или какой-либо иной символ.


let code = Number(prompt());

if (code >= 65 && code <= 90 || code >= 97 && code <= 122 ){
    console.log('Это буква:', String.fromCharCode(code))
}
else {
    console.log('Это символ:', String.fromCharCode(code))
}