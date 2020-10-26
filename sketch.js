
var gameState = "Forest"; 
var Player , PlayerAnim;
var Player2 , Player2Anim;
var bg,bgImg ,bg2,bgImg2;
var Enemy1 , Enemy1Anim;
var Enemy2 , Enemy2Anim;
var map, mapImg;
var sword , swordImg;
var ground , invisground;
var PlayerHeartImg , BlueHeartImg , PlayerHeart , BlueHeart;
var PlayerHealth = 30;
var BlueGhostHealth = 30;
var firehealth = 30;
var COUNT = 1;
var COUNT2 = 1;
var song;
var mark , desertmark;
var arrow , arrowimg;
var FireHeart , FireHeartImg;
var leftButton , rightButton , upButton;
var leftButton2 , rightButton2 , upButton2;
var bgfork , bgforkImg;
var uparrow , uparrowImg;
var dgarrow , dgarrowImg;
var firebombs , firebombsimg;
var firebombsgroup;
var gameover , gameoverimg;
var instructions , instructionsimg;
function preload(){
    PlayerAnim=loadAnimation("Player/P1.png","Player/P2.png","Player/P3.jpg");
    Player2Anim=loadAnimation("NinjaPlayer1.png" , "NinjaPlayer2.png" , "NinjaPlayer3.png" , "NinjaPlayer4.png","NinjaPlayer5.png","NinjaPlayer6.png","NinjaPlayer7.png","NinjaPlayer8.png","NinjaPlayer9.png");
    bgImg = loadImage("Forest.jpg");
    bgImg2 =loadImage("Background2.png");
    bgforkImg = loadImage("ForestFork.jpg");
    instructionsimg = loadImage("Instructions.png");
    Enemy1Anim = loadAnimation("EnemyNo1/Enemy1.png" , "EnemyNo1/Enemy2.png" , "EnemyNo1/Enemy3.png" , "EnemyNo1/Enemy4.png" , "EnemyNo1/Enemy5.png"
    , "Enemy1Attack/Enemy1Attack1.png", "Enemy1Attack/Enemy1Attack2.png", "Enemy1Attack/Enemy1Attack3.png", "Enemy1Attack/Enemy1Attack4.png", "Enemy1Attack/Enemy1Attack5.png"
    , "Enemy1Attack/Enemy1Attack6.png", "Enemy1Attack/Enemy1Attack7.png", "Enemy1Attack/Enemy1Attack8.png", "Enemy1Attack/Enemy1Attack9.png", "Enemy1Attack/Enemy1Attack10.png"
    , "Enemy1Attack/Enemy1Attack11.png", "Enemy1Attack/Enemy1Attack12.png", "Enemy1Attack/Enemy1Attack13.png")
    Enemy2Anim =loadAnimation("EnemyNo2/2Enemy1.png","EnemyNo2/2Enemy2.png","EnemyNo2/2Enemy3.png","EnemyNo2/2Enemy4.png","EnemyNo2/2Enemy5.png","EnemyNo2/2Enemy6.png","EnemyNo2/2Enemy7.png","EnemyNo2/2Enemy8.png","EnemyNo2/2Enemy9.png","EnemyNo2/2Enemy10.png","EnemyNo2/2Enemy11.png","EnemyNo2/2Enemy12.png",
    "EnemyNo2/2Enemy13.png","EnemyNo2/2Enemy14.png","EnemyNo2/2Enemy15.png","EnemyNo2/2Enemy16.png")
    mapImg = loadImage("map1.jpg");
    swordImg = loadImage("Sword.png");
    PlayerHeartImg = loadImage("GameHeart.png");
    BlueHeartImg = loadImage("GameHeartBlue.png");
    FireHeartImg = loadImage("HeartFire.png");
    arrowimg = loadImage("Arrow.jpg");
    uparrowImg = loadImage("UpArrow.png");
    dgarrowImg = loadImage("Diagonal Arrow.png");
    Forestsong = loadSound("Forest Background Music.mp3");
    firebombsimg=loadImage("fireball.png");
    gameoverimg = loadImage("GameOver.jpg");
}



