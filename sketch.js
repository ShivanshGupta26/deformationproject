var car1,car2,car3,car4;
var wall1,wall2,wall3;
var speed,weight;

function setup() { 
  
  createCanvas(1600,400);
  
  createSprite(70, 50, 20, 40);
  createSprite(70,150,20,40);
  createSprite(70,250,20,40);
  createSprite(70,350,20,40);
  
  car1=createSprite(100,50,40,20);
  car1.shapeColor=("red");
  //car1.velocityX=speed;
  
  car2=createSprite(100,150,40,20);
  car2.shapeColor=("green");
  //car2.velocityX=speed;

  car3=createSprite(100,250,40,20);
  car3.shapeColor=("blue");
  //car3.velocityX=speed;

  car4=createSprite(100,350,40,20);
  car4.shapeColor=("yellow");
  //car4.velocityX=spped;

  wall1=createSprite(800,100,1600,2);
  wall1.shapeColor=("white");
  
  wall2=createSprite(800,200,1600,2);
  wall2.shapeColor=("white");
  
  wall3=createSprite(800,300,1600,2);
  wall3.shapeColor=("white");

  speed=random(55,90);
  weight=random(400,1500);
  
  deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(0);  

  if(wall1.x-car1.x < (car.width+wall1.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,225,0);
    }
  }
  


  drawSprites();
}