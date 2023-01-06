// Ex#1
// Сортировка массива методом пузырька
let arr_1 = [ 1, 8, 3, 2, 9, 0, 5, 4, 6, 7]
for (let i = 0; i < arr_1.length; i++)
{
   for (let j = 0; j < arr_1.length; j++)
   {
      if (arr_1[i] < arr_1[j] && i != j)
      {
         let temp = arr_1[i];
         arr_1[i] = arr_1[j];
         arr_1[j] = temp;
      }
   }
}

for (el of arr_1)
{
   console.log(el);
}

// Ex#2
// Развернуть слово (в результате получится qwerty)
let word = 'ytrewq';
let result = '';
for (let i = word.length - 1; i >= 0; i--)
{
   result += word[i];
}

console.log(result);

// Ex#3
// Посчитать выражения:
// 1) 2+2*2, 2) квадратный корень из 13, 3) синус и косинус 30 и 60, 4) округлить значение Pi до 3 цифр после запятой
console.log(`\n2+2*2: ${2 + 2 * 2}`);
console.log(`sqrt(13): ${Math.sqrt(13)}`);
console.log(`sin(30): ${Math.sin(30)} cos(30): ${Math.cos(30)}\nsin(60): ${Math.sin(60)} cos(60): ${Math.cos(60)}`);
console.log(`Pi до 3 цифр после запятой: ${Math.round(Math.PI * 1000.0) / 1000.0}`);
