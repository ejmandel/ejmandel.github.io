$(document).ready(function(){

function blink(){
  $(".homelogo")
  .fadeOut(100)
  .fadeIn(100)
  .fadeOut(100)
  .fadeIn(100, blink);
}
blink();

$(".holder").hide();
$("#q1").show();
$(".dead").hide();
$(".finalscreen").hide();

$("#choice1A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice1C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice1D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice1B").click(function (){
  $("#q1").hide();
  $("#q2").show();

});

$("#choice2A").click(function (){
  $("#q2").hide();
  $("#q3").show();

});

$("#choice3A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice3C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice3D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice3B").click(function (){
  $("#q3").hide();
  $("#q4").show();

});

$("#choice4A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice4B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice4D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice4C").click(function (){
  $("#q4").hide();
  $("#q5").show();

});

$("#choice5A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice5B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice5D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice5C").click(function (){
  $("#q5").hide();
  $("#q6").show();

});

$("#choice6C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice6B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice6D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice6A").click(function (){
  $("#q6").hide();
  $("#q7").show();

});

$("#choice7C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice7B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice7A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice7D").click(function (){
  $("#q7").hide();
  $("#q8").show();

});

$("#choice8C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice8B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice8D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice8A").click(function (){
  $("#q8").hide();
  $("#q9").show();

});

$("#choice9C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice9B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice9D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice9A").click(function (){
  $("#q9").hide();
  $("#q10").show();

});

$("#choice10C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice10A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice10D").click(function (){
  $("#q10").hide();
  $("#q3").show();


});

$("#choice10B").click(function (){
  $("#q10").hide();
  $("#q11").show();

});

$("#choice11C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice11B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice11A").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice11D").click(function (){
  $("#q11").hide();
  $("#q12").show();

});

$("#choice12C").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice12B").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice12D").click(function (){
  lives = lives - 1;
  $("#lives").html("lives: " + lives);
  if(lives == 0 ){
    $(".holder").hide();
    $(".dead").show();

  }
});

$("#choice12A").click(function (){
  $("#q12").hide();
  $("#winner").show();

});

});

var lives = 3;
