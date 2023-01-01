// Functional programming

// Вызов функции
PrintHelloWorld();

// Присваивание функции переменной
const func_1 = PrintHelloWorld;
func_1(); // Вызовется функция PrintHelloWorld

// Анонимный метод
let func_2 = function() {
   console.log('Анонимный метод');
}
func_2();

// Функция
function PrintHelloWorld() {
   console.log('Hello, World! (ф-ия без параметров)');
}

PrintMessage('Всем привет!');

// Функция с параметром
function PrintMessage(message) {
   console.log(message + ' ф-ия с параметром');
}

Sum(2, 4);
Sum(6, 4);
Sum('a', 'b');

// Функция с нескольким параметрами
function Sum(number_1, number_2) {
   if (isNaN(number_1) || isNaN(number_2)) {
      if (isNaN(number_1))
      {
         console.log(`${number_1} - NaN`);
      }
      
      if (isNaN(number_2))
      {
         console.log(`${number_2} - NaN`);
      }

      return;
   }

   const result = number_1 + number_2;

   console.log(`${number_1} + ${number_2} = ${result} (несколько параметров)`);
}

Calculate();
Calculate(0);
Calculate(199, 1);

// Функция с несколькими параметрами, заданными по умолчанию
function Calculate(num_1 = 1, num_2 = 99) {
   const result = num_1 + num_2;

   console.log(`Параметры по умолчанию: ${result}`);
}

ArgumentsArray(1, 2, 3, 4);

// Метод может принимать параметры даже если они явно не указаны в самой функции
function ArgumentsArray() {
   let result = 0;

   for (const n of arguments) {
      result += n;
   }

   console.log(`Массив агрументов: ${result}`);
}

InfiniteParams('Зима', 1, 0, -8, 11, 4, 5)

// Неопределённое количество параметров
function InfiniteParams(season, ...temps) {
   console.log('\n' + season);
   for (index in temps)
   {
      console.log(index + ' градусов по цельсию');
   }
}

console.log(`\nРезультат ф-ии: ${CalculateSum([1, 2, 3, 4])}`);

// Функция с возвращаемым значением
function CalculateSum(array) {
   let result = 0;

   for (number of array) {
      result += number;
   }

   return result;
}

// Выбираем сумму
let action = Menu(1);
// Передаём параметры
let result = action(2, 3);
console.log(`\nРезультат возвращения ф-ии: ${result}`);

// Возвращение функции
function Menu(n) {
   if (n == 1) return function(x, y) { return x + y; }
   else if (n == 2) return function (x, y) { return x - y; }
   else if (n == 3) return function (x, y) { return x * y; }

   return function() { return 0; }
}

// Функция, которая вызывается сразу при определении
(function() {
   console.log('Самовызывающаяся ф-ия IIFE (Immediately Invoked Function Expression)');
}())