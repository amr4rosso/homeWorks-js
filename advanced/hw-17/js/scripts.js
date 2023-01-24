"use strict";

// TODO  Task-1

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const setTimer = document.getElementById("set-btn");

const timer = document.getElementById("timer");

let timeout = 0;
let intervalId = null;


const formatTimer = (timeItem) => {
  return String(timeItem).length < 2 ? `0${timeItem}` : timeItem;
};


setTimer.addEventListener("click", () => {
  let numSeconds = +prompt("Enter a number seconds!");

  let hours = ((numSeconds / 60 / 60) % 60).toFixed(0);
  let minutes = ((numSeconds / 60) % 60).toFixed(0);
  let seconds = (numSeconds % 60).toFixed(0);

  let strTimer = `${formatTimer(Math.trunc(hours))}:${formatTimer(
    Math.trunc(minutes)
  )}:${formatTimer(Math.trunc(seconds))}`;
  const timer = document.getElementById("timer");
  timer.innerText = strTimer;

  timeout = numSeconds;
});

const startTimer = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      let hours = ((timeout / 60 / 60) % 60).toFixed(0);
      let minutes = ((timeout / 60) % 60).toFixed(0);
      let seconds = (timeout % 60).toFixed(0);

      if (timeout <= 0) {
        clearInterval(intervalId);
        alert("Время закончилось");
      } else {
        let strTimer = `${formatTimer(Math.trunc(hours))}:${formatTimer(
          Math.trunc(minutes)
        )}:${formatTimer(Math.trunc(seconds))}`;
        const timer = document.getElementById("timer");
        timer.innerText = strTimer;
      }

      --timeout;
    }, 1000);
  }
};

const stopTimer = () => {
	clearInterval(intervalId);
	intervalId = null;
};

startBtn.addEventListener("click", () => {
  startTimer(timeout);
});

pauseBtn.addEventListener('click', stopTimer);
