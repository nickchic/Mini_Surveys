var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 8},
    options: {
        type:[{
            option: { type: String, required: true, minlength: 3},
            votes: { type: Number, required: true},
        }],
        validate:[arrayLimit, 'Need 4 options']
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
},{ timestamps: true })

function arrayLimit(val){
    return val.length == 4;
}

mongoose.model('Survey', SurveySchema);
var User = mongoose.model('Survey')
