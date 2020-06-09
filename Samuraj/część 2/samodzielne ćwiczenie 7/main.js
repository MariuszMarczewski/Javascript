let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

let flag = false;

const changeColor = (e) => {
    // console.log(e.keyCode, e.which);
    if (e.keyCode === 38) {
        flag = true;
    } else if (e.keyCode === 40) {
        flag = false;
    }

    if (flag) {
        red++;
        green++;
        blue++;
        if (red === 255) {
            flag = true;
        }
    } else {
        red--;
        green--;
        blue--;
        if (red === 0) {
            flag = false;
        }
    }

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}

window.addEventListener('keydown', changeColor)