
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roof1,bob1,bob2,bob3,bob4,bob5
var chain0,chain1,chain2,chain3,chain4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  var bobDiameter = 70;
	var posX = width/2;
	var posY = height/4 + 300;
	//Create the Bodies Here.
  roof1 = new Roof(width/2, height/4, 500, 25);


  bob1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter,posY, bobDiameter);
	bob3 = new Bob(posX,posY,bobDiameter);
	bob4 = new Bob(posX +  bobDiameter, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter * 2, posY, bobDiameter);


  chain0=new Chain(bob1.body,roof1.body,-bobDiameter*2,0);
  chain1=new Chain(bob2.body,roof1.body,-bobDiameter*1,0);
  chain2=new Chain(bob3.body,roof1.body,0,0);
  chain3=new Chain(bob4.body,roof1.body,bobDiameter*1,0);
  chain4=new Chain(bob5.body,roof1.body,bobDiameter*2,0);

  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain0.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  roof1.display();
  drawSprites();
 
}


