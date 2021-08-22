const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Create multiple bobs, mulitple ropes varibale here
bob1 = new bob(350,500,50);
bob2= new bob(400,400,50);
bob3 = new bob(450,300,50);
bob4 = new bob(500,200,50);
bob5 = new bob(550,100,50);

      rope1 = new rope(bob1,roof,-80,0);
	  World.add (world,rope1);
	  rope2 = new rope(bob2,roof,-100,0);
	  World.add (world,rope2);
	  rope3 = new rope(bob3,roof,0,0);
	  World.add (world,rope3);
	  rope4 = new rope(bob4,roof,+80,0);
	  World.add (world,rope4);
	  rope5 = new rope(bob5,roof,-80,0);
      World.add (world,rope5);

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
      rope1.display();
	  rope2.display();
	  rope3.display();
	  rope4.display();
	  rope5.display();
  //create ellipse shape for multiple bobs here
           bob1.show();
		   bob2.show();
		   bob3.show();
		   bob4.show();
		   bob5.show();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
   function keyPressed() {
	   Matter.Body.applyForce(bob1.body,bob1.position,{x:-100,y:0});
   }