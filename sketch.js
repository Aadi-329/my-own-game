var pc
var ground
var ground1
var pcImg           
var obs_img
var obstacles=[]
var powers=[]

var GameState=0
var score=2

function preload(){

  ground=loadImage("ground.jpg");
  
  pcImg=loadImage("a.png");
  
  mask_img=loadImage("mask.jpg");

  sneeze_img=loadImage("sneezing.png")

  corona_img=loadImage("corona.jpg")


}
function setup(){

  
  createCanvas(500,1000)
   ground1= createSprite(250,-500,800,1500)
 
   ground1.scale=1
  


  pc=createSprite(200,-1)
  

  pc.scale=0.1




  

}

function draw(){
  
  background("white");
// rectMode(CENTER)
 // imageMode(CENTER)

 

  
  pc.setVelocity(0,-6)

  if(frameCount%120===0){

    score=score+1
    obstacles.push(createSprite(pc.x,pc.y-500,50,50))
  }

  if(frameCount%250===0){

    powers.push(createSprite(random(50,950),pc.y-500,50,50))



  }

  for (var index = 0; index < powers.length; index++) {

    powers[index].addImage(mask_img)
    powers[index].scale=0.05
    
    

    if(  powers[index].isTouching(pc)){console.log("powers")
  

   GameState=1
  
 
  

   

  }
  var timeIt
  setInterval(timeIt, 1000);
console.log(timeIt)

  }  
  

  for (var index = 0; index < obstacles.length; index++) {
   
    var rand = Math.round(random(1,2));
 

    if(frameCount%120===0){
    switch(rand){

      case 1:

        obstacles[index].addImage(corona_img)
  
        break;
      case 2:
    
           obstacles[index].addImage(sneeze_img)

           break;
           
           default : break;
    }

  }
  
    if(obstacles[index].y>camera.y+500){
    //console.log("destroyed")  
    obstacles[index].destroy()

    }


 
   
    obstacles[index].scale=0.09




    console.log(obstacles[index].lifetime)
  

    if(GameState===0){
    if(obstacles[index].isTouching(pc)){
      
      pc.destroy();
    }

  }
    

    
  
  
  }




//ground1.depth=
 ground1.addImage(ground)
pc.addImage(pcImg)

if(keyDown(RIGHT_ARROW))
pc.x=pc.x+10

if(keyDown(LEFT_ARROW))
pc.x=pc.x-10






 //console.log(camera.position.y) 
 if(pc.y<ground1.y-25&&pc.y<ground1.y-10)//pc.y<ground.y-20 )
 
 {


  
console.log("chk")
  ground1.y=pc.y-1000
  

 }


  //camera.position.x=pc.x
  camera.position.y=pc.y

  
  
 




 

  pc.setVelocity(0,-score)





  drawSprites()


}
