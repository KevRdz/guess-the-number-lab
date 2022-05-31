const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.prevGuesses.push(this.getGuess())
    }while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)  
  },
  getGuess: function (){
    let guess 
    do {
      guess = parseInt(
        prompt(
          'Enter a guess between ${this.smallestNum} and ${this.biggestNum}'
        )
      )
    }while (
      isNaN(guess) ||
      guess < this.smallestNum ||
      guess > this.biggestNum
    )
    return guess
  },
  render: function (){
    let msg
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
      msg = 'Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"!'
    }
    else{
      msg = 'Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? "high": "low"}\nPrevious guesses: ${this.prevGuesses.join(", )}'
    }
    alert(msg)
  }
}
