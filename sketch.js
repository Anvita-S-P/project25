
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var engine,world;
var paper;
var dustbin;
function preload()
{
dustbin=loadImage("sprites/dustbingreenimage.png");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(400,690,800,10);
   dustBin1=new dustBin(650,680,190,10);
   dustBin2=new dustBin(549,640,10,85);
   dustBin3=new dustBin(752,640,10,85);
   paper=new Paper(150,50,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  drawSprites();
 ground.display();
 dustBin1.display();
 dustBin2.display();
 dustBin3.display();
 paper.display();
 image(dustbin,650,580,225,225);
}

function keyPressed(){
	if( keyCode===UP_ARROW){
      

		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});



	}
}

