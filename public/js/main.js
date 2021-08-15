function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
    document.getElementById("mySidepanel").style.height = "45vh";


}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}




document.getElementById("open-popup-btn2").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn3").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn3").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn4").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn5").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn7").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function() {
    document.getElementsByClassName("popup")[0].classList.remove("active");
});