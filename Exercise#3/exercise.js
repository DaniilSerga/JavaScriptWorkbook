// OOП

// #1: Создать объект прямоугольник и добавить в него свойства длины двух сторон и функцию вычисления площади
// затем удалить свойство длины второй стороны (будем считать, что теперь это объект квадрат)
// и заново посчитать площадь
let firstSideLength = 4;
let secondSideLength = 6;

let figure = {
    firstSideLength,
    secondSideLength,
    calculateSquare() {
        return this.secondSideLength == undefined ? this.firstSideLength**2 : this.firstSideLength * this.secondSideLength;
    }
}

console.log(`Площадь прямоугольника: ${figure.calculateSquare()}`);

delete figure.secondSideLength;

console.log(`Площадь квадрата: ${figure.calculateSquare()}\n`);

// #2: Есть некий директор компании, у которого в подчинении находятся сотрудники. Необходимо представить
// директора как объект, содержащий в себе набор объектов сотрудников и добавить функции 
// подсчёта количества сотрудников и переименования компании
let employees = [
    { name: 'Эрик', age: 28 },
    { name: 'Сэм', age: 29 },
    { name: 'Джон', age: 21},
    { name: 'Карл', age: 34},
    { name: 'Эдуард', age: 26 }
]

const employer = {
    "company name": 'Растишка',
    "name": 'Станислав',
    "age": 19,
    employees,
    changeCompanyName(companyName) {
        console.log(`Название компании изменено с ${this["company name"]} на ${companyName}`);
        this["company name"] = companyName;
    },
    countEmployees() {
        console.log(`Количество сотрудников - ${this.employees.length}:`);

        for (let i = 0; i < this.employees.length; i++) {
            console.log(`${i + 1}) Имя: ${employees[i].name}, Возраст: ${employees[i].age}`);
        }
    },
    addEmployee(employee) {
        if (employee.age == undefined || isNaN(employee.age) || employee.name == undefined) {
            return;
        }

        console.log(`В компанию добавлен новый сотрудник:\nИмя: ${employee.name}, Возраст: ${employee.age}\n`);
        this.employees.push(employee);
    },
    info() {
        console.log('ИНФОРМАЦИЯ О ДИРЕКТОРЕ');
        console.log(`Имя: ${this["name"]}`);
        console.log(`Возраст: ${this["age"]}`);
        console.log(`Название компании: ${this["company name"]}`);
        console.log(`Количество подчинённых: ${this.employees.length}\n`);
    }
}

employer.info();
employer.addEmployee({ name: 'Иван', age: 18 });
employer.countEmployees();
employer.changeCompanyName('Клиренс');
console.log(`Название компании: ${employer["company name"]}`);

// #3: Существует 2 идентичных конструктора: бездомный и рабочий. Случайным образом объект принимает
// значение одного из двух конструкторов. Затем, в зависимости от конструктора, от которого был создан
// объект, выводится соответствующий текст.

function Homeless(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.getInfo = function() {
        console.log(`Имя: ${this.name},\nВозраст: ${this.age}\nПол: ${this.sex}`);
    }
}

function Worker(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.getInfo = function() {
        console.log(`Имя: ${this.name},\nВозраст: ${this.age}\nПол: ${this.sex}`);
    }
}

let choise = Math.floor(Math.random() * 2); // генерация случайного числа от 0 до 2 (0, 1)

let person = choise == 1 ? new Homeless('Стив', 34, 'Мужской') : new Worker('Питер', 21, 'Мужской');

if (person instanceof Homeless) {
    console.log('\nК сожалению, вы не смогли устроиться на работу. Теперь вы бездомный ):');
    person.getInfo();
}
else if (person instanceof Worker) {
    console.log('\nПоздравляем, вы устроились на работу, теперь вы можете позволить себе жильё!');
    person.getInfo();
}