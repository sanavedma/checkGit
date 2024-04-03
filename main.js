//Часть 1

let inp = document.getElementById("inp");
let h2 = document.getElementById("h2");

h2.textContent = inp.value; 

//Часть 3

let btn = document.getElementById("btn");
btn.textContent = 1;

const changeNumber = () => {
    btn.textContent = Number(btn.textContent) + 1;
}

btn.addEventListener("click", changeNumber);

//Часть 3
let block = document.getElementById("block");

const addNewForm = (formSquare, formCircle) => {
    block.classList.remove(formSquare);
    block.classList.add(formCircle);
}

const changeForm = () => {
     switch (true) {
         case block.classList.contains('square'):
             addNewForm('square', 'circle');
             break;

         case block.classList.contains('circle'):
             addNewForm('circle', 'square');
             break;
    
         default:
             break;
     }
 }

block.addEventListener("click", changeForm)


// let show = document.getElementById("show");
// let circle = document.getElementById("circle");

// const visibleElem = () => {
//     circle.classList.toggle('visible');
//     if (circle.classList.contains('visible')) {
//         show.textContent = "Скрыть элемент";
//     } else {
//         show.textContent = "Показать элемент";
//     }
// }

// show.addEventListener("click", visibleElem)