function setup(){
createCanvas(displayWidth - 20 , displayHeight -20);
    bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    bg.addImage(bgImg);
    bg.scale = 3.5
    bg2 = createSprite(displayWidth/2  , displayHeight/2,  displayWidth-100 ,displayHeight-70 );
    bg2.addImage(bgImg2);
    bg2.scale = 2.5;
    bgfork = createSprite(displayWidth/2 , displayHeight/2, displayWidth - 100 , displayHeight - 70);
    bgfork.addImage(bgforkImg);
    bgfork.visible = false;
   uparrow = createSprite(displayWidth/2 - 400 , displayHeight - 300 , 10 , 10);
   uparrow.addImage(uparrowImg);
   uparrow.scale = 0.2;
   uparrow.visible = false;
   dgarrow = createSprite(displayWidth/2 + 200 , displayHeight - 300, 10 , 10)
  dgarrow.addImage(dgarrowImg);
  dgarrow.scale = 0.2;
  dgarrow.visible = false;
    sword = createSprite(100 , 100 ,10 ,10);
    sword.addImage(swordImg);
    sword.scale = 0.1;
        sword.visible = false;
    Player = createSprite(displayWidth/2 - 400 , displayHeight - 230 , 50 ,50)
    Player.addAnimation("PlayerImg" , PlayerAnim);
   Player2 = createSprite(displayWidth/2 - 400 , displayHeight - 200 , 50 , 50)
    Player2.addAnimation("Player2Img" , Player2Anim);
    Player2.scale = 1.5;
    Enemy1 = createSprite(displayWidth/2 + 70 , displayHeight - 300 ,50,50);
    Enemy1.scale = 2;
    Enemy1.addAnimation("Enemy1Img" , Enemy1Anim );
    Enemy1.debug = true;
    Enemy1.setCollider("Rectangle" , 0 , 0 , 100 , 100);
Enemy2 = createSprite(displayWidth/2 + 100 , displayHeight - 300 ,50 ,50);
Enemy2.scale = 3;
Enemy2.addAnimation("Enemy2Img" , Enemy2Anim);
Enemy2.setCollider("Rectangle" , 0 , 0 , 100 , 100);
Enemy2.visible = false;
firebombsgroup = new Group();
map = createSprite(displayWidth/2 - 650 , displayHeight - 760 ,200, 200);
map.addImage(mapImg)
map.scale =0.3;
gameover = createSprite(displayWidth/2 , displayHeight/2 , 10 , 10);
gameover.addImage(gameoverimg);
gameover.visible = false;
PlayerHeart = createSprite(displayWidth/2 - 400 ,100 , 10 ,10);
PlayerHeart.addImage(PlayerHeartImg);
PlayerHeart.scale = 0.3;
PlayerHeart2 = createSprite(displayWidth/2 - 300 ,100 , 10 ,10);
PlayerHeart2.addImage(PlayerHeartImg);
PlayerHeart2.scale = 0.3;
PlayerHeart3 = createSprite(displayWidth/2 - 200 ,100 , 10 ,10);
PlayerHeart3.addImage(PlayerHeartImg);
PlayerHeart3.scale = 0.3;
BlueHeart = createSprite(displayWidth/2 + 400 , 100 ,10 ,10);
BlueHeart.addImage(BlueHeartImg);
BlueHeart.scale=0.3;
BlueHeart2 = createSprite(displayWidth/2 + 300 , 100 ,10 ,10);
BlueHeart2.addImage(BlueHeartImg);
BlueHeart2.scale=0.3;
BlueHeart3 = createSprite(displayWidth/2 + 500 , 100 ,10 ,10);
BlueHeart3.addImage(BlueHeartImg);
BlueHeart3.scale=0.3;
FireHeart = createSprite(displayWidth/2 + 400 , 100 ,10, 10);
FireHeart.addImage(FireHeartImg);
FireHeart.scale=0.7;
FireHeart.visible = false;
FireHeart2 = createSprite(displayWidth/2 + 300 , 100 ,10, 10);
FireHeart2.addImage(FireHeartImg);
FireHeart2.scale=0.7;
FireHeart2.visible = false;
FireHeart3 = createSprite(displayWidth/2 + 500 , 100 ,10, 10);
FireHeart3.addImage(FireHeartImg);
FireHeart3.scale=0.7;
FireHeart3.visible = false;
mark = createSprite(200 , 178 , 10,10);
mark.shapeColor="red";
arrow = createSprite(670 , 404 , 10 ,10);
arrow.addImage(arrowimg);
arrow.visible = false;
invisground = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);
invisground.visible = false;
instructions = createSprite(displayWidth/2 - 200 , displayHeight/2 - 200 , 10,10);
instructions.addImage(instructionsimg);
instructions.scale = 0.8;
leftButton = createButton("Left");
leftButton.position(100 , displayHeight - 200);
leftButton.mousePressed(()=>{
    Player.x = Player.x -10;
    Player2.x = Player2.x - 10;

});
rightButton = createButton("Right");
rightButton.position(200 , displayHeight - 200);
rightButton.mousePressed(()=>{
Player.x = Player.x + 10; 
Player2.x = Player2.x + 10;
})
upButton = createButton("Up");
upButton.position(150 , displayHeight -250);
upButton.mousePressed(()=>{

    if(Player.y > 642){
        Player.velocityY = -10;
        
    }
    Player.velocityY = Player.velocityY + 0.5;
}
)
hitButton = createButton("Attack");
hitButton.position(150 , displayHeight - 150);
hitButton.mousePressed(()=>{
    sword.visible = true;
sword.x = Player.x + 90;
sword.y = Player.y - 30;
playerFireballs();
});
hitButton.mouseReleased(()=>{
    sword.visible = false;
    sword.x = 100
    sword.y = 0
});



 /*   leftButton2 = createButton("Left");
    leftButton2.position(100 , displayHeight - 200);
    leftButton2.mousePressed(()=>{
    Player2.x = Player2.x -10;

});
    leftButton2.hide();
    rightButton2 = createButton("Right");
    rightButton2.position(200 , displayHeight - 200);
    rightButton2.mousePressed(()=>{
    Player2.x = Player2.x + 10; 

});
    rightButton2.hide();
    upButton2 = createButton("Up");
    upButton2.position(150 , displayHeight -250);
    upButton2.mousePressed(()=>{

    if(Player2.y > 642){
        Player2.velocityY = -10;
        
    }
    Player2.velocityY = Player2.velocityY + 0.5;
}
)
upButton2.hide();*/

}
function draw(){
 

background(0);
console.log(gameState);
if(gameState === "Forest"){
   // Forestsong.play();
    Player2.visible = false;
    bg2.visible = false;
 firebombsgroup.setVisibleEach(false);
   
    Player.collide(invisground);
if(sword.isTouching(Enemy1)){
COUNT = 0;
}
if(COUNT === 0){
    BlueGhostHealth = BlueGhostHealth - 1;
    COUNT = 1;
}


if(Enemy1.isTouching(Player)){
COUNT2 = 0;
}
if(COUNT2 === 0){
    PlayerHealth = PlayerHealth - 1;
    COUNT2 = 1;
}
if(keyWentDown(RIGHT_ARROW)){
    //Player.x=Player.x+5;
    Player.velocityX = 10
}
if(keyWentUp(RIGHT_ARROW)){
    Player.velocityX = 0;
}
if(keyWentDown(LEFT_ARROW)){
   // Player.x = Player.x -5;
   Player.velocityX = -10;
}
if(keyWentUp(LEFT_ARROW)){
    Player.velocityX = 0;
}
if(keyWentDown(UP_ARROW)&& Player.y > 642){

    Player.velocityY = -10;
}
Player.velocityY = Player.velocityY + 0.5;

if(keyWentDown("k")){
    sword.visible = true;
sword.x = Player.x + 90;
sword.y = Player.y - 30;
}
if(keyWentUp("k")){
    sword.visible = false;
sword.x = 100;
sword.y = 0;
}
if(PlayerHealth === 30){
    PlayerHeart.visible = true;
    PlayerHeart2.visible = true;
    PlayerHeart3.visible = true;
}
if(PlayerHealth === 20){
    PlayerHeart3.visible = false;

}
if(PlayerHealth === 10){
    PlayerHeart2.visible = false;
}
if(PlayerHealth === 0){
    PlayerHeart.visible = false;
    gameState = "Gameover";
}
if(BlueGhostHealth === 30){
    BlueHeart.visible = true;
    BlueHeart2.visible = true;
    BlueHeart3.visible = true;
}
if(BlueGhostHealth === 20){
    BlueHeart3.visible = false;

}
if(BlueGhostHealth === 10){
    BlueHeart2.visible = false;
}

if(BlueGhostHealth === 0){
    BlueHeart.visible = false;
    Enemy1.destroy();
    gameState = "NextStage";
}
if(gameState === "Gameover"){
Player.destroy();
Enemy1.destroy();
bg.destroy();
map.destroy();
leftButton.hide();
rightButton.hide();
upButton.hide();
BlueHeart.destroy();
BlueHeart2.destroy();
BlueHeart3.destroy();
mark.destroy();

gameover.visible = true;
}
}
if(gameState === "NextStage"){
    bg.destroy();
    Player.x = 396;
    Player.y = 396;
    sword.destroy();
    instructions.visible = false;
    map.visible = false;
    Player2.visible =true;
    Player2.x = 1009
    Player2.y= 370;
  arrow.visible = true;
    mark.visible = false;
//leftButton.hide();
//rightButton.hide();
//upButton.hide();


    fill("blue");
   textSize(50);
    text("You have evolved!" , 670,250)
    fill("red");
    textSize(30);
    text("Click the Spacebar to continue" , 650 , 150);
    if(keyDown("space") && gameState === "NextStage"){
       Player2.x = 350;
       Player2.y = 550;
       FireHeart.visible = true;
    FireHeart2.visible = true;
    FireHeart3.visible = true;
        gameState = "Desert"
        
    }
}
if(gameState === "Desert"){
    //bg.changeImage(bgImg2);
   // Player.changeAnimation("Player2Img" , Player2Anim);

    arrow.visible = false;
    mark.visible = true;
    map.visible = true;
    mark.x = 189;
    mark.y = 99; 
    Player.visible = false;
    Player2.visible = true;

        
    //Player.velocityX = 0;
    //Player.velocityY = 0;
    //bg.destroy();
    bg2.visible = true;
    sword.destroy();
    Enemy2.visible = true;
    Enemy2.debug = true;
    Enemy2.setCollider("rectangle" , 20 , 0 ,50 ,50)
    
   if(keyWentDown(RIGHT_ARROW)){
        Player2.velocityX = 10;
//console.log(Player2.x);
    }
    if(keyWentDown(LEFT_ARROW)){
        Player2.velocityX = -10;
    }
    if(keyWentUp(LEFT_ARROW)){
        Player2.velocityX = 0;
    }
    
  if(keyWentDown(RIGHT_ARROW)){
      Player2.velocityX = 10;
  }
  if(keyWentUp(RIGHT_ARROW)){
    Player2.velocityX = 0;
}
    
    if(keyWentDown(UP_ARROW)){
        Player2.velocityY = -10;

    }
    if(keyWentUp(UP_ARROW)){
        Player2.velocityY = 0;
    }
    Player2.velocityY = Player2.velocityY + 0.5
    Player2.collide(invisground);
    if(keyWentDown("k")){
        playerFireballs();
    }
    if(firebombsgroup.isTouching(Enemy2)){
        firehealth = firehealth-5;
        firebombsgroup.destroyEach();
    }
    if( firehealth === 30){
        FireHeart.visible = true;
        FireHeart2.visible = true;
        FireHeart3.visible = true;
    }
    if(firehealth === 20){
        FireHeart3.visible = false;
    }
    if(firehealth === 10){
        FireHeart2.visible = false;
    }
    
    if(firehealth === 0){
        FireHeart.visible = false;
        Enemy1.destroy();
        gameState = "NextStage";
    }
    
}
//Player.collide(invisground);
console.log(firehealth);
//console.log(mouseX);
//console.log(mouseY);
//console.log(Player.y);
 
drawSprites();
if(gameState == "Choice"){
    Player.destroy();
    Enemy1.destroy();
    mark.x = 132
    mark.y  = 165
    Player2.destroy();
    Enemy2.destroy();
bgfork.visible = true;
PlayerHeart.visible = false;
PlayerHeart2.visible = false;
PlayerHeart3.visible = false;

BlueHeart.visible = false; 
BlueHeart2.visible = false;
BlueHeart3.visible = false;
uparrow.visible = true;
dgarrow.visible = true;
}
}
function playerFireballs(){
    firebombs = createSprite(Player2.x + 20 , Player2.y + 30 , 10 ,10);
    firebombs.addImage(firebombsimg);
    firebombs.scale = 0.3;
    firebombs.velocityX = 10;

    
 firebombsgroup.add(firebombs);

    
    

}