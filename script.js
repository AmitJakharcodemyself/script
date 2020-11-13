var robot=require("robotjs");
var fs=require("fs");//to read data
var rdata=fs.readFileSync("./chrome.json");
var tabs=JSON.parse(rdata);//to convert data into 2d array
robot.setMouseDelay(20);

setTimeout(handleOneNote,2000);


function handleOneNote(){
    robot.moveMouseSmooth(90,848);
    robot.mouseClick();
    robot.typeString("onenote");
    robot.keyTap("enter");
    setTimeout(typeA,2000);
    setTimeout(handletelegram,2000);
   // setTimeout(openChrome,3000);
}
function typeA(){
    robot.moveMouseSmooth(294,44);//location of draw
    robot.mouseClick();
    robot.moveMouseSmooth(436,76);//location of pen
    robot.mouseClick();
    robot.moveMouseSmooth(944,326);//location of blank page
    robot.mouseToggle("down","left");
    robot.dragMouse(836,538);//loc of b
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(944,326);//loc of a
    robot.mouseToggle("down","left");
    robot.dragMouse(1052,538);//loc of c
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(921,367);//loc of d
    robot.mouseToggle("down","left");
    robot.dragMouse(1048,367);//loc of e
    robot.mouseToggle("up","left");

   // setTimeout(handletelegram,2000);

}
function handletelegram(){
    robot.moveMouseSmooth(90,848);
    robot.mouseClick();
    robot.typeString("telegram");
    robot.keyTap("enter");
    setTimeout(openChrome,2000);
}
function openChrome(){
    
    robot.moveMouseSmooth(90,848);
    robot.mouseClick();
    robot.typeString("cchrome");
    robot.keyTap("enter");
    setTimeout(openTabs,3000);
}
function openTabs(){
   // var rdata=fs.readFileSync("./chrome.json");
    //var tabs=JSON.parse(rdata);//to convert data into 2d array
   /* for(var i=0;i<tabs.length();i++){
        for(var j=0;j<tabs[i].length();j++){
            setTimeout(function(){
                robot.typeString(tabs[i][j]);
                robot.keyTap("enter");
            },2000);
          
            if(j<tabs[i].length()-1){
                //open tabs
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");

            }
            else if(i<tabs.length()-1){
                //open new windows
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }
        }
    }*/
    robot.typeString(tabs[0][1]);
    robot.keyTap("enter");
    robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
    robot.typeString(tabs[0][1]);
    robot.keyTap("enter");
    robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
    robot.typeString(tabs[0][2]);
    robot.keyTap("enter");
}
