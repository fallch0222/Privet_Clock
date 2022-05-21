var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";



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

const currentTime = (() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = zerroAdder(minutes);
    seconds = zerroAdder(seconds);
    let time = `${hours}:${minutes}:${seconds}`;
    ctx.fillText(time.toString(), 0, 0 , canvas.width);
    console.log("filling compleated" + time.toString());
    return;
});

const updateSize = () => {
    canvas.width = screen.width - 100;
    canvas.height = screen.height - 100;
    
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



 
