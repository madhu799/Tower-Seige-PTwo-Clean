var engine, world;
var ground, sling, ball;
var stand1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
 
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  
  box1.display("purple", "black");
  box2.display("purple", "black");
  box3.display("purple", "black");
  box4.display("purple", "black");
  box5.display("purple", "black");
  box6.display("pink", "black");
  box7.display("pink", "black");
  box8.display("pink", "black");
  box9.display("pink", "black");
  box10.display("blue", "black");
  box11.display("blue", "black");
  box12.display("blue", "black");
  box13.display("skyblue", "black");
  box14.display("skyblue", "black");
  box15.display("green", "black");
  
  sling.display("magenta");
  stand1.display();
  ball.display("lavender", "magenta");
  
  fill("white");
  textSize(30);
  text("PressSpaceForAnotherChance...",300,335)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}