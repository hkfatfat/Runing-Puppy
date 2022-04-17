var topPosition = 200;
var leftPosition = -200;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");

    if (leftPosition <= screen.availWidth)
     {
    puppy.style.marginTop = topPosition + "px";
    topPosition =  topPosition + 5
    puppy.style.marginLeft = leftPosition + "px"; 
    leftPosition = leftPosition + 20

    }
    if (leftPosition >= screen.availWidth)
    {
        leftPosition = -200; 
        topPosition = 200;
    }

// add if it reaches the screen end (you can check with screen.availwidth)					
}
