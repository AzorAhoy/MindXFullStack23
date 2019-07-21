'use strict'

function sort(input) {
  //return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  for (let i = 1; i < input.length; i++){
    for (let j = 0; j < i; j++) {
      if (input[i] < input[j]) {
          let tmp = input[i];
          input[i] = input[j];
          input[j] = tmp;
      }
    }
  }
  return input;
}

module.exports = sort
