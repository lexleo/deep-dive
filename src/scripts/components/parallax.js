import Parallax from 'parallax-js';
var images;

document.addEventListener("DOMContentLoaded", (e) => {
    let parallax = document.getElementById('parallax');
    images = document.querySelectorAll('.parallax__image');

    manageParallax();

    var parallaxInstance = new Parallax(parallax, {
        relativeInput: true,
        clipRelativeInput: true,
        // frictionX: 0.1,
        // frictionY: 0.1,

        scalarX: 20,
        // scalarY: 10,

        // originY: 0.8,
        // originX: 0
        // limitX: 700,
        limitY: 50
    });
});

if (window.DeviceOrientationEvent) {
    window.addEventListener('orientationchange', function() { 
        location.reload();
    }, false);
}


function manageParallax() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    if ((width > height) && (images[0].classList.contains('image-h'))) {
        alert('h to w!');
        images.forEach(function(el) {
            el.classList.remove('image-h');
            el.classList.add('image-w');
        });
    }

    if ((width < height) && (images[0].classList.contains('image-w'))) {
        alert('w to h!');
        images.forEach(function(el) {
            el.classList.remove('image-w');
            el.classList.add('image-h');
        });
    }
}

window.onresize(manageParallax());




