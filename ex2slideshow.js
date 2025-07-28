 
var imgobj = document.querySelector("img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slide = document.getElementById("slide");
var stop = document.getElementById("stop");
var counter = 1;
var timer;

next.onclick = function () {
    counter++;
    if (counter > 6) counter = 1;
    imgobj.src = "images/" + counter + ".png";
    }

prev.onclick = function () {
     counter--;
     if (counter < 1) counter = 6;
     imgobj.src = "images/" + counter + ".png";
    }

slide.onclick = function () {
    timer = setInterval(function () {
        next.click();
        }, 1000);
    }

stop.onclick = function () {
    clearInterval(timer);
    }