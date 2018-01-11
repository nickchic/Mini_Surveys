var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 8},
    options: {
        type:[{
            option: { type: String, required: true, minlength: 2},
            votes: { type: Number, required: true},
        }],
        validate:[arrayLimit, 'Need at least 2 options']
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
},{ timestamps: true })

function arrayLimit(val){
    return val.length >= 2;
}

mongoose.model('Survey', SurveySchema);
var User = mongoose.model('Survey')
