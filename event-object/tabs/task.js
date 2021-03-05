const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(item => item.addEventListener('click', switchTab));

function switchTab(event) {
  tabs.forEach(item => item.className = 'tab');
  tabs[tabs.indexOf(event.target)].className = 'tab tab_active';
  tabsContent.forEach(item => item.className = 'tab__content');
  tabsContent[tabs.indexOf(event.target)].className = 'tab__content tab__content_active';
}