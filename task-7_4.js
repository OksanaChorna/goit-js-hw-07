// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const valueRef = document.querySelector("#value");
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');

function increment() {
  return function (event) {
    counterValue += 1;
    valueRef.textContent = counterValue;
  };
}

function decrement() {
  return function (event) {
    counterValue -= 1;
    valueRef.textContent = counterValue;
  };
}
incrementRef.addEventListener("click", increment());
decrementRef.addEventListener("click", decrement());
