const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ball;
function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var options = {
isStatic:true
}
var ballOptions = {
restitution:1
}
object = Bodies.rectangle(200,380,400,20,options);
ball = Bodies.circle(200,100,30,ballOptions)
World.add(world,object)
World.add(world,ball)
console.log(object);
}

function draw() {
background(0);
Engine.update(engine);
rectMode(CENTER);
rect(object.position.x,object.position.y,400,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30)
}