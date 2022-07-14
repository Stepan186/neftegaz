// С клавиатуры вводится натуральное число. Найти его наибольшую цифру.
// Например, введено число 764580. Наибольшая цифра в нем 8.

let num = prompt()
num = num.split('')
let myArray = num.map((value)=> {
    return Number(value)
})
console.log(Math.max(...myArray))
