var starImg, bgImg, fdImg;
var star, starBody, fada;
//criar variável para sprite de fada e imgFada


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  starImg = loadImage("images/star.png");
  bgImg = loadImage("images/starNight.png");
  fdImg = loadAnimation("./images/fairyImage1.png","./images/fairyImage2.png");
}

function setup() {
  createCanvas(800, 750);

  //criar sprite de fada e adicionar animação para fada
  fada = createSprite(70, 350);
  fada.addAnimation(fdImg);
  fada.scale = 0.2;

  star = createSprite(650, 30);
  star.addImage(starImg);
  star.scale = 0.2;

  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650, 30, 5, {
    restitution: 0.5,
    isStatic: true
  });
  World.add(world, starBody);

  Engine.run(engine);

}

function draw() {
  background(bgImg);

  rectMode(CENTER);
  rect(starBody.position.x,starBody.position.y,650, 30);

	if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
	}
  
  keyPressed();

  drawSprites();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    fada.x = fada.x-15
  }

  if(keyCode === RIGHT_ARROW){
    fada.x = fada.x+15
  }
}