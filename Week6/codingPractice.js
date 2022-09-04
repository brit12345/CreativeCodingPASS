//The prompt for this week is to create an array with 5 colours as strings, and then 
//loop through the array to draw 5 shapes with the five different colours. Hint: fill("red");

let colours = ["red", "green", "blue", "yellow", "purple"];

function setup(){
  createCanvas(800, 800);
  background(0);

  for(let i = 0; i < colours.length; i++){
    fill(colours[i]);
    ellipse(50 + i*100, 50 + i*100, 100);
  }
}

//for a moving ball with changing size and colour
let xPos = 340;
let yPos = 340;
let xSpeed = 3;
let ySpeed = 5;
let size = 50;
let sizeIncrement = 0.2;
let r = 0;
let g = 0;
let b = 0;
let rSpeed = 1;
let gSpeed = 2;
let bSpeed = 3;


let ball = {
  position: {
    x: 340,
    y: 340
  },
  speed: {
    x: 3,
    y: 5
  },
  size: {
    radius: 50,
    increment: 0.2
  },
  colour: {
    rgb: [0, 0, 0],
    changeSpeed: [1, 2, 3]
  }
};

let ball2 = {
  position: [340, 340],
  speed: [3, 5],
  size: {
    radius: 50,
    increment: 0.2
  },
  colour: {
    r: 0,
    g: 0,
    b: 0,
  },
  changeSpeed: {
    r: 1,
    g: 2,
    b: 3
  }
};

let bookstore = {
  name: "My Books",
  location: "143 cool street",
  books: [
    {
      title: "The Shortest Book in the World",
      totalWords: 8,
      pageTypes: {
        contentPages: {
          total: 1,
          pages: [
            {
              number: 1,
              chapter: 1,
              wordsByLine: [
                ["This", "is", "the", "shortest", "book"], 
                ["in", "the", "world", "."]
              ]
            }
          ]
        },
        creditPages: {
          total: 1,
          pages: {
            number: 2,
            chapter: "Credits",
            wordsByLine: [["by"], ["Me"]]
          },
        }
      }
    },
    {
      title: "Another Book",

    }
  ]
}

console.log(bookstore.books[0].pageTypes.contentPages.pages[0].wordsByLine[0][0]);