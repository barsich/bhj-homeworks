const widget = document.querySelector('.chat-widget');
const widgetInput = document.querySelector('.chat-widget__input');
const messagesWindow = document.querySelector( '.chat-widget__messages' );
const messages = document.getElementsByClassName('message');
let checkedMessages = 0;

// Оооооо, моя обороооона!
const botMessages = [
  'Пластмассовый мир победил',
  'Макет оказался сильней',
  'Последний кораблик остыл',
  'Последний фонарик устал',
  'А в горле сопят комья воспоминаний',
  'Солнечный зайчик стеклянного глаза',
  'Траурный мячик нелепого мира',
  'Траурный мячик дешёвого мира',
  'Ликует картонный набат',
  'Кому нужен ломтик июльского неба?',
  'Солнечный зайчик незрячего мира',
  'Траурный мячик стеклянного глаза',
  'Траурный зайчик нелепого глаза',
];

widget.addEventListener('click', () => widget.classList.add('chat-widget_active'));
widgetInput.addEventListener('keyup', sendMessage);

function sendMessage(event) {
  if (event.key === 'Enter' && widgetInput.value) {
    messagesWindow.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${setTime()}</div>
      <div class="message__text">
        ${widgetInput.value}
      </div>
    </div>
  `;
  widgetInput.value = '';
  botSendMessages(botMessages);
  }
  if (messages.length !== 0) {
    messages[messages.length - 1].scrollIntoView();
  }
}


function botSendMessages(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  messagesWindow.innerHTML += `
  <div class="message">
    <div class="message__time">${setTime()}</div>
    <div class="message__text">
      ${array[randomIndex]}
    </div>
  </div>
`;
if (messages.length !== 0) {
  messages[messages.length - 1].scrollIntoView();
}
}

function setTime() {
  const currentDate = new Date;
  return currentDate.getHours() + ':' + currentDate.getMinutes();
}

setInterval(() => {
  autoBot();
  checkedMessages = messages.length;
}, 10000);

// Autobots, transform and roll out!
function autoBot() {
  if (checkedMessages === messages.length && widget.classList.contains('chat-widget_active')) {
    botSendMessages(botMessages);
  }
}
