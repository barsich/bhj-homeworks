const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');

document.addEventListener('submit', event => event.preventDefault());
taskInput.addEventListener('keyup', addTask);
addButton.addEventListener('click', addTask);

function addTask(event) {
  if (event.key === 'Enter' && taskInput.value || event.target === addButton && taskInput.value) {
    taskList.insertAdjacentHTML('beforeend', `
    <div class="task">
      <div class="task__title">${taskInput.value}</div>
        <a href="#" class="task__remove">
          &times;
        </a>
    </div>
  `);
    taskInput.value = '';
    taskList.addEventListener('click', removeTask);
  }
}
function removeTask(event) {
  if (event.target.className !== 'task__remove') {
    return;
  }
  event.target.closest('.task').remove();
}