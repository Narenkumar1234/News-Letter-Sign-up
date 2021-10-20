// alert("Hello");
var gamepattern=[];
var zero=1;
var bool=true;
var sequence=0;

function nextSequence(){
  //change title
  bool=false;
  var count=0;

  document.querySelector("#level-title").innerText="Level "+zero++;

  colorArray=["red","green","yellow","blue"];
  // random number generator
  randomNumber=Math.floor(Math.random()*colorArray.length);
  // random color picker
  randomColor=colorArray[randomNumber];
  // random color pusher
  gamepattern.push(randomColor);
  // random color animation
  $("#"+randomColor).fadeOut(100).fadeIn(100);
  // play sound
  playSound(randomColor);

  //getting the id of the button clicked
  var userClickedPattern = [];

$(".btn").click(function(){
  count++;
  var userClickedColor=$(this).attr("id");
  playSound(userClickedColor);
  animatePress(userClickedColor);
  userClickedPattern.push(userClickedColor);
  //sequence generar

  setTimeout(function(){if(count===gamepattern.length){
    console.log(gamepattern+" "+userClickedPattern);
    if(JSON.stringify(userClickedPattern)==JSON.stringify(gamepattern))
    {
    nextSequence();
    count++;
    }
    else
    {
      wrong();
    }

  }
},400);
});

}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed")
  setTimeout(function() {
  $("#"+currentColor).removeClass("pressed");
}, 100);
}


$(document).click(function(){
if(bool==true)
  nextSequence();
});

function wrong()
{
  playSound("wrong");
  $("body").addClass("game-over");
  $("h1").html("GAME-OVER<br> Press any key to restart");
setTimeout(function(){
  $("body").removeClass("game-over");
},1000);
startover();
}

function startover()
{
zero=1;
bool=true;
gamepattern=[]

}
