const tabs = Array.from(document.querySelectorAll('.book__control'));
const sizeTabs = Array.from(document.querySelectorAll('.book__control_font-size .font-size'));
const colorTabs = Array.from(document.querySelectorAll('.book__control_color .color'));
const bgTabs = Array.from(document.querySelectorAll('.book__control_background .color'));
const book = document.getElementById('book');

sizeTabs.forEach((item) => item.addEventListener('click', switchTab));
colorTabs.forEach((item) => item.addEventListener('click', switchTab));
bgTabs.forEach((item) => item.addEventListener('click', switchTab));

function switchTab(event) {
  console.log(event.target);
  switch (event.target.parentElement.className) {
    case 'book__control book__control_font-size':
      sizeTabs.forEach(item => item.classList.remove('font-size_active'));
      sizeTabs[sizeTabs.indexOf(event.target)].classList.add('font-size_active');
      if (sizeTabs[sizeTabs.indexOf(event.target)].classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
      } else if (sizeTabs[sizeTabs.indexOf(event.target)].classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
      } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
      }
      break;
      case 'book__control book__control_color':
        colorTabs.forEach(item => item.classList.remove('color_active'));
        colorTabs[colorTabs.indexOf(event.target)].classList.add('color_active');
        const textColor = event.target.dataset.textColor;
        if (textColor === 'black') {
          book.classList.remove('book_color-gray');
          book.classList.remove('book_color-whitesmoke');
          book.classList.add('book_color-black');
        } else if (textColor === 'gray') {
          book.classList.remove('book_color-whitesmoke');
          book.classList.remove('book_color-black');
          book.classList.add('book_color-gray');
        } else if (textColor=== 'whitesmoke') {
          book.classList.remove('book_color-gray');
          book.classList.remove('book_color-black');
          book.classList.add('book_color-whitesmoke');
        }
        break;
        case 'book__control book__control_background':
          bgTabs.forEach(item => item.classList.remove('color_active'));
          bgTabs[bgTabs.indexOf(event.target)].classList.add('color_active');
          const bgColor = event.target.dataset.bgColor;
          if (bgColor === 'black') {
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');
            book.classList.add('book_bg-black');
          } else if (bgColor === 'gray') {
            book.classList.remove('book_bg-white');
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray');
          } else if (bgColor === 'white') {
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-white');
          }
          break;
  }
  event.preventDefault();
}
