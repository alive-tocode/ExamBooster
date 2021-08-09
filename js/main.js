function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
    document.getElementById("mySidepanel").style.height = "50vh";


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