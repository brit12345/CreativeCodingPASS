//rectangle object
let sqr = {
  w: 200, 
  h: 200,
  x: 300, 
  y: 200  
}
/* Setup runs after preload. Creates a square 
canvas 800 wide, with a black background */
function setup(){
  createCanvas(800, 800);
  background(0); 
  rect(sqr.x, sqr.y, rect.w, sqr.h);

  drawDotInCentre(sqr.x, sqr.y, sqr.w, sqr.h);
}

/* Takes an x value, y value, width and height of a rectangle, 
and puts a point in the middle. */
function drawDotInCentre(x, y, w, h){
  strokeWeight(5);
  point(x + w/2, y + h/2);
}


//rectangle object
let sqr = {
  w: 200, //width of rectangle
  h: 200, //height of rectangle
  x: 300, //x position of rectangle
  y: 200  //y position of rectangle
}
/* Setup runs after preload. Creates a square 
canvas 800 wide, with a black background */
function setup(){
  createCanvas(800, 800); //creates canvas with 800 width and 800 height
  background(0);  //make the background black
  rect(sqr.x, sqr.y, sqr.w, sqr.h); //draws a rectangle with the sqr object
  //calls custom function that draws a dot in the centre
  drawDotInCentre(sqr.x, sqr.y, sqr.w, sqr.h); 
}

/* Takes an x value, y value, width and height of a rectangle, 
and puts a point in the middle. */
function drawDotInCentre(x, y, w, h){
  strokeWeight(10); //sets the stroke weight to 10 to make the point visible
  point(x + w/2, y + h/2); //set the location of the point by halving w and h
}

