const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();

// app.get('/', function (request, response) {
//     console.log('Homepage');
//     response.sendfile(__dirname + '/index.html');

// });

app.use(cors());

app.use(bodyParser.urlencoded({ extended : false }));

//Add question
app.post('/addquestion', function (request, response) {
    console.log("Received!");
    // request.on('data', function(data) {
    //     //console.log("Data: " + data);
    //     console.log("Data: " , data +"");
    // })
    console.log(request.body);
    const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    const lastQ = list[list.length - 1];

    const question = {
        id:1,
        content:request.body.question,
        yay:0,
        nay:0
    }
 
    if (lastQ) {
        question.id = lastQ.id + 1;
    }   
    
    list.push(question);
    
    fs.writeFileSync('questions.json', JSON.stringify(list));
    response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+question.id);
});

app.post('/', function(request, response) {
    console.log("Received2!");
    console.log(request.body.btn_yesno);
    const res = request.body.btn_yesno;
    console.log(request.params);
    const questionid = request.params.questionid;
    const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    const lastQ = list[list.length - 1];
    // console.log(request.params);
    // request.on('data', function(data) {
    //     //console.log("Data: " + data);
    //     console.log("Data: " , data +"");
    // })
    //response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+1);
})

//param
app.get('/questionInfo/:questionid', function (request, response) {
    console.log(request.params);
    const questionid = request.params.questionid;
    const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    const question = list.filter(function (item) {
        return item.id == questionid;
    })[0];
    response.send(question);
})

// app.get('/style.css', function (request, response) {
//     response.sendfile(__dirname + '/img/style.css');
// })

// app.get('/colorpicker.gif', function (request, response) {
//     response.sendfile(__dirname + '/img/colorpicker.gif');
// })

//app.use(express.static('img'));

const port = 6789;
app.listen(port, function (err) {
    if (err) console.log(err);
    else console.log("Server started!!");
})
