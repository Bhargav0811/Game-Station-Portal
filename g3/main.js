var p1 = sessionStorage.getItem("Name1");
var p2 = sessionStorage.getItem("Name2");

if(p1=== null || p2=== null)
{
  p1 = "Player - 1";
  p2 = "Player - 2";
}


document.getElementById("Pl1").innerHTML = p1;
document.getElementById("Pl2").innerHTML = p2;


function roll(){
  var a=Math.floor(Math.random() * 6) + 1;
  var b=Math.floor(Math.random() * 6) + 1;
  $(".img1").addClass('rotating_l');
  $(".img2").addClass('rotating_r');
  setTimeout(function(){
    document.querySelector(".img1").setAttribute("src","images/dice"+a+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+b+".png");
  }, 750);
  setTimeout(function(){
    $(".img1").removeClass('rotating_l');
     $(".img2").removeClass('rotating_r');
     if(a>b)
     {
       document.getElementById("result").innerHTML = p1+" Wins";
     }
     else if(a<b)
     {
       document.getElementById("result").innerHTML = p2+" Wins";
     }
     if(a===b)
     {
       document.getElementById("result").innerHTML = "It's Draw";
     }
  },1200);


};
