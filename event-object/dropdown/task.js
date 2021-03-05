const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownListItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.forEach(item => item.addEventListener('click', dropdownActive));
dropdownListItem.forEach(item => item.addEventListener('click', dropdownItemChoose));

function dropdownActive(event) {
  event.target.parentElement.querySelector('.dropdown__list').className = 'dropdown__list dropdown__list_active';
}

function dropdownItemChoose(event) {
  this.parentElement.className = 'dropdown__list';
  this.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
  event.preventDefault();
}