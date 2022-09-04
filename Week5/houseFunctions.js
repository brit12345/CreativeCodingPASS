const WIND_1_X = 160;
const WIND_1_Y = 300;
const WIND_SIZE = 70;
const WIND_2_X = 370;
const WIND_2_Y = 300;
function setup() {
  createCanvas(600, 600);
  background(131, 238, 255); //Light blue
}
function draw() {
  strokeWeight(5);
  //Roof
  fill(200, 30, 20); //Red
  triangle(300, 20, 150, 200, 450, 200);
  //Wall
  fill(9, 135, 0); //Dark Green
  rect(150, 200, 300, 300);
  drawWindow(WIND_1_X, WIND_1_Y, WIND_SIZE);
  drawWindow(WIND_2_X, WIND_2_Y, WIND_SIZE);
  drawDoor();
}
function drawWindow(x, y, s) {
  fill(250, 250, 255); //White
  rect(x, y, s, s);
  line(x + s/2, y, x + s/2, y + s);
  line(x, y + s/2, x + s, y + s/2);
}
function drawDoor() {
  fill(240, 131, 7); //Orange
  rect(250, 350, 100, 150);
  //Doorknob
  strokeWeight(10);
  point(330, 440);
}

