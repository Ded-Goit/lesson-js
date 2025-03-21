//Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numBers = [1, 2, 3, 4, 5];
const squares = numBers.map((num) => num ** 2);
console.log(squares); // [1, 4, 9, 16, 25]

//Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const daTa = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
const allValues = daTa.flatMap((item) => item.values);
console.log(allValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
const hasUnder20 = people.some((person) => person.age < 20);
console.log(hasUnder20); // true

//Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbErs = [2, 4, 6, 8, 10];
const allEven = numbErs.every((num) => num % 2 === 0);
console.log(allEven); // true

//Завдання 5:

// Знайдіть перше непарне число
const numbeRs = [2, 1, 6, 8, 9, 10, 12];
const firstOdd = numbeRs.find((num) => num % 2 !== 0);
console.log(firstOdd); // 1

//Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numBersArray = [4, 2, 5, 1, 3];
numBersArray.sort((a, b) => a - b);
console.log(numBersArray); // [1, 2, 3, 4, 5]

//Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const strIngArray = ["banana", "orange", "apple", "pear"];
strIngArray.sort();
console.log(strIngArray); // ["apple", "banana", "orange", "pear"]

//Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);

//Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
const olderThan20 = user.filter((person) => person.age > 20);
console.log(olderThan20); // [{ name: 'John', age: 27 }, { name: 'Jane', age: 31 }]

//Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

//Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();
class Calculator {
  constructor() {
    this.value = 0;
  }

  number(value) {
    this.value = value;
    return this;
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) throw new Error("Ділення на нуль заборонено");
    this.value /= value;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();
const result = calc
  .number(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

//Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }
}

//Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      ...this.getDetails(),
      salary: this.salary,
      department: this.department,
    };
  }
}

const emp = new Employee("John", 30, "male", "john@example.com", 50000, "IT");
console.log(emp.getEmployeeDetails());
