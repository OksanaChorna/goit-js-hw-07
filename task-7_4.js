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
