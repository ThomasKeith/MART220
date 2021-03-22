let resultVideos = [];
let videoObjects = [];
let vid;




function setup() {

    //TEST CODE
    noCanvas();
    resultVideos = loadStrings('assets/videos.txt');
    vid = createVideo([resultVideos[0]], vidLoad);
    vid.size(100, 100);

    function vidLoad() {
        vid.loop();
        vid.volume(0);
    }



    // SETUP VIDEOS
    /*

    resultVideos = loadStrings('assets/videos.txt');

    for (let i = 0; i < 1; i++) {
        videoObjects.push(new videoClass(resultVideos[i], 100, 100, 100, 100));
    }

    // CANVAS
    createCanvas(screen.width,screen.height);
    background(70);


    // PLAY VIDEO
    for (let i = 0; i < videoObjects.length; i++) {
        let tempVideo = createVideo(videoObjects[i].theVideoPath, );
        tempVideo.size(videoObjects[i].theW, videoObjects[i].theH);
        tempVideo.position(videoObjects[i].theX, videoObjects[i].theY);
        videoObjects[i].setTheVideoObject(tempVideo);


    }
    for (let i = 0; i < videoObjects.length; i++) {
        let temp = videoObjects[i].theVideoObject;
        temp.loop();
        temp.volume(0);
    }*/


}