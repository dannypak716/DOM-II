// Your code goes here


// 1
let funBusTitle = document.querySelector('.logo-heading');
function changeTitle(event){
    funBusTitle.textContent = 'Boring Bus';
}
funBusTitle.addEventListener('click', changeTitle);


// 2
let welcomeText = document.querySelector('.intro h2');
function biggerText(event){
    welcomeText.style.fontSize = '5rem';
}
welcomeText.addEventListener('dblclick', biggerText);


// 3
let busImage = document.querySelector('.home .intro img');
function imgHover(event){
    busImage.style.border = '10px solid yellow';
}
busImage.addEventListener('mouseenter', imgHover);


// 4
function poofGone(event){
    if(event.key === 'Escape'){
        busImage.style.opacity = 0;
    }
    console.log(event.key);
}
document.addEventListener('keydown', poofGone);


// 5
function scrollOnPage(event){
    console.log(event);
}
document.addEventListener('scroll', scrollOnPage);