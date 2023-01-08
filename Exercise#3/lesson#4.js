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