var adventureGirl;
var resultIdle;
var resultIdleL;
var resultRun;
var resultRunL;
var resultAttack;
var resultAttackL;
var snake = [];
var resultSnake;
var finishLine;
var velocity = .35;
var GameOver = false;
var faceRight = true;
const particles = [];
var snakeHealth = [];

function preload(){
  resultIdle = loadStrings('assets/adventuregirl/characterIdle.txt');
  resultIdleL = loadStrings('assets/adventuregirl/characterIdleL.txt');
  resultRun = loadStrings('assets/adventuregirl/characterRun.txt');
  resultRunL = loadStrings('assets/adventuregirl/characterRunL.txt');
  resultSnake = loadStrings('assets/obstacles/obstacle.txt');
  resultAttack = loadStrings('assets/adventuregirl/characterMelee.txt');
  resultAttackL = loadStrings('assets/adventuregirl/characterMeleeL.txt');
}

function setup(){
  createCanvas(2400,1350);
  textAlign(CENTER, CENTER);
  adventureGirl = createSprite(300,250);
  adventureGirl.addAnimation('idle',resultIdle[0],resultIdle[resultIdle.length-1]);
  adventureGirl.addAnimation('idleL',resultIdleL[0],resultIdleL[resultIdleL.length-1]);
  adventureGirl.addAnimation('run',resultRun[0],resultRun[resultRun.length-1]);
  adventureGirl.addAnimation('runL',resultRunL[0],resultRunL[resultRunL.length-1]);
  adventureGirl.addAnimation('attack',resultAttack[0],resultAttack[resultAttack.length-1]);
  adventureGirl.addAnimation('attackL',resultAttackL[0],resultAttackL[resultAttackL.length-1]);
  for(let i = 0; i < 3; i++)
  {
    snakeHealth[i] = 100;
  }

for(var i = 0; i < 3; i++){
  snake[i] = createSprite(random(450,width-200),random(400,height-200));
  snake[i].addImage(loadImage('assets/obstacles/' + resultSnake[i]));
}

//finishLine = createSprite(width-175,height-125);
//finishLine.addImage(loadImage('assets/finishLine.png'));
}

function draw(){
  background(0);
  drawSprites();

  // WASD MOVEMENT & ANIMATION
  if(GameOver == false){
    if(keyDown('w')){
      if(faceRight == true){
        adventureGirl.changeAnimation('run');
        adventureGirl.velocity.y -= velocity;
      }else{
        adventureGirl.changeAnimation('runL');
        adventureGirl.velocity.y -= velocity;
      }
      checkNulls();
    }else if(keyDown('a')){
      faceRight = false;
      adventureGirl.changeAnimation('runL');
      adventureGirl.velocity.x -= velocity;
      checkNulls();
    }else if(keyDown('s')){
      if(faceRight == true){
        adventureGirl.changeAnimation('run');
        adventureGirl.velocity.y += velocity;
      }else{
        adventureGirl.changeAnimation('runL');
        adventureGirl.velocity.y += velocity;
      }
      checkNulls(); 
    }else if(keyDown('d')){
      faceRight = true;
      adventureGirl.changeAnimation('run');
      adventureGirl.velocity.x += velocity;
      checkNulls();
    }else if (keyDown('x')){
      if(faceRight == true){
        adventureGirl.changeAnimation('attack');
        removeSnake();
      }else{
        adventureGirl.changeAnimation('attackL');
        removeSnake();
      }
    }else{
      if(faceRight == true){
        adventureGirl.changeAnimation('idle');
        adventureGirl.velocity.x = 0;
        adventureGirl.velocity.y = 0;
      }else{
        adventureGirl.changeAnimation('idleL');
        adventureGirl.velocity.x = 0;
        adventureGirl.velocity.y = 0;
      }
    }
  }else{
    if(faceRight == true){
      adventureGirl.changeAnimation('idle');
    }else{
      adventureGirl.changeAnimation('idleL');
    }
  }

  // GAME OVER - FINISH
  if((snakeHealth[0] == 0) & (snakeHealth[1] == 0) & (snakeHealth[2] == 0))
  {
    GameOver = true;
    textSize(width/4);
    fill('#E0244A');
    text('You Win!',width/2, height/2);
  }

  function removeSnake()
  {
    for(let i = 0; i < 3; i++)
      {
        if(snake[i] != null)
        {
          if(dist(adventureGirl.position.x,adventureGirl.position.y,snake[i].position.x,snake[i].position.y) < 400)
          {
            createParticles(snake[i].position.x,snake[i].position.y);
            snakeHealth[i]--;
            print(snakeHealth[i]);
            if(snakeHealth[i] <= 0)
            {
              snake[i].remove();
              snake[i] = null;
            }
          }
        }
      }
  }

  function checkNulls()
  {
    for(let i = 0; i < 3; i++)
    {
      if(snake[i] != null)
      {
        if(adventureGirl.collide(snake[i]))
        {
          adventureGirl.changeAnimation('idle');
        }
      }
    }
  }

  function createParticles(x,y)
  {
    // PUSH PARTICLES TO ARRAY
    for (let i = 0; i < 2; i++) 
    {
      let p = new Particle(x,y);
      particles.push(p);
    }

    // DRAW PARTICLES
    for (let i = particles.length - 1; i >= 0; i--) 
    {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) 
      {
        particles.splice(i, 1);
      }
    }
  }
}
