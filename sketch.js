var mouse,mouseImg1,mouseImg2;
var cat,catImg1,catImg2;
var gardenImg;
function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
    gardenImg = loadImage("images/garden.png")
   

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse = createSprite (200,630,50,80);
mouse.scale=0.13;
mouse.addAnimation("mouse",mouseImg1)



cat = createSprite (890,630,45,80);
cat.scale=0.155;
cat.addAnimation("cat",catImg1)
}
function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    mouse.addAnimation("mouseScanning",mouseImg3)
    mouse.changeAnimation("mouseScanning")
    mouse.frameDelay = 10;
    
    cat.velocityX=0;
    cat.addAnimation("catSeating",catImg3)
    cat.changeAnimation("catSeating")
    cat.frameDelay = 5;
    cat.x=290;

}
mouse.depth = cat.depth;
    mouse.depth +=1;
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseImg2)
     mouse.changeAnimation("mouseTeasing")
     mouse.frameDelay = 10;
  }
  if(keyCode === LEFT_ARROW){
     cat.velocityX=-3;
     cat.addAnimation("catMoving",catImg2)
     cat.changeAnimation("catMoving")
     cat.frameDelay = 5;

  }

}
