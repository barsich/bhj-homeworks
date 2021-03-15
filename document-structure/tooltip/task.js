const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
hasTooltip.forEach((item) => item.addEventListener('click', showTooltip));

function showTooltip(event) {
  event.preventDefault();

  // hide all tooltips
  if (document.querySelector('.tooltip_active')) {
    document.querySelector('.tooltip_active').classList.remove('tooltip_active');
  } 

  // add tooltip to target or show it
  if (!event.target.nextElementSibling || !event.target.nextElementSibling.classList.contains('tooltip')) {
    event.target.insertAdjacentHTML(
      'afterend', `
        <div class="tooltip tooltip_active" style="left: ${event.target.getBoundingClientRect().left}px; top: ${event.target.getBoundingClientRect().bottom}px">
          ${event.target.title}
        </div>
      `
    );
  } else {
    event.target.nextElementSibling.classList.add('tooltip_active');
  }
}