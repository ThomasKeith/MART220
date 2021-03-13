let counter = 0;
let cubeX = 0;
let cubeY = 0;
let cubeSize = 100;
let speed = 5;
let cubeTexture;
let torusTexture;
let torusTexture2;
let sphereTexture;

function preload() {
    cubeTexture = loadImage('assets/watercolor.jpg');
    torusTexture = loadImage('assets/digital-2667670_960_720.jpg');
    sphereTexture = loadImage('assets/Earth_Diffuse_6K.jpg');
    torusTexture2 = loadImage('assets/digital-static-noise-texture-30fps_rhfgpjkk__F0000.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(50);
    noStroke();

    // MIDDLE BOX (CUBE)
    push();
    translate(cubeX, cubeY, 0);
    rotateX(counter * .015);
    rotateY(counter * .011);
    rotateZ(counter * .02);
    texture(cubeTexture);
    box(cubeSize);
    pop();

    // TORUS
    push();
    rotateX(counter * .0019);
    rotateY(counter * .0117);
    texture(torusTexture);
    torus(200, 15);
    pop();

    // SMALL TORUS
    push();
    rotateX(counter * .01564);
    rotateY(counter * .0134185);
    texture(torusTexture2);
    torus(150, 10);
    pop();

    // LEFT CYLINDER
    push();
    translate(-width / 2.8, 0, 0);
    fill(255, 0, 0);
    rotateY(counter * .005);
    texture(sphereTexture);
    sphere(50);
    pop();

    // RIGHT CYLINDER
    push();
    translate(width / 2.8, 0, 0);
    fill(255, 0, 0);
    rotateY(-counter * .005);
    texture(sphereTexture);
    sphere(50);
    pop();

    counter++;

    // MOVEMENT (CUBE)
    if ((keyDown('w')) && (cubeY > -height / 2 + cubeSize / 2)) {
        cubeY -= speed;
    }
    if ((keyDown('a')) && (cubeX > -width / 2 + cubeSize / 2)) {
        cubeX -= speed;
    }
    if ((keyDown('s')) && (cubeY < height / 2 - cubeSize / 2)) {
        cubeY += speed;
    }
    if ((keyDown('d')) && (cubeX < width / 2 - cubeSize / 2)) {
        cubeX += speed;
    }
    if ((keyDown('LEFT_ARROW')) && (cubeSize > 5)) {
        cubeSize -= speed;
    }
    if ((keyDown('RIGHT_ARROW')) && (cubeSize < height / 1.5)) {
        cubeSize += speed;
    }
}