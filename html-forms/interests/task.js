const allChecks = Array.from(document.querySelectorAll('.interest__check'));

allChecks.forEach(item => item.addEventListener('change', event => {

  //check all children if parent checked
  const allChildren = Array.from(event.target.closest('.interest').querySelectorAll('.interest__check'));
  allChildren[0].checked ? allChildren.forEach(item => item.checked = true) : allChildren.forEach(item => item.checked = false);

  //if target has a parent
  if (!!event.target.closest('.interests_active')) {
    const childrenLi = Array.from(event.target.closest('.interests_active').children)
    const parentLi = event.target.closest('.interests').closest('.interest');
    const parentCheck = event.target.closest('.interests').closest('.interest').querySelector('.interest__check');

    //if all children checked ? parent checked : parent indeterminate
    if (childrenLi.every(item => item.querySelector('.interest__check').checked)) {
      parentCheck.checked = true;
      parentCheck.indeterminate = false;
    } else {
      parentCheck.checked = false;
      parentCheck.indeterminate = true;
    }

    //if none of children checked ? parent indeterminate = false
    if (childrenLi.every(item => !item.querySelector('.interest__check').checked)) {
      parentCheck.checked = false;
      parentCheck.indeterminate = false;
    }
  }
}));
