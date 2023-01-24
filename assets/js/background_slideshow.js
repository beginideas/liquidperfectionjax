var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'http://www.choctawindianfair.com/liquidperfectionjax/assets/images/pic01.jpg';
images[1] = 'http://www.choctawindianfair.com/liquidperfectionjax/assets/images/pic02.jpg';
images[2] = 'http://www.choctawindianfair.com/liquidperfectionjax/assets/images/pic03.jpg';

function changePicture() {
    document.#banner.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;