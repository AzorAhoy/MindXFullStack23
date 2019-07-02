const express = require('express');
const app = express();

app.get('/', function (request, response) {
    console.log('Homepage');
    response.sendfile(__dirname + '/index.html');

});

// app.get('/style.css', function (request, response) {
//     response.sendfile(__dirname + '/img/style.css');
// })

// app.get('/colorpicker.gif', function (request, response) {
//     response.sendfile(__dirname + '/img/colorpicker.gif');
// })

app.use(express.static('img'));

const port = 6969;
app.listen(port, function (err) {
    if (err) console.log(err);
    else console.log("Server started!!");
})
