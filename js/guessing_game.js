function GuessingGame(answer) {
  this.answer = answer;
  this.guess = function(guess) {
    if (answer == guess) {
      this.lastGuess = guess;
      return 'correct';
    }
    else if (answer > guess) {
      this.lastGuess = guess;
      return 'low';
    }
    else {
      this.lastGuess = guess;
      return 'high';
    }
  };
  this.isSolved = function() {
    if (this.lastGuess == answer) {
      return true;
    }
    else {
      return false;
    }
  };
}