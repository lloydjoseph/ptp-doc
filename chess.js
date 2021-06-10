let detail = document.querySelector('#detail');

// White
let rookWhite = document.querySelectorAll('.rook-white');
for (let i = 0; i < rookWhite.length; i++) {
    rookWhite[i].addEventListener('click', () => {
        console.log(('White Rook')) })
}

let knightWhite = document.querySelectorAll('.knight-white');
for (let i = 0; i < knightWhite.length; i++) {
    knightWhite[i].addEventListener('click', () => {
        console.log(('White Knight')) })
}

let bishopWhite = document.querySelectorAll('.bishop-white');
for (let i = 0; i < bishopWhite.length; i++) {
    bishopWhite[i].addEventListener('click', () => {
        console.log(('White Bishop')) })
}

let kingWhite = document.querySelectorAll('.king-white');
for (let i = 0; i < kingWhite.length; i++) {
    kingWhite[i].addEventListener('click', () => {
        console.log(('White King')) })
}

let queenWhite = document.querySelectorAll('.queen-white');
for (let i = 0; i < queenWhite.length; i++) {
    queenWhite[i].addEventListener('click', () => {
        console.log(('White Queen')) })
}

let pawnWhite = document.querySelectorAll('.pawn-white');
for (let i = 0; i < pawnWhite.length; i++) {
    pawnWhite[i].addEventListener('click', () => {
        console.log(('White Pawn')) })
}


// Black
let rookBlack = document.querySelectorAll('.rook-black');
for (let i = 0; i < rookBlack.length; i++) {
    rookBlack[i].addEventListener('click', () => {
        console.log(('Black Rook')) })
}

let knightBlack = document.querySelectorAll('.knight-black');
for (let i = 0; i < knightBlack.length; i++) {
    knightBlack[i].addEventListener('click', () => {
        console.log(('Black Knight')) })
}

let bishopBlack = document.querySelectorAll('.bishop-black');
for (let i = 0; i < bishopBlack.length; i++) {
    bishopBlack[i].addEventListener('click', () => {
        console.log(('Black Bishop')) })
}

let kingBlack = document.querySelectorAll('.king-black');
for (let i = 0; i < kingBlack.length; i++) {
    kingBlack[i].addEventListener('click', () => {
        console.log(('Black King')) })
}

let queenBlack = document.querySelectorAll('.queen-black');
for (let i = 0; i < queenBlack.length; i++) {
    queenBlack[i].addEventListener('click', () => {
        console.log(('Black Queen')) })
}

let pawnBlack = document.querySelectorAll('.pawn-black');
for (let i = 0; i < pawnBlack.length; i++) {
    pawnBlack[i].addEventListener('click', () => {
        console.log(('Black Pawn')) })
}

// Board
let empty = document.querySelectorAll('.empty');
for (let i = 0; i < empty.length; i++) {
    empty[i].addEventListener('click', () => {
        console.log('Empty');
        detail.style.display = 'block';
    })

}