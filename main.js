Harry_Potter = "music.mp3";
Memories = "music2.mp3"
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score_rightWrist = 0;
status = "";
function preload(){
    Harry_Potter = loadSound("music.mp3");
    Memories = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 540);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Initialized');
}
function draw() {
    image(video, 0, 0, 600, 540);
    fill("##FBFF00");
    stroke("#000000");
    if(status = "false"){
        if( scoreRightWrist > 0.2)
    {
    circle(rightWristX, rightWristY, 20);
    Harry_Potter.stop();
    play_Memories();
    }
}

Memories.isPlaying();
}
function play_Harry_Potter(){
    Harry_Potter.play();
    Harry_Potter.setVolume(1);
}
function play_Memories(){
    Memories.play();
    Memories.setVolume(1);
}
function gotPoses(results){
    if(results.length>0){
        scoreRightWrist = results[0].pose.keypoints[10].score;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}
