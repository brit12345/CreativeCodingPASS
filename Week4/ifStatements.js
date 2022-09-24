function setup() {

  createCanvas(400, 400);
 
 }
 
 function draw() {
 
  //Vars and Consts
 
  const X1 = random(10,100);
 
  const X2 = random(20,150);
 
 
 
 
 
  // DRAW
 
  fill(X1,X2,X2);

  if(X2 - X1 < 10){
    circle(mouseX, mouseY, X1, X2)

  }
  else{
  rect(mouseX,mouseY,X1,X2);
  }
 
 }
 


//when the mouse is pressed, draw randomly-sized, randomly-coloured rectangles
//that stay on screen. If the width and height of the rectangles are within 10 
//pixels of each other, then draw an ellipse instead. Rectangles and circles
//should appear centered on the mouse.