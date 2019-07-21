'use strict'

// function generate(testLengthArray){
// //   return Array.from({length : testLengthArray.length})
// //   .map(item => ({
// //     input: Array.from({length: item}).map(item => []),
// //     target: 0,
// //     output: -1
// //   })
// // ); // Remove this line and change to your own algorithm
//   const result = [];
//   for (let index = 0; index < testLengthArray.length; index++) {
//     let newArr = Array.from({length: testLengthArray[index]}, () => Math.floor(Math.random() * (10000 - (-10000) + 1)) + (-10000)).sort((a,b) => a-b);
//     let newNum = Math.floor(Math.random() * (10000 - (-10000) + 1)) + (-10000);
//     let pos = newArr.indexOf(newNum);
    
//     // if (newArr.length >= 4) {
//     //   if (pos == -1) {
//     //     // - *Not found*: `input` doesn't contain `target`.
//     //     pos = "Not found";
//     //   } else if (pos == 0){
//     //     // - *First index*: `target` is at index `0`.
//     //     pos = "First index";
//     //   }
//     //   else if (pos == newArr.length - 1) {
//     //     // - *Last index*: `target` is at index `input.length-1`.
//     //     pos = "Last index";
//     //   }
//     //   else {
//     //     // - *Middle index*: `target` is NOT at index `0` or `input.length-1`.
//     //     pos = "Middle index";
//     //   }
//     // }
    

//     var item = {
//       //input: Array.from({length: testLengthArray[index]}, () => Math.floor(Math.random() * (10000 - (-10000) + 1)) + (-10000)).sort((a,b) => a-b),
//       input : newArr,
//       target:  newNum,
//       output:  pos
  
//     }
//     result[index] = item;
//   }
//   return result;

//     // var target;
//     // for(var i =0 ; i < testLengthArray.length ; i++){
//     //   if(target != testLengthArray[i]){
//     //     console.log("not found!");
//     //   }else if(target == testLengthArray[0] ){
//     //     console.log("First index");
//     //   }else if(target == testLengthArray[testLengthArray.length - 1] ){
//     //     console.log("Last index");
//     //   }else{
//     //     console.log("Middle index");
//     //   }

//     // }
// }

function generate(testLengthArray){
  const result = [];
  for (let i = 0; i < testLengthArray.length; i++) {
    const  inputLength = testLengthArray[i];
    const item = {
      input: [],
      output: null,
      target: null
    };
    
    for (let j = 0; j < inputLength; j++) {
      item.input.push(Math.floor(Math.random() * 20000 - 10000));
    }

    item.input = item.input.sort((a,b) => a-b);
    item.target = Math.floor(Math.random() * 20000 - 10000);
    item.output = item.input.indexOf(item.target);
    
    
    
    
    if (i == 0) {
      // *Not found*: `input` doesn't contain `target`.
      item.target = 10001;
      item.output = -1;
    } 
    else if (i == 1) {
      //- *First index*: `target` is at index `0`.
      item.target = item.input[0];
      item.output = 0;
    }  
    else if (i == 2) {
      //- *Last index*: `target` is at index `input.length-1`.
      item.target = item.input[item.input.length - 1];
      item.output = item.input.length - 1;
    }  
    else if (i == 3) {
      //- *Middle index*: `target` is NOT at index `0` or `input.length-1`.
      item.target = item.input[1];
      item.output = 1;
    } 
    else {
      item.target = Math.floor(Math.random() * 20000 - 10000);
      item.output = item.input.indexOf(item.target);
    }

    result.push(item);
  }
  return result;
}

module.exports = generate
