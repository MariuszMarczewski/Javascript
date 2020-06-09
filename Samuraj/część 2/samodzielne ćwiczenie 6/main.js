window.addEventListener('click', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = "red";
    } else if (x % 2 != 0 && y % 2 != 0) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "green";
    }
});