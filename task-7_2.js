const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsListRef = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
});

ingredientsRef.append(...ingredientsListRef);
