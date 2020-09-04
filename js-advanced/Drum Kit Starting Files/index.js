var audio = new Audio('sounds/tom-1.mp3');

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length ; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    audio.play();
    this.style.color = "purple";

  });
}
