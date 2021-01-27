# goit-js-hw-07

Непрацюючі клавіші:
`
q

### 7_6

    function validate(str) {
    return str.length >= dataLengthValue;
    }
    inputRef.addEventListener("blur", (e) => {
    const { value } = e.target;
    if (validate(value)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
    }
    });

### 7_3

    images.forEach(({ url, alt }) => {
    let imagesList = "";
    imagesList += `<li class="list"><img class="gallery-item" src='${url}' alt='${alt}' /></li>`;
    });

    document.querySelector("#gallery").insertAdjacentHTML("afterbegin", imagesList);

### 7_2

    ingredients.forEach((ingredient) => {
    const ingredientsRef = document.querySelector("#ingredients");
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    ingredientsRef.appendChild(itemRef);
    });
