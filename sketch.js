var car,wall;
var speed,weight;

function setup () {

     createCanvas(1600,800);
    
    car=createSprite(50,200,50,50);
    wall=createSprite(1500,200,60,height/2);
    
    
    speed=random(55,90);
    car.velocityX=speed;
    
    weight=random(400,1500);
    
   




}


function draw(){
     background("Green");
    
    
    if(wall.x-car.x<(car.width+wall.width)/2) {
        
        damage=0.5*weight*speed*speed/22500;
        car.velocityX=0;
    if(damage<100){
            car.shapeColour="Green";
       }
    if (damage > 100 && damage <180){
       car.shapeColour="Yellow";
      }
    if(damage>180){
       car.shapeColour="Red";
   }
    }
    

drawSprites();
}
