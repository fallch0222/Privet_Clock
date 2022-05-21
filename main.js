var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

const sleep = ((delay) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
});
 
const TextClear = (async () =>{
    ctx.TextClear();
    return;
});

//출처: https://multifrontgarden.tistory.com/157 [우리집앞마당]

const currentTime = (async () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = `${hours}:${minutes}:${seconds}`;
    ctx.fillText(time, 100, 200);
    
    return;
});


while(true){
    currentTime();

    await sleep(1000);
    setTimeout(() => {
       await TextClear();
    }, 1000);
}




 
