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

function clickBye() {
    document.getElementById("myPic").style.backgroundImage = "url(./resources/images/sleepingCat.png)";
    document.getElementById("myPic").style.backgroundPositionX = "50px";
    var divide = document.getElementById("hello");
  if (divide.style.display === "none") {
    divide.style.display = "block";
  } else {
    divide.style.display = "none";   
}}

function clickHi() {
    document.getElementById("myPic").style.backgroundImage = "url(./resources/images/IMG_2118.jpg)";
    document.getElementById("myPic").style.backgroundPositionX = "0px";
    var divide = document.getElementById("hello");
    if (divide.style.display === "block") {
      divide.style.display = "none";
    } else {
      divide.style.display = "block";   
}}







