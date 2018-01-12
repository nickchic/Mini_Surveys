var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

module.exports = {
    index: (request, response) => {
        Survey.find({}).populate('user').exec()
            .then( (surveys) => {
                response.json(surveys);
            })
            .catch(error => console.log(error))
    },
    create: (request, response) => {
        let new_survey = request.body;
        console.log('user inside survey create', request.body.user);
        Survey.create(new_survey)
            .then( survey => {
                return User.findById(request.body.user._id)
                    .then((user)=> {
                        user.surveys.push(survey);
                        user.save();
                        response.json(survey);
                    })
                console.log('new survey!', survey);
            })
            .catch(error => {
                response.send(400,{error: error})
                console.log(error)
            })
    },
    destroy: (request, response) => {
        Survey.findByIdAndRemove(request.params.id)
            .then( survey => {
                response.json(survey);
            })
            .catch(error => console.log(error))
    },
    update: (request, response) => {
        Survey.findById(request.params.id)
            .then((survey)=>{
                survey.question = request.body.question;
                survey.options = request.body.options;
                return survey.save()
                    .then(survey=>{
                        console.log('saved');
                        response.json(survey);
                    })
            })
            .catch(error => console.log(error))
    },
    show: (request, response) => {
        Survey.findById(request.params.id).populate('user').exec()
        .then( (survey) => {
            response.json(survey);
        })
        .catch(error => console.log(error))
    }
}
