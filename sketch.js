var ground;
var monk , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
 var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
 
}



function setup() {
  createCanvas(600,600);

  monk=createSprite(80,300,40,40);
  monk.addAnimation("monkey",monkey_running);
  monk.scale=0.1;
  
  ground=createSprite(300,340,600,10);
  ground.velocityX=-4;
}


function draw() {
background(255);
  
  
  if(ground.x<350){
     ground.x=ground.width/2;
     
     }
  
  if(keyDown("space") && monk.y===306.9){
     monk.velocityY=-12;
     }
  monk.velocityY=monk.velocityY+0.6;
 // monk.debug=true;
  monk.setCollider("rectangle",1,1,monk.width,560);
  monk.collide(ground);
 
 // console.log(monk.y);
   ob();
  
  score=Math.ceil(frameCount/frameRate())
  textSize(20);
  text("score: "+score,500,40);
  
  food();
  
 
  
  drawSprites();
}


function food(){
  if(frameCount%80===0){
     banana=createSprite(600,300,30,30);
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.velocityX=-4;
     banana.y=Math.round(random(120,300));
     FoodGroup.add(banana);
     }
}
  
  function ob(){
      if(frameCount%300===0){
     obstacle=createSprite(600,300,30,30);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.velocityX=-4;
     obstacle.y=Math.round(random(120,300));
     obstacleGroup.add(obstacle);
      }
  }
  





