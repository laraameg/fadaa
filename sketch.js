var starImg, bgImg, fdImg;
var star, starBody, fada;
//criar variável para sprite de fada e imgFada


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  starImg = loadImage("star.png");
  bgImg = loadImage("starNight.png");
  fdImg = loadAnimation("fairyImage1.png","fairyImage2.png");
}

function setup() {
  createCanvas(800, 750);

  //criar sprite de fada e adicionar animação para fada
  fada = createSprite(70, 350);
  fada.addAnimation("fadaaaaaaaa",fdImg);
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

  star.x = starBody.position.x;
  star.y = starBody.position.y;

	if(star.y > 330){
  	Matter.Body.setStatic(starBody,true);
	}

  drawSprites();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    fada.x = fada.x-30
  }

  if(keyCode === RIGHT_ARROW){
    fada.x = fada.x+30
  }

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }
}
