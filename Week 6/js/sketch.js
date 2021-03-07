var adventureGirl;
var resultIdle;
var resultIdleL;
var resultRun;
var resultRunL;
var snake = [];
var resultSnake;
var finishLine;
var velocity = .35;
var GameOver = false;
var faceRight = true;

function preload() {
  resultIdle = loadStrings('assets/adventuregirl/characterIdle.txt');
  resultIdleL = loadStrings('assets/adventuregirl/characterIdleL.txt');
  resultRun = loadStrings('assets/adventuregirl/characterRun.txt');
  resultRunL = loadStrings('assets/adventuregirl/characterRunL.txt');
  resultSnake = loadStrings('assets/obstacles/obstacle.txt');
}

function setup() {
  createCanvas(2400, 1350);
  textAlign(CENTER, CENTER);
  adventureGirl = createSprite(300, 250);
  adventureGirl.addAnimation('idle', resultIdle[0], resultIdle[resultIdle.length - 1]);
  adventureGirl.addAnimation('idleL', resultIdleL[0], resultIdleL[resultIdleL.length - 1]);
  adventureGirl.addAnimation('run', resultRun[0], resultRun[resultRun.length - 1]);
  adventureGirl.addAnimation('runL', resultRunL[0], resultRunL[resultRunL.length - 1]);

  for (var i = 0; i < 3; i++) {
    snake[i] = createSprite(random(450, width - 200), random(400, height - 200));
    snake[i].addImage(loadImage('assets/obstacles/' + resultSnake[i]));
  }

  finishLine = createSprite(width - 175, height - 125);
  finishLine.addImage(loadImage('assets/finishLine.png'));
}

function draw() {
  background(0);
  drawSprites();

  // WASD MOVEMENT & ANIMATION
  if (GameOver == false) {
    if (keyDown('w')) {
      if (faceRight == true) {
        adventureGirl.changeAnimation('run');
        adventureGirl.velocity.y -= velocity;
      } else {
        adventureGirl.changeAnimation('runL');
        adventureGirl.velocity.y -= velocity;
      }

      if (adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2])) {
        adventureGirl.changeAnimation('idle');
      }
    } else if (keyDown('a')) {
      faceRight = false;
      adventureGirl.changeAnimation('runL');
      adventureGirl.velocity.x -= velocity;
      if (adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2])) {
        adventureGirl.changeAnimation('idle');
      }
    } else if (keyDown('s')) {
      if (faceRight == true) {
        adventureGirl.changeAnimation('run');
        adventureGirl.velocity.y += velocity;
      } else {
        adventureGirl.changeAnimation('runL');
        adventureGirl.velocity.y += velocity;
      }
      if (adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2])) {
        adventureGirl.changeAnimation('idle');
      }
    } else if (keyDown('d')) {
      faceRight = true;
      adventureGirl.changeAnimation('run');
      adventureGirl.velocity.x += velocity;
      if (adventureGirl.collide(snake[0]) || adventureGirl.collide(snake[1]) || adventureGirl.collide(snake[2])) {
        adventureGirl.changeAnimation('idle');
      }
    } else {
      if (faceRight == true) {
        adventureGirl.changeAnimation('idle');
        adventureGirl.velocity.x = 0;
        adventureGirl.velocity.y = 0;
      } else {
        adventureGirl.changeAnimation('idleL');
        adventureGirl.velocity.x = 0;
        adventureGirl.velocity.y = 0;
      }

    }
  } else {
    if (faceRight == true) {
      adventureGirl.changeAnimation('idle');
    } else {
      adventureGirl.changeAnimation('idleL');
    }
  }

  // GAME OVER - FINISH
  if (adventureGirl.collide(finishLine)) {
    GameOver = true;
    textSize(width / 3.5);
    fill('#E0244A');
    text('FINISH', width / 2, height / 2);
  }
}