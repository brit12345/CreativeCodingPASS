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

  //Window 1
  fill(250, 250, 255); //White
  rect(WIND_1_X, WIND_1_Y, WIND_SIZE, WIND_SIZE);
  line(WIND_1_X + WIND_SIZE/2, WIND_1_Y, WIND_1_X + WIND_SIZE/2, WIND_1_Y + WIND_SIZE);
  line(WIND_1_X, WIND_1_Y + WIND_SIZE/2, WIND_1_X + WIND_SIZE, WIND_1_Y + WIND_SIZE/2);
  //Window 2
  rect(WIND_2_X, WIND_2_Y, WIND_SIZE, WIND_SIZE);
  line(WIND_2_X + WIND_SIZE/2, WIND_2_Y, WIND_2_X + WIND_SIZE/2, WIND_2_Y + WIND_SIZE);
  line(WIND_2_X, WIND_2_Y + WIND_SIZE/2, WIND_2_X + WIND_SIZE, WIND_2_Y + WIND_SIZE/2);

  //Door
  fill(240, 131, 7); //Orange
  rect(250, 350, 100, 150);
  //Doorknob
  strokeWeight(10);
  point(330, 440);
}
