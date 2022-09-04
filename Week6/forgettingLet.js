
function setup() {
  createCanvas(600, 600);
  background(131, 238, 255); //Light blue

  for(puppiesNum = 0; puppiesNum < 3; puppiesNum++){
    console.log("I have " + puppiesNum + "puppies");
  }

  console.log(to12HrTime(13))

 
}



function draw() {

}

function to12HrTime(time){
  let timeDecimal;
  let suffix;
  if(time >= 13){
    timeDecimal = time - 12;
    if(time == 24){
      suffix = "am";
    } else {
      suffix = "pm";
    }
  } else {
    timeDecimal = time;
    if(time == 12){
      suffix = "pm";
    } else {
      suffix = "am";
    }
    
  }

  let formatted = formatWithMins(timeDecimal);

  return {
    time: formatted,
    timeDecimal: timeDecimal,
    suffix: suffix,
    twenfourTime: time
  }
}

function formatWithMins(timeDecimal){
  let hours = Math.floor(timeDecimal);
  let remainder = timeDecimal - hours;
  let mins = Math.floor((remainder) * 60);
  if(mins == 0){
    mins = "00";
  }

  if( hours < 1){
    hours = 12;
  }

  return formatted = hours + ":" + mins; //need to limit to full numbers
}