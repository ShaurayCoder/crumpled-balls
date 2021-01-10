
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
    var world,engine
    
    function setup() {
      createCanvas(800, 700);
    
    
      engine = Engine.create();
      world = engine.world;
   
      ground = createSprite(600,height,1200,20);
      ground.shapeColor= "yellow "
   paper = new Paper (100,600,10);
   leftSide =new Dustbin(550,620,20,100);
   bottom = new Dustbin(610,660,100,20);
   rightSide = new Dustbin(670,620,20,100);

      Engine.run(engine);
    }
    
    
    function draw() {
      rectMode(CENTER);
      background("black");
      
      background(0);
      Engine.update(engine)

       paper.display();
      leftSide.display();
      bottom.display();
      rightSide.display();
      ground.display();
      drawSprites();
     
    }
    function keyPressed() {
      if(keyCode === UP_ARROW) { 
         Matter.Body.applyForce(paper.body,paper.body.position, {x:15,  y: -15})
       }
    }
  
