const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var canvas= createCanvas(1200,400);
	ground1=new Ground(600,390,1200,10);
	paper1=new Paper(100,100,70);
	line1=new DusttbinClass(1000,310,12,10);

	line2=Bodies.rectangle(1100	,315,10,250,{isStatic:true});
	World.add(world,line2);

	
	line3=Bodies.rectangle(897,315,10,250,{isStatic:true});
	World.add(world,line3);

	launcher=new Launcher(paper1.body,{x:100,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');

  ground1.display();
  paper1.display();
  line1.display();
  launcher.display();
  fill('grey');
  rect(line2.position.x,line2.position.y,10,130)
  rect(line3.position.x,line3.position.y,10,130)
 


  drawSprites();
 

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45})
	}

}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}