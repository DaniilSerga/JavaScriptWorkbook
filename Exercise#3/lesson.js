// OOП

// Объект
let user = {
    name: 'Юрий',
    age: 21,
}

let teacher = {
    user,
    course: 'JavaScript',
}

// {name: 'Юрий', age: 21} JavaScript
console.log(teacher.user, teacher.course);

// Объект также может содержать в себе функции. Эти функции могут как 
// обращаться к свойствам класса с помощью 'this.', так и наоборот.
// Также могут возвращать значения и принимать параметры.
// короткая форма записи функции в объекте: название_функции(): { команды }
// полная форма записи функции в объекте: название_функции: function() { команды }
user = {
    name: 'Виталий',
    age: 27,
    isOlderThan(user) {
        return this.age >= user.age ? true : false;
    },
    getBirthDate() {
        return new Date().getUTCFullYear() - this.age;
    },
    info: function() {
        console.log('ИНФОРМАЦИЯ');
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
    }
}

user.info();
// 1996
console.log(user.getBirthDate());
// true
console.log(user.isOlderThan({ age: 24 }));

// Также, названия свойств объекта могут состоять из нескольки слов. В таком случае
// названия определяются с помощью синтаксиса массивов: ["название"]: значение
// либо "название": значение
user = {
    ["date of birth"]: '19.06.2007',
    "full name": 'Иванов Иван Иванович',
    age: 16
}

// Обращение к сложным свойствам происходит как при обращении к элементу массива - через [], где
// в квадратных скобках указывается название свойства
console.log(`\nДата рождения: ${user['date of birth']}`);
console.log(`ФИО: ${user['full name']}`);
console.log(`Возраст: ${user.age}\n`);

// Также в объектах можно динамически задавать названия и значения свойств:
let obj_1 = getDynamicObject('name', 'Эрик');
let obj_2 = getDynamicObject('filmTitle', 'Хатико');
obj_1.print();
obj_2.print();

function getDynamicObject(propName, propValue) {
    let obj = {
        // Здесь динамически свойству задаётся название и значение
        [propName]: propValue,
        print() {
            console.log(`${propName}: ${propValue}`);
        }
    }

    return obj;
}

// Также JavaScript представляет возможность удалять свойства объектов с помощью команды .delete
user = {
    name: 'Филипп',
    age: 28,
    city: 'Будапешт',
    info() {
        console.log(`\nИмя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
        console.log(`Город: ${this.city}`);
    }
}

user.info(); // выведется вся информация
delete user.city; // удаление свойства
if (user.city == undefined) {
    console.log('Свойство city было удалено!\n');
}

// Возможно, возникнет необходимость создать неизменяющийся (константный) класс.
// Для этого недостаточно будет написать const название_объекта. Таким образом
// возможность редактировать свойства останется, а инициализировать заново сам объект - нет
const nonConstantUser = {
    name: 'Боб'
}

nonConstantUser.name = 'Елизаветта';
console.log(nonConstantUser.name); // Елизаветта

// Для того чтобы исключить возможность изменения класса необходимо "заморозить его":
Object.freeze(nonConstantUser); // - заморозка объекта
nonConstantUser.name = 'Боб'; // - присваивание нового значения свойству
console.log(nonConstantUser.name); // Всё равно выведет Елизаветта

console.log('');
// Также для сокращения количества строк кода, можно сокращать инициализацию объекта:
// если имя передаваемой переменной совпадает с названием свойства, то можно писать так:
const age = 18;
const movesTo = place => { console.log(`${user.name} движется к ${place}\n`) }

user = { age, movesTo, name: 'Кларк' };

console.log(user); // age: 18, name: 'Кларк' (имя свойства совпадает с именем переменной)
user.movesTo('отчислению') // название метода совпадает с передаваемым методом в свойства объекта

// ФУНКЦИЯ Object.fromEntries предоставляет возможность создания объекта из набора пар типа ключ-значение,
// где ключ представляет название свойства.
const personData = [ ['name', 'John' ], ['age', 18]]; // Массив содержит 2 подмассива, где в каждом из них первое значение - ключ, а второе - значение
// const person = { 'name': 'John', 'age': 18 } будет аналогично тому, что представлено ниже
const person = Object.fromEntries(personData); 

// { name: 'John', age: 18 }
console.log(person);
// John 18
console.log(person.name, person.age);