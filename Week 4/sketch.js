var adventureGirl;
var adventureGirlObjects = [];
var adventureGirlRunObjects = [];
var idleAnim = [];
var runAnim = [];
var x = 0;
var y = 0;
var i = 0;




function preload(){

  // Challenge FAILED
  // Idle assets

  for (var i = 0; i < 9; i++)
  {
    adventureGirl = new character(`assets/adventure girl/Idle (${i+1}).png`,0,0);
    adventureGirlObjects [i] = adventureGirl;
  }

  // Run assets
  for (var i = 0; i < 7; i++)
  {
    adventureGirl = new character(`assets/adventure girl/Run (${i+1}).png`,0,0);
    adventureGirlRunObjects [i] = adventureGirl;
  }


  //adventureGirl = new character('assets/Idle (1).png',0,0);
  //adventureGirlObjects[0] = adventureGirl;
  // Idle Array Load
  for (var i = 0; i < 9; i++)
  {
    idleAnim[i] = adventureGirlObjects[i].getImage();
  }

  // Run Array Load
  for (var i = 0; i < 7; i++)
  {
    runAnim[i] = adventureGirlRunObjects[i].getImage();
  }

}

function setup(){
  createCanvas(800,600);
  
}

function draw(){

  background(0);
  image(idleAnim[i],adventureGirlObjects[i].getX,adventureGirlObjects[i].getY);
  i++;

  if (i >= idleAnim.length)
  {
    i = 0;
  }

}