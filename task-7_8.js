const btnRenderRef = document.querySelector('button[data-action = "render"]');
const btnDestroyRef = document.querySelector('button[data-action = "destroy"]');
const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");

btnRenderRef.addEventListener("click", getAmount);
btnDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i <= amount - 1; i++) {
    const divRef = document.createElement("div");
    divRef.style.backgroundColor = getRandomColor();
    divRef.style.width = 30 + i * 10 + "px";
    divRef.style.height = 30 + i * 10 + "px";
    console.log(divRef);
    boxesRef.appendChild(divRef);
  }
  inputRef.value = "";
}

function getAmount(event) {
  const amount = inputRef.value;
  createBoxes(amount);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
