var chrono = document.getElementById("chrono");
var resetBtn = document.getElementById("reset");
var stopBtn = document.getElementById("stop");
var startBtn = document.getElementById("start");
var aud1 = document.getElementById("aud1");
var aud2 = document.getElementById("aud2");
var aud3 = document.getElementById("aud3");
var aud4 = document.getElementById("aud4");
var aud5 = document.getElementById("aud5");
var aud6 = document.getElementById("aud6");
var aud7 = document.getElementById("aud7");
var aud8 = document.getElementById("aud8");
var aud9 = document.getElementById("aud9");
var aud10
 = document.getElementById("aud10");
var hours = 0;
var minutes = 0;
var seconds = 0;

var timeout=undefined;

var isStopped = true;



function stop(){
  if (isStopped!==true) {
    isStopped = true;
    clearTimeout(timeout);
  }
};

function runTimer(){
  if (isStopped=false) 
  return true;
  seconds = parseInt(seconds);
  minutes = parseInt(minutes);
  hours = parseInt(hours);

  seconds++;

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }



  if(minutes == 50 && seconds ==02){
    aud1.play()
  }

  if(minutes == 50 && seconds ==10){
    aud1.pause()
  }

  if (minutes==59 && seconds==59){
    aud2.play()
  }

  if (hours == 01 && minutes==00 && seconds==02){
    aud2.pause()
  }

  if (hours==01 && minutes==02 && seconds==02){
    aud3.play()
  }

  if (hours==01 && minutes==02 && seconds==10){
    aud3.pause()
  }

  if (hours == 3 && minutes==01 && seconds == 02){
    aud4.play()
  }

  if (hours == 3 && minutes==01 && seconds == 10){
    aud4.pause()
  }

  if (hours == 7 && minutes == 45 && seconds == 01){
    aud5.play()
  }

  if (hours == 7 && minutes == 45 && seconds == 10){
    aud5.pause()
  }

  if (hours == 8 && minutes == 00 && seconds == 01){
    aud6.play()
  }

  if (hours == 8 && minutes == 00 && seconds == 10){
    aud6.pause()
  }

  if(hours == 01 && minutes == 02 && seconds == 02){
    aud7.play()
  }

  if(hours == 01 && minutes == 02 && seconds == 10){
    aud7.pause()
  }

  if(hours == 01 && minutes == 35 && seconds == 03){
    aud8.play()
  }

  if(hours == 01 && minutes == 35 && seconds == 10){
    aud8.pause()
  }

  if(hours == 5 && minutes == 02 && seconds == 02){
    aud9.play()
  }

  if(hours == 5 && minutes == 02 && seconds == 10){
    aud9.pause()
  }

  if(hours == 5 && minutes == 35 && seconds == 03){
    aud10.play()
  }

  if(hours == 5 && minutes == 35 && seconds == 10){
    aud10.pause()
  }

  chrono.textContent = `${hours}:${minutes}:${seconds}`;

  timeout = setTimeout(runTimer, 1000);
};
function start(){
  if (isStopped) {
    isStopped = false;
    runTimer();
  }
};


function reset(){
  chrono.textContent = "00:00:00";
  isStopped = true;
  hours = 0;
  minutes = 0;
  seconds = 0;
  clearTimeout(timeout);
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

var arro1 = document.getElementById("arrow1");
var arro2 = document.getElementById("arrow2");

arro1.onclick = function (){
  minutes++
}

arro2.onclick = function (){
  minutes--
}