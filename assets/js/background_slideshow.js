var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'assets/images/work/ash.webp';
images[1] = 'assets/images/work/ash1.webp';
images[2] = 'assets/images/work/ash2.webp';
images[3] = 'assets/images/work/ash3-300x225.webp';
images[4] = 'assets/images/work/ash4.webp';

function changePicture() {
    document.getElementById("banner").style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
