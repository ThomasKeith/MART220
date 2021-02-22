var adventureGirl;
var resultIdle;
var resultIdleL;
var resultRun;
var snake = [];
var resultSnake;

function preload(){
  resultIdle = loadStrings('assets/adventuregirl/characterIdle.txt');
  resultIdleL = loadStrings('assets/adventuregirl/characterIdleL.txt');
  resultRun = loadStrings('assets/adventuregirl/characterRun.txt');
  resultSnake = loadStrings('assets/obstacles/obstacle.txt');
}

function setup(){
  createCanvas(2400,1350);
  adventureGirl = createSprite(300,250);
  adventureGirl.addAnimation('idle',resultIdle[0],resultIdle[resultIdle.length-1]);
  adventureGirl.addAnimation('run',resultRun[0],resultRun[resultRun.length-1]);

for(var i = 0; i < 3; i++){
  snake[i] = createSprite(random(450,width),random(400,height));
  snake[i].addImage(loadImage('assets/obstacles/' + resultSnake[i]));
}
  
  
}

function draw(){
  background(0);

  // WASD MOVEMENT & ANIMATION
  if(keyDown('w')){
    adventureGirl.changeAnimation('run');
    adventureGirl.velocity.y -= .2;
    if(adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2]))
      {
        adventureGirl.changeAnimation('idle');
      }
  }else if(keyDown('a')){
    adventureGirl.changeAnimation('run');
    adventureGirl.velocity.x -= .2;
    if(adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2]))
      {
        adventureGirl.changeAnimation('idle');
      }
  }else if(keyDown('s')){
    adventureGirl.changeAnimation('run');
    adventureGirl.velocity.y += .2;
    if(adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2]))
      {
        adventureGirl.changeAnimation('idle');
      }
  }else if(keyDown('d')){
    adventureGirl.changeAnimation('run');
    adventureGirl.velocity.x += .2;
    if(adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2]))
      {
        adventureGirl.changeAnimation('idle');
      }
  }else{
    adventureGirl.changeAnimation('idle');
    adventureGirl.velocity.x = 0;
    adventureGirl.velocity.y = 0;
  }
  
  drawSprites();
}


