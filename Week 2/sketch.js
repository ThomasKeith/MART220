var redColor = 100
var greenColor = 100
var blueColor = 100
var x = 50
var y = 50
var i = 0
function setup() {
  createCanvas(640,360);
}

function draw() {

  i++;

  // Background with Border

  fill(0);
  background('#FF0073');
  rect(5,5,630,350); 


// Lower Right-Hand Text (Name)

fill(255);
textSize(16);
text('Thomas Keith',532,350);


// Upper Left-Hand (Title)

fill(255);
textSize(16);
text('PAC-MAN & other things',10,20)


// **Shapes**

fill('#FF0073');
rect(70, 218, 300, 20);

// Ghost

// body
fill('#04FFE3');
rect(312, 140, 55, 55, 20, 15, 10, 5);
fill(0);
circle(324,160,7);
circle(337,160,7);

// legs?

fill('#04FFE3');
noStroke();
circle(323,195,18);
circle(349,195,18);


fill('#1DA377');
quad(500,10,570,50,500,220,430,50);
fill('#96F01F');
quad(500,20,560,50,500,200,440,50);

//fill(255);
//line(500, 225, 85, 75);

fill('#07F0A3');
triangle(500,230,460,300,540,300);

fill('#FF0073');
ellipse(130, 180, 100, 20);


// Pac Man

push();
fill(255,255,0);
translate(100,100);
rotate(PI / 5.0);
arc(50, 50, 80, 80, 0, PI + HALF_PI);
pop();

fill(0);
circle(100,145,9);


// Dots (for pac man)

fill(10);
circle(160,165,5);
fill(20);
circle(175,165,7.5);
fill(30);
circle(190,165,10);
fill(40);
circle(203,165,11);
fill(50);
circle(220,165,15);
fill(70);
circle(242,165,20);
fill(255);
circle(275,165,30);


}