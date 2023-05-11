var chrono = document.getElementById("chrono");
var resetBtn = document.getElementById("reset");
var stopBtn = document.getElementById("stop");
var startBtn = document.getElementById("start");

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

  if (seconds == 61) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 61) {
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



  if(seconds === 51){
    alert("go take 10min guys")
  }

  if (seconds===60){
    alert("time is over guys")
  }

  if (minutes==01 && seconds==02){
  alert("go take red pen")
  }

  if (minutes === 3){
    alert("it's lench time")
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
  minutes
}