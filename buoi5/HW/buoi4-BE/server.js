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

app.get('/random', function(req, res){ 
    const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    const questionid = Math.floor(Math.random() * list.length);
    // const question = list.filter(function (item) {
    //     return item.id == questionid;
    // })[0];
    const question = list[questionid];
    res.send(question);
})

app.post('/vote/:questionid', function(request, response) {
    const questionId = request.params.questionid;
    const vote = request.body.vote;
    //console.log(typeof request.params.questionId);
    console.log(request);
    const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == questionId) {
            if (vote == 'yay') {
                list[i].yay += 1;
            } else {
                list[i].nay += 1;
            }
        }
    }
    fs.writeFileSync('questions.json', JSON.stringify(list));
    response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+questionId);
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
