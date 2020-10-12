var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
monkey = createSprite(100,350);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
ground = createSprite(300,400,1250,45);  
  ground.velocityX=-4;
  FoodGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background("white");
drawSprites();
if (ground.x<0){
  ground.x=ground.width/2;
}
  if (keyDown("space")&&monkey.y>=345){
    monkey.velocityY=-22;
}
 monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  bananas();
  obstacles();
  stroke("black");
  fill("black");
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,50,100);
}

function bananas () {
  if (World.frameCount%80===0){
    var banana = createSprite(600,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.1;
    FoodGroup.add(banana);
    banana.lifetime=120;
  }
}
function obstacles () {
  if (World.frameCount%300===0){
    var rock = createSprite(600,360);
    rock.addImage(obstacleImage);
    rock.velocityX=-5;
    rock.scale=0.1;
    obstaclesGroup.add(rock);
    rock.lifetime=120;
  }
}





