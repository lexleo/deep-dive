var disableScroll = require('disable-scroll');
var hamburger = document.querySelector('.hamburger');
var pipBoy = document.querySelector('.pip-wrapper');
var power = document.querySelector('.power');

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