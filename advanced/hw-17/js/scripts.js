"use strict";

// TODO  Task-1

// this is updated result with Promise..

let numSeconds;
let timeIsDown = true;

const input = document.getElementById('input');
const setTimer = document.getElementById('set_timer');

setTimer.addEventListener('click', () => {
  
  if (timeIsDown) {
    let inputValue = input.value;
    numSeconds = inputValue;
    timeIsDown = false;
  }

});

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");


const timer = document.getElementById("timer");

let intervalId = null;
let isActive = false


const formatTimer = (timeItem) => {
  return String(timeItem).length < 2 ? `0${timeItem}` : timeItem;
};

const getTimeDivided = (numSeconds) => {
  let hours = ((numSeconds / 60 / 60) % 60).toFixed(0);
  let minutes = ((numSeconds / 60) % 60).toFixed(0);
  let seconds = (numSeconds % 60).toFixed(0);

  return {hours, minutes, seconds};
}

const renderTime = ({hours, minutes, seconds}) => {
  let strTimer = `${formatTimer(Math.trunc(hours))}:${formatTimer(
    Math.trunc(minutes)
  )}:${formatTimer(Math.trunc(seconds))}`;
  timer.innerText = strTimer;
}


const startTimer = () => {

  isActive = true
  const time = getTimeDivided(numSeconds);
  renderTime(time);

  return new Promise((resolve) => {
    intervalId = setInterval(() => {
      numSeconds--;

      if (numSeconds <= 0) {
        isActive = false;
        clearInterval(intervalId);
        intervalId = null;
        resolve()
      } else {
        const time = getTimeDivided(numSeconds);
        renderTime(time)
      }

    }, 1000);
  })

};

const stopTimer = () => {
  isActive = false
	clearInterval(intervalId);
	intervalId = null;
};

startBtn.addEventListener("click", () => {
  if (isActive || !numSeconds) {
    return;
  }

  startTimer().then(() => {
    alert('Time end!')
  })


});

pauseBtn.addEventListener('click', stopTimer);


// this is my first result without Promise:

// const startBtn = document.getElementById("start-btn");
// const pauseBtn = document.getElementById("pause-btn");
// const setTimer = document.getElementById("set-btn");

// const timer = document.getElementById("timer");

// let timeout = 0;
// let intervalId = null;


// const formatTimer = (timeItem) => {
//   return String(timeItem).length < 2 ? `0${timeItem}` : timeItem;
// };


// setTimer.addEventListener("click", () => {
//   let numSeconds = +prompt("Enter a number seconds!");

//   let hours = ((numSeconds / 60 / 60) % 60).toFixed(0);
//   let minutes = ((numSeconds / 60) % 60).toFixed(0);
//   let seconds = (numSeconds % 60).toFixed(0);

//   let strTimer = `${formatTimer(Math.trunc(hours))}:${formatTimer(
//     Math.trunc(minutes)
//   )}:${formatTimer(Math.trunc(seconds))}`;
//   const timer = document.getElementById("timer");
//   timer.innerText = strTimer;

//   timeout = numSeconds;
// });

// const startTimer = () => {
//   if (!intervalId) {
//     intervalId = setInterval(() => {
//       let hours = ((timeout / 60 / 60) % 60).toFixed(0);
//       let minutes = ((timeout / 60) % 60).toFixed(0);
//       let seconds = (timeout % 60).toFixed(0);

//       if (timeout <= 0) {
//         clearInterval(intervalId);
//         alert("Время закончилось");
//       } else {
//         let strTimer = `${formatTimer(Math.trunc(hours))}:${formatTimer(
//           Math.trunc(minutes)
//         )}:${formatTimer(Math.trunc(seconds))}`;
//         const timer = document.getElementById("timer");
//         timer.innerText = strTimer;
//       }

//       --timeout;
//     }, 1000);
//   }
// };

// const stopTimer = () => {
// 	clearInterval(intervalId);
// 	intervalId = null;
// };

// startBtn.addEventListener("click", () => {
//   startTimer(timeout);
// });

// pauseBtn.addEventListener('click', stopTimer);
