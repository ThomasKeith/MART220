var cowgirl;
var animation = [];
var cowGirlObjects = [];
var i = 0;
var x = 0;



function preload() {

    // Bring in all the assets from our folder
    // and create all our objects
    cowgirl = new imageclass('assets/Idle (1).png', 0, 0);
    cowGirlObjects[0] = cowgirl;
    cowgirl = new imageclass('assets/Idle (2).png', 0, 0);
    cowGirlObjects[1] = cowgirl;
    cowgirl = new imageclass('assets/Idle (3).png', 0, 0);
    cowGirlObjects[2] = cowgirl;
    cowgirl = new imageclass('assets/Idle (4).png', 0, 0);
    cowGirlObjects[3] = cowgirl;
    cowgirl = new imageclass('assets/Idle (5).png', 0, 0);
    cowGirlObjects[4] = cowgirl;
    cowgirl = new imageclass('assets/Idle (6).png', 0, 0);
    cowGirlObjects[5] = cowgirl;
    cowgirl = new imageclass('assets/Idle (7).png', 0, 0);
    cowGirlObjects[6] = cowgirl;
    cowgirl = new imageclass('assets/Idle (8).png', 0, 0);
    cowGirlObjects[7] = cowgirl;
    cowgirl = new imageclass('assets/Idle (9).png', 0, 0);
    cowGirlObjects[8] = cowgirl;
    cowgirl = new imageclass('assets/Idle (10).png', 0, 0);
    cowGirlObjects[9] = cowgirl;

    for (var i = 0; i < cowGirlObjects.length; i++) {
        animation[i] = cowGirlObjects[i].getImage();
    }

}

// create the canvas
function setup() {

    createCanvas(641, 542);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    // draw each frame based on the index in the array
    image(animation[i], cowGirlObjects[i].getX(), cowGirlObjects[i].getY());

    // increment the index
    i += 1;

    // if we reach the end of the array, start over
    if (i >= animation.length) {
        i = 0;
    }
}