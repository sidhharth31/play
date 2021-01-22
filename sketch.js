var mr,fr;


function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 100, 50, 80);
  fr.shapeColor = "green"
  fr.debug = true;
  mr = createSprite(400,800,80,30)
  mr.shapeColor = "green"
  mr.debug = true;
  fr.velocityY = 5;
  mr.velocityY = -5
}

function draw() {
  background(255,255,255);
 
  play(mr,fr);

  drawSprites();
}

function play(object1,object2){

  if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object1.width/2 + object1.width/2){
  
    object1.velocityX = object1.velocityX*(-1)
    object2.velocityX = object2.velocityX*(-1)
  }
  
  if(object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2){
  
    object1.velocityY = object1.velocityY*(-1)
    object2.velocityY = object2.velocityY*(-1)
  }
  

}
