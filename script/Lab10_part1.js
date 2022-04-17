


var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeColor(){

   // var curFontColor = document.getElementsByName("color");

    var radios = document.getElementsByName('color');
    for (var i=0; i< radios.length; i++)
    {
        if (radios[i].checked) {
            curFontColor = radios[i].value;
        }
    }
    if (curFontColor == "red")
            text.style.color = "red";
    else if (curFontColor == "blue")
            text.style.color = "blue";
    else 
            text.style.color = "green";
   
}

function changeFontColor(){
   
}

function changeBgColor(){
}

function changeBg(){
    curBgColor = document.getElementById('colorsel').value;
    
    if (curBgColor == "nothing") 
        td_text.bgColor = "white";
        
    else if (curBgColor == "red")
        td_text.bgColor = "red";
    else if (curBgColor == "green")
        td_text.bgColor = "green";
    else  
        td_text.bgColor = "blue";
        

    }
