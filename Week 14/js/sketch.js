function setup() {

    let img = createImage(800, 300);
    img.loadPixels();
    createCanvas(windowWidth, windowHeight);
    background(0);
    rect(5,5, windowWidth-10,windowHeight-10);
    textSize(32);
    text('TK', 25, 50);
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            img.set(i, j, color(255, 0, 180, (i % img.width) * .2));
        }
    }


    img.updatePixels();
    image(img, 0, 0);
    image(img, 50, 50);
    image(img, 100, 100);
    image(img, 150, 150);
    image(img, 200, 200);
    image(img, 250, 250);
    image(img, 300, 300);
    image(img, 350, 350);
    image(img, 400, 400);
    image(img, 450, 450);

    




    function writeColor(image, x, y, red, green, blue, alpha) {
        let index = (x + y * width) * 4;
        image.pixels[index] = red;
        image.pixels[index + 1] = green;
        image.pixels[index + 2] = blue;
        image.pixels[index + 3] = alpha;
    }

}