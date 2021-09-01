// Your code goes here


// 1
let funBusTitle = document.querySelector('.logo-heading');
function changeTitle(event){
    funBusTitle.textContent = 'Boring Bus';
    event.stopPropagation();
}
funBusTitle.addEventListener('click', changeTitle);


// for stopPropagation
let divFunBusTitle = document.querySelector('.nav-container');
function changeToRed(event){
    divFunBusTitle.style.backgroundColor = 'red';
}
divFunBusTitle.addEventListener('click', changeToRed);

// 2
let welcomeText = document.querySelector('.intro h2');
function biggerText(event){
    welcomeText.style.fontSize = '5rem';
}
welcomeText.addEventListener('dblclick', biggerText);


// 3
let busImage = document.querySelector('.home .intro img');
function imgHover(event){
    busImage.style.border = '10px solid white';
}
busImage.addEventListener('mouseenter', imgHover);


// 4
function poofGone(event){
    if(event.key === 'Escape'){
        busImage.style.opacity = 0;
    }
}
document.addEventListener('keydown', poofGone);


// 5
function comeBackPlease(event){
    if(event.key === 'Enter'){
        busImage.style.opacity = 1;
    }
}
document.addEventListener('keyup', comeBackPlease);


// 6
let pageBackground = document.querySelector('body');
function scrollOnPage(event){
    pageBackground.style.backgroundColor = 'blue';
}
document.addEventListener('scroll', scrollOnPage);


// 7
function movePointer(event){
    pageBackground.style.backgroundColor = 'yellow';
}
document.addEventListener('pointermove', movePointer)


// 8
let lfg = document.querySelector('.content-section:nth-of-type(1) h2');
function downIsWhite(event){
    lfg.style.border = '7px solid white';
}
lfg.addEventListener('mousedown', downIsWhite);


// 9
function upIsBig(event){
    lfg.style.fontSize = '4rem';
}
lfg.addEventListener('mouseup', upIsBig);


// 10
let copyrightLine = document.querySelector('footer');
function pointerOut(event){
    copyrightLine.style.backgroundColor = '#fff';
}
copyrightLine.addEventListener('pointerleave', pointerOut);