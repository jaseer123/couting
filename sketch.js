const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var count=0
var counter,appbkd,couting
function preload(){
  appbkd=loadImage("app.jpg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);




  engine=Engine.create();
  world = engine.world;
  
  //count=0
  counter=new Counter(displayWidth/2-25,displayHeight/2-30,50)
  couting=createButton("count")
couting.position(displayWidth/2-42,displayHeight/2-32)
  Engine.run(engine)
  
}

function draw(){


 background(appbkd)
 


textSize(20)
text("count="+count,displayWidth/2-100,displayHeight/2-200)
console.log(count)


couting.mousePressed(()=>{
  count=count+1
})
counter.display()


















  

  drawSprites();
}


    
