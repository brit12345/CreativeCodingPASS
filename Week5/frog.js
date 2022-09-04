let frogImg;
let frogWidth;
let frogHeight;
function preload() {
  frogImg = loadImage("phrog.webp");

}

let greenLvl;

function setup() {
  createCanvas(600, 600);
  greenLvl = random(50, 256)

  console.log(frogImg);

}

let frogPosX = 300;
let frogPosY = 600;

function draw() {
  background(131, 238, 255); //Light blue


  frogWidth = frogImg.width/2;
  frogHeight = frogImg.height/2;

  fill(0, greenLvl, 0);
  rect(300, 600 - frogHeight, frogWidth, frogHeight);

  rect(300, 600 - 2*frogHeight, frogWidth, frogHeight);

  rect(300, 600 - 3*frogHeight, frogWidth, frogHeight);
  rect(300 - frogWidth, 600 - 3*frogHeight, frogWidth, frogHeight);

  rect(300 - frogWidth, 600 - 4*frogHeight, frogWidth, frogHeight);
  rect(300 - 2*frogWidth, 600 - 4*frogHeight, frogWidth, frogHeight);

  rect(300 - 2*frogWidth, 600 - 5*frogHeight, frogWidth, frogHeight);

  rect(300 - 2*frogWidth, 600 - 6*frogHeight, frogWidth, frogHeight);
  rect(300 - 1*frogWidth, 600 - 6*frogHeight, frogWidth, frogHeight);
  rect(300 - 0*frogWidth, 600 - 6*frogHeight, frogWidth, frogHeight);
  rect(300 + 1*frogWidth, 600 - 6*frogHeight, frogWidth, frogHeight);
  rect(300 + 2*frogWidth, 600 - 6*frogHeight, frogWidth, frogHeight);

  rect(300 + 2*frogWidth, 600 - 7*frogHeight, frogWidth, frogHeight);

  checkOnLilyPad();
  
  image(frogImg, frogPosX, frogPosY - frogHeight, frogWidth, frogHeight);
  
}


function keyPressed() {
  if(keyCode === LEFT_ARROW){
    frogPosX -= frogWidth;
  } else if(keyCode === RIGHT_ARROW){
    frogPosX += frogWidth;
  } else if(keyCode === UP_ARROW){
    frogPosY -= frogHeight;
  } else if(keyCode === DOWN_ARROW){
    frogPosY += frogHeight;
  }
}

function checkOnLilyPad(){
  if(frogPosY === 600){
    if(frogPosX != 300){
      resetPos();
    }
  } else if(frogPosY === 600 - 1*frogHeight){
    if(frogPosX != 300){
      resetPos();
    }
  } else if(frogPosY === 600 - 2*frogHeight){
    if(frogPosX != 300 && frogPosX != 300 - frogWidth){
      resetPos();
    }
  } else if(frogPosY === 600 - 3*frogHeight){
    if(frogPosX != 300 - frogWidth && frogPosX != 300 - 2*frogWidth){
      resetPos();
    }
  } else if(frogPosY === 600 - 4*frogHeight){
    if(frogPosX != 300 - 2*frogWidth){
      resetPos();
    }
  } else if(frogPosY === 600 - 5*frogHeight){
    if(!(frogPosX >= 300 - 2*frogWidth && frogPosX <= 300 + 2*frogWidth)){
      resetPos();
    }
  } else if(frogPosY === 600 - 6*frogHeight){
    if(frogPosX != 300 + 2*frogWidth){
      resetPos();
    }
  } else if (frogPosY >= height || frogPosY <= 0 || frogPosX >= width || frogPosY <= 0){
    resetPos();
  }
}

function resetPos(){
  frogPosX = 300;
  frogPosY = 600;

  greenLvl = random(50, 256);
}