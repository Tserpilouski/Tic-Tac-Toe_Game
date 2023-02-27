// const playBtn = document.getElementById('play');
// const menuBtn = document.getElementById('menu');

// function displayMenu(){
//     document.querySelector('.menu').classList.add('menu_active');
//     document.querySelector('.board').classList.remove('board_active');
// }

// function displayBoard(){
//     document.querySelector('.board').classList.add('board_active');
//     document.querySelector('.menu').classList.remove('menu_active');
// }

//dodaanie hover efect 


let first_move = 1;
let path = "/icons/icon-x-outline.svg";
let pathConst = "/icons/icon-x.svg";
let id = "prevX";
let idConst = "1";
const itemBoard = document.querySelectorAll('.board__item');
const div_array = Array.prototype.slice.call(itemBoard);


div_array.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        const imgPreview = document.createElement('img');
        imgPreview.src = path;
        imgPreview.id = id;
        if(!element.hasChildNodes()){
            element.appendChild(imgPreview);
        }
    });

    element.addEventListener('mouseleave',() => {
        if(element.childNodes[0].id == id){
            element.removeChild(element.childNodes[0]);
        }
    });

    element.addEventListener("click", () => {
        if(element.childNodes[0].id == id){
            element.removeChild(element.childNodes[0]);
        }
        if(!element.hasChildNodes()){
            let imgConst = document.createElement('img');
            imgConst.src = pathConst;
            imgConst.id = idConst
            element.appendChild(imgConst);        
        };
    });

    element.onclick = function bro() { 
        if(first_move === 1){
            first_move = 2;
            path = "/icons/icon-o-outline.svg";
            pathConst = "/icons/icon-o.svg"
            id = "prevO"
            idConst = "2"
        }
        else{
            first_move = 1;
            path = "/icons/icon-x-outline.svg";
            pathConst = "/icons/icon-x.svg"
            id = "prevX"
            idConst = "1"
        }
    };
});


//__Sprawdzenie znaczkow__

// const data = [ [1, 0, 2],
//                [0, 2, 0],
//                [2, 1, 1]];

// let firstDig = 1;
// let secondDig = 1;

// let win;

// for(let i = 0; i < 3; i++){
//     firstDig = firstDig * data[i][i];
//     secondDig = secondDig * data[2 - i][i];
//     if ((firstDig || secondDig) === 1){
//         win = "win X";
//         console.log(`Dioganal ${win}`);
//         break;
//     }
//     else if ((firstDig || secondDig) === 8){
//         win = "win O";
//         console.log(`Dioganal ${win}`);
//         break;
//     }
//     let row = 1;
//     let col = 1;
//     for(let j = 0; j < 3; j++){
//         row = row * data[i][j];
//         col = col * data[j][i];
//     }
//     if ((row || col) === 8){
//         win = "win O";
//         break;
//     }
//     else if ((row || col) === 1){
//         win = "win X";
//         break;
//     }
// }

// console.log(win);