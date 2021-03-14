let rocket;
let shapes = [];
let translateX = [];
let translateY = [];
let initialX = [];
let initalY = [];
let resultTextures;
let shapeTexture = [];
let myFont;

function preload() {

    rocket = loadModel('assets/day 2 rocket.obj', true);
    resultTextures = loadStrings('assets/textures.txt');
    myFont = loadFont('assets/Ranchers-Regular.ttf');

}

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);

    for (let i = 0; i < 8; i++) {
        shapeTexture[i] = loadImage('assets/' + resultTextures[i]);
    }

    shapes.push(new shapeClass('box', 100, 100, 100, 0.02, 0.02, 0.02));
    shapes.push(new shapeClass('cylinder', 30, 300, 100, 0.002, 0.002, 0.002));
    shapes.push(new shapeClass('torus', 100, 15, 100, 0.0114, 0.0114, 0.0114));
    shapes.push(new shapeClass('ellipsoid', 20, 150, 50, 0.0001, 0.001, 0.0001));
    shapes.push(new shapeClass('cone', 50, 100, 100, 0.005846, 0.005846, 0.005846));

    for (let i = 0; i < shapes.length; i++) {
        translateX[i] = 0;
        translateY[i] = 0;
    }

    for (let i = 0; i < shapes.length; i++) {
        initialX[i] = random(-500, 500);
        initalY[i] = random(-400, 400);
    }

}

function draw() {

    background(50);
    textSize(32);
    fill(255);
    textFont(myFont);
    text('Thomas Keith', width / 4.2, height / 4.2);
    textSize(64);
    text('To the Moon!', -width / 3, -height / 3);
    scale(1);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    noStroke();
    normalMaterial();
    texture(shapeTexture[0]);
    model(rocket);

    for (let i = 0; i < shapes.length; i++) {
        push();
        noStroke();
        translate(initialX[i] + translateX[i], initalY[i] + translateY[i]);
        texture(shapeTexture[i + 1]);
        shapes[i].draw(frameCount);
        pop();
    }
}

function mouseClicked() {
    for (let i = 0; i < shapes.length; i++) {
        translateX[i] = random(-400, 400);
        translateY[i] = random(-200, 200);
    }
}