
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,100,20);

	dustbin1 = new dustbin(600,670,50,10);
	ground = new dustbin(400, 680, 800, 10);
	dustbin2 = new dustbin(570, 660, 10, 50);
	dustbin3 = new dustbin(630, 660, 10, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:10, y:-23})
	}
}
