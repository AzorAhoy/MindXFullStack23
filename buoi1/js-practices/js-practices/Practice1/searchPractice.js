'use strict'

function search(input, target) {
  //let i = 0;
  //return input.indexOf(target);  // Remove this line and change to your own algorithm
  for (var i = 0; i < input.length; i++) {
    if (input[i] == target) {
      break;
    }
    
  }
  if (i == input.length) {
    return -1;
  }
  else return i;
}

module.exports = search
