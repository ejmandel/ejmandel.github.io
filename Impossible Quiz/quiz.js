$(document).ready(function(){

function blink(){
  $(".homelogo")
  .fadeOut(300)
  .fadeIn(300)
  .fadeOut(300)
  .fadeIn(300, blink);
}
blink();

$(".holder").hide();
$("#q1").show();

$("#choice1").click(function (){
  $("#q1").hide();
  $("#q2").show();
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();

  }
});



});

var lives = 3;
