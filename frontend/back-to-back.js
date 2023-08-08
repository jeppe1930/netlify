const playerInput = document.getElementById('playerInput');
const playerList = document.getElementById('playerList');
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');

playerInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addPlayer();
  }
});

function addPlayer() {
  const playerName = playerInput.value.trim();
  if (playerName !== '' && playerList.children.length < 15) {
    const li = document.createElement('li');
    li.textContent = playerName;
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    li.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton);
    playerList.appendChild(li);
    playerInput.value = '';
    updateButtons();
  }
}

function updateButtons() {
  if (playerList.children.length >= 2 && playerList.children.length <= 15) {
    startButton.removeAttribute('disabled');
  } else {
    startButton.setAttribute('disabled', 'true');
  }
}

playerList.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-button')) {
    const li = event.target.parentElement;
    playerInput.value = li.textContent;
    playerList.removeChild(li);
    updateButtons();
  } else if (event.target.classList.contains('delete-button')) {
    playerList.removeChild(event.target.parentElement);
    updateButtons();
  }
});

backButton.addEventListener('click', () => {
  window.location.href = 'index.html'; // Change to the correct URL of your homepage
});
