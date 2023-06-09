noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video, modeloaded);
poseNet.on("pose", gotPoses );
}

function draw(){
  image(video,0,0,300,300);
  image(clown_nose,noseX,noseY,30,30) ;
}

function takesnapshot(){
    save('my_Photo.png');
}

function modeloaded(){
    console.log("Model Is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x+-14;
        console.log("Nose X = " + results[0].pose.nose.x);
        noseY=results[0].pose.nose.y+2;
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}