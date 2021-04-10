const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var HR

function preload() {
    
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    
    if(backgroundImg){
        background(backgroundImg);
         
        textSize(30)
        fill("Blue")
        text("TIME IN 24 HOURS SYSTEM:  "+ HR +" HRS" , 20 , 40)
    Engine.update(engine);

     
    }

}

async function getBackgroundImg(){
       
    
   
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseType = await  response.json()
          
        var DT = responseType.datetime
        HR = DT.slice(11,13)
        
        if(HR >= 4 && HR <= 6){
            bg = "sunrise1.png"
        }
        else if(HR >= 6&& HR <= 8){
            bg = "sunrise2.png"
        }
        else if(HR >= 8 && HR <= 10){
           bg = "sunrise3.png"
       }
       else if(HR >= 10 && HR <= 12 ){
           bg = "sunrise4.png"
       }
       else if(HR >= 12&& HR <= 14){
           bg = "sunrise5.png"
       }
       else if(HR >= 14 && HR <= 16){
           bg = "sunrise6.png"
       }
       else if(HR >= 16 && HR <= 18){
           bg = "sunset7.png"
       }
       else if(HR >= 18 && HR <= 20){
           bg = "sunset8.png"
       }
       else if(HR >= 20 && HR <= 22){
           bg = "sunset9.png"
       }
        else if(HR >= 23 && HR <= 0){
           bg = "sunset10.png"
       }
       else if(HR >= 0 && HR <= 3){
           bg = "sunset11.png"
       }
       else{
           bg = "sunset12.png"
       }
  
       backgroundImg = loadImage(bg)
    }        
        

   

    


    

