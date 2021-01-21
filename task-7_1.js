const categoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(function (item) {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${
      item.querySelector("ul").querySelectorAll("li").length
    }`
  );
});
