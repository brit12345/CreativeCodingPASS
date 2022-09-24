function setup() {
  createCanvas(800, 600);
  background(0);
}

const MAX_RECT_SIZE = 150;
const MIN_RECT_SIZE = 10;

function draw() {
  //randomise the colour for each rectangle
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(254, 255);

  //randomise the size for each rectangle
  let rectWidth = random(MIN_RECT_SIZE, MAX_RECT_SIZE);
  let rectHeight = random(MIN_RECT_SIZE, MAX_RECT_SIZE);

  //if the mouse is pressed: if the width and height difference is within 10, 
  //then draw a circle at mouse position, otherwise, draw a rectangle at mouse 
  //position
  if(mouseIsPressed){
    noStroke();
    fill(r, g, b);
    if(abs(rectWidth - rectHeight) <= 10){
      ellipse(mouseX, mouseY, rectWidth, rectHeight);
    } else {
      rect(mouseX - rectWidth/2, mouseY - rectHeight/2, rectWidth, rectHeight);
    }
  }
}




//when the mouse is pressed, draw randomly-sized, randomly-coloured rectangles
//that stay on screen. If the width and height of the rectangles are within 10 
//pixels of each other, then draw an ellipse instead. Rectangles and circles
//should appear centered on the mouse.