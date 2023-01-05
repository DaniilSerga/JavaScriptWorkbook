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

// Паттерн Модуль
// Условно говоря, модуль - метод, содержащий свои переменные и возвращаемые значения, 
// к которым напрямую можно получить доступ.
let foo = (function() {
   // Переменная, содержащаяся в модуле
   let obj = { greeting: '\nПаттерн модуль базируется на замыканиях и состоит из внешней функции, которая определяет лексическое окружение, и возвращаемого набора внутренних функций, которые имеют доступ к этому окружению'};

   // ВОзвращаемая ф-ия
   return {
      // к display можно обращаться (т.е. вызывать извне)
      display: function() {
         console.log(obj.greeting);
      },
      todayDate: function() {
         console.log(`\nСегодняшняя дата: ${new Date()}`);
      }
   }
})();

// Вызов display
foo.display();
// Вызов todayDate
foo.todayDate();


// РЕКУРСИВНЫЕ ФУНКЦИИ
function getFactorial(number) {
   if (number === 1) {
      // Когда число дойдёт до 1 - из функции вернётся единица и произойдёт выход из неё
      return 1;
   }
   else {
      // Повторный вызов текущей функции с изменённым параметром
      return number * getFactorial(number - 1);
   }
}

console.log(`\n4! = ${getFactorial(4)} (рекурсивно)`);

// ПЕРЕОРПДЕЛЕНИЕ ФУНКЦИЙ
function overridableFunc() {
   console.log('\nПервый вывод на консоль');

   overridableFunc = function() {
      console.log('Второй вывод на консоль (ф-ия переопределена)');
   }
}

let overrideTest = overridableFunc;

// Здесь ф-ия будет переопределена при повторном вызове
// (т.е. сначала будет "Первый вывод...", затем "Второй вывод...")
overridableFunc();
overridableFunc();

// Стоит учесть, что здесь ф-ия не переопределяется!
overrideTest();
overrideTest();

// ПЕРЕДАЧА ПАРАМЕТРОВ ПО ЗНАЧЕНИЮ И ССЫЛКЕ
function changeVariable(user) {
   user.Name = 'Mike';
}

let user_1 = { Name: 'Tom' };
// Здесь, после вызова у user_1 изменится значение свойства Name (Tom -> Mike)
changeVariable(user_1);

/*
Так же будет происходить и с массивами. Суть в том, что если в функции изменяется значение свйоство
объекта или значение элемента массива, то изменится и изначальный массив. НО если переустановить
полностью объект или массив, то значение объекта или массива, передаваемого в функцию не изменится,
а изменения будут существовать только внутри самой функции */
console.log(`\nИзменённое значение переменной без какого-либо присваивания: ${user_1.Name}`);

// СТРЕЛОЧНЫЕ ФУНКЦИИ

let arrowFunc_1 = () => console.log('\nПривет, я - стрелочная функция!');
arrowFunc_1();

let arrowFunc_2 = (x, y) => x + y;
console.log(`\nС моей помощью можно что-то посчитать: 5 + 4 = ${arrowFunc_2(5, 4)}`);

let arrowFunc_3 = (name, age) => ({ name: name, age: age});

let tom = arrowFunc_3('Том', 19);
let ivan = arrowFunc_3('Иван', 18);

console.log(`\nА ещё, с моей помощью можно присвоить объекту значения:\n1) ${tom.name}, ${tom.age}\n2) ${ivan.name}, ${ivan.age}`);

const square = n => {
   let result = n**2;
   return result;
}

console.log(`\nТакже можно передать переменную и получить результат: 4^2 = ${square(4)}`);