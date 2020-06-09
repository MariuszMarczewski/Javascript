let size = 10;
let flag = true;
const element = [...document.querySelectorAll("li")];

const changeSize = function () {
    // for (let i = 0; i < element.length; i++) {
    //     element[i].style.fontSize = size + "px";
    //     element[i].style.display = "block";
    //     element[i].style.color = "black";
    // }
    element.forEach((el) => {
        el.style.fontSize = size + "px";
        el.style.display = "block";
        el.style.color = "black";
    })
    size++;
}

window.addEventListener("click", changeSize);