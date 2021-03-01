const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close_times');
const btn = document.getElementsByClassName('btn');

modalMain.className = 'modal modal_active';

btn[0].onclick = function () {
  modalMain.className = 'modal';
  modalSuccess.className = 'modal modal_active';
};

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function () {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
  };
}
