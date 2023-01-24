var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'http://www.choctawindianfair.com/liquidperfectionjax/assets/images/pic01.png';
images[1] = 'http://www.choctawindianfair.com/liquidperfectionjax/assets/images/pic02.png';
images[2] = 'http://www.choctawindianfair.com/liquidperfectionjax/assets/images/pic03.png';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;