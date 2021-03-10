let rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

rotatorCases.forEach(item => item.style.color = item.getAttribute('data-color'));

let delay = rotatorCases[0].dataset.speed;

setTimeout(function run() {
  let activeIndex;
  for (let i = 0; i < rotatorCases.length; i++) {
    if (rotatorCases[i].classList.contains('rotator__case_active')) {
      activeIndex = i;
    }
  }
  if (rotatorCases[rotatorCases.length - 1].classList.contains('rotator__case_active')) {
    rotatorCases[rotatorCases.length - 1].classList.remove('rotator__case_active');
    rotatorCases[0].classList.add('rotator__case_active');
    delay = rotatorCases[0].dataset.speed;
  } else {
    rotatorCases[activeIndex].classList.remove('rotator__case_active');
    rotatorCases[activeIndex + 1].classList.add('rotator__case_active');
    delay = rotatorCases[activeIndex + 1].dataset.speed;
  }
  setTimeout(run, delay);
}, delay);