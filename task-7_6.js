// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//-  Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.

const inputRef = document.querySelector("#validation-input");
const dataLengthValue = document
  .querySelector("input")
  .getAttribute("data-length");

inputRef.addEventListener("blur", (event) => {
  console.log(inputRef.value.length, dataLengthValue);
  if (inputRef.value.length >= dataLengthValue) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
