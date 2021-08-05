const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

function preload(){
  backgroundImage=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
 //boy=createSprite(400, 200, 50, 50);
 snow1=new Snow(200,100,30,30);
 snow2=new Snow(300,40,30,30);
 snow3=new Snow(120,50,30,30);
 snow4=new Snow(230,70,30,30);
 snow5=new Snow(400,90,30,30);
 snow6=new Snow(500,90,30,30);
 snow7=new Snow(600,90,30,30);
 snow8=new Snow(470,90,30,30);
 snow9=new Snow(700,90,30,30);
 snow10=new Snow(720,90,30,30);
}

function draw() {
  background(backgroundImage); 
  Engine.update(engine) 
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  drawSprites();
}