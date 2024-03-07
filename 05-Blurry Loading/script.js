const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;
let op = 100;
let blur = 20;

function blurring() {
  load++;
  op--;
  blur -= 0.2;
  loadText.textContent = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - (load / 3 - 3)}px)`;
  if (load > 99) clearInterval(interval);
}

let interval = setInterval(blurring, 30);
cl;
