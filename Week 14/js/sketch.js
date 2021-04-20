function setup() {
    let img = createImage(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    background(0);
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            img.set(i, j, color(255, 0, 180, (i % img.width) * .2));
        }
    }
    img.updatePixels();
    image(img, 0, 0);
    image(img, 50, 50);
    image(img, 100, 100);


    let x, y;
    // fill with random colors
    for (y = 0; y < img.height; y++) {
        for (x = 0; x < img.width; x++) {
            let red = random(255);
            let green = random(255);
            let blue = random(255);
            let alpha = 255;
            writeColor(img, x, y, red, green, blue, alpha);
        }
    }

    // draw upper border line
    for (y = 0; y < 5; y++) {
        for (x = 0; x < img.width; x++) {
            writeColor(img, x, y, 255, 0, 0, 255);
        }
    }

    // BORDER

    // draw upper border line
    for (y = 0; y < 5; y++) {
        for (x = 0; x < img.width; x++) {
            writeColor(img, x, y, 0, 0, 0, 255);
        }
    }

    // draw a bottom border line
    y = img.height - 1;
    for (let i = 0; i < 5; i++) {
        for (x = 0; x < img.width; x++) {
            writeColor(img, x, y, 0, 0, 0, 255);
        }
        y--;
    }








    function writeColor(image, x, y, red, green, blue, alpha) {
        let index = (x + y * width) * 4;
        image.pixels[index] = red;
        image.pixels[index + 1] = green;
        image.pixels[index + 2] = blue;
        image.pixels[index + 3] = alpha;
    }

}