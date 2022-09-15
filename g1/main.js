var p1 = sessionStorage.getItem("Name1");

if(p1 === null)
{
  p1 = "Player";
}

document.getElementById("Pl1").innerHTML = p1;

set_score();

function set_score(){
  var N1 = JSON.parse(localStorage.getItem("1"));
  var S1 = JSON.parse(localStorage.getItem("2"));
  if(N1!==null && S1!==null)
  {
    i=1;
    while(i<=N1.length && i<=3)
    {
      document.getElementById("N"+i).innerHTML = N1[i-1];
      document.getElementById("S"+i).innerHTML = S1[i-1];
      i++;
    }
  }
};

$(document).keypress(function start(){
    if(level===0){
      nextSequence();
    }
  });


function nextSequence(){
  userClickedPattern = [];
  randomChosenColour();
  level++;
  $("#level-title").html('Level '+level);

};
function randomChosenColour(){
  var i = randomNumber();
  gamePattern.push(buttonColours[i]);
  flash(i) ;
};
function flash(i){
  $("#" + buttonColours[i]).delay(500).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(buttonColours[i]);
};
function randomNumber(){
  return Math.floor(Math.random()*4);
};

buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
userClickedPattern = [];
var level = 0;
var l;


$(".btn").click(function() {
  var userChosenColour = this.id;
  playsound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer();
});

function playsound(name){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
};
function animatePress(currentColour){
  setTimeout(function(){
  $("."+currentColour).addClass("pressed");

  setTimeout(function(){
     $("."+currentColour).removeClass("pressed");
  }, 100);
}, 0);
};
function checkAnswer()
{
  l = userClickedPattern.length - 1;
  //console.log(userClickedPattern[l]+" ");
  //console.log(gamePattern[l]+" ");
  //isEqual(userClickedPattern,gamePattern)
  if(userClickedPattern[l]===gamePattern[l])
  {
    if(userClickedPattern.length===gamePattern.length)
    {
      nextSequence();
    }
  }
  else{
    gameOver();
    level=0;
    gamePattern=[];
    $(document).keypress(function start(){
        if(level===0){
          nextSequence();
        }
      });
  }
};
function isEqual(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
};
function gameOver(){
  var name = localStorage.getItem("1");
  var score = localStorage.getItem("2");

  if(name===null || score===null)
  {
    localStorage.setItem("1",JSON.stringify([p1]));
    localStorage.setItem("2",JSON.stringify([level]));
  }
  else
  {
    var name = JSON.parse(name);
    var score = JSON.parse(score);

    var i=0;
    var conf=1;
    while(i<score.length && score[i]>level)
    {
      i++;
    }
    if(!(name[i]==p1 && score[i]==level))
    {
      name.splice(i,0,p1);
      score.splice(i,0,level);
      localStorage.setItem("1",JSON.stringify(name));
      localStorage.setItem("2",JSON.stringify(score));
    }

  }
  set_score();
  playsound("wrong");
  $("#level-title").html('Game Over, Press Any Key to Restart ');
  setTimeout(function(){
  $("body").addClass('game-over');

  setTimeout(function(){
     $("body").removeClass('game-over');
  }, 700);
}, 0);
};
