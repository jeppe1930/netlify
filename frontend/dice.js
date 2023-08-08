const diceDisplay = document.getElementById('diceDisplay');
const diceImage = document.getElementById('diceImage');
const backButton = document.getElementById('backButton');

const diceImages = [
  'dice1.png',
  'dice2.png',
  'dice3.png',
  'dice4.png',
  'dice5.png',
  'dice6.png'
];

let isRolling = false;

diceDisplay.addEventListener('click', rollDice);

function rollDice() {
  if (isRolling) return;

  isRolling = true;

  // Add rolling animation class
  diceImage.classList.add('rolling');

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    const randomDiceImage = diceImages[randomIndex];
    
    // Change dice image and remove rolling animation class
    diceImage.src = `dice/${randomDiceImage}`;
    diceImage.classList.remove('rolling');
    
    isRolling = false;
  }, 1000); // Change the duration to control the animation speed
}

backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});
