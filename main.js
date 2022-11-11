song = "";
song1 = "";

leftWristX= 0;
leftWristY= 0;

rightWristX= 0;
rightWristY= 0;

function preload()
{
    song = loadSound("BTS-Mikrokosmos.mp3");
    song1 = loadSound("Harry-Potter.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500); 
    canvas.position(465, 240);

    video = createCapture(VIDEO); 
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function play()
{
    song.play();
}

function Stop()
{
    song.stop();
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWristX;
        leftWristY = results[0].pose.leftWristY;
        console.log("leftWristX = "+ leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWristX;
        rightWristY = results[0].pose.rightWristY;
        console.log("rightWristX = "+ rightWristX + "rightWristY = " + rightWristY);
    }
}