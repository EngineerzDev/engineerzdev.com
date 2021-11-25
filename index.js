function dimissBtn() {
    var footer = document.getElementById("footer");
    var dimissBtn = document.getElementById("dimissBtn");
    var copyright = document.getElementById("copyright");

    footer.classList.toggle('footer-hide');
    dimissBtn.style.display = "none";
    copyright.style.display = "none";
}

var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");

function btnLock(ms) {
    leftBtn.disabled = true;
    rightBtn.disabled = true;
    setTimeout(function(){
        leftBtn.disabled = false;
        rightBtn.disabled = false;
    },ms);
}

var slides = document.getElementById("inner");
var first = document.getElementById("slide-1");
var last = document.getElementById(`slide-${document.querySelectorAll(".bullets .slider").length}`);
var current = 1;



function left() {
    if(!last.checked) {
        slides.style.marginLeft = slides.offsetLeft -970 + "px";

        current++;
        var radio = document.getElementById(`slide-${current}`);
        radio.checked = true;
    }
    else {
        slides.style.marginLeft = slides.offsetLeft + (910 * (document.querySelectorAll(".bullets .slider").length - 1)) + "px";
        current--;
        var radio = document.getElementById(`slide-1`);
        radio.checked = true;
    }

    btnLock(800);
}

function right() {
    if(!first.checked) {
        slides.style.marginLeft = slides.offsetLeft + 910 + "px";

        current--;
        var radio = document.getElementById(`slide-${current}`);
        radio.checked = true;
    }
    else {
        slides.style.marginLeft = slides.offsetLeft + (-970 * (document.querySelectorAll(".bullets .slider").length - 1)) + "px";
        current++;
        var radio = document.getElementById(`slide-${document.querySelectorAll(".bullets .slider").length}`);
        radio.checked = true;
    }

    btnLock(800);
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === 'r') {
      window.location.href="https://youtu.be/dQw4w9WgXcQ";
      event.preventDefault()
    }
});
