function random() {
  var randomNumberOne = Math.floor(Math.random() * 6) + 1;
  var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

  var randomImageOne = 'images/dice' + randomNumberOne + '.png';
  var randomImageTwo = 'images/dice' + randomNumberTwo + '.png';

  var diceOne = document.querySelectorAll('img')[0];
  diceOne.setAttribute('src', randomImageOne);
  var diceTwo = document.querySelectorAll('img')[1];
  diceTwo.setAttribute('src', randomImageTwo);

  if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumberOne < randomNumberTwo) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector('body').addEventListener('click', function(event) {
  random(this.innerHTML);
});

window.addEventListener('load', function(event) {
  random(this.innerHTML);
});
