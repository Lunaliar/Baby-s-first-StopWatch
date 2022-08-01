// GLobal Variables
//Elements
const timeDisplay = document.querySelector('.timedisplay');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
//Counting variables
let seconds = 0;
let interval;
//Button Events
btnStart.addEventListener('click',start);
btnStop.addEventListener('click',stop);
btnReset.addEventListener('click',reset);
//Functions
function timer (){
    seconds++;
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds- (hrs*3600))/60);
    let secs = seconds % 60;

    if(secs<=9) secs = '0'+secs;
    if(mins<=9) mins = '0'+mins;
    if(hrs<=9) hrs = '0'+hrs;

    timeDisplay.innerText = `${hrs}:${mins}:${secs}`
}

function start () {
    if(interval)return;
    interval = setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
    interval=null;
}

function reset(){
    stop();
    seconds=0;
    timeDisplay.innerText = '00:00:00'
}