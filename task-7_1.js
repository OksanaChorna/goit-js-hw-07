const categoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach((item) => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    }\nКоличество элементов: ${
      item.querySelector("ul").querySelectorAll("li").length
    }`
  );
});
