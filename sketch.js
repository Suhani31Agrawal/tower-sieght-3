const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
const Engine=Matter.Engine
const World=Matter.World

var bgImg;

var gameState = "onSling";

var score=0;

function preload(){
  getBackground();
}

function setup() {
  createCanvas(800,400);
  stroke(255)

 engine=Engine.create()
 world=engine.world

 Engine.run(engine)

  ground=new Ground(390,300,270,10)

  block1=new Box(300,275,30,40)
  block2=new Box(330,275,30,40)
  block3=new Box(360,275,30,40)
  block4=new Box(390,275,30,40)
  block5=new Box(420,275,30,40)
  block6=new Box(450,275,30,40)
  block7=new Box(480,275,30,40)
  
  block8=new Box(330,235,30,40)
  block9=new Box(360,235,30,40)
  block10=new Box(390,235,30,40)
  block11=new Box(420,235,30,40)
  block12=new Box(450,235,30,40)

  block13=new Box(360,195,30,40)
  block14=new Box(390,195,30,40)
  block15=new Box(420,195,30,40)

  block16=new Box(390,155,30,40)

  polygon=new Hexagon(100,200,20);

  slingshot=new Slingshot(polygon.body,{x:100,y:200})

}

function draw() {
  if(bgImg){
    background(bgImg);
} 
 
 polygon.display();
 ground.display();
 slingshot.display();
 stroke("black")
 strokeWeight(1);
 fill("blue")
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill("pink")
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill("aqua")
 block13.display();
 block14.display();
 block15.display();
 fill("grey")
 block16.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();

    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    block13.score();
    block14.score();
    block15.score();

    block16.score();

    fill("white")
    textSize(20)
    text("score= "+score,50,50)

}


function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
 
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

 function keyPressed(){
   if(keyCode === 32){
    this.trajectory=[];
        slingshot.attach(polygon.body);
    }
}

async function getBackground(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON=await response.json();
  var dateTime=responseJSON.datetime
  var hour=dateTime.slice(11,13)
  if(hour>=06 && hour<=18){
     bg=color("yellow")
  }
  else{
     bg=color("blue")
  }
   bgImg=bg;
}