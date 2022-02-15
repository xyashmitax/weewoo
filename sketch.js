//To add an image to an obbject, you need to make a variable for the object itself and the image on top of it

var p1, p1image

function preload(){
//load images here
  
  
}

function setup(){
createCanvas(500,500);
  
  p1 = createSprite(400, 250, 15, 15);
  
}

function draw(){
  background("pink");
   
  p1.velocityX = 0
  p1.velocityY = 0
  
  if(keyWentDown("left")){
    p1.velocityX = -20
  }
  if(keyWentDown("right")){
    p1.velocityX = 20
  }
  if(keyWentDown("up")){
    p1.velocityY = -20
  }
  if(keyWentDown("down")){
    p1.velocityY = 20;
  }

//p1.display();  
  
}
