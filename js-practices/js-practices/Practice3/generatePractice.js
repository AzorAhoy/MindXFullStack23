'use strict'

function generate(testLengthArray){
//   return Array.from({length : testLengthArray.length})
//   .map(item => ({
//     input: Array.from({length: item}).map(item => []),
//     target: 0,
//     output: -1
//   })
// ); // Remove this line and change to your own algorithm
  const result = [];
  for (let index = 0; index < testLengthArray.length; index++) {
    let newArr = Array.from({length: testLengthArray[index]}, () => Math.floor(Math.random() * (10000 - (-10000) + 1)) + (-10000)).sort((a,b) => a-b);
    let newNum = Math.floor(Math.random() * (10000 - (-10000) + 1)) + (-10000);
    let pos = newArr.indexOf(newNum);
    
    // if (newArr.length >= 4) {
    //   if (pos == -1) {
    //     // - *Not found*: `input` doesn't contain `target`.
    //     pos = "Not found";
    //   } else if (pos == 0){
    //     // - *First index*: `target` is at index `0`.
    //     pos = "First index";
    //   }
    //   else if (pos == newArr.length - 1) {
    //     // - *Last index*: `target` is at index `input.length-1`.
    //     pos = "Last index";
    //   }
    //   else {
    //     // - *Middle index*: `target` is NOT at index `0` or `input.length-1`.
    //     pos = "Middle index";
    //   }
    // }
    

    var item = {
      //input: Array.from({length: testLengthArray[index]}, () => Math.floor(Math.random() * (10000 - (-10000) + 1)) + (-10000)).sort((a,b) => a-b),
      input : newArr,
      target:  newNum,
      output:  pos
  
    }
    result[index] = item;
  }
  return result;

    // var target;
    // for(var i =0 ; i < testLengthArray.length ; i++){
    //   if(target != testLengthArray[i]){
    //     console.log("not found!");
    //   }else if(target == testLengthArray[0] ){
    //     console.log("First index");
    //   }else if(target == testLengthArray[testLengthArray.length - 1] ){
    //     console.log("Last index");
    //   }else{
    //     console.log("Middle index");
    //   }

    // }
}

module.exports = generate
