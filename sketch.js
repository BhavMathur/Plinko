const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;

var engine, world;


var particles=[];
var plinko=[];
var divisons=[];
var ground;
var divisonHeight=300;

function setup() {
  createCanvas(480,800);

  engine= Engine.create();
  world= engine.world;

  ground= new Ground(240,780,480,20)
  for(var k = 0;k<=width;k=k+80){
    divisons.push(new Divisons(k,height-divisonHeight/2,10,divisonHeight));
  }

  for (var j=40; j <=width;j=j+50)
{
  plinko.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
}
for(var d = 20; d <=width-20;  d=d+50){
  plinko.push(new Plinko(d,275));
}

for (var b = 25; b <=width-30; b=b+50){
  plinko.push(new Plinko (b,375));
}


  
}

function draw() {
  background("slategrey"); 
  Engine.update(engine);
 for(var i =0; i<divisons.length;i++){
   divisons[i].display();
 }

 for (var j=0;j<plinko.length;j++){
   plinko[j].display();
 }

 for (var d =0 ;d <plinko.length; d++){
   plinko[d].display();
 }

 for (var b =0; b<plinko.length; b++){
   plinko[b].display();
 }

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),10,10));
 }

 for(var g =0; g<particles.length; g++){
   particles[g].display();
 }
  
  ground.display();
  
  
}