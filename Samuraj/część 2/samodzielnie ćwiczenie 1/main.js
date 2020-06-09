const but = document.querySelector("button");
let number = 1;
let count = 1;
const addElement = function () {
    const li = document.createElement("li");
    li.textContent = number;
    if (count % 3 == 0) {
        li.classList.add("big");
    }
    document.body.appendChild(li)
    number += 2;
    count++;
}

but.addEventListener("click", addElement);