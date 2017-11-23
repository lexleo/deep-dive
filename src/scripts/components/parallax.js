import Parallax from 'parallax-js';

document.addEventListener("DOMContentLoaded", (e) => {
    let parallax = document.getElementById('parallax');
    console.log(parallax);
    var parallaxInstance = new Parallax(parallax);
});


