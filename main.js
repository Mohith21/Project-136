status = "";
objects = [];

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();
}

function draw() {
    image(video, 0, 0, 450, 350);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}