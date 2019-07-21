const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();

// app.get('/', function (request, response) {
//     console.log('Homepage');
//     response.sendfile(__dirname + '/index.html');

// });

mongoose.connect('mongodb://localhost:27017/FullStack', function(err) {
    if (err) console.log(err)
    else console.log("Connected to DB!")
})

const questionModel = require('./models/questions');

//find many questionModel.find({})
//find one questionModel.findOne({})
//find by id questionModel.findById(id)
//questionModel.create({field1:value1, field2: value2})
//Find one and update: questionModel.findOneAndUpdate({}, { })
//Find one and delete:questionModel.findOneAndDelete({}, {})
//questionModel.findByIdAndRemove = questionModel.findByIdAndDelete
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
    questionModel.create({
        content:request.body.question,
    }).then(function(questionCreated) {
        response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+questionCreated._id);
    }).catch(function(err) {
        console.log("Error: ", err);
    });
});

app.get('/random', function(req, res){ 
    // questionModel.find().then(function(questions){
    //     const random = Math.floor(Math.random() * questions.length);
    //     res.send(questions[random]);
    // })
    questionModel.count().then(function(count) {
        const random = Math.floor(Math.random() * count);
        console.log("random id: ",random);
        questionModel.findOne().skip(random).then(function(question) {
            console.log(question);
            console.log('content: %s, yay: %s, nay: %s', question.content, question.yay, question.nay);
            res.send(question);
        }).catch(function(err1) {
            console.log("Error: ", err1);
        })
    }).catch(function(err) {
        console.log("Error: ", err);
    });
})

app.post('/vote/:questionid', function(request, response) {
    const questionId = request.params.questionid+"";
    const vote = request.body.vote;
    //console.log(typeof request.params.questionId);
    console.log(typeof questionId);
    console.log(questionId);
    console.log(vote);
    questionModel.findById(questionId).then(function(question) {
        console.log(question);
        let yay = question.yay;
        let nay = question.nay;
        console.log('content: %s, yay: %s, nay: %s', question.content, question.yay, question.nay);
        if (vote == 'yay') {
            questionModel.findOneAndUpdate({_id:questionId},  {yay : yay + 1}).catch(function(err) {
                console.log("Error: ", err);
            });
        } else {
            questionModel.findOneAndUpdate({_id:questionId},  {nay : nay + 1}).catch(function(err) {
                console.log("Error: ", err);
            });
        }
        //response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+question._id);
    }).catch(function(err) {
        console.log("Error: ", err);
    })

    // questionModel.findOneAndUpdate({_id:questionId},  {nay : nay + 1}).catch(function(err) {
    //     console.log("Error: ", err);
    // });
    //questionFound.save();
    response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+questionId);
    // const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i].id == questionId) {
    //         if (vote == 'yay') {
    //             list[i].yay += 1;
    //         } else {
    //             list[i].nay += 1;
    //         }
    //     }
    // }
    // fs.writeFileSync('questions.json', JSON.stringify(list));
    // response.redirect('http://localhost:5000/chi_tiet.html/?questionId='+questionId);
})

//param
app.get('/questionInfo/:questionid', function (request, response) {
    console.log(request.params);
    const questionid = request.params.questionid;
    //const list = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
    questionModel.findById(questionid).then(function(question) {
        console.log(question);
        console.log('content: %s, yay: %s, nay: %s', question.content, question.yay, question.nay);
        response.send(question);
    }).catch(function(err) {
        console.log("Error: ", err);
    })
    // questionModel.findOne({_id: questionid}).then(function(question) {
    //     console.log(question);
    //     console.log('content: %s, yay: %s, nay: %s', question.content, question.yay, question.nay);
    //     response.send(question);
    // }).catch(function(err) {
    //     console.log("Error: ", err);
    // })
    // const question = list.filter(function (item) {
    //     return item.id == questionid;
    // })[0];
    
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
