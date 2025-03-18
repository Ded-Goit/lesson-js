// 1. Додаємо <p class="task-title">Task 1</p> після коментаря <!-- Task - 01 -->
const titleTask1 = document.createElement("p");
titleTask1.classList.add("task-title");
titleTask1.textContent = "Task 1";

// Знаходимо заголовок h1 (йде після <!-- Task - 01 -->)
const title = document.querySelector("#title");

// Додаємо елемент після h1
title.insertAdjacentElement("afterend", titleTask1);
// 2. Додаємо <p class="task-title">Task 2</p> після <ul class="list">
const titleTask2 = document.createElement("p");
titleTask2.classList.add("task-title");
titleTask2.textContent = "Task 2";

// Знаходимо список <ul class="list">
const listUl = document.querySelector(".list");

// Додаємо Task 2 після списку
listUl.insertAdjacentElement("afterend", titleTask2);
//Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll("li[data-topic]");
console.log(dataTopic);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopic[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopic[dataTopic.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const mainTitle = document.querySelector("h1");
const sibling = mainTitle.nextElementSibling;
console.log(sibling);
console.log(document.querySelector("h1").nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titles = document.querySelectorAll("h3");
console.log(titles);
// 9 - для кожного елeмента h3 додай class="active", який змінить колір заголовка на червоний колір
titles.forEach((el) => el.classList.add(".active"));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigation = document.querySelector("[data-topic='navigation']");
console.log(navigation);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigation.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
navigation.querySelector("p").textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentElement = document.querySelector(`[data-topic='${currentTopic}']`);
console.log(currentElement);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentElement.style.backgroundColor = "lightblue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCo = document.querySelector(".completed");
console.log(titleCo);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
document.querySelector(".completed").parentElement.remove();
//const completedElement = document.querySelector(".completed")completedElement.closest("li").remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newText = document.createElement("p");
newText.textContent = "Об'єктна модель документа (Document Object Model)";
mainTitle.after(newText);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement("li");
newLi.innerHTML = `<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`;
document.querySelector(".list").appendChild(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newItem = `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`;
document.querySelector(".list").insertAdjacentHTML("beforeend", newItem);
//document.querySelector(".list").insertAdjacentHTML("beforeend", newItem);
// 20 - очисти список
//document.querySelector(".list").innerHTML = "";
newLi.remove();
//Щоб видалити останній <li> у списку:
const list = document.querySelector(".list");
if (list.lastElementChild) {
  list.lastElementChild.remove();
}
//Завдання 2:

// Створіть контейнер div (з класом numberContainer )в HTML-документі
const numberContainer = document.createElement("div");
numberContainer.classList.add("number-container");
// 1 варіант document.body.appendChild(numberContainer);

// Додаємо створений div після  <p class="task-title">Task 2</p>
titleTask2.insertAdjacentElement("afterend", numberContainer);
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
for (let i = 0; i < 100; i++) {
  const num = document.createElement("div");
  num.classList.add("number");
  const number = randomNumber();
  num.textContent = number;
  num.classList.add(number % 2 === 0 ? "even" : "odd");
  numberContainer.appendChild(num);
}

//Завдання 3:

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector(".js-contact-form");
const input = document.querySelector(".js-username-input");
const checkbox = document.querySelector(".js-policy-checkbox");
const usernameOutput = document.querySelector(".js-username-output");

// 1 - Валідація довжини введеного імені
input.addEventListener("input", () => {
  if (input.value.length >= 6) {
    input.classList.add("success");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("success");
  }
  //Заміна "Anonymous" на введене ім'я
  usernameOutput.textContent = input.value || "Anonymous";
});

// 2 - Подія `focus`
input.addEventListener("focus", () => {
  input.style.outline = input.value ? "3px solid green" : "3px solid red";
});

// 3 - Подія `blur`
input.addEventListener("blur", () => {
  //
  input.style.outline = input.value ? "3px solid lime" : "3px solid red";
});

// 4 - Подія `submit`
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.trim() && checkbox.checked) {
    //
    const userData = {
      userName: input.value.trim(),
    };
    console.log("Submitted Data:", userData);

    // Очищення форми після відправки
    form.reset();
    usernameOutput.textContent = "Anonymous";
    input.classList.remove("success", "error");
  } else {
    alert(
      "Будь ласка, введіть ім'я та погодьтеся з політикою конфіденційності."
    );
  }
});
//Завдання 4:

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
const box = document.querySelector(".box");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const changeSize = (delta) => {
  let currentSize = parseInt(getComputedStyle(box).width);
  let newSize = Math.max(20, currentSize + delta);
  box.style.width = `${newSize}px`;
  box.style.height = `${newSize}px`;
};
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
decreaseBtn.addEventListener("click", () => changeSize(-20));
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
increaseBtn.addEventListener("click", () => changeSize(20));

// Отримуємо батьківський елемент, куди вставимо поле вводу
const container = document.body;
const tt = document.querySelector("#tt");
// Зміна кольору на випадковий
const colorBtn = document.createElement("button");
colorBtn.id = "myButton";
colorBtn.innerHTML = "color";
colorBtn.classList.add("butt");
tt.appendChild(colorBtn);
colorBtn.addEventListener("click", () => {
  box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
});

// Ховати та показувати квадрат
const hideBtn = document.createElement("button");
hideBtn.dataset.action = "hide";
hideBtn.textContent = "Ховати";
hideBtn.classList.add("butt");
tt.appendChild(hideBtn);
hideBtn.addEventListener("click", () => {
  box.style.display = "none";
});

const showBtn = document.createElement("button");
showBtn.dataset.action = "show";
showBtn.textContent = "Показувати";
showBtn.classList.add("butt");
tt.appendChild(showBtn);
showBtn.addEventListener("click", () => {
  box.style.display = "block";
});

//Зміна кольору фону за введеним значенням
const inputColor = document.createElement("input");
inputColor.type = "color";
inputColor.id = "color";
inputColor.classList.add("butt");
tt.appendChild(inputColor);
inputColor.addEventListener("input", (event) => {
  box.style.backgroundColor = event.target.value;
});

// Зміна розміру за введеним значенням

// Створюємо <label>
const label = document.createElement("label");
label.setAttribute("for", "sizeInput");
label.textContent = "Введіть розмір (мін. 20px): ";

// Створюємо <input>
const sizeInput = document.createElement("input");
sizeInput.setAttribute("type", "number");
sizeInput.setAttribute("id", "sizeInput");
sizeInput.setAttribute("min", "20");
sizeInput.setAttribute("value", "50");

// Додаємо елементи в DOM
tt.appendChild(label);
tt.appendChild(sizeInput);

//container.appendChild(box);

// Додаємо обробник подій для зміни розміру box
sizeInput.addEventListener("input", (event) => {
  let newSize = Math.max(20, parseInt(event.target.value) || 20);
  box.style.width = `${newSize}px`;
  box.style.height = `${newSize}px`;
});
