var rand1 = Math.floor((Math.random() * 6) + 1);  // random num between 1 and 6

var randomDicePng1 = "dice" + rand1 + ".png";

var randomImageSrc1 = "images/" + randomDicePng1;


var rand2 = Math.floor((Math.random() * 6) + 1);  // random num between 1 and 6

var randomDicePng1 = "dice" + rand2 + ".png";

var randomImageSrc2 = "images/" + randomDicePng1;


var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

dice1.setAttribute("src", randomImageSrc1);
dice2.setAttribute("src", randomImageSrc2);

if ( rand1 > rand2 ) {
  document.querySelector("h1").innerText = "🚩 Player 1 wins ! ☠️"
} else if ( rand1 < rand2 ) {
  document.querySelector("h1").innerText = "☠️ Player 2 wins ! 🚩"
} else if ( rand1 === rand2) {
  document.querySelector("h1").innerText = "🚩 Draw ! 🚩"
}
