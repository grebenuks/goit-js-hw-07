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

// const categories = document.querySelectorAll("#categories .item").length;
// console.log(`В списке ${categories} категории.`);
// const listCategories = document.querySelectorAll("#categories .item");
// listCategories.forEach((item) =>
//   console.log(
//     `Категория: ${item.querySelector("h2").textContent}
// Количество элементов: ${item.querySelectorAll("li").length}`
//   )
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
