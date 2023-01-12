// ------ИНКАПСУЛЯЦИЯ------

// Инкапсуляция - одна из основных парадигм ООП, представляющая собой сокрытие состояния объекта от 
// прямого доступа извне

function User(name, age) {
    this.name = name;
    let _age = age; // это свойство инкапсулировано и недоступно извне
    this.getInfo = function() {
        console.log(`Имя: ${this.name}, Возраст: ${_age}`);
    }
    this.getAge = function() {
        console.log(_age);
    }
    this.setAge = function(age) {
        console.log(`Возраст изменён с ${_age} на ${age}`);
        _age = age;
    }
}

let user_1 = new User('Семён', 19);
console.log(user_1._age); // undefined, т.к. это свойство инапсулировано и невозможно получить к нему доступ извне
user_1.getAge(); // 19
user_1.setAge(20); // Возраст изменён с 19 на 20
user_1.getInfo(); // Имя: Семён, Возраст: 20

// ------ФУНКЦИЯ КАК ОБЪЕКТ. Методы call и apply------
function printMessage(message) {
    console.log(message);
}

Function.prototype.standartMessage = 'hello world';

console.log(printMessage.standartMessage);

// Метод call() вызывает функцию с указанным значением this и аргументами:
function NewUser (name, age) {
    this.name = name;
    this.age = age;
}

var tom = new NewUser("Том", 26);

function display(){
    console.log("Ваше имя: " + this.name);
}

display.call(tom); // Ваше имя: Том

// На метод call() похож метод apply(), который также вызывает функцию и в качестве первого параметра также получает объект, для которого функция вызывается. Только теперь в качестве второго параметра передается массив аргументов:
function add(x, y){
     
    return x + y;
}

var result = add.apply(null, [3, 8]);

console.log(result); // 11