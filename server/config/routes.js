//requirements
const mongoose = require('mongoose');
const path = require('path');
//classes & controllers
const user = mongoose.model('User')
const userController = require('./../controllers/user');

module.exports = function(app) {

    app.get('/users', userController.show);
    app.post('/user', userController.getById);
    app.post('/users', userController.create);

    app.post('/login', userController.login);

    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });

}
