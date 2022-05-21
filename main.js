var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
 

//출처: https://multifrontgarden.tistory.com/157 [우리집앞마당]

async function currentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = `${hours}:${minutes}:${seconds}`;
    ctx.fillText(time, 10, 50);
    
    return;
}


while(true) {
    currentTime();
    //await sleep(1000);
}
 




 
