const number = document.querySelector(".numbers");
const result = document.querySelector(".result");

let numberOne = null;
let numberTwo = null;
let operation = null;
let firstNumberSet = false;

numbers.addEventListener('click'), (event) => {
    if (numberOne === null) {
        numberOne = event.target.innerText;
        result.innerText = `${numberOne} ${operation} ${numberTwo}`
    }
}