//requirements
const mongoose = require('mongoose');
const path = require('path');
//classes & controllers
const user = mongoose.model('User')
const userController = require('./../controllers/user');
const survey = mongoose.model('Survey')
const surveyController = require('./../controllers/survey');

module.exports = function(app) {

    app.get('/api/users', userController.index);
    app.get('/api/user/:id', userController.show);
    app.post('/api/users', userController.create);
    app.put('/api/users/:id', userController.update);
    app.delete('/api/users/:id', userController.destroy);

    app.post('/api/login', userController.login);

    app.get('/api/survey', surveyController.index);
    app.get('/api/survey/:id', surveyController.show);
    app.post('/api/survey', surveyController.create);
    app.put('/api/survey/:id', surveyController.update);
    app.delete('/api/survey/:id', surveyController.destroy);

    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });

}
