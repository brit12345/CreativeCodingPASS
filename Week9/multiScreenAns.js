//game states
const RED_SCREEN = 0;
const GREEN_SCREEN = 1;
const BLUE_SCREEN = 2;

//initialise current state as RED_SCREEN
let currentState = RED_SCREEN; 

//keycodes
const M = 77;
const SPACE = 32;

function setup(){
  createCanvas(800, 800);
  background(0);
}

function draw(){
  if(currentState == GREEN_SCREEN){
    drawGreenScreen();
  } else if(currentState == BLUE_SCREEN){
    drawBlueScreen();
  } else if(currentState == RED_SCREEN){
    drawRedScreen();
  } else {
    console.log("ERROR: No currentState");
  }
}

//Draws randomly placed and red-scale coloured rectangles inside canvas
//with black background. Frame rate is 1
function drawRedScreen(){
  //draw 150 rectangles
  if(frameCount % 60 == 0){
    background(0);
    for(let i = 0; i < 150; i++){
      let w = random(50, 100);
      let h = random(50, 100);
      let x = random(0, width - w); //width and height are canvas width and height
      let y = random(0, height - h);
      fill(255, random(0, 100), random(100));
      rect(x, y, w, h);
    }
  }

  inputLabel("Spacebar");
  if(keyIsPressed && keyCode == SPACE){
    currentState = GREEN_SCREEN;
  }
}

//draw a green rectangle the size of the canvas
function drawGreenScreen(){
  fill("green");
  rect(0, 0, width, height);

  inputLabel("Mouse");
  if(mouseIsPressed){
    currentState = BLUE_SCREEN;
  }
}

//draw 6 sections of horizontal blue rectangles across the canvas
function drawBlueScreen(){
  for(let i = 0; i <= 5; i++){
    fill(0, 0, i * 256/5);
    rect(0, i * width/6, width, width/6);
  }

  inputLabel("Letter M");
  if(keyIsPressed && keyCode == M){
    currentState = RED_SCREEN;
  }
}

//input string as the text to draw on screen in the top right
//in a small white ractangle
function inputLabel(label){
  fill(256);
  rect(0, 0, 60, 15);
  fill(0);
  textAlign(LEFT, TOP);
  text(label, 2, 2);
}
