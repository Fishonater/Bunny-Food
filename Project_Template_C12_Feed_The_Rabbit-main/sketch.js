var garden,rabbit;
var gardenImg,rabbitImg;
var x;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =  loadImage("apple.png");
  leaveImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
 

  var randomitem = Math.round(random(1,2))
  
  if (frameCount % 80 === 0) {
    if (randomitem == 1) {
    spawnApples()
    } 
    else {
    spawnLeaves()  
    }
  }
  

function spawnApples() {
  if (frameCount % 80 === 0) {
    apple = createSprite(400,30,40,10);
    apple.x = Math.round(random(20,380))
    apple.addImage(appleImg)
    apple.scale = 0.075
    apple.velocityY = 3;
    apple.lifetime = 120
  }
}
function spawnLeaves() {
    if (frameCount % 80 === 0) {
      leave = createSprite(400,30,40,10);
      leave.x = Math.round(random(20,380))
      leave.addImage(leaveImg)
      leave.scale = 0.075
      leave.velocityY = 3;
      leave.lifetime = 120
    }
  }

}