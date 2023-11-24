let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
  console.log({minutes, reminderSeconds});
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be Back at ${hour}:${minute}`;
}
