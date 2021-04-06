
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  
	Roof = new roof(400,100,800,50)
	Ball1 = new ball(200,700,50)
	Ball2 = new ball(300,700,50)
	Ball3 = new ball(400,700,50)
	Ball4 = new ball(500,700,50)
	Ball5 = new ball(600,700,50)
	chain1 = new chain(Roof.roof,Ball1.ball,-200,0)
	chain2 = new chain(Roof.roof,Ball2.ball,-100,0)
	chain3 = new chain(Roof.roof,Ball3.ball,0,0)
	chain4 = new chain(Roof.roof,Ball4.ball,100,0)
	chain5 = new chain(Roof.roof,Ball5.ball,200,0)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  Roof.display();
  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();
  chain1.display();
 chain2.display();
   chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
	if(keyCode === 37){
		Matter.Body.applyForce(Ball1.ball, Ball2.ball.position, {x:-50, y:0})
	}
}


