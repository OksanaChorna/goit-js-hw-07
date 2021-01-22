const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// ingredients.forEach((ingredient) => {
//   const ingredientsRef = document.querySelector("#ingredients");
//   const itemRef = document.createElement("li");
//   itemRef.textContent = ingredient;
//   ingredientsRef.appendChild(itemRef);
// });

let ingredientsList = [];

ingredients.forEach((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.innerHTML = ingredient;
  ingredientsList.push(itemRef);
});

document.querySelector("#ingredients").append(...ingredientsList);
