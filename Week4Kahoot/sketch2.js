function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  if(false && true || true){
    rect(100, 100, 150, 150);
  } 

  if((false && true) || true){
    triangle(175, 100, 100, 175, 250, 175);
  }
  
  if(false && (true || true)){
    ellipse(175, 175, 100, 100);
  }
}


// function draw() {
//   let x = 2;

//   if(x > 3 && x < 5 || x < 7 && x < 10){
//     rect(100, 100, 150, 150);
//   } 

//   if((x > 3 && x < 5) || (x < 7 && x < 10)){
//     triangle(175, 100, 100, 175, 250, 175);
//   }
  
//   if(x > 3 && (x < 5 || x < 7) && x < 10){
//     ellipse(175, 175, 100, 100);
//   }
// }
