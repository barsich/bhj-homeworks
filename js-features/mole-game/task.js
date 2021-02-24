getHole = index => document.getElementById(`hole${index}`);
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).className.includes( 'hole_has-mole' )) {
      deadCounter.textContent++;
      if (+deadCounter.textContent === 10) {
        alert('Win!')
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
      }
    } else {
      lostCounter.textContent++;
      if (+lostCounter.textContent === 5) {
        alert('Lose!')
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
      }
    }
  }
}