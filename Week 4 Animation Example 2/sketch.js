var cowgirl;
var animation = [];
var i = 0;
var x = 0;
var j = 1;

// Bring in all the assets from our folder
function preload() {

    cowgirl = loadImage(`assets/Idle (${j}).png`);
    animation[j-1] = cowgirl;
    cowgirl = loadImage(`assets/Idle (${j+1}).png`);
    animation[1] = cowgirl;
    cowgirl = loadImage(`assets/Idle (${j+2}).png`);
    animation[2] = cowgirl;

    cowgirl = loadImage(`assets/Idle (${j+3}).png`);
    animation[3] = cowgirl;

    cowgirl = loadImage(`assets/Idle (${j+4}).png`);
    animation[4] = cowgirl;

    cowgirl = loadImage(`assets/Idle (${j+5}).png`);
    animation[5] = cowgirl;

    cowgirl = loadImage(`assets/Idle (${j+6}).png`);
    animation[6] = cowgirl;

    cowgirl = loadImage('assets/Idle (8).png');
    animation[7] = cowgirl;

    cowgirl = loadImage('assets/Idle (9).png');
    pics[8] = cowgirl;

    cowgirl = loadImage('assets/Idle (10).png');
    animation[9] = cowgirl;
}

// create the canvas
function setup() {

    createCanvas(641, 542);
    
    // this time, we will create an interval so that the increment
    // happens a little slower than the framerate
    setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    // draw each frame based on the index in the array
    image(animation[i], x, 0);

    // keep in mind all the incrementing that was here before is now gone.

}

// this function is called every 50 milliseconds from the
// setInterval function
function incrementIndex()
{
    i += 1;
    if (i >= animation.length) {
        i = 0;
    }
}