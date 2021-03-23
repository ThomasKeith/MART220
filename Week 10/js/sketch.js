let resultVideos = [];
let resultValues = [];
let myVideos = [];
let vid;
let button;
let volumeUpButton;
let volumeDownButton;
let playing;
let volume = 0.2;
let volumeIncrement = 0.01;

function preload() {
    resultVideos = loadStrings('assets/myVideos.txt');
    resultValues = loadStrings('assets/values.txt');
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(50);

    textSize(60);
    text('Clips From Past Projects', 50, 70);
    text('Thomas Keith', 50, 800);

    for (let i = 0; i < 4; i++) {
        myVideos.push(new videoClass(resultVideos[i], resultValues[i], resultValues[i], resultValues[i], resultValues[i]));
    }

    //myVideos.push(new videoClass('assets/02_A380_TAKEOFF.mp4', 300, 300, 300, 300));
    //myVideos.push(new videoClass('assets/MVI_0048.mp4', 10, 10, 100, 100));


    for (let i = 0; i < myVideos.length; i++) {
        let tempVideo = createVideo([myVideos[i].theVideoPath]);
        tempVideo.size(myVideos[i].theW, myVideos[i].theH);
        tempVideo.position(myVideos[i].theX, myVideos[i].theY);
        myVideos[i].setTheVideoObject(tempVideo);
    }

    button = createButton('play');
    volumeUpButton = createButton('Volume Up');
    volumeDownButton = createButton('Volume Down');
    volumeUpButton.position(width / 2 + 50, height - 150);
    volumeDownButton.position(width / 2 + 50, height - 125);
    button.position(width / 2, height - 150);
    button.mousePressed(playVideo);
    volumeUpButton.mousePressed(louder);
    volumeDownButton.mousePressed(softer);

    function playVideo() {
        if (playing) {
            for (let i = 0; i < myVideos.length; i++) {
                let temp = myVideos[i].theVideoObject;
                temp.pause();
                temp.volume(volume);
            }
            button.html('play');
            playing = false;
        } else {
            for (let i = 0; i < myVideos.length; i++) {
                let temp = myVideos[i].theVideoObject;
                temp.loop();
                temp.volume(volume);
            }
            button.html('pause');
            playing = true;
        }
    }

    function louder() {
        volume += 0.2;
        if (volume >= 1) {
            volume = 1;
        }
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(volume);
        }
    }

    function softer() {
        volume -= 0.2;
        if (volume <= 0) {
            volume = 0;
        }

        for ( let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(volume);
        }
    }
}