let frogImg;

const BORDER = 100;
const SPEED = 5;

function preload(){
  frogImg = loadImage("phrog.png");
}
function setup(){
  createCanvas(800, 800);

  frogs = new Group();
  frogImg.resize(100, 100);

  for(let i = 0; i < 20; i++){ //20 sprites with frog images
    let x = random(0 + BORDER, width - BORDER);
    let y = random(0 + BORDER, height - BORDER)
    let tempSprite = createSprite(x, y, 100, 100);
    tempSprite.addImage(frogImg);
    tempSprite.setSpeed(SPEED, random(0, 360));
    frogs.add(tempSprite);
  }
}

function draw(){
  background(0);

  frogs.bounce(frogs);
  
  drawSprites();
}

