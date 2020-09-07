var gamePattern = new Array();
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.round((Math.random() * 3));
  return randomNumber;
}


function nextColor() {
  var nextButton =  buttonColours[nextSequence()];
  $("button").on("hover", function () {
    console.log("dsad");
  })
}


function nextButton() {
  var randColor = nextSequence();

  $(".btn" + "." + buttonColours[randColor]).on("click", function () {
    console.log("clicked");
    $(".btn" + "." + buttonColours[randColor]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


  switch (buttonColours[randColor]) {
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;

    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;

    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;

    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;

    default: console.log("sadsadsdasda");
  });
}
