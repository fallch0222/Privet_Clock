var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


const sleep = ((delay) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
});
 


const zerroAdder = (num) => {
    if (num < 10) {
        return "0" + num;
    }
    else{
        return num;
    }
}

var fontBase = canvas.width,                   // selected default width for canvas
    fontSize = 20;                     
    var size = 0;
function getFont() {
    var ratio = fontSize / fontBase;   // calc ratio
    size = canvas.width * ratio;   // get font size based on current width
    return (size|0) + 'px sans-serif'; // set font
}

const currentTime = (() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = zerroAdder(minutes);
    seconds = zerroAdder(seconds);
    let time = `${hours}:${minutes}:${seconds}`;
    ctx.font = getFont();

    ctx.fillText(time, canvas.width / 2 - ctx.measureText(time).width /2, canvas.height / 2);
    return;
});

const updateSize = () => {
    canvas.width = screen.width;
    canvas.height = screen.height - 50;
    
}

const updateText = () => {
    setTimeout(()=>{
      //currentTime 안에서 ctx.TextClear()해도 좋을듯
      updateSize();
      currentTime();
      updateText();
    }, 1000);
};
updateText();



 
