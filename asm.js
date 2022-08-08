var arrSlide = [
    "gta_slide.jpg", "spiderman_slide.jpg", "fallout_slide.jpg", "bf_slide.jpg"
];

var i = 0;
var vSlideImg = document.getElementById("mySlide");

function fNext() {
    i++;
    if(i >= arrSlide.length)
        i = 0;
        vSlideImg.src = "item/" +  arrSlide[i];
}

function fBack() {
    // var i = arrSlide.length;
    i--;
    if(i < 0)
        i = 3;
        vSlideImg.src = "item/" +  arrSlide[i];
}

function fStart(){
    t = window.setInterval(fNext, 1500)
}