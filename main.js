const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const title = document.getElementById("Title");

const sizeSlider = document.getElementById("sizeSlider");
const sizeVlaue = document.getElementById("sizeValue");



let fontSize = 50; 
const fontBase = canvas.width;                     

const getFont = () =>{
    const ratio = fontSize / fontBase;   
    const size = canvas.width * ratio;   // get font size based on current width
    return `${size ?? 0}px Arial`; // set font
}

const fillZero = num => num.toString().padStart(2, '0'); //fill 0 if number is more than 10

const sizeSliderInput = (size) => {
    sizeVlaue.innerText = size;
    console.log(size);
    fontSize = size;
    updateText();
    return;
}

const currentTime = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const date = new Date();
    const hours = date.getHours();
    const minutes = fillZero(date.getMinutes());
    const seconds = fillZero(date.getSeconds());

    const time = `${hours}:${minutes}:${seconds}`;
    ctx.font = getFont();
    console.debug(ctx.font);
    ctx.fillText(time, canvas.width / 2 - ctx.measureText(time).width /2, canvas.height / 2);
};

const updateSize = () => {
    canvas.width = screen.width;
    canvas.height = screen.height;
    
}

const resetSize = () => {
    fontSize = 50;
    updateText();
    //set sizeSlider as fontSize
    sizeSlider.value = fontSize;
    sizeVlaue.innerText = fontSize;
}

const sliderSize = () => {}


const updateText = () => {
    setTimeout(()=>{
      updateSize();
      currentTime();
      updateText();
    }, 1000);
};

updateSize();
currentTime();
updateText();



 
