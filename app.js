const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
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
  }
}
