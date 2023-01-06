let x = 3;
let y = ++x;

console.log(`x: ${x}\ny = ++x\ny: ${y}`);

// В JS есть несолько операторов сравнение, вызывающих конфуз по началу
// такие операторы как: === (тождественность) и == равенство

let booleanResult_1 = 5 == '5'; // true, т.к. сравнивает только значения, но не типы данных
let booleanResult_2 = 5 === '5' // false, т.к. разные типы данных

console.log(`5 == '5' - ${booleanResult_1}`);
console.log(`5 === '5' - {booleanResult_2}`);

let a = 1, b = 2;

let statement = a < b ? true : false;
console.log(`${a} < ${b} - ${statement}`);

// ?? - проверяет на пустоту, и, если переменная пуста или не имеет значения, то присваивается правый операнд
a ??= 'hi'; // если бы a было пустым, то ей бы присвоилось значение 'hi'
console.log(a);

console.log(5 + parseInt('95')); // конвертация строки в int - 100
console.log('10' + String(5)); // конвертация числа в string - 105
console.log(parseInt('abc')); // вернёт NaN (not a number)
console.log(parseInt('110', 2)); // конвертация двоичного числа 110 в десятичную СС - 6

if (!isNaN('16'))
{
   console.log(`16 - число!`);
}

// ARRAYS AND If..Else constuctions

// в JS массивы не строго типизированы
// простейшая инициализация массива:
let array = []; // массив

array = ['asd', 123, 1n, true]; // массив может содержать переменные разных типов и не нужно указывать размерность

// Двумерный массив
array = [
   [1, 2, 3],
   [4, 5, 6],
   [6, 7, 8],
];

console.log(array[0][1]); // обращение ко второму элементу первой строки массива
/* Аналогично происходит обращение к элементам у массивов разных размерностей
каждая размерность представляет собой дополнительную пару квадратных скобок при
обращении к элементу. Пример: обращение к трёхмерному массиву выглядит так: arr[1][2][3] и т.д.*/

// Содержимое массива будет выглядеть так: { 1, 2, 3, u, u, u, u, 8 }, где u - undefined
array = [1, 2, 3];
array[7] = 8;

console.log(array[7]);

let r = 4;

// Проверка на пустоту (НЕ РАБОТАЕТ НА OBJECT, т.к. object всегда будет возвращать true при проверке на наличие значений в нём)
if (r) {
   console.log(`Переменная ИМЕЕЕТ значение ${r}`);
}
else {
   console.log('Переменная не имеет значения')
}

let income = 100;
switch (income)
{
   case 100: // Эта конструкция означает, что для обоих совпадений будут выполнены одинаковые действия
   case 200:
      console.log('Доход составляет 100 или 200');
      break;
   default:
      console.log('Не было найдено совпадений');
      break;
}

const person = { name: "Tom", age: 37 };
for(prop in person){
     console.log(prop); // Output: name, age
}

const arr = [ 1, 2, 3, 4 ]
for (ch of arr) {
   console.log(ch); // Output: 1 2 3 4
}

const people = ["Tom", "Sam", "Bob"];
for(const person of people) {
    console.log(person);
}