let frogImg;
function preload(){
  frogImg = loadImage("phrog.png");
}

function setup(){
  createCanvas(800, 800);

  frogImg.resize(30, 30);
  sprite1 = createSprite(200, 400, 100, 100);
  sprite1.addImage(frogImg);
}
function draw(){
  background(0);
}

