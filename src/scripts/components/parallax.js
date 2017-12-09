import Parallax from 'parallax-js';
var parallaxInstance;
var soilParallaxInstance;

document.addEventListener("DOMContentLoaded", (e) => {
    let parallax = document.getElementById('parallax');
    let soilParallax = document.getElementById('soilParallax');
    

    parallaxInstance = new Parallax(parallax, {
        relativeInput: true,
        clipRelativeInput: true,
        scalarX: 20,
        limitY: 40,
        onReady: manageParallax()
    });

    soilParallaxInstance = new Parallax(soilParallax, {
        scalarY: 0
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

    if (parallaxInstance) {
        if ((width < height) && (width < 500)) {
            parallaxInstance.scalar(130, 10);
        }
        if (width > 500) {
            parallaxInstance.scalar(20, 10);
        }
    }


}

window.onresize = manageParallax;




