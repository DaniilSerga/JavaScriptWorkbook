// Копирование и сравнение объектов
let user_1 = {
    name: 'Дмитрий',
    age: 18
};

// объекты копируются по ссылке
let user_2 = user_1;

// соответственно, поменяв свойство у одного из объектов - значение изменится у обоих
user_2["name"] = 'Александр';
user_1["age"] = 19;
// добавив свойство к одному из объектов, оно добавится у обоих объектов
user_2["city"] = 'Бруклин';

// Вывод: Александр, 19, Бруклин
console.log(user_1);
console.log(user_2);

// МЕТОД Object.assign(targer, ...sources)
// принимает в качестве параметра target объект, в который нужно скопировать свойства
// а параметр sources принимает набор объектов из которых нужно скопировать свойства
let tom = {name: 'Том'};

// При вызове этой команды объект, принимающий свойства других объектов, перестаёт быть ссылкой на другие объекты
// и представляет собой просто объект с идентичным набором свойств
let bob = Object.assign({}, tom);

bob["name"] = 'Боб';
bob["age"] = 19;

/* Вывод:
{name: 'Том'}
{name: 'Боб', age: 19}
*/
console.log(tom);
console.log(bob);

// КОПИРОВАНИЕ ИЗ НЕСКОЛЬКИХ ОБЪЕКТОВ
tom = { name: 'Том' };
bob = { age: 37 };

// копирование свойств из объектов tom и bob в объект sam
let sam = Object.assign({}, tom, bob);

// {name: 'Том', age: 37}
console.log(sam);

// КОПИРОВАНИЕ ОДНОИМЁННЫХ СВОЙСТВ
tom = { name: 'Том', age: 31 };
bob = { age: 49 };

// Если объекты, из которых выполняется копирование, содержат одинаковые свойства, 
// то свойства из последних объектов замещают свойства предыдущих:
sam = Object.assign({}, tom, bob);

// Здесь оба объекта - tom и bob содержат свойство age, но в объекте person свойство 
// age равно 45 - значение из объекта sam, потому что копирование из объекта sam произодится 
// в последнюю очередь.
console.log(sam);

// КОПИРОВАНИЕ С ПОМОЩЬЮ spread-оператора
// Можно копировать свойства объектов и другим способом. Для используется spread-оператор
tom = { name: 'Том', age: 19, sex: "Мужской", company: { name: "Google", role: "Разработчик"}};

// Ниже представлен spread-оператор. При его использовании можно сразу же изменять значения свойств:
let ann = {...tom, name: "Анна", sex: "Женский"};
ann.company.role = "Дизайнер"

// {name: 'Анна', age: 19, sex: 'Женский', company: {…}} Google Дизайнер
console.log(ann, ann["company"]["name"], ann["company"]["role"]);

// ------СРАВНЕНИЕ ОБЪЕКТОВ------
tom = { name: 'Том', age: 20 };
bob = { name: 'Том', age: 20 };

// Сравнение объектов всегда будет возвращать false, кроме случая, если оба объекта ссылаются на один и тот
// же объект
console.log(`${tom == bob}`);   // false
console.log(`${tom === bob}`);  // false

bob = tom;
// Здесь bob является ссылкой на tom, поэтому при сравнении вернётся true
console.log(`${tom == bob}`);   // true
console.log(`${tom === bob}`);  // true




