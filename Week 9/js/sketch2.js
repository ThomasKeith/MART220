let rocket;
let img;

function preload() {
    rocket = loadModel('assets/day 2 rocket.obj', true);
    img = loadImage('assets/watercolor.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(200);
    scale(3);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    noStroke();
    normalMaterial();
    texture(img);
    model(rocket);

    push();
    rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  //pass image as texture
  texture(img);
    cylinder(20,50);

    pop();
}