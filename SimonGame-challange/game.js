var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

$(document).on('keypress',function(e) { // Start game
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {  // Button click event handler
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColour) {  // Animation for button press

    $("#" + currentColour).addClass("pressed");

    setTimeout( function() {
      $("#" + currentColour).removeClass("pressed");
    }, 100);

}

function gameOver() {

}

function playSound(name) {  // Plays a specific button sound

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


function nextSequence() { // Chooses a random color for the next round

  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


function startOver() {  // Resets all values
  gamePattern = [];
  userClickedPattern = [];
  started = false
  level = 0;
}


function checkAnswer(currentLevel) {  // Checks if user click was right
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () { nextSequence(); }, 1000);  // Starts the next round after 1 second
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout( function() {
      $("body").removeClass("game-over");
    }, 100);

    startOver();
    $("#level-title").text("Game over, press any key to RESTART");
  }
}
