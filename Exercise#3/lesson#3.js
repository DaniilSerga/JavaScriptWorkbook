// Проверка наличия и перебор методов и свойств

// При динамическом объявллении свойств в объекте иногда необходимо порверять наличие тех или иных свойств
let user_1 = {};
user_1["name"] = "Анастасия";
user_1["age"] = 18;
user_1.info = function() {
    console.log(`Имя: ${user_1.name}, Возраст: ${user_1.age}`);
}

// Для проверки наличия свойства или функции в объекте используется конструкция:
// "название_свойства|название_функции" in имя_объекта
let hasCityProp = "city" in user_1;
let hasNameProp = "name" in user_1;
let hasInfoFunc = "info" in user_1;

// false, т.к. в объекте нет свойства city
console.log(hasCityProp);
// true, т.к. в объекте есть свойство name
console.log(hasNameProp);
// true, т.к. в объекте есть функция info
console.log(hasInfoFunc);

console.log();

// Также проверить наличие свойства или функции можно с помощью значения undefined
hasCityProp = user_1.city!==undefined;
hasNameProp = user_1.name!==undefined;
hasInfoFunc = user_1.info!==undefined;

console.log(hasCityProp);   // false, т.к. отсутствует свойство city
console.log(hasNameProp);   // true, т.к. свойство name существует 
console.log(hasInfoFunc);   // true, т.к. функция info существует 

console.log();

// Аналогично предыдущим способам, для проверки можно использовать функцию .hasOwnProperty("имя_функции|свойства")
hasCityProp = user_1.hasOwnProperty("city");
hasNameProp = user_1.hasOwnProperty("name");
hasInfoFunc = user_1.hasOwnProperty("info");

console.log(hasCityProp);   // false, т.к. отсутствует свойство city
console.log(hasNameProp);   // true, т.к. свойство name существует 
console.log(hasInfoFunc);   // true, т.к. функция info существует 

// ------ПЕРЕБОР СВОЙСТВ И ФУНКЦИЙ------

// С помощью цикла с in можно перебрать все свойства и функции объекта
for (const prop in user_1) {
    console.log(`${prop}: ${user_1[prop]}`);
}

/* Вывод:
['name', 'Анастасия']
['age', 18]
['info', ƒ]
*/

console.log();

// Также с помощью функций Object.entries (#1), Object.keys(#2), Object.values(#3) можно получить 
// все свойства и функции объекта (в том числе и их значения)

// #1: Object.entries
for (const prop of Object.entries(user_1)) { 
    console.log(prop);
}
/* Вывод:
['name', 'Анастасия']
['age', 18]
['info', ƒ]
*/

// #2: Object.keys
console.log(`\nObject.keys()\n` + Object.keys(user_1));   // получает названия свойств (ключи) объекта
// Вывод: name,age,info

// #3: Object.values
console.log(`\nObject.values()\n` + Object.values(user_1));     // получает значения свойств объекта
/* Вывод:
Анастасия,18,function() {
    console.log(`Имя: ${user_1.name}, Возраст: ${user_1.age}`);
}
*/
