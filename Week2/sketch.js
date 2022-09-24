function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  angleMode(DEGREES);
  arc(50, 50, 80, 80, 0, 45, PIE);
  arc(50 + 80, 50, 80, 80, 0, 45*2, PIE);
  arc(50 + 80*2, 50, 80, 80, 0, 45*3, PIE);
  arc(50 + 80*3, 50, 80, 80, 0, 45*4, PIE);

  arc(50, 50 + 80, 80, 80, 45, 0, PIE);
  arc(50 + 80, 50 + 80, 80, 80, 0, 45, PIE);

  arc(50, 50 + 80*2, 80, 80, 0, 90, PIE);
  arc(50 + 80, 50 + 80*2, 80, 80, 0, 180, PIE);
  arc(50 + 80*2, 50 + 80*2, 80, 80, 0, 180 + 90, PIE);
  arc(50 + 80*3, 50 + 80*2, 80, 80, 0, 360, PIE);

  arc(50, 50 + 80*3, 80, 80, 0, 180, PIE);
  arc(50 + 80, 50 + 80*3, 80, 80, 0 + 45, 180 + 45, PIE);
  arc(50 + 80*2, 50 + 80*3, 80, 80, 0 + 2*45, 180 + 2*45, PIE);
  arc(50 + 80*3, 50 + 80*3, 80, 80, 0 + 3*45, 180 + 3*45, PIE);


  // arc(50, 50, 80, 80, 0, QUARTER_PI, PIE);
  // arc(50 + 80, 50, 80, 80, 0, QUARTER_PI*2, PIE);
  // arc(50 + 80*2, 50, 80, 80, 0, QUARTER_PI*3, PIE);
  // arc(50 + 80*3, 50, 80, 80, 0, QUARTER_PI*4, PIE);

  // arc(50, 50 + 80, 80, 80, QUARTER_PI, 0, PIE);
  // arc(50 + 80, 50 + 80, 80, 80, 0, QUARTER_PI, PIE);

  // arc(50, 50 + 80*2, 80, 80, 0, HALF_PI, PIE);
  // arc(50 + 80, 50 + 80*2, 80, 80, 0, PI, PIE);
  // arc(50 + 80*2, 50 + 80*2, 80, 80, 0, PI + HALF_PI, PIE);
  // arc(50 + 80*3, 50 + 80*2, 80, 80, 0, TWO_PI, PIE);

  // arc(50, 50 + 80*3, 80, 80, 0, PI, PIE);
  // arc(50 + 80, 50 + 80*3, 80, 80, 0 + QUARTER_PI, PI + QUARTER_PI, PIE);
  // arc(50 + 80*2, 50 + 80*3, 80, 80, 0 + 2*QUARTER_PI, PI + 2*QUARTER_PI, PIE);
  // arc(50 + 80*3, 50 + 80*3, 80, 80, 0 + 3*QUARTER_PI, PI + 3*QUARTER_PI, PIE);
}