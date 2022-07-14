	// Пользователь последовательно вводит с клавиатуры числа в консоль.
    // Как только пользователь ввел «пустую строку» вывести на экран сумму введенных чисел и завершить работу программы.

    let check = false
    let res = 0

    while (check === false){
        let num = prompt()
        if (num !== ''){
            num = Number(num)
            res += num
        } else {
            check = true
        }
    }
    console.log(res)
    throw new Error('Программа закончена')