document.getElementById("Hi").addEventListener("mouseover",
    function kitty1() {
        document.getElementById("cat").style.backgroundImage = "url(./resources/images/cat-paw-up.png)";
        document.getElementById("ball").style.backgroundImage = "url(./resources/images/globe.png)"; 
        document.getElementById("ball").style.backgroundPositionY = "0px"
    }, false);


document.getElementById("Bye").addEventListener('mouseover',
    function kitty2() {
        document.getElementById("cat").style.backgroundImage = "url(./resources/images/cat-paw-down.png)";
        document.getElementById("ball").style.backgroundImage = "url(./resources/images/globe.png)";
        document.getElementById("ball").style.backgroundPositionY = "100px"
    }, false);







