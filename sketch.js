const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
function preload(){
    bg=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    //canvas.addImage(bg)
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,390,1200,10)

    box1=new Box(600,300,70,70)
    box2=new Box(800,300,70,70)
    pig1=new Pig(700,300)
    log1=new Log(700,280,280,PI/2)
    box3=new Box(600,200,70,70)
    box4=new Box(800,200,70,70)
    pig2=new Pig(700,200)
    log2=new Log(700,180,300,PI/2)
    box5=new Box(700,100,70,70)
    log3=new Log(660,100,130,PI/7)
    log4=new Log(740,100,140,-PI/7)
    bird=new Bird(100,100)

}

function draw(){
    background(0);
    image(bg,600,200,1200,400)
    Engine.update(engine);
    
    box1.display()
    box2.display()
    ground.display()
    pig1.display()
    log1.display()
    box3.display()
    box4.display()
    box5.display()
    pig2.display()
    log2.display()
    log3.display()
    log4.display()
    bird.display()
    

    
}