let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

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
  console.log(seconds);
}
