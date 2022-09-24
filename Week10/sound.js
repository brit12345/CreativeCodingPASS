let successNoise;
function preload(){
  successNoise = loadSound("success-sound-effect.mp3");
}

function setup(){
  createCanvas(800, 800);
  successNoise.setVolume(0.1);

}

function draw(){
  background(0);
  if(mouseIsPressed){
    successNoise.play();
    console.log("play");
  }
}

//https://p5js.org/reference/#/libraries/p5.sound