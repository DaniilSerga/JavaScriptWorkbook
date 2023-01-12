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

console.log('');

// #4: Необходимо создать конструктор с инкапсулированными свойствами и продемонстрировать их работу

function Vehicle(name, price, releaseDate, vehicleType) {
    let _name = name; // далее представлены инкапсулированные свойства, недоступные извне
    let _price = price;
    let _releaseDate = releaseDate;
    let _vehicleType = vehicleType; 
    this.getInfo = function() {
        console.log(`Название ТС: ${_name},\nТип ТС: ${_vehicleType}\nСтоимость: ${_price},\nДата выхода на рынок: ${_releaseDate}\n`)
    }
}

let vehicle_1 = new Vehicle('Honda', 20000, '11.07.2003', 'Легковой автомобиль');
let vehicle_2 = new Vehicle('МАЗ', 35000, '14.05.2001', 'Грузовик');

// Если попытаться получить доступ к любому из свойств объектов, то получим лишь undefined
console.log(vehicle_1.name);

// Для того чтобы получить значения объекта необходимо воспользоваться функцией в конструкторе, которая
// обращается к свойствам и может получить их значения (т.к. находится внутри конструктора)
vehicle_1.getInfo();
/* 
Название ТС: Honda,
Тип ТС: Легковой автомобиль
Стоимость: 20000,
Дата выхода на рынок: 11.07.2003 */
vehicle_2.getInfo();
/* 
Название ТС: МАЗ,
Тип ТС: Грузовик
Стоимость: 35000,
Дата выхода на рынок: 14.05.2001 */

// #5: Продемонстрировать работу функций call() и apply() на примере расчёта площади трапеции

// В данной задаче я решил не задавать свойства верхнего и нижнего ребёр, чтобы в дальнейшем задать их в
// функции. Поэтому оставил только высоту и функцию вывода информации о фигуре
function Trapeze(height) {
    this.height = height;
    this.getInfo = function() {
        console.log(`Высота фигуры: ${this.height}`);
    }
}

function getTrapezeArea(upperEdge, lowerEdge) {
    return ((this.height / 2) * (upperEdge + lowerEdge));   // расчёт площади трапеции
}

let trapeze_1 = new Trapeze(5);

trapeze_1.getInfo();

// Отличие apply от call заключается в том, что, в отличие от последнего, в первом параметры помимо 
// объекта передаются как массив
console.log(`Площадь трапеции v1.0: ${getTrapezeArea.call(trapeze_1, 15, 10)}`);
console.log(`Площадь трапеции v2.0: ${getTrapezeArea.apply(trapeze_1, [15, 10])}`);

console.log('');

// #6: Необходимо создать 2 конструктора, где один из них наследует другой. Также необходимо наличие
// переопределённой функции и прототипа

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Язык общения: ${this.languageSpoken}`);
    }
}

Person.prototype.languageSpoken = 'En';

function Developer (name, age, salary) {
    // Конструктор Developer наследует свойства Person. 
    // Таким образом в функции getInfo() ниже (эта функция переопределена с прошлого конструктора) 
    // мы можем обращаться к таким свойствам как name и age
    Person.call(this, name, age); 
    this.salary = salary;
    this.getInfo = function() {
        // свойств name и age явно в данном конструкторе не представлено, однако они присутствуют в предыдущем
        // конструкторе, от которого текущий конструктор наследуется
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Зарплата: ${this.salary}$, Язык общения: ${this.languageSpoken}`);
    }
    this.addSalary = function(salaryAdded) {
        this.salary += salaryAdded;
        console.log(`Зарплата разработчика ${this.name} была увеличена на ${salaryAdded}$ и составляет: ${this.salary}$`)
    }
}

Developer.prototype = Object.create(Person.prototype);

let person_1 = new Person('Клиф', 21);  
let developer_1 = new Developer('Николай', 24, 500);    

developer_1.languageSpoken = 'Ru';

person_1.getInfo();     // Имя: Клиф, Возраст: 21
developer_1.getInfo();  // Имя: Николай, Возраст: 24, Зарплата: 500$
developer_1.addSalary(300); // Зарплата разработчика Николай была увеличена на 300 и составляет: 800$