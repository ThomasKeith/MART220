var adventureGirl;
var adventureGirlObjects = [];
var adventureGirlRunObjects = [];
var adventureGirlRunLObjects = [];
var adventureGirlMeleeObjects = [];
var obstacleObjects = [];
var obstacles = [];
var idleAnim = [];
var runAnim = [];
var runAnimL = [];
var meleeAnim = [];
var x = 0;
var y = 0;
var run = 0;
var idle = 0;
var attack = 0;
var speed = 10;
var resultIdle;
var resultRun;
var resultRunL;
var resultMelee;
var resultObstacle;

function preload(){

  // Idle assets
  resultIdle = loadStrings('assets/adventure girl/characterIdle.txt');

  // Run assets
  resultRun = loadStrings('assets/adventure girl/characterRun.txt');
  resultRunL = loadStrings('assets/adventure girl/characterRunL.txt');

  // Melee assets
  resultMelee = loadStrings('assets/adventure girl/characterMelee.txt');

  // Obstacle assets
  resultObstacle = loadStrings('assets/obstacles/obstacle.txt');

}

function setup(){
  createCanvas(1200,800);

  // IDLE ARRAY LOAD
  for(var i = 0; i < resultIdle.length; i++)
  {
    adventureGirlObjects.push(new character('assets/adventure girl/' + resultIdle[i], 0, 0));
    idleAnim[i] = adventureGirlObjects[i].getImage();
  }

  // RUN ARRAY LOAD
  for(var i = 0; i < resultRun.length; i++)
  {
    adventureGirlRunObjects.push(new character('assets/adventure girl/' + resultRun[i], 0, 0));
    runAnim[i] = adventureGirlRunObjects[i].getImage();
  }
  for(var i = 0; i < resultRunL.length; i++)
  {
    adventureGirlRunLObjects.push(new character('assets/adventure girl/' + resultRunL[i], 0, 0));
    runAnimL[i] = adventureGirlRunLObjects[i].getImage();
  }

  // MELEE ARRAY LOAD
  for(var i = 0; i < resultMelee.length; i++)
  {
    adventureGirlMeleeObjects.push(new character('assets/adventure girl/' + resultMelee[i], 0, 0));
    meleeAnim[i] = adventureGirlMeleeObjects[i].getImage();
  }

  // OBSTACLE ARRAY LOAD
  for(var i = 0; i < resultObstacle.length; i++)
  {
    obstacleObjects.push(new obstacle('assets/obstacles/' + resultObstacle[i],0,0));
    obstacles[i] = obstacleObjects[i].getImage();
  }

  setInterval(incrementIdle,50);
  setInterval(incrementRun,50);
  setInterval(incrementAttack,50);

  //Increment Idle
  function incrementIdle()
  {
    idle++;
    if (idle >= idleAnim.length)
  {
    idle = 0;
  }
  }
  //Increment Run
  function incrementRun()
  {
    run++;

    if (run >= runAnim.length)
  {
    run = 0;
  }
  }
  //Increment Melee
  function incrementAttack()
  {
    attack++;

    if (attack >= meleeAnim.length)
  {
    attack = 0;
  }
  }
}

function draw(){

  background(0);
  
  // DRAW OBSTACLES
  for (i = 0; i < 1; i++)
  {
    image(obstacles[i],500,100);
  }
  
  if (keyIsPressed)
  {
    if (key === "w")
    {
      image(runAnim[run],x,y);
      y-=speed;
    }
    if (key === "s")
    {
      image(runAnim[run],x,y);
      y+=speed;
    }
    if (key === "a")
    {
      image(runAnimL[run],x,y);
      x-=speed;
    }
    if (key === "d")
    {
      image(runAnim[run],x,y);
      x+=speed;
    }
    if ((key === "x") || (keyCode === 32))
    {
      image(meleeAnim[attack],x,y);
    }
  }
  else
  {
    image(idleAnim[idle],x,y);
  }
  

  
  
 
  

}