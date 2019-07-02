const fs = require('fs');

// console.log("Hello world");

// fs.writeFile('data.txt', "HELLO WORLD!!", function (err, data) {
//     if (err) {
//         console.log('Fail');
//     } else {
//         console.log('Success');
//     }
// });

// fs.writeFileSync('dataSync.txt', new Date().valueOf());

// console.log("After write file",  new Date().valueOf());

// fs.readFile('data.txt', {encoding: 'utf-8'} ,function (err, data) {
//     if (err) {
//         console.log('Fail');
//     } else {
//         console.log('Success', data);
//     }
// });

// console.log('dataSync: ', fs.readFileSync('dataSync.txt', {encoding: 'utf-8'}));

const obj = {
    name : 'AJSN',
    Age : 2651,
}

//fs.writeFileSync('objData.txt', JSON.stringify(obj));
//console.log(JSON.stringify(obj));

// const fileData = fs.readFileSync('objData.txt', {encoding: 'utf-8'});
// //console.log(fileData);
// const fileDataObj = JSON.parse(fileData);
// console.log("My name is " + fileDataObj.name + ", " + fileDataObj.Age + " years old,");

const getObj = require('./module').getObjFromFile;

const fileDataObj = getObj('objData.txt');
console.log("My name is " + fileDataObj.name + ", " + fileDataObj.Age + " years old,");