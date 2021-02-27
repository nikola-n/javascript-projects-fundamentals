// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// let smallest = temperatures[0];

const calcSmallest = (arr) => {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'error') {
      continue;
    }
    if (smallest >= arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
};

const calcHighest = (arr) => {
  let highest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];

    if (typeof curTemp !== 'number') {
      continue;
    }

    if (highest <= curTemp) {
      highest = curTemp;
    }
  }

  return highest;
};

const calcTempAmplitude = () => {
  return calcHighest(temperatures) - calcSmallest(temperatures);
};

console.log('Amplitude is: ' + calcTempAmplitude());

console.log(calcSmallest(temperatures));
console.log(calcHighest(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcTempAmplitudeOne = (temp1, temp2) => {
  const temps = temp1.concat(temp2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitudeOne(temperatures, [39, 6, 4, 9, -5, -3, 10, 15]));


const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:')),
    };

    const kelvin = measurement.value + 273;

    return kelvin;
}

console.log(measureKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = arr => {
  let text = '';

  for(let i = 0; i < arr.length; i++) {
     text = text + `...${arr[i]}ºC in ${i+1} days`;
  }

  return text;
}


console.log(printForecast([17, 21, 23]));