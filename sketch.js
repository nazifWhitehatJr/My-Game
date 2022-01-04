var goblinGroup;
var Hero;
function preload(){
   
  }

//Function to set initial environment
function setup() {
  createCanvas(windowWidth,windowHeight);
  goblinGroup = new Group();
  
  Hero = createSprite(50,height/2,70,70);
  Hero.shapeColor = "red"

  }

  

// function to display UI
function draw() {
  background(46,139,87);

  createGoblin();

  drawSprites();

  if(keyDown("up")){
    Hero.y -= 20;
  }
 
  
  }

  function createGoblin(){
  
  if(frameCount % 130 === 0){
   var goblin = createSprite(width,50,50,50);
   
   goblin.y = random(350, height-250);
   goblin.velocityX = -15;
   goblin.lifetime = width/15;
   goblinGroup.add(goblin);
   
  }

  }

