let timeRemaining = 61;
const timerElement = document.getElementById("time");
const timerContainer = document.getElementById("timer");
const timer2 = document.getElementsByClassName('timer');
const hidden = document.getElementById('hide');

const intervalId = setInterval(() => {
  timeRemaining--;
  timerElement.textContent = timeRemaining;

  if (timeRemaining === 0) {
    clearInterval(intervalId);
    timerContainer.style.display = 'none'; // Hide the timer
    hidden.style.display="block"
  }
}, 1000);


  