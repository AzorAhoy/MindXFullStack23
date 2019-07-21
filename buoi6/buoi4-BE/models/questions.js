const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questionSchema = new schema({
    content: {
        type: String,
        require: true
    },
    yay: {
        type: Number,
        default: 0
    },
    nay: {
        type: Number,
        default: 0
    },
})

//const questionModel = mongoose.model("Question", questionSchema);

module.exports = mongoose.model("Question", questionSchema);
// questionModel.find({}).then(function(questions) {
//     console.log("Question:", questions);
// }).catch(function(err) {
//     console.log("Error: ", err);
// })