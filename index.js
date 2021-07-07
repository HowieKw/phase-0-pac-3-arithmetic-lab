const a = "2"
const b = "3"
function add(a, b) {
    return(a += b);
}

function subtract(a, b) {
    return(a -= b);
}

function multiply(a, b) {
    return(a *= b);
}

function divide(a, b) {
    return(a /= b);
}

let n = "10"
function increment(n) {
    return(++n);
}

function decrement(n) {
    return(--n);
}

const number = "5"
function makeInt(number) {
    return(parseInt(number, 10));
}

const decimal = "3.14"
function preserveDecimal(decimal) {
    return(parseFloat(decimal));
}
