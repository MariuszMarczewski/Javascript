let size = 100;
let flag = true;

document.body.style.height = "10000px";
const square = document.createElement("div");
document.body.appendChild(square);
square.style.position = "fixed";
square.style.top = 0;
square.style.left = 0;
square.style.width = "100%";
square.style.height = size + "px";
square.style.backgroundColor = "green";

const changeColor = function () {

    if (size > window.innerHeight / 2) {
        flag = false;
        square.style.backgroundColor = "red";
    } else if (size <= 0) {
        flag = true;
        square.style.backgroundColor = "green";
    }

    if (flag) {
        size += 10;
    } else {
        size -= 10;
    }
    square.style.height = size + "px";
}

window.addEventListener("scroll", changeColor);