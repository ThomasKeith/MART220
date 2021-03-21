let resultVideos = [];
let videoObjects = [];
let vid;






function setup() {

    // SETUP VIDEOS

    resultVideos = loadStrings('assets/videos.txt');

    for (let i = 0; i < 1; i++) {
        videoObjects.push(new videoClass(resultVideos[i], 100, 100, 100, 100));
    }

    // CREATE CANVAS & BG
    createCanvas(windowWidth, windowHeight);
    background(70);


    // PLAY VIDEO
    for (let i = 0; i < videoObjects.length; i++) {
        let tempVideo = createVideo(videoObjects[i].theVideoPath);
        tempVideo.size(videoObjects[i].theW, videoObjects[i].theH);
        tempVideo.position(videoObjects[i].theX, videoObjects[i].theY);
        videoObjects[i].setTheVideoObject(tempVideo);
    }

    for (let i = 0; i < videoObjects.length; i++) {
        let temp = videoObjects[i].theVideoObject;
        temp.loop();
        temp.volume(0);
    }

}