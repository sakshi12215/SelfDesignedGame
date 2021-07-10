var bg,bgIMG;
var player,player_running,player_jumping1,player_jumping2;
var invisibleGround;
var ringIMG,ringGroup;
var plantIMG,plantGroup;
var score;


function preload(){
  bgIMG=loadImage("images/wallpaper.png")
  player_running=loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png"
  ,"images/running5.png","images/running6.png","images/running7.png","images/running8.png")

  player_jumping1=loadAnimation("images/jump1.png")
  player_jumping2=loadAnimation("images/jump2.png")

  ringIMG=loadImage("images/ring.png")

  plantIMG=loadImage("images/plant.png")
  }
function setup() {
  createCanvas(1000,600);
  bg=createSprite(900, 200, 50, 50);
  bg.addImage(bgIMG);
  bg.velocityX=-3;
  bg.scale=2;
  
 
  player=createSprite(80,400,20,20);
  //player.debug=true;
  player.addAnimation("player",player_running);
  player.addAnimation("jumping1",player_jumping1);
  player.addAnimation("jumping2",player_jumping2);


  player.scale=0.8;

  invisibleGround=createSprite(400,500,900,20);
  invisibleGround.visible=false;

  ringGroup=new Group();
  plantGroup=new Group();

  score=0;
}


function draw() {
  background("black");  
  if(bg.x<=0){
    bg.x=400;
  }

 textSize(35);
 text("Score : "+score ,300,300);
 
 //jump when the space key is pressed
 if(keyDown("space")&& player.y >= 100) {
  player.velocityY = -12;
  
  
}

//add gravity
 player.velocityY = player.velocityY + 0.8

 if(player.collide(invisibleGround)){
   player.changeAnimation("player",player_running)
 }

 if(player.isTouching(ringGroup)){
   ringGroup.destroyEach()
 }

 spawnRings();
 spawnPlant();
 
  drawSprites();
}

function spawnRings(){
  if(frameCount%260==0){
    var ring=createSprite(1100,200,40,40);
    ring.Y=Math.round(random(30,500));
    ring.addImage(ringIMG);
    ring.scale=0.2;
    ring.velocityX=-3;
    ringGroup.add(ring);
  }   
}

function spawnPlant(){
  if(frameCount%200==0){
    var plant=createSprite(1100,400,40,40);
   
    plant.addImage(plantIMG);
    plant.scale=0.33;
    plant.velocityX=-3.5;
    plantGroup.add(plant);
  }   
}
