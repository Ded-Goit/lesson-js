// Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код
const styles = [`jazz`, `blues`];
styles.push(`rock-n-roll`);
const index = styles.indexOf(`blues`);
if (index !== -1) {
  styles[index] = `classic`;
}
// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(styles);
// Завдання 2:
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

function checkLogin(array) {
  const name = prompt(`Enter your name:`);
  if (array.includes(name)) {
    alert(`Welcome, ${name}!`);
  } else {
    alert(`User not found`);
  }
}
const logins = ["Peter", "John", "Igor", "Sasha"];
/**Що робить ця функція:
Приймає масив логінів як аргумент.
Запитує у користувача ім'я через prompt().
Перевіряє, чи є введене ім'я в масиві.
Якщо ім'я є — виводить alert("Welcome, <name>!").
Якщо імені немає — виводить alert("User not found"). */
checkLogin(logins);

// Завдання 3:
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
function caclculateAverage(...args) {
  const numbers = args.filter((arg) => typeof arg === `number`);
  if (numbers.length === 0) return `No numbers provided`;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}
console.log(caclculateAverage(1, 2, 3, `wait`));
/**Що робить ця функція:
Приймає довільну кількість аргументів.
Відбирає лише ті, які є числами.
Обчислює їх середнє значення.
Якщо немає чисел — повертає "No numbers provided" */

// Завдання 4:
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.

function sumAdjacentNumbers(arr) {
  return arr
    .map((num, i, array) => (i < array.length - 1 ? num + array[i + 1] : null))
    .slice(0, -1);
}
/**Що робить ця функція:
Створює новий масив, де кожен елемент — це сума сусідніх чисел.
Беремо arr[i] і додаємо до arr[i+1].
В останньому елементі вже немає сусіда, тому .slice(0, -1) видаляє null. */

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(sumAdjacentNumbers(someArr));
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// Завдання 5:
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.
function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) return `Sory, it is not an array!`;
  return Math.min(...numbers);
}
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers));
// Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.
// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
function findLongestWord(string) {
  let longestWord = ``;
  for (const word of string.split(` `)) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
  return string
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = `happy`;
user.hobby = `skydiving`;
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}
const properties = Object.entries(user);
for (const prop of properties) {
  console.log(`${prop[0]}:${prop[1]}`);
}
// Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
function sumOfSalary(obj) {
  const values = Object.values(obj);
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
}
console.log(sumOfSalary(salaries));

/**const sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
console.log(sum);*/

// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().
// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  exist() {
    return this.a && this.b;
    //return this.hasOwnProperty("a") && this.hasOwnProperty("b");
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    }
    return `No such properties`;

    //return this.exist() ? this.a + this.b : "No such properties";
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    }
    return `No such properties`;

    //return this.exist() ? this.a * this.b : "No such properties";
  },
};
calculator.read(5, 6);
console.log(calculator.sum());
console.log(calculator.mult());
calculator.read(null, 7);
console.log(calculator.sum());
console.log(calculator.mult());

// Завдання 10:
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.
// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.
function calcTotalPrice(fruits, fruitName) {
  let fruitNameSum = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      fruitNameSum += fruit.price * fruit.quantity;
    }
  }
  return fruitNameSum;
  /**return fruits
    .filter((fruit) => fruit.name === fruitName)
    .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0);*/
}
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];
console.log(calcTotalPrice(fruits, "Банан"));
console.log(calcTotalPrice(fruits, "Груша"));
