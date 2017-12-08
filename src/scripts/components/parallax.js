import Parallax from 'parallax-js';
var parallaxInstance;

document.addEventListener("DOMContentLoaded", (e) => {
    let parallax = document.getElementById('parallax');

        parallaxInstance = new Parallax(parallax, {
        relativeInput: true,
        clipRelativeInput: true,
        // frictionX: 0.1,
        // frictionY: 0.1,

        scalarX: 120,
        // scalarY: 10,

        // limitX: 700,

        limitY: 50,
        onReady: manageParallax()
    });
});

// if (window.DeviceOrientationEvent) {
//     window.addEventListener('orientationchange', function() { 
//         location.reload();
//     }, false);
// }


function manageParallax() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let images = document.querySelectorAll('.parallax__image');
    
    console.log(window.orientation);

    // if ((width < height) && (innerWidth < 480)) {
    //     parallaxInstance.scalar(100, 50);
    // }

    if (images[0]) {
        if ((width > height) && (images[0].classList.contains('image-h'))) {
            // alert('h to w!');
            images.forEach(function(el) {
                el.classList.remove('image-h');
                el.classList.add('image-w');
            });
        }

        if ((width < height) && (images[0].classList.contains('image-w'))) {
            // alert('w to h!');
            images.forEach(function(el) {
                el.classList.remove('image-w');
                el.classList.add('image-h');
            });
        }
    }
}


window.onresize = manageParallax;




