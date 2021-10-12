var bg,sleep;
var astronaut
var brush
function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat2.png");
  drink = loadAnimation("drink2.png");
  move =loadAnimation("move1.png");
}

function setup() {
  createCanvas(600,500);
 astronaut= createSprite(300, 230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1;
 
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill("white");
  text("uparrow=brushing",20,55);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

  }
  text("down=brushing",22,60);
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym");
    astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

  }
  text("down=brushing",22,60);
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat");
    astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

  }
}