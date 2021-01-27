let counterValue = 0;
const valueRef = document.querySelector("#value");
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');

incrementRef.addEventListener("click", (e) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

decrementRef.addEventListener("click", (e) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
