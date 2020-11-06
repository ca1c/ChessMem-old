//I DONT know why I started working on this, its not neccessary, but I'm
// Just going to leave it here just in case I want it in the future





// Fades from starting color to ending color over a specified period of time

// both colors will be in rgb format in arrays

// t is time in ms

/*
  Going from red to green:

  The way it works is you essentially count up in r g or b until it hits 255
  then count the next up to 255
  once that hits 255 start counting the previous cell down
*/

/*
  Step 1: Calculate the difference between each of the colors
*/

function calcDif(start, end) {
    let diffArr = [];

    for(let i = 0; i < start.length; i++) {
      diffArr.push(start[i] - end[i]);
    }

    return diffArr;
}

/*
  Step 2: Calculate the ratio of the differences
*/

function calcRatio(diffArr) {

}

function fade(start, end, t) {

  // type array
  let difference = calcDif(start, end);

  console.log(difference);
}


// 207, 199, 41
// 218, 144, 255
fade([207, 199, 41], [218, 144, 255]);
