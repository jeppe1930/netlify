// Array of suits and values for a standard deck of cards
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'
];

// Initialize an empty deck array to hold the cards
let deck = [];

// Populate the deck with all possible combinations of suits and values
suits.forEach(suit => {
  values.forEach(value => {
    deck.push({ suit, value });
  });
});

// Get references to HTML elements
const cardDisplay = document.getElementById('cardDisplay');
const drawnCardsStack = document.getElementById('drawnCardsStack');
const previousCardStack = document.getElementById('previousCardStack');
const remainingCount = document.getElementById('remainingCount'); // Counter element
const backButton = document.getElementById('backButton');

// Function to draw a card
function drawCard() {
  // Check if the deck is empty
  if (deck.length === 0) {
    shuffleDeck();
    return;
  }

  // Draw a random card from the deck
  const randomIndex = Math.floor(Math.random() * deck.length);
  const drawnCard = deck[randomIndex];
  const cardImagePath = `cards/${drawnCard.value}_of_${drawnCard.suit}.png`;

  // Update the card display with the drawn card
  cardDisplay.src = cardImagePath;

  // Update the remaining card count
  remainingCount.textContent = `Remaining Cards: ${deck.length}`;

  // Move the current drawn card to the previous card stack
  previousCardStack.innerHTML = '';
  if (cardDisplay.dataset.card) {
    const previousCardImage = document.createElement('img');
    previousCardImage.src = cardDisplay.dataset.card;
    previousCardStack.appendChild(previousCardImage);
  }

  // Update the current drawn card and remove it from the deck
  cardDisplay.dataset.card = cardImagePath;
  deck.splice(randomIndex, 1);
}

// Function to shuffle the deck
function shuffleDeck() {
  // Reset deck
  deck = [];

  // Populate the deck with all possible combinations of suits and values
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ suit, value });
    });
  });

  // Clear card displays
  cardDisplay.src = 'cards/backside.png';
  cardDisplay.dataset.card = '';
  drawnCardsStack.innerHTML = '';
  previousCardStack.innerHTML = '';

  // Update the remaining card count
  remainingCount.textContent = `Remaining Cards: ${deck.length}`;
}

// Initial setup
shuffleDeck();

// Add click event listener to card display
cardDisplay.addEventListener('click', drawCard);

// Add click event listener to the back button
backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Change to the correct URL of your homepage
  });