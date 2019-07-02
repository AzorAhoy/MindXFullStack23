const fs = require('fs');

function getObjFromFile(path) {
    const fileData = fs.readFileSync(path, {encoding: 'utf-8'});
//console.log(fileData);
return JSON.parse(fileData);
//console.log("My name is " + fileDataObj.name + ", " + fileDataObj.Age + " years old,");
}

console.log( typeof getObjFromFile('objData.txt'));
console.log( JSON.stringify(getObjFromFile('objData.txt')));

module.exports = {
    getObjFromFile,
    test: 10
};