//  */
//  */ Задание 1
//  */
//? Напиши скрипт, который выполнит следующие операции.
//? Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
//? Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
//? и количество элементов в категории(всех вложенных в него элементов li).
//? Например для первой категории получится:
//? Категория: Животные
//? Количество элементов: 4

// const categories = document.querySelector("#categories");
// const listCategories = document.querySelectorAll(".item");

// console.log(`В списке ${categories.children.length} категории.`);

// listCategories.forEach((item) =>
//   console.log(`Категория: ${item.firstElementChild.textContent}
// Количество элементов: ${item.lastElementChild.children.length}`)
// );
//  */
//  */ Задание 2
//  */
//? Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//? после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const addList = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   return li;
// });
// document.querySelector("#ingredients").append(...addList);
//  */
//  */ Задание 3
//  */
//? Используй массив объектов images для создания тегов img вложенных в li.
//? Для создания разметки используй шаблонные строки и insertAdjacentHTML().
//? Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//? Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const AddItems = (image) => {
//   const galleryItem = document.createElement("li");
//   galleryItem.classList.add("gallery-item");
//   const img = document.createElement("img");
//   img.classList.add("gallery-img");
//   img.src = image.url;
//   img.alt = image.alt;
//   galleryItem.appendChild(img);
//   return galleryItem;
// };
// const createGallery = images.map((image) => AddItems(image));
// document.querySelector("#gallery").append(...createGallery);
//  */
//  */ Задание 4
//  */
//? Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
//? Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//? Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//? Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const btnPlusOne = document.querySelector("[data-action=increment]");
// const value = document.querySelector("#value");
// const btnMinusOne = document.querySelector("[data-action=decrement]");
// let counterValue = 0;

// btnPlusOne.addEventListener("click", increment);
// btnMinusOne.addEventListener("click", decrement);

// function increment() {
//   counterValue++;
//   value.textContent = counterValue;
// }
// function decrement() {
//   counterValue--;
//   value.textContent = counterValue;
// }

//  */
//  */ Задание 5
//  */
//? Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
//? Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
// let input = document.querySelector("#name-input");
// let output = document.querySelector("#name-output");

// input.addEventListener("change", (e) => {
//   e.target.value ? (output.textContent = e.target.value) : "";
// });
//  */
//  */ Задание 6
//  */
//? Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//? Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//? Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//? Для добавления стилей, используй CSS-классы valid и invalid.

// let inputValid = document.querySelector("#validation-input");
// inputValid.addEventListener("blur", (e) => {
//   if (e.target.value.length >= inputValid.getAttribute("data-length")) {
//     inputValid.classList.add("valid");
//     inputValid.classList.remove("invalid");
//   } else {
//     inputValid.classList.remove("valid");
//     inputValid.classList.add("invalid");
//   }
// });
//  */
//  */ Задание 7
//  */
//? Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//? и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// let range = document.querySelector("#font-size-control");
// let text = document.querySelector("#text");

// range.addEventListener("input", (event) => {
//   text.style.fontSize = `${+event.target.value}px`;
// });

//  */
//  */ Задание 8 (сделал не сам...)
//  */
//? Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//? При нажатии на кнопку Очистить, коллекция элементов очищается.
//? Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
//? Каждый созданный div:
//? Имеет случайный rgb цвет фона
//? Размеры самого первого div - 30px на 30px
//? Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//? Создай функцию destroyBoxes(), которая очищает div#boxes.

// const randomColor = () => {
//   const colorR = Math.round(Math.random() * 255);
//   const colorG = Math.round(Math.random() * 255);
//   const colorB = Math.round(Math.random() * 255);
//   return `rgb(${colorR}, ${colorG}, ${colorB})`;
// };

// const createBoxes = () => {
//   const boxes = [];
//   const n = document.querySelector("#controls input").value;
//   for (let i = 0; i < n; i++) {
//     const div = document.createElement("div");
//     div.style.backgroundColor = randomColor();
//     div.style.margin = "5px";
//     div.style.width = i * 10 + 30 + "px";
//     div.style.height = i * 10 + 30 + "px";
//     boxes.push(div);
//   }
//   return boxes;
// };
// const createBtn = () => {
//   document.querySelector("#boxes").append(...createBoxes());
// };
// const removeBtn = () => {
//   document.querySelector("#boxes").innerHTML = '<div id="boxes"></div>';
// };
// document.querySelector("[data-action=render]").addEventListener("click", createBtn);
// document.querySelector("[data-action=destroy]").addEventListener("click", removeBtn);
