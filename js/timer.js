const timerPageDown = document.querySelector("#mainTimer .pageDown");
const timerPage = document.querySelector("#mainTimer");
const clickTimer = document.querySelector(".fa-stopwatch");
const timerClock = document.getElementById("timerClock");
const timerStop = document.getElementById("jsTimerStopBtn");
const timerStart = document.getElementById("jsTimerStartBtn");

let time = 0;
let secs = 0;
let mins = 0;
let hours = 0;
let timer;
let pauseFlag = false;

function timerRun() {
    time++;
    mins = Math.floor(time/60);
    hours = Math.floor(mins/60);
    secs = time%60;
    mins = mins%60;
    if(hours<10){
        hours = "0" + hours;
    }
    if(mins<10){
        mins = "0" + mins;
    }
    if(secs<10){
        secs = "0" + secs;
    }
    timerClock.innerText = hours+":"+mins+":"+secs;
}

function handleStartTimer() {
    if(pauseFlag === false) {
        timer = setInterval(timerRun, 1000);
        pauseFlag = true;
        timerStart.innerText = "pause";
    } else if(pauseFlag === true) {
        clearInterval(timer);
        pauseFlag = false;
        timerStart.innerText = "restart";
    }
}

function handleStopTimer() {
    if(pauseFlag === true) {
        clearInterval(timer);
        time = 0;
        timerClock.innerText = "00:00:00";
        pauseFlag = false;
        timerStart.innerText = "start";
    } else if(pauseFlag === false) {
        clearInterval(timer);
        time = 0;
        timerClock.innerText = "00:00:00";
        timerStart.innerText = "start";
    }
}

timerStop.addEventListener("click", handleStopTimer);
timerStart.addEventListener("click", handleStartTimer);

function hiddenPage(event) {
    event.preventDefault();
    timerPage.classList.remove("page-up");
    timerPage.classList.add("page-down");
    setTimeout(function(event) {timerPage.classList.remove("flex"); timerPage.classList.add("hidden");}, 501);
}

timerPageDown.addEventListener("click", hiddenPage);

function clickedBtn(event) {
    timerPage.classList.remove("page-down");
    timerPage.classList.add("page-up");
    timerPage.classList.remove("hidden");
    timerPage.classList.add("flex");
}

clickTimer.addEventListener("click", clickedBtn);