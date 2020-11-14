const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box1, box2;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options =
  {
    isStatic : true
  }
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  box1 = new Box(200, 200, 50, 50);
  box2 = new Box(225, 100, 50, 50);

}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20);

  box1.display();
  box2.display();
}