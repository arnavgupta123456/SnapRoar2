noseX = 0;
noseY= 0;
leftEyeX= 0;
leftEyeY= 0;
rightEyeX= 0;
rightEyeY= 0;
leftEarX= 0;
leftEarY= 0;
rightEarX= 0;
rightEarY= 0;
function preload() {
    blackpanther = loadImage('black panther.png');
}
function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    //video.size(300,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log("posenet is initiated")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-150;
        noseY = results[0].pose.nose.y-100;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
function draw() {
    image(video,0,0,500,500);
    image(blackpanther,noseX,noseY,150,200);
}
function take_snapshot() {
    save('SnapRoarImage.png');
}