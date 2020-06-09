let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = " Dodaj 10 elementów";
    document.body.appendChild(btn);
    const ull = document.createElement("ul");
    ull.style.listStyle = "none";
    document.body.appendChild(ull);
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    for (let count = 1; count <= 10; count++) {
        const lii = document.createElement("li");
        document.querySelector('ul').appendChild(lii);
        lii.textContent = `Element${orderElement++}`;
        lii.style.fontSize = size++ + "px";
    }
}

init()