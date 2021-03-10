const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', revealActive);

function revealActive() {
  reveals.forEach(item => {
    return document.documentElement.clientHeight - item.getBoundingClientRect().top > 0 && 
           document.documentElement.clientHeight - item.getBoundingClientRect().bottom > 0 && 
           item.getBoundingClientRect().top > 0 && 
           item.getBoundingClientRect().bottom > 0 ? 
           item.classList.add('reveal_active') : item.classList.remove('reveal_active');
  });
}