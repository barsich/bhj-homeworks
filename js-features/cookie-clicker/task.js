const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speedCounter = document.getElementById("clicker__speed-counter");
// let lastClickTime = 0;


cookie.onclick = function() {
  counter.textContent++;
  if (counter.textContent % 2 === 1) {
    cookie.width = 230;
  } else {
    cookie.width = 200;
  }
  // let currentTime = Date.now();
  // lastClickTime = Date.now() - currentTime;
  // console.log(lastClickTime);
};
