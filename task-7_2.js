const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let ingredientsList = [];

ingredients.forEach((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.innerHTML = ingredient;
  ingredientsList.push(itemRef);
});

document.querySelector("#ingredients").append(...ingredientsList);
