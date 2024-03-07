const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const currentDate = new Date();
  const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  daysEl.innerHTML = days;
  hourEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);
