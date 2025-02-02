// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//const number = Number(prompt(`enter Number`));
//console.log(number);
//if (number === 10) {
//alert(`Вірно`);
//} else alert(`Невірно`);

//number === 10 ? alert(`Вірно`) : alert(`Невірно`);
//alert(number === 10 ? `Вірно` : `Невірно`);
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

//const min = Math.floor(Math.random() * (59 - 0) + 0);

//if (min < 15) {
//  alert(`${min} першу`);
//} else if (min >= 15 && min < 30) {
//  alert(`${min} другу`);
//} else if (min >= 30 && min < 45) {
//  alert(`${min} третю`);
//} else {
//  if (min >= 45 && min < 60) alert(`${min} четверту`);
//}
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
//const num = prompt("Введіть число від 1 до 4:"); // Отримуємо значення від користувача
//const num = prompt("Введіть число від 1 до 4:");
//let result;
//
//switch (num) {
//  case "1":
//    result = "зима";
//    break;
//  case "2":
//    result = "весна";
//    break;
//  case "3":
//    result = "літо";
//    break;
//  case "4":
//    result = "осінь";
//    break;
//  default:
//    result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//}
//document.body.innerHTML = `<h1>${result}</h1>`;
//console.log(result);
// Виводимо результат у консоль
//let i = 0;
//while (i <= 20) {
//  console.log(i);
//  i++;
//}
// 1
// function isAdult (age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         const checkAdult = confirm('Are you adult?');
//         return checkAdult;
//     }
// }
// 2
// function isAdult (age) {
//     if (age >= 18) {
//         return true;
//     }
//     return confirm('Are you adult?');
// }

// 3
//function isAdult (age) {
//    return age >= 18 || confirm('Are you adult?');
//}

//console.log(isAdult(10));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
//function min(a, b) {
//  if (typeof a !== "number" || typeof b !== "number") {
//    return "Not a number!";
//  }
// return a < b ? a : b;
//}
//console.log(min(2, 16));
//console.log(min(35, 5));
//console.log(min("5", 10));
//console.log(min(7, "abc"));
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
//function getNumbers(min, max) {
//  let sumEven = 0;
//
//  for (let i = max; i >= min; i--) {
//    console.log(i);
//    if (i % 2 === 0) {
//      sumEven += i;
//    }
//  }

//  return sumEven;
//}

//console.log("Sum of even numbers:", getNumbers(3, 10));
//function fizzBuzz(num) {
//  for (let i = 1; i <= num; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//      console.log("fizzbuzz");
//    } else if (i % 3 === 0) {
//      console.log("fizz");
//    } else if (i % 5 === 0) {
//      console.log("buzz");
//    }
//  }
//}

// Отримуємо від користувача кількість хвилин через prompt
const input = prompt("Введіть кількість хвилин:");

// Перетворюємо введене значення в число
const totalMinutes = Number(input);

// Обчислюємо години та хвилини
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

// Форматуємо години та хвилини до двозначного формату (наприклад, "01" замість "1")
const formattedHours = String(hours).padStart(2, "0");
const formattedMinutes = String(minutes).padStart(2, "0");

// Виводимо результат у консоль у форматі "години:хвилини"
console.log(`${formattedHours}:${formattedMinutes}`);
