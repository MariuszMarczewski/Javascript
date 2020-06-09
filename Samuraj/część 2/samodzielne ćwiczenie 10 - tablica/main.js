const possibilities = ['walcz ', 'przemyśl to jeszcze raz '];
const advices = [];
const btnDodaj = document.querySelector('.add');
const btnShowOptions = document.querySelector('.showOptions');
const btnReset = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');

const div = document.createElement('div');
document.body.appendChild(div);

const showOptions = () => {
    alert(possibilities);
}

const reset = (event) => {
    event.preventDefault();
    possibilities.length = 0;
}

const add = (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const newPossibility = input.value;
    if (newPossibility) {
        for (possibility of possibilities) {
            if (possibility === newPossibility) {
                alert("to już było!");
                return;
            }
        }
        possibilities.push(newPossibility);
        div.textContent += newPossibility + ', ';
        console.log(possibilities);
        input.value = '';
    }

}

const showAdvice = (event) => {
    const index = Math.floor(Math.random() * possibilities.length);
    document.querySelector('h1').textContent = possibilities[index];
}

btnShowOptions.addEventListener('click', showOptions);
btnReset.addEventListener('click', reset)
btnDodaj.addEventListener('click', add);
btnShowAdvice.addEventListener('click', showAdvice);