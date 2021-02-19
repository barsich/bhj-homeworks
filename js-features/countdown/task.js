function showWinner() {
  let timer = document.getElementById('timer');
  let startTime = +timer.textContent;
  let countdown = setInterval(() => {
    timer.textContent = startTime--;
    if (+timer.textContent === 0) { 
      clearInterval(countdown);
      alert('Вы победили в конкурсе!');
    }
  }, 1000);
}

showWinner();