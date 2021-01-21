const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.forEach((ingredient) => {
  const ingredientsRef = document.querySelector("#ingredients");
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  ingredientsRef.appendChild(itemRef);
});
