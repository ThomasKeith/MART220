class shapeClass {

    constructor(shape, param1, param2, param3, rotateX, rotateY, rotateZ) {
        this.shape = shape;
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.rotateZ = rotateZ;
    }

    draw(frames) {
        push();
        rotateX(this.rotateX * frames);
        rotateY(this.rotateY * frames);
        rotateZ(this.rotateZ * frames);
        if (this.shape == "box") {
            box(this.param1, this.param2, this.param3);
        } else if (this.shape == "cylinder") {
            cylinder(this.param1, this.param2);
        } else if (this.shape == 'torus') {
            torus(this.param1, this.param2);
        } else if (this.shape == 'ellipsoid') {
            ellipsoid(this.param1, this.param2, this.param3);
        } else if (this.shape == 'cone') {
            cone(this.param1, this.param2);
        }
        pop();

    }
}