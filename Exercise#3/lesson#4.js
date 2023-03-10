// ОБЪЕКТЫ В ФУНКЦИЯХ

// Функции могут возвращать объекты. С помощью этого можно создавать целые наборы однотипных данных
// исключая возможность упустить какое-либо свойство, либо дописать лишнее:
function createCar(name, year) {
    return {
        name: name,
        year: year
    }
}

function createUser(name, age, car) {
    return {
        name: name,
        age: age,
        car: car,
        info() {
            console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
        },
        drives() {
            console.log(`${this.name} водит ${this.car.name} ${this.car.year}г.`)
        }
    };
}

let car = createCar('Chevrolette', 1997);
let user_1 = createUser('Иван', 20, car);

// Имя: Иван, Возраст: 20
user_1.info();
// Иван водит Chevrolette 1997г.
user_1.drives();

// ------КОНСТРУКТОРЫ ОБЪЕКТОВ------

// Конструктор
function User(name, age, car) {
    this.name = name;
    this.age = age;
    this.car = car;
    this.driveCar = function() {
        console.log(`${this.name} водит ${this.car.name} ${this.car.year}`);
    };
    this.getInfo = function() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    };
};

let user_2 = new User('Василий', 24, car);
user_2.getInfo();
user_2.driveCar();

// ОПЕРАТОР instanceof()
// Этот оператор позволяет проверить, с помощью какого конструктора был создан объект. Если объект создан
// с помощью определённого конструктора, то возвращается true
let user_3 = new User('Катя', 20, car);

console.log(user_3 instanceof User) // true, т.к. user_3 был создан с помощью конструктора User
console.log(car instanceof User)    // false, т.к. car не был создан с помощью конструктора User

console.log('');
// ------РАСШИРЕНИЕ ОБЪЕКТОВ. Proptotype в JavaScript------
/*
Кроме непосредственного определения свойств и методов в конструкторе мы также можем использовать свойство 
prototype. Каждая функция имеет свойство prototype, представляющее прототип функции. 
То есть свойство User.prototype представляет прототип объектов User. И любые свойства и методы, 
которые будут определены в User.prototype, будут общими для всех объектов User.
*/
function Human(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

// это статическое свойство и оно будет одинаковым для всех объектов, которые определяются этим конструктором
Human.prototype.height = 173;
// статическая функция
Human.prototype.displayHeight = function() {
    console.log(`Рост: ${this.height}`);
}

let person_1 = new Human('Георгий', 19);
let person_2 = new Human('Виталий', 24);

person_2.height = 184;

person_1.displayInfo();   // Имя: Георгий, Возраст: 19
person_1.displayHeight(); // 173
person_2.displayInfo();   // Имя: Виталий, Возраст: 24
person_2.displayHeight(); // 184

