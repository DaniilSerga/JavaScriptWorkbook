// Упражнения здесь будут аналогичны тем, что и в прошлой теме, но с использованием ф-ий

// #1: Ф-ия на входе получает массив, а на выходе возвращает его уже отсортиорванным
// но сортировка будет происходить на выбор (возрастание/убывание)

// func получает функцию для сортировки массива в зависимости от переданного параметра
// 1 - возрастание, 2 - убывание
let func_1 = Sort(2);
let arr_1 = [ 4, 3, 5, 1, 2 ];
// После того, как func получил функцию - необходимо передать массив для сортировки
arr_1 = func_1(arr_1);
// Вывод массива на экран
console.log(`Результат: ${arr_1}`);
// Выедется
// (5) [1, 2, 3, 4, 5] или
// (5) [5, 4, 3, 2, 1]

function Sort(operation) {
    // По возрастанию
    if (operation == 1) {
        return function(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] < arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }

            return arr;
        }
    }
    // По убыванию
    else if (operation == 2) {
        return function(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }

            return arr;
        }
    }
    else {
        console.log('Укажите операцию');
    }
}

// #2: Перевернуть слово и полученное слово перевернуть снова
let word = WrapWord('qwerty');
console.log(`\nПервая итерация: ${word}`); // ytrewq
word = WrapWord(word);
console.log(`Вторая итерация: ${word}`); // qwerty

function WrapWord(word) {
    let wrapperWord = ''; // если не указать значение, то в этой переменной будет храниться значение undefined

    for (let i = word.length - 1; i >= 0; i--) {
        wrapperWord += word[i];
    }

    return wrapperWord;
}

// #3: Калькулятор. 

// Здесь изначально сработает самовызывающаяся ф-ия с информирубщим текстом, а далее алгоритм работы будет похож
// на первое упражнение отсюда же
(function() {
    console.log('\nСейчас на экран будет выведен результат вычислений:');
}())

// Cумма
let func_2 = OperationChoise('+');
console.log(`99 + 1 = ${func_2(99, 1)}`);

// Вычитание
func_2 = OperationChoise('-');
console.log(`100 - 1 = ${func_2(100, 1)}`);

// Умножение
func_2 = OperationChoise('*');
console.log(`333 * 3 = ${func_2(333, 3)}`);

// Деление
func_2 = OperationChoise('/');
console.log(`999 / 9 = ${func_2(999, 9)}`);

function OperationChoise(operation) {
    switch (operation) {
        case '+':
            return function(x, y) { return x + y; }
        case '-':
            return function(x, y) { return x - y; }
        case '*':
            return function(x, y) { return x * y; }
        case '/':
            return function(x, y) { return x / y; }
        default:
            console.log('Был введён недопустимый символ');
            break;
    }
}