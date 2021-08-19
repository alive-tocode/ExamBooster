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

document.getElementById("default").click();
document.getElementById("default").classList.add("active");

//Functions to load pdf of each semester by adding link to the iframes
function loadSem1pdf() {
    // document.getElementById("sem1pdf1").src="";
    // document.getElementById("sem1pdf2").src="";
    // document.getElementById("sem1pdf3").src="";
    // document.getElementById("sem1pdf4").src="";
}
function loadSem2pdf() {
    if(document.getElementById("sem2pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1OpufJrX2l4xheRawHhdhhMZaNrur17Tf/preview") {
        document.getElementById("sem2pdf1").src="https://drive.google.com/file/d/1OpufJrX2l4xheRawHhdhhMZaNrur17Tf/preview";
        document.getElementById("sem2pdf2").src="https://drive.google.com/file/d/1ZjtuRJQgZFh5zjOFRU5TzmSRfnE4C0At/preview";
        document.getElementById("sem2pdf3").src="https://drive.google.com/file/d/1BlL1KrEMyHI7bjP05bHChG9WCCm4eK_K/preview";
        document.getElementById("sem2pdf4").src="https://drive.google.com/file/d/12gHukFA5JFb5RikNtz6PdJ6NJzGSVk5I/preview";
    }
}
function loadSem3pdf() {
    if(document.getElementById("sem3pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1OtyUuOCdR7FPV7gzBfRbA3KfpIH5ijkA/preview") {
        document.getElementById("sem3pdf1").src="https://drive.google.com/file/d/1OtyUuOCdR7FPV7gzBfRbA3KfpIH5ijkA/preview";
        document.getElementById("sem3pdf2").src="https://drive.google.com/file/d/1mPHuKtTzxeyCCNcIUpKXiP30pcELEEV2/preview";
        document.getElementById("sem3pdf3").src="https://drive.google.com/file/d/1QEwlTY3hhhMCFO6Yg_s4afwpQPLCJsnf/preview";
        document.getElementById("sem3pdf4").src="https://drive.google.com/file/d/1exCWfVe3LxJSN9knOq0ykI15CaUp3TBi/preview";
    }
}
function loadSem4pdf() {
    if(document.getElementById("sem4pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1KPeZinfMaA-Il9An0CMoN6U6t5lw2vVI/preview") {
        document.getElementById("sem4pdf1").src="https://drive.google.com/file/d/1KPeZinfMaA-Il9An0CMoN6U6t5lw2vVI/preview";
        document.getElementById("sem4pdf2").src="https://drive.google.com/file/d/1SlNhvFFQMi0nJKR8qu9YsBnQGdwuzP5s/preview";
        document.getElementById("sem4pdf3").src="https://drive.google.com/file/d/1f8Xz_ekdPsjlBUd4s52wtiusslR_-I1Z/preview";
        document.getElementById("sem4pdf4").src="https://drive.google.com/file/d/1-VgGU6gre8ZrkwFhgmcjhP0a_03MGsGr/preview";
    }
}
function loadSem5pdf() {
    // document.getElementById("myid").src="";
    // document.getElementById("myid").src="";
    // document.getElementById("myid").src="";
    // document.getElementById("myid").src="";
}

function openSemester(evt, semester) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for(i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(semester).style.display = "block";
    evt.currentTarget.classList.add("active");  
}



// document.getElementById("open-popup-btn2").addEventListener("click", function() {
//     document.getElementsByClassName("popup")[0].classList.add("active");
// });
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