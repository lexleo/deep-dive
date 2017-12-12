var disableScroll = require('disable-scroll');
var hamburger = document.querySelector('.hamburger');
var pipBoy = document.querySelector('.pip-wrapper');
var power = document.querySelector('.power');

const linkAbout = document.querySelector('.about-link');
const linkMenu = document.querySelector('.menu-link');
const linkPrices = document.querySelector('.prices-link');
const linkContacts = document.querySelector('.contacts-link');


function togglePipBoy(e) {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    pipBoy.classList.toggle('pip--active');

    if (pipBoy.classList.contains('pip--active')) {
        disableScroll.on();
    } else { 
        disableScroll.off();
    }
}

if (hamburger) {
    hamburger.addEventListener('click', (e) => {togglePipBoy(e)});
}

if (power) {
    power.addEventListener('click', (e) => {togglePipBoy(e)});
}


linkAbout.click(moveTo('.main', 1));
linkMenu.click(moveTo('.main', 2));
linkPrices.click(moveTo('.main', 3));
linkContacts.click(moveTo('.main', 4));