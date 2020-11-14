var imageFolder = "images/";

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = imageFolder + "dice" + randomNumber1 + ".png";
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = imageFolder + "dice" + randomNumber2 + ".png";
console.log(randomNumber2);

document.querySelector(".img2").setAttribute("src", randomDiceImage2);
var title = document.querySelector("h1");
console.log(title);

if(randomNumber1 > randomNumber2){
  title.textContent = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  title.textContent = "Player 2 Wins!";
}
else{
  title.textContent = "Draw!";
}

// if player 1 dice is higher
// change text to Player 1 Wins!
//else if player 2 dice is higher
// change text to Player 2 Wins!
//else
// change text to Draw!
