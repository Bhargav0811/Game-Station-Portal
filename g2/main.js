var p1 = sessionStorage.getItem("Name1");
var p2 = sessionStorage.getItem("Name2");

if(p1=== null || p2=== null)
{
  p1 = "Player - 1";
  p2 = "Player - 2";
}


document.getElementById("Pl1").innerHTML = p1;
document.getElementById("Pl2").innerHTML = p2;



var mp1 = 0
var mp2 = 0

var M = [[0,0,0],[0,0,0],[0,0,0]];
var W = [["one","two","three"],["four","five","six"],["seven","eight","nine"]];

var t = 1;
var s = 0;

var u1 = "circle.png";
var u2 = "cross.jpg";

function check(m){

  var a1 = [1,1,1];
  var a2 = [2,2,2];

for(i=0;i<3;i++)
{
  var C = M.map(d => d[i]);

  if(JSON.stringify(C)==JSON.stringify(a1)){
    $("#"+W[0][i]).addClass('glowbox');
    $("#"+W[1][i]).addClass('glowbox');
    $("#"+W[2][i]).addClass('glowbox');
    return 1;}
  else if(JSON.stringify(m[i])==JSON.stringify(a1)){
    $("#"+W[i][0]).addClass('glowbox');
    $("#"+W[i][1]).addClass('glowbox');
    $("#"+W[i][2]).addClass('glowbox');
    return 1;}

    if(JSON.stringify(C)==JSON.stringify(a2)){
      $("#"+W[0][i]).addClass('glowbox');
      $("#"+W[1][i]).addClass('glowbox');
      $("#"+W[2][i]).addClass('glowbox');
      return 2;}
    else if(JSON.stringify(m[i])==JSON.stringify(a2)){
      $("#"+W[i][0]).addClass('glowbox');
      $("#"+W[i][1]).addClass('glowbox');
      $("#"+W[i][2]).addClass('glowbox');
      return 2;}
}

var b1 = [m[0][0],m[1][1],m[2][2]];
var b2 = [m[2][0],m[1][1],m[0][2]];

if(JSON.stringify(b1)==JSON.stringify(a1)){
  $("#"+W[0][0]).addClass('glowbox');
  $("#"+W[1][1]).addClass('glowbox');
  $("#"+W[2][2]).addClass('glowbox');
  return 1;}
else if(JSON.stringify(b2)==JSON.stringify(a1)){
  $("#"+W[2][0]).addClass('glowbox');
  $("#"+W[1][1]).addClass('glowbox');
  $("#"+W[0][2]).addClass('glowbox');
  return 1;}

  if(JSON.stringify(b1)==JSON.stringify(a2)){
    $("#"+W[0][0]).addClass('glowbox');
    $("#"+W[1][1]).addClass('glowbox');
    $("#"+W[2][2]).addClass('glowbox');
    return 2;}
  else if(JSON.stringify(b2)==JSON.stringify(a2)){
    $("#"+W[2][0]).addClass('glowbox');
    $("#"+W[1][1]).addClass('glowbox');
    $("#"+W[0][2]).addClass('glowbox');
    return 2;}

return 0;

};

function playsound(name){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
};

function change(i,j,cl){

  if(M[i][j]==0)
  {
    s+=1;
    if(t==1)
    {
      M[i][j]=t;
      document.getElementById(cl).innerHTML = "<img class='circleimg'src='circle.png'/>";
      document.getElementById("T2").innerHTML = "<img style='width: 70px; height: 40px;' src='dar.png'>";
      document.getElementById("T1").innerHTML = "";
      playsound("push");

      t=2;
    }
    else
    {
      M[i][j]=t;
      document.getElementById(cl).innerHTML = "<img class='crossimg' src='cross.png'/>";
      document.getElementById("T1").innerHTML = "<img style='width: 70px; height: 40px;' src='dar.png'>";
      document.getElementById("T2").innerHTML = "";
      playsound("push");
      t=1;
    }

    var m = check(M);
    if(m==1)
    {
      mp1+=1;
      document.getElementById("score1").innerHTML = mp1;
      document.getElementById("Mbody").style = "background-image: url('cel.gif'),url('back.jpg');";
      document.getElementById("title").innerHTML = "<u>"+p1+" Wins !</u>";
      playsound("clap");
      reset(3000);
    }
    else if(m==2){
      mp2+=1;
      document.getElementById("score2").innerHTML = mp2;
      document.getElementById("Mbody").style = "background-image: url('cel.gif'),url('back.jpg');";
      document.getElementById("title").innerHTML = "<u>"+p2+" Wins !</u>";
      playsound("clap");
      reset(3000);
    }

    if(s==9 && m==0)
    {
      document.getElementById("title").innerHTML = "<u>Game Draw</u>";
      reset(1000);
    }

  }
  else{
    $("#"+W[i][j]).addClass('redbox');
    setTimeout(function(){
      $("#"+W[i][j]).removeClass('redbox');
    },300);
  }
};



function startNew(){
  reset();
  mp1 = 0;
  mp2 = 0;
  document.getElementById("score1").innerHTML = mp1;
  document.getElementById("score2").innerHTML = mp2;
};

function reset(l){
  M = [[0,0,0],[0,0,0],[0,0,0]];
  s=0;
  t=1;
  setTimeout(function(){
    for(i=0;i<3;i++)
    {
      for(j=0;j<3;j++)
      {
        $("#"+W[i][j]).removeClass('glowbox');
      }
    }
    document.getElementById("Mbody").style = "background-image: url('back.jpg');";
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";
    document.getElementById("title").innerHTML = "Tic-Tac-Toe";
  },l);
};

/*
setTimeout(function(){
  $("#"+W[i][j]).removeClass('redbox');
},1500);
*/
