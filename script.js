
const messageInput = document.getElementById('message-input');
const submitBtn = document.getElementById('submit-btn');
const chatDisplay = document.querySelector('.chat-display');

const username = 'Student';


submitBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value;

  const newMessage = document.createElement('div');
 
  newMessage.classList.add('message');

  newMessage.innerHTML = message;
  newMessage.style.padding = '5px 10px';
  newMessage.style.marginBottom = '10px';
  if (username == 'Student') {
	  newMessage.style.backgroundColor = '#428bca';
	  newMessage.style.color = 'white';
  } else {
	  newMessage.style.backgroundColor = '#f5f5f5';
	  newMessage.style.color = '#333';
  }

  chatDisplay.appendChild(newMessage);

  messageInput.value = '';
}
