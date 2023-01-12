// ------НАСЛЕДОВАНИЕ------

function User (name, age) {
    this.name = name;
    this.age = age;
    this.go = function() { console.log(this.name + ' идёт'); }
    this.displayInfo = function() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

// Установка нового прототипа
User.prototype.maxage = 110;

function Employee (name, age, company) {
    // обращение к конструктору User
    User.call(this, name, age);
    this.company = company;
    // Эта функция переопределяет функцию в предыдущем конструкторе
    this.displayInfo = function() {
        console.log(`Имя:${this.name}, Возраст: ${this.age}, Компания: ${this.company}`);
    }
}

// Наследование прототипа User
Employee.prototype = Object.create(User.prototype);

let tom = new User('Том', 26);
let bill = new Employee('Билл', 19, 'Google');

tom.go();   // Том идёт
bill.go();  // Билл идёт
tom.displayInfo();  // Имя: Том, Возраст: 26
bill.displayInfo(); // Имя:Билл, Возраст: 19, Компания: Google
console.log(bill.maxage); // 110
console.log(tom.maxage);  // 110