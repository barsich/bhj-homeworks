const mainMenus = Array.from(document.querySelectorAll('ul.menu_main'));
mainMenus.forEach((item) => {
  const menuItems = Array.from(item.querySelectorAll('.menu_main > li.menu__item'));
  menuItems.forEach((item) => {
    item.onclick = function () {
      // если есть дочерний список и он скрыт, то раскрыть его
      if (item.querySelector('ul') && item.querySelector('ul').className !== 'menu menu_sub menu_active') {
        //но сначала скрыть все дочерние списки
        Array.from(item.parentElement.querySelectorAll('ul')).forEach(item => {
          item.className = 'menu menu_sub';
        });
        item.querySelector('ul').className = 'menu menu_sub menu_active';
        return false;
      }
      //скрыть, если уже раскрыт
      if (item.querySelector('ul').className === 'menu menu_sub menu_active') {
        item.querySelector('ul').className = 'menu menu_sub';
        return false;
      }
    };
  });
});