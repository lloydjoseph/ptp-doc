// White
let rookWhiteDetail = document.querySelector('#rook-white');
let rookWhite = document.querySelectorAll('.rook-white');
for (let i = 0; i < rookWhite.length; i++) {
    rookWhite[i].addEventListener('click', () => {
        console.log('White Rook');
        rookWhiteDetail.style.display = 'block';
    })
}

let knightWhiteDetail = document.querySelector('#knight-white');
let knightWhite = document.querySelectorAll('.knight-white');
for (let i = 0; i < knightWhite.length; i++) {
    knightWhite[i].addEventListener('click', () => {
        console.log('White Knight');
        knightWhiteDetail.style.display = 'block';
    })
}

let bishopWhiteDetail = document.querySelector('#bishop-white');
let bishopWhite = document.querySelectorAll('.bishop-white');
for (let i = 0; i < bishopWhite.length; i++) {
    bishopWhite[i].addEventListener('click', () => {
        console.log('White Bishop');
        bishopWhiteDetail.style.display = 'block';
    })
}

let kingWhiteDetail = document.querySelector('#king-white');
let kingWhite = document.querySelectorAll('.king-white');
for (let i = 0; i < kingWhite.length; i++) {
    kingWhite[i].addEventListener('click', () => {
        console.log('White King');
        kingWhiteDetail.style.display = 'block';
    })
}

let queenWhiteDetail = document.querySelector('#queen-white');
let queenWhite = document.querySelectorAll('.queen-white');
for (let i = 0; i < queenWhite.length; i++) {
    queenWhite[i].addEventListener('click', () => {
        console.log('White Queen');
        queenWhiteDetail.style.display = 'block';
    })
}

let pawnWhiteDetail = document.querySelector('#pawn-white');
let pawnWhite = document.querySelectorAll('.pawn-white');
for (let i = 0; i < pawnWhite.length; i++) {
    pawnWhite[i].addEventListener('click', () => {
        console.log('White Pawn');
        pawnWhiteDetail.style.display = 'block';
    })
}


// Black
let rookBlackDetail = document.querySelector('#rook-black');
let rookBlack = document.querySelectorAll('.rook-black');
for (let i = 0; i < rookBlack.length; i++) {
    rookBlack[i].addEventListener('click', () => {
        console.log('Black Rook');
        rookBlackDetail.style.display = 'block';
    })
}

let knightBlackDetail = document.querySelector('#knight-black');
let knightBlack = document.querySelectorAll('.knight-black');
for (let i = 0; i < knightBlack.length; i++) {
    knightBlack[i].addEventListener('click', () => {
        console.log('Black Knight');
        knightBlackDetail.style.display = 'block';
    })
}

let bishopBlackDetail = document.querySelector('#bishop-black');
let bishopBlack = document.querySelectorAll('.bishop-black');
for (let i = 0; i < bishopBlack.length; i++) {
    bishopBlack[i].addEventListener('click', () => {
        console.log('Black Bishop');
        bishopBlackDetail.style.display = 'block';
    })
}

let kingBlackDetail = document.querySelector('#king-black');
let kingBlack = document.querySelectorAll('.king-black');
for (let i = 0; i < kingBlack.length; i++) {
    kingBlack[i].addEventListener('click', () => {
        console.log('Black King');
        kingBlackDetail.style.display = 'block';
    })
}

let queenBlackDetail = document.querySelector('#queen-black');
let queenBlack = document.querySelectorAll('.queen-black');
for (let i = 0; i < queenBlack.length; i++) {
    queenBlack[i].addEventListener('click', () => {
        console.log('Black Queen');
        queenBlackDetail.style.display = 'block';
    })
}

let pawnBlackDetail = document.querySelector('#pawn-black');
let pawnBlack = document.querySelectorAll('.pawn-black');
for (let i = 0; i < pawnBlack.length; i++) {
    pawnBlack[i].addEventListener('click', () => {
        console.log('Black Pawn');
        pawnBlackDetail.style.display = 'block';
    })
}

// Board
let boardDetail = document.querySelector('#board');
let empty = document.querySelectorAll('.empty');
for (let i = 0; i < empty.length; i++) {
    empty[i].addEventListener('click', () => {
        console.log('Empty');
        boardDetail.style.display = 'block';
    })
}

// Superviseur
let superviseurDetail = document.querySelector('#superviseur');
let superviseur = document.querySelector('#superviseurBtn');
superviseur.addEventListener('click', () => {
    console.log('Superviseur');
    superviseurDetail.style.display = 'block';
})