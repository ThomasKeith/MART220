var adventureGirl;
var adventureGirlObjects = [];
var adventureGirlRunObjects = [];
var adventureGirlMeleeObjects = [];
var idleAnim = [];
var runAnim = [];
var meleeAnim = [];
var x = 0;
var y = 0;
var run = 0;
var idle = 0;
var attack = 0;
var speed = 10;

function preload(){

  // Challenge Accepted

  // Idle assets
  for (var i = 0; i < 9; i++)
  {
    adventureGirl = new character(`assets/adventure girl/Idle (${i+1}).png`,x,y);
    adventureGirlObjects [i] = adventureGirl;
  }

  // Run assets
  for (var i = 0; i < 7; i++)
  {
    adventureGirl = new character(`assets/adventure girl/Run (${i+1}).png`,x,y);
    adventureGirlRunObjects [i] = adventureGirl;
  }

  //Melee assets
  for (var i = 0; i < 6; i++)
  {
    adventureGirl = new character(`assets/adventure girl/Melee (${i+1}).png`,x,y);
    adventureGirlMeleeObjects [i] = adventureGirl;
  }

  // Idle Array Load
  for (var i = 0; i < adventureGirlObjects.length; i++)
  {
    idleAnim[i] = adventureGirlObjects[i].getImage();
  }

  // Run Array Load
  for (var i = 0; i < adventureGirlRunObjects.length; i++)
  {
    runAnim[i] = adventureGirlRunObjects[i].getImage();
  }

  //Melee Array Load
  for (var i = 0; i < adventureGirlMeleeObjects.length; i++)
  {
    meleeAnim[i] = adventureGirlMeleeObjects[i].getImage();
  }

}

function setup(){
  createCanvas(1200,800);

  //Increment Idle
  function incrementIdle()
  {
    idle++;

    if (idle >= idleAnim.length)
  {
    idle = 0;
  }
  }
  setInterval(incrementIdle,50);

  //Increment Run
  function incrementRun()
  {
    run++;

    if (run >= runAnim.length)
  {
    run = 0;
  }
  }
  setInterval(incrementRun,50);

  //Increment Melee
  function incrementAttack()
  {
    attack++;

    if (attack >= meleeAnim.length)
  {
    attack = 0;
  }
  }
  setInterval(incrementAttack,50);
}

function draw(){

  background(0);
  
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
      image(runAnim[run],x,y);
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