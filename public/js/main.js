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

//Functions to load pdf of each semester(Bca) by adding link to the iframes
function loadBcaSem1pdf() {
    // document.getElementById("sem1pdf1").src="";
    // document.getElementById("sem1pdf2").src="";
    // document.getElementById("sem1pdf3").src="";
    // document.getElementById("sem1pdf4").src="";
}
function loadBcaSem2pdf() {
    if(document.getElementById("bcasem2pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1OpufJrX2l4xheRawHhdhhMZaNrur17Tf/preview") {
        document.getElementById("bcasem2pdf1").src="https://drive.google.com/file/d/1OpufJrX2l4xheRawHhdhhMZaNrur17Tf/preview";
        document.getElementById("bcasem2pdf2").src="https://drive.google.com/file/d/1ZjtuRJQgZFh5zjOFRU5TzmSRfnE4C0At/preview";
        document.getElementById("bcasem2pdf3").src="https://drive.google.com/file/d/1BlL1KrEMyHI7bjP05bHChG9WCCm4eK_K/preview";
        document.getElementById("bcasem2pdf4").src="https://drive.google.com/file/d/12gHukFA5JFb5RikNtz6PdJ6NJzGSVk5I/preview";
    }
}
function loadBcaSem3pdf() {
    if(document.getElementById("bcasem3pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1OtyUuOCdR7FPV7gzBfRbA3KfpIH5ijkA/preview") {
        document.getElementById("bcasem3pdf1").src="https://drive.google.com/file/d/1OtyUuOCdR7FPV7gzBfRbA3KfpIH5ijkA/preview";
        document.getElementById("bcasem3pdf2").src="https://drive.google.com/file/d/1mPHuKtTzxeyCCNcIUpKXiP30pcELEEV2/preview";
        document.getElementById("bcasem3pdf3").src="https://drive.google.com/file/d/1QEwlTY3hhhMCFO6Yg_s4afwpQPLCJsnf/preview";
        document.getElementById("bcasem3pdf4").src="https://drive.google.com/file/d/1exCWfVe3LxJSN9knOq0ykI15CaUp3TBi/preview";
    }
}
function loadBcaSem4pdf() {
    if(document.getElementById("bcasem4pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1KPeZinfMaA-Il9An0CMoN6U6t5lw2vVI/preview") {
        document.getElementById("bcasem4pdf1").src="https://drive.google.com/file/d/1KPeZinfMaA-Il9An0CMoN6U6t5lw2vVI/preview";
        document.getElementById("bcasem4pdf2").src="https://drive.google.com/file/d/1SlNhvFFQMi0nJKR8qu9YsBnQGdwuzP5s/preview";
        document.getElementById("bcasem4pdf3").src="https://drive.google.com/file/d/1f8Xz_ekdPsjlBUd4s52wtiusslR_-I1Z/preview";
        document.getElementById("bcasem4pdf4").src="https://drive.google.com/file/d/1-VgGU6gre8ZrkwFhgmcjhP0a_03MGsGr/preview";
    }
}
function loadBcaSem5pdf() {
    // document.getElementById("myid").src="";
    // document.getElementById("myid").src="";
    // document.getElementById("myid").src="";
    // document.getElementById("myid").src="";
}

//Functions to load pdf of each semester(Bba) by adding link to the iframes
function loadBbaSem1pdf() {
    if(document.getElementById("bbasem1pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1-3SD0Q1lzViByE_-YiulA-2CqppIde8H/preview") {
        document.getElementById("bbasem1pdf1").src="https://drive.google.com/file/d/1-3SD0Q1lzViByE_-YiulA-2CqppIde8H/preview";
        document.getElementById("bbasem1pdf2").src="https://drive.google.com/file/d/1fKM_jB2batHZ6ImIk0K9Juhp8A8gmsuG/preview";
        document.getElementById("bbasem1pdf3").src="https://drive.google.com/file/d/1gnoIVAi3cY2LqUiNmzxxAx3zdXWYOHkC/preview";
        document.getElementById("bbasem1pdf4").src="https://drive.google.com/file/d/1Zp6k_P5FxGIx9edhfkRJtOyRTBQOmpyr/preview";
        document.getElementById("bbasem1pdf5").src="https://drive.google.com/file/d/1ZtO4BiXnBZZwjlItwZadxzOX9t-GADfj/preview";
    }
}
function loadBbaSem2pdf() {
    // if(document.getElementById("bbasem2pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1OpufJrX2l4xheRawHhdhhMZaNrur17Tf/preview") {
    //     document.getElementById("bbasem2pdf1").src="https://drive.google.com/file/d/1OpufJrX2l4xheRawHhdhhMZaNrur17Tf/preview";
    //     document.getElementById("bbasem2pdf2").src="https://drive.google.com/file/d/1ZjtuRJQgZFh5zjOFRU5TzmSRfnE4C0At/preview";
    //     document.getElementById("bbasem2pdf3").src="https://drive.google.com/file/d/1BlL1KrEMyHI7bjP05bHChG9WCCm4eK_K/preview";
    //     document.getElementById("bbasem2pdf4").src="https://drive.google.com/file/d/12gHukFA5JFb5RikNtz6PdJ6NJzGSVk5I/preview";
    // }
}
function loadBbaSem3pdf() {
    if(document.getElementById("bbasem3pdf1").contentWindow.location.href!="https://drive.google.com/file/d/15DpXWzku-CKcWOqGTZzbiBR95wmRzymj/preview") {
        document.getElementById("bbasem3pdf1").src="https://drive.google.com/file/d/15DpXWzku-CKcWOqGTZzbiBR95wmRzymj/preview";
        document.getElementById("bbasem3pdf2").src="https://drive.google.com/file/d/1GXHZThgxcmAZgA8YlQ5ZuNkbdZOcvG0m/preview";
        document.getElementById("bbasem3pdf3").src="https://drive.google.com/file/d/1KOGrVmnjdvGlLa2iUYXJeD8QeF21ObUS/preview";
        document.getElementById("bbasem3pdf4").src="https://drive.google.com/file/d/1GjRc-W7EG6oA07XjLdldau4NCqm8ctIe/preview";
        document.getElementById("bbasem3pdf5").src="https://drive.google.com/file/d/1PXc6fGLygUTo8U_6CqLS_ej25G7z-9L3/preview";
    }
}
function loadBbaSem4pdf() {
    if(document.getElementById("bbasem4pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1PTPHWWcj554F9wTz7iRW-57Y20sJ40Ks/preview") {
        document.getElementById("bbasem4pdf1").src="https://drive.google.com/file/d/1PTPHWWcj554F9wTz7iRW-57Y20sJ40Ks/preview";
        document.getElementById("bbasem4pdf2").src="https://drive.google.com/file/d/1Jaw6AFN0vZA8dCbhS4fbcHnuVc0YYYKh/preview";
        document.getElementById("bbasem4pdf3").src="https://drive.google.com/file/d/1Oydyhwb9p4gusdG8xsm44TjFz5-ncuLO/preview";
        document.getElementById("bbasem4pdf4").src="https://drive.google.com/file/d/1D8Z_6GQlbls-llJs5lmp30WHbgwkrzm9/preview";
        document.getElementById("bbasem4pdf5").src="https://drive.google.com/file/d/1q93D6-ug4TZnX4D67WEHluGEBzmrH1wa/preview";
    }
}
function loadBbaSem5pdf() {
    if(document.getElementById("bbasem5pdf1").contentWindow.location.href!="https://drive.google.com/file/d/1SeXrujigZI5gx2ULGq5-m1nf2CnIMjxd/preview") {
        document.getElementById("bbasem5pdf1").src="https://drive.google.com/file/d/1SeXrujigZI5gx2ULGq5-m1nf2CnIMjxd/preview";
        document.getElementById("bbasem5pdf2").src="https://drive.google.com/file/d/1WKO8IjLlasnh78RoMl_FtxaCKuduM4Sn/preview";
        document.getElementById("bbasem5pdf3").src="https://drive.google.com/file/d/1p68lyjFPan9_8U_yBvXn47wCmTfpr3rv/preview";
        document.getElementById("bbasem5pdf4").src="https://drive.google.com/file/d/1Tqk-vArKD8_-r96vSKB-k3az8ZA13WpR/preview";
        document.getElementById("bbasem5pdf5").src="https://drive.google.com/file/d/1hUOaBlkvkwK8dFp6q9E87s4w8Ra7aXQJ/preview";
    }
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