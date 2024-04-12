
const messageInput = document.getElementById('message-input');
const submitBtn = document.getElementById('submit-btn');
const chatDisplay = document.querySelector('.chat-display');


submitBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value;

  const newMessage = document.createElement('div');
  newMessage.classList.add('message');

  newMessage.innerHTML = message;
  newMessage.style.backgroundColor = '#428bca';
  newMessage.style.color = 'white';
  newMessage.style.padding = '5px 10px';
  newMessage.style.marginBottom = '10px';

  chatDisplay.appendChild(newMessage);

  messageInput.value = '';
}
