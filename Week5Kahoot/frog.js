function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  rect(200, 200, 100, 100); 
}

function randomFill(){
  let r = random(0, 256);
  let g = random(0, 256);
  let b = random(0, 256);

  fill(r, g, b);
}


