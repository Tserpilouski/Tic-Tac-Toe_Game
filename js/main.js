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
const itemBoard = document.querySelectorAll('.board__item');
const imgPreview = document.createElement('img');
const imgConst = document.createElement('img');
imgPreview.src = "/icons/icon-o-outline.svg";
imgConst.src = "/icons/icon-o.svg";



itemBoard.forEach((element) => {
    console.log(element)
    element.addEventListener('mouseenter', () => {
        console.log(`mouse in`);
        element.appendChild(imgPreview);
    });

    element.addEventListener('mouseleave', () => {
        console.log(`mouse out`);
        element.removeChild(imgPreview);
    });

    element.addEventListener("click", () => {
        element.appendChild(imgConst);
    });
})
