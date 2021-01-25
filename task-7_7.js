const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", (e) => {
  textRef.style.fontSize = e.target.value + "px";
});
