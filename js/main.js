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

//Highlight the selected symbol in the menu X & O
let prevButton = null;
const wrapper = document.getElementById("character-selection");

wrapper.addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON'; 
  if (!isButton) {
    return;
  }
  e.target.classList.add('btn-character_active');

  if(prevButton !== null) {
    prevButton.classList.remove('btn-character_active');  
  }
  prevButton = e.target;
});

//dodaanie hover efect 
let first_move = 1;
let path = "/icons/icon-x-outline.svg";
let pathConst = "/icons/icon-x.svg";
let id = "prevX";
let idConst = "1";
const itemBoard = document.querySelectorAll('.board__item');
const div_array = Array.prototype.slice.call(itemBoard);
let data = [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]];


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
            idConst = "3"
        }
        createCell(element.id, idConst)
    };
});

function createCell(id, idConst){
    const i = id.split('')[4];
    const j = id.split('')[5];
    data[i][j] = Number(idConst);
    chek(data)
    chek(data) == "win X" ? showYouWonX() : false;
    chek(data) == "win O" ? showYouWonO() : false;
};
//__Sprawdzenie znaczkow__

function chek(data){
    let firstDig = 1;
    let secondDig = 1;
    let win;
    for(let i = 0; i < 3; i++){
        firstDig = firstDig * data[i][i];
        secondDig = secondDig * data[2 - i][i];
        if ((firstDig || secondDig) === 27){
            win = "win O";
            console.log(`Dioganal ${win}`);
            break;
        }
        else if ((firstDig || secondDig) === 8){
            win = "win X";
            console.log(`Dioganal ${win}`);
            break;
        }
        let row = 1;
        let col = 1;
        let masiv = [];
        for(let j = 0; j < 3; j++){
            row = row * data[i][j];
            col = col * data[j][i];
            masiv = [[i][j]];
            console.log()
            if ((row || col) === 8){
                win = "win X";
                console.log(win);
                break;
            }
            else if ((row || col) === 27){
                win = "win O";
                //console.log(win);
                break;
            }
        }
    }
    return win
}

function showYouWonX(){
    const imgXO = document.getElementById('imgXO');
    document.getElementById('h3title').style.color = "#31C3BD";
    imgXO.removeAttribute("src");
    imgXO.setAttribute("src","/icons/icon-x.svg")
    const block = document.querySelector('.block-won');
    block.classList.remove("block-won_inactive");
}

function showYouWonO(){
    const imgXO = document.getElementById('imgXO');
    document.getElementById('h3title').style.color = "#F2B137";
    imgXO.removeAttribute("src");
    imgXO.setAttribute("src","/icons/icon-o.svg")
    console.log(imgXO)
    const block = document.querySelector('.block-won');
    block.classList.remove("block-won_inactive");
}

function nextRoundBtn(){
    const block = document.querySelector('.block-won');
    block.classList.add("block-won_inactive");
    div_array.forEach((element) => {
        console.log(element)
        if(element.hasChildNodes()){
            element.removeChild(element.firstChild);
        }
    });
    data = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]];
    return data
}