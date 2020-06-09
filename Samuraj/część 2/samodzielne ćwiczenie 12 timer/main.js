const add = () => {
    let timeCounter = 0;
    return () => {
        setInterval(() => {
            timeCounter++;
        }, 1000);
    }
}

const showCounter = console.log(add());
showCounter();