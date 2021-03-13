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
}