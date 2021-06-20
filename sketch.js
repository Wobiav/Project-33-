var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var score = 0;
var ball;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)

  
 text("Score : "+score,670,30);
 text("100",25,525);
 text("200",105,525);
 text("300",185,525);
 text("400",265,525);
 text("500",345,525);
 text("500",425,525);
 text("400",505,525);
 text("300",585,525);
 text("200",665,525);
 text("100",745,525);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>760)
        {
              if (ball.body.position.x < 80) 
              {
                  score=score+100;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 160 && ball.body.position.x > 81) 
              {
                  score=score+200;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 240 && ball.body.position.x > 161) 
              {
                  score=score+300;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }
              
              else if (ball.body.position.x < 320 && ball.body.position.x > 241) 
              {
                  score=score+400;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 400 && ball.body.position.x > 321) 
              {
                  score=score+500;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 480 && ball.body.position.x > 401) 
              {
                  score=score+500;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 560 && ball.body.position.x > 481) 
              {
                  score=score+400;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 640 && ball.body.position.x > 561) 
              {
                  score=score+300;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }
                  
              else if (ball.body.position.x < 720 && ball.body.position.x > 641) 
              {
                  score=score+200;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (ball.body.position.x < 800 && ball.body.position.x > 721) 
              {
                  score=score+100;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }
              
        }
  
      }







   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    ball = new Ball(mouseX, 10, 10, 10);
  }
}