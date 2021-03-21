class videoClass {

    constructor(vidPath, x, y, w, h) {

        this.vidPath = vidPath;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    get theVideoPath() {
        return this.vidPath;
    }
    get theW() {
        return this.w;
    }
    get theH() {
        return this.h;
    }
    get theX() {
        return this.x;
    }
    get theY() {
        return this.y;
    }
    setTheVideoObject(videoObject) {
        this.videoObject = videoObject;
    }
    get theVideoObject()
    {
        return this.videoObject;
    }
}