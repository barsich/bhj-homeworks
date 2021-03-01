const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const arrowPrev = document.getElementsByClassName('slider__arrow_prev');
const arrowNext = document.getElementsByClassName('slider__arrow_next');
const sliderDots = Array.from(document.getElementsByClassName('slider__dot'));

arrows.forEach(item => item.onclick = slide);
sliderDots.forEach(item => item.onclick = slideByDots);

function slide(event) {
  let activeSlideIndex = 0;
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].className.includes('slider__item_active')) {
      activeSlideIndex = i;
    }
  }
  if (event.target.className.includes('arrow_prev')) {
    //левая стрелка
    if (activeSlideIndex === 0) {
      activeSlideIndex = sliderItems.length;
      sliderItems[0].className = 'slider__item';
      sliderItems[activeSlideIndex - 1].className = 'slider__item slider__item_active';
    } else {;
      sliderItems[activeSlideIndex].className = 'slider__item';
      sliderItems[activeSlideIndex - 1].className = 'slider__item slider__item_active';
    }
  } else {
    //правая стрелка
    if (activeSlideIndex === sliderItems.length - 1) {
      activeSlideIndex = 0;
      sliderItems[sliderItems.length - 1].className = 'slider__item';
      sliderItems[activeSlideIndex].className = 'slider__item slider__item_active';
    } else {
      sliderItems[activeSlideIndex].className = 'slider__item';
      sliderItems[activeSlideIndex + 1].className = 'slider__item slider__item_active';
    }
  }
}

function slideByDots(event) {
  sliderItems.forEach(item => item.className = 'slider__item');
  sliderItems[sliderDots.indexOf(event.target)].className = 'slider__item slider__item_active';
}
