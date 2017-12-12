document.addEventListener("DOMContentLoaded", (e) => {

var disableScroll = require('disable-scroll');
var hamburger = document.querySelector('.hamburger');
var pipBoy = document.querySelector('.pip-wrapper');
var power = document.querySelector('.power');

const linkAbout = document.querySelector('.about-link');
const linkMenu = document.querySelector('.menu-link');
const linkPrices = document.querySelector('.prices-link');
const linkContacts = document.querySelector('.contacts-link');

console.log(linkAbout);
console.log(linkMenu);
console.log(linkPrices);
console.log(linkContacts);


function togglePipBoy(e) {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    pipBoy.classList.toggle('pip--active');

    // if (pipBoy.classList.contains('pip--active')) {
    //     disableScroll.on();
    // } else { 
    //     disableScroll.off();
    // }
}

if (hamburger) {
    hamburger.addEventListener('click', (e) => {togglePipBoy(e)});
}

if (power) {
    power.addEventListener('click', (e) => {togglePipBoy(e)});
}


function bwHamburger(pageNum) {
    let hamburgerInner = document.querySelector('.hamburger-inner');
    if (pageNum < 4) {
        hamburgerInner.classList.remove('black');
    } else {
        hamburgerInner.classList.add('black');            
    }
}


function manageShift(pageNum) {

    pipBoy.classList.toggle('pip--active');
    hamburger.classList.toggle('is-active');

    bwHamburger(pageNum);

}


linkAbout.addEventListener('click', () => {
    moveTo(".main", 2);
    manageShift(2);
});
linkMenu.addEventListener('click', () => {
    moveTo(".main", 3);
    manageShift(3);    
});
linkPrices.addEventListener('click', () => {
    moveTo(".main", 4);
    manageShift(4);    
});
linkContacts.addEventListener('click', () => {
    moveTo(".main", 5);
    manageShift(5);    
});

});