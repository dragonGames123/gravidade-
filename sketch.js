
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var groundOptions ={
	isStatic: true
}
var block1_options ={
	restitution:0.5, 
	friction:0.02, 
	frictionAir:0
}
var block2_options ={
	restitution:0.7, 
	friction:0.01, 
	frictionAir:0.1
}
var block3_options ={
	restitution:0.01, 
	friction:1, 
	frictionAir:0.3
}
ground = Bodies.rectangle(600,580,1200,2,groundOptions);
World.add(world,ground);

block1 = Bodies.circle(200,10,10,block1_options);
World.add(world,block1);

block2 = Bodies.rectangle(110,50,10,10,block2_options);
World.add(world,block2);

block3 = Bodies.rectangle(350,50,10,10,block3_options);
World.add(world,block3);
fill("lightgreen");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  rect(ground.position.x,ground.position.y,1200);
  fill("red");
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,100,50);

  drawSprites();
 
}



