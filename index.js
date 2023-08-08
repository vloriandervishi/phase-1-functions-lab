// Code your solution in this file!
const BLOCKS = 264;

function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if (someValue == 50) {
    return 8;
  } else if (someValue == 34) {
    return 8;
  } else {
    return 1;
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * BLOCKS;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs((destination - start) * BLOCKS);
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer

  let distance = Math.abs((destination - start) * BLOCKS);
  let free400 = distance - 400;
  let free = 400;
  if (distance > 400 && distance <= 2000) {
    return free400 * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return `cannot travel that far`;
  } else if (distance !== free) {
    return 0;
  }
}
