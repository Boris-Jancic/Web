$("h1").addClass("big-title margin-50");  // $ = JQuery = document.querySelect, its shorter to use $

$("button").html("<em>HEY</em>");

$("img").attr("src"); // attr-atribute = alter a atribute from a html element

// for (var i = 0 ; i < 5 ; i++ ) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
// =========================================================
//  THE CODE BELOW IS THE SAME CODE ABOVE BUT USING JQUERY
// =========================================================
// $("button").click(function() {
//   $("h1").css("color", "purple");
// });


// $(document).keydown(function(event) {
//   $("h1").text(event.key);
// });

$("button").on("click", function () {
  $("h1").slideToggle();
})
