$(document).ready(function(){

function blink(){
  $("#homelogo")
  .fadeOut(300)
  .fadeIn(300)
  .fadeOut(300)
  .fadeIn(300, blink);
}
blink();

$('.home').animate({rotate: '360deg'},1000);


});
