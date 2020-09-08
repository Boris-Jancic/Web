var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});


function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");

    setTimeout( function() {
      $("#" + currentColour).removeClass("pressed");
    }, 100);

}


function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}


$(document).on('keypress',function(e) {
    console.log(e.key);
});

// function userChoice() {
//     $(".btn").on("click", function() {
//       userClickedPattern.push(this.id);
//       playSound(this.id);
//       $(".btn#" + this.id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//
//       console.log(userClickedPattern);
//     });
// }
