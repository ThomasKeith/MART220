var i = 0
var frameLimit = 1000
var spot = {
  x: 70,
  x2:312 ,
  x3:324 ,
  x4:337 ,
  x5:323 ,
  x6:500 ,
  x7:130 ,
  x8:0 ,
  x9:100 ,
  x10:275,
  y: 218,
  y2:140 ,
  y3:160 ,
  y4:160,
  y5:195,
  y6:50 ,
  y7:230 ,
  y8:180 ,
  y9:0,
  y10:145
}
var col = {
  r:255,
  g:0,
  b:210,
  r2:0,
  g2:200,
  b2:255,
  r3:0,
  g3:200,
  b3:255,
  a: 0,
  a2: 0,
  a3: 255,
  r4:0,
  g4:255,
  b4:50,
  r5:0,
  g5:255,
  b5:50,
  r6:0,
  g6:255,
  b6:50,
  r7:0,
  g7:255,
  b7:50,
  r8:0,
  g8:255,
  b8:50
}
var apple
var appleX = 100
var appleY = 100
var appleSpeed = 2
var cherry
var cherryX = 100
var cherryY = 100
var cherrySpeed = 3
var orange
var orangeX = 100
var orangeY = 100
var orangeSpeedX = 4
var orangeSpeedY = 4
var myFont
var timerText = 0

function preload(){
  apple = loadImage('assets/apple.png');
  cherry = loadImage('assets/cherry.png');
  orange = loadImage('assets/orange.png');
  myFont = loadFont('assets/HachiMaruPop-Regular.ttf');

}

function setup() {
  createCanvas(640,360);
  textFont(myFont);
  function timerChange()
{
  timerText++;
  if (timerText % 5 == 0)
  {
    appleSpeed = random(10);
    cherrySpeed = random(10);
    orangeSpeedX = random(10);
    orangeSpeedY = random(10);
  }
}
  setInterval(timerChange, 1000);
}

function draw() {
// Background with Border
fill(0);
background('#FF0073');
rect(5,5,630,350);
// Lower Right-Hand Text (Name)
fill(255);
textSize(16);
text('Thomas Keith',500,350);

// Upper Left-Hand (Title)
fill(255);
textSize(16);
text('PAC-MAN & other things',10,20)

// Timer Display
text("Time:" + timerText, 100,100);

// Images
image(apple,appleX,appleY);
image(cherry,cherryX,cherryY);
image(orange,orangeX,orangeY);

// Images MOVEMENT
appleX+= appleSpeed;
if ((appleX > width-48) || (appleX < -7))
{
  appleSpeed*= -1;
}

cherryY+= cherrySpeed;
if ((cherryY > height-35) || (cherryY < 0))
{
  cherrySpeed*= -1;
}

orangeX+= orangeSpeedX;
orangeY+= orangeSpeedY;
if ((orangeX > width-55) || (orangeX < -5))
{
  orangeSpeedX*= -1;
}
if ((orangeY > height-35) || (orangeY < 0))
{
  orangeSpeedY*= -1;
}
reset();
i++;
print(appleSpeed);

if (i==frameLimit)
{
  spot.x = random(0,width);
  spot.x2 = random(0,width);
  spot.x3 = random(0,width);
  spot.x4 = random(0,width);
  spot.x5 = random(0,width);
  spot.x6 = random(0,width);
  spot.x7 = random(0,width);
  spot.x8 = random(0,width);
  spot.x9 = random(0,width);
  spot.x10 = random(0,width);
  spot.y = random(0,height);
  spot.y2 = random(0,height);
  spot.y3 = random(0,height);
  spot.y4 = random(0,height);
  spot.y5 = random(0,height);
  spot.y6 = random(0,height);
  spot.y7 = random(0,height);
  spot.y8 = random(0,height);
  spot.y9 = random(0,height);
  spot.y10 = random(0,height);
  spot.y11 = random(0,height);
  spot.y12 = random(0,height);
  spot.y13 = random(0,height);
  spot.y14 = random(0,height);
  col.r = random(255);
  col.g = random(255);
  col.b = random(255);
  col.r2 = random(255);
  col.g2 = random(255);
  col.b2 = random(255);
  col.r3 = random(255);
  col.g3 = random(255);
  col.b3 = random(255);
  col.a = random(255);
  col.a2 = random(255);
  col.a3 = random(255);
  col.r4 = random(255);
  col.g4 = random(255);
  col.b4 = random(255);
  col.r5 = random(255);
  col.g5 = random(255);
  col.b5 = random(255);
  col.r6 = random(255);
  col.g6 = random(255);
  col.b6 = random(255);
  col.r7 = random(255);
  col.g7 = random(255);
  col.b7 = random(255);
  col.r8 = random(255);
  col.g8 = random(255);
  col.b8 = random(255);
  col.r9 = random(255);
  col.g9 = random(255);
  col.b9 = random(255);
  col.r10 = random(255);
  col.g10 = random(255);
  col.b10 = random(255);
}

// **Shapes**
fill(col.r,col.g,col.b);
rect(spot.x, spot.y, 300, 20);

// Ghost body
fill(col.r2,col.g2,col.b2);
rect(spot.x2, spot.y2, 55, 55, 20, 15, 10, 5);
fill(col.a);
circle(spot.x3,spot.y3,7);
circle(spot.x4,spot.y4,7);

// legs?
fill(col.r3,col.g3,col.b3);
noStroke();
circle(spot.x5,spot.y5,18);
circle(spot.x5+26,spot.y5,18);

// TRIANGLES
fill(col.r4,col.g4,col.b4);
quad(spot.x6,10,570,spot.y6,500,220,430,50);
fill(col.r5,col.g5,col.b5);
quad(spot.x6,20,560,spot.y6,500,200,440,50);

fill(col.r6,col.g6,col.b6);
triangle(spot.x6,spot.y7,460,300,540,300);

fill(col.r7,col.g7,col.b7);
ellipse(spot.x7, spot.y8, 100, 20);


// Pac Man
push();
fill(col.r8,col.g8,col.b8);
translate(spot.x8+100,spot.x9+100);
rotate(PI / 5.0);
arc(50, 50, 80, 80, 0, PI + HALF_PI);
pop();
fill(col.a2);
circle(spot.x9,spot.x10,9);


// Dots (for pac man)
fill(col.a3);
circle(spot.x10,165,30);


// FUNCTIONS
function reset()
{
  if(i > frameLimit)
  {
    i = 1;
  }
}



}