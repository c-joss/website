document.getElementById("Hi").addEventListener("mouseover",
    function kitty1() {
        document.getElementById("cat").style.backgroundImage = "url(./resources/images/cat-paw-up.png)";
        document.getElementById("ball").style.backgroundImage = "url(./resources/images/globe.png)"; 
        document.getElementById("ball").style.backgroundPositionY = "0px"
    }, false);

document.getElementById("Hi").addEventListener("mouseout",
    function kitty1() {
        document.getElementById("cat").style.backgroundImage = "url(./resources/images/cat.PNG)";
        document.getElementById("ball").style.backgroundImage = ""; 
        }, false);   

document.getElementById("Bye").addEventListener('mouseover',
    function kitty2() {
        document.getElementById("cat").style.backgroundImage = "url(./resources/images/cat-paw-down.png)";
        document.getElementById("ball").style.backgroundImage = "url(./resources/images/globe.png)";
        document.getElementById("ball").style.backgroundPositionY = "90px"
    }, false);

document.getElementById("Bye").addEventListener("mouseout",
    function kitty1() {
        document.getElementById("cat").style.backgroundImage = "url(./resources/images/cat.PNG)";
        document.getElementById("ball").style.backgroundImage = ""; 
        }, false);  

function clickHi() {
    document.getElementById("myPic").style.backgroundImage = "url(./resources/images/IMG_2118.jpg)";
    document.getElementById("myPic").style.backgroundPositionX = "0px";
    document.getElementById("hello").style.display = "block"; 
    document.getElementById("hi").style.display = "block"; 
    document.getElementById("greet").style.display = "block"; 
    document.getElementById("hello").style.display = "block"; 
    document.getElementById("seeYa").style.display = "none"; 
}

function clickBye() {
    document.getElementById("myPic").style.backgroundImage = "url(./resources/images/sleepingCat.png)";
    document.getElementById("myPic").style.backgroundPositionX = "50px";
    document.getElementById("hi").style.display = "none"; 
    document.getElementById("greet").style.display = "none"; 
    document.getElementById("hello").style.display = "block"; 
    document.getElementById("seeYa").style.display = "block"; 
    document.getElementById("end").style.display = "block"; 
}