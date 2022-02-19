
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var rball1

function preload()
{
	
}

function setup() {
	createCanvas(500,500);


	engine = Engine.create();
	world = engine.world;

	var opt = {
		isStatic:true
	}
	rectMode(CENTER);

	ground = Bodies.rectangle(250,500,500,400, opt)
   
	rball1 = new RedBall(100,100,50)
    

    World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  fill("black")
  rect(ground.position.x,ground.position.y,500,400)
  Engine.update(engine); 

  rball1.display()

  drawSprites();
 
}



