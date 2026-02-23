const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  attempts++;

  if (!guess) {
      message.textContent = "Please enter a valid number";
      return;
  }

  if (guess < secretNumber) {
      message.textContent = "Too low";
  } else if (guess > secretNumber) {
      message.textContent = "Too high";
  } else {
      message.textContent = `Correct! You guessed it in ${attempts} attempts!`;
  }
}
