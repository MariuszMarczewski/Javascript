// function x() {
//  let number = 0;
//  function y() {
//   console.log(number);
//  }
//  return y
// }

// const example = x();

// example()

// Closure (domknięcie) to mechanizm, który pomaga nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.

// Closure - zmienna istnieje w innej funkcji, mimo, że funkcja, w której była stworzona ta zmienna nie jest już aktywna. 

//W pamieci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funkcji. Mozemy mieć do niej dostęp, ale także je zmieniać. 

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika klinięc to ${number}`
    }
}

const counter = add();
const counterFrom5 = add(5);
document.addEventListener('click', counter)

const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie mozesz kupić piwa'}`);
    }

    return showName
}

const mieszko = user("Mieszko", 20);
const jagienka = user("Jagienka", 17);
mieszko()
jagienka()

const noName = user();
noName()

const clock = () => {
    let seconds = 0;
    document.body.textContent = 0 + " sekund";

    const timer = () => {
        seconds++;
        document.body.textContent = seconds + " sekund";
    }

    return timer
}

const start = clock();

setInterval(start, 1000);