/* GLOBAL VARIABLES */ 
// var within the DOM selecting the id=#time
var timerCountdown = document.querySelector("#time");
// var ref in the clearInterval (stop timer event)
var timer;
// var ref in timerCountdown event (start timer at 75s)
var seconds = 75;
// log start of timer
console.log(timerCountdown);
//Countdown Timer function
var countdown = function() {
  // event to start timer in string w/ 'Time:' + (var seconds)
  timerCountdown.textContent = "Time:" + seconds;
  // log var seconds countdown in realtime
  console.log("seconds");
  // tells countdown to subtract
  seconds--;
  // if loop for when timer hits 0 to stop
    if(seconds === -1){
      // event to stop timer w/in if loop parameters (0)
      clearInterval(timer);
      // inform user time is up!
      timerCountdown.textContent = "Time is up!";
  };
};
// timer starts at page load
var timer = setInterval(countdown, 1000)