import Parallax from 'parallax-js';

document.addEventListener("DOMContentLoaded", (e) => {
    let parallax = document.getElementById('parallax');
    console.log(parallax);
    var parallaxInstance = new Parallax(parallax, {
        relativeInput: false,
        clipRelativeInput: true,
        frictionX: 0.1,
        frictionY: 0.1,
        limitY: false,
        limitX: false,
        scalarX: 10,
        scalarY: 5,
        originY: 0.8,
    });
});


