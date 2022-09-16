let numbers = [53, 66, 76, 634, 143, 345, 234, 653, 90];
let max = 0;

//set max to the highest number in the numbers
//array
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > max){
    max = numbers[i];
  }
}


let numFile; // will contain original txt file
let numArray = []; //will hold split numFile
let sumOfLines = []; //will hold the sum of each line of numFile

function preload() {
  numFile = loadStrings("numbers.txt");

}

function setup() {
  //loop through numFile and put each line as an array into
  //a new "numArray" array
  for (let i = 0; i < numFile.length; i++) {
    numArray.push(int(numFile[i].split(" ")));
  }


  //loop through the numArray, and then the arrays inside
  //that array to sum each line and add to sumOfLines array
  for (let i = 0; i < numArray.length; i++) {
    let total = 0;
    for (let k = 0; k < numArray[i].length; k++) {
      total += numArray[i][k];
    }
    sumOfLines.push(total);
  }
  console.log(sumOfLines);

}
