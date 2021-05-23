const wordEl = document.getElementById('word'),
      wrongLettersEl = document.getElementById('wrong-letters'),
      playAgainBtn = document.getElementById('play-button'),
      popup = document.getElementById('popup-container'),
      notification = document.getElementById('notification-container'),
      finalMessage = document.getElementById('final-message'),

      figureParts = document.querySelectorAll('.figure-part'),

      words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


const correctLetters = [],
      wrongLetters = [];

// Show Hidden word
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `).join('')
        }
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');
    
    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!!';
        popup.style.display = 'flex';
    }
}

displayWord();


