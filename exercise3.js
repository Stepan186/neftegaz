// Создать массив из 20 элементов в диапазоне (случайным образом)
// значений от -15 до 14 включительно. Определить количество элементов по модулю больших, чем максимальный.

let myArray = []
for (let i = 0; i < 20; i++){
    myArray.push(Math.floor(Math.random() * (14 - -15 + 1)) + -15)
}

let maxNum = Math.max(...myArray)
myArray = myArray.map((value) => {
    return Math.abs(value)
})

let count = 0

myArray.forEach((value)=> {
    if(Math.abs(value) > maxNum){
        count += 1
    }
})

console.log(count)