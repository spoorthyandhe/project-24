
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,box2,box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(700,500,100);
ground = new Ground(600,height,800,55);
box1 = new Box(500,450,40,40);
box2 = new Box(700,600,100,10);
box2 = new Box(900,600,40,40);

	Engine.run(engine);
  
}

function draw() {
  background(0);
  
  drawSprites();
 
  ground.display();
 box1.display();
 box2.display();
 box3.display();
circle.display();
}

function keyPressed() {
	
 //if (keyCode === UP_ARROW) {

 
  //}
}


