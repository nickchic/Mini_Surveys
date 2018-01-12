var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

function completeLogin(request, response, user) {
    console.log('complete login');

    request.session.user = user.toObject();
    delete request.session.user.password;

    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);
    console.log('now', Date.now());
    console.log('later', Date.now() + 86400 * 1000);

    response.json(user);
}

function toTitleCase(string) {
    return string.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
        return match.toUpperCase();
    });
}

module.exports = {
    index: (request, response) => {
        User.find({})
            .then( (users) => {
                response.json(users);
            })
            .catch(error => console.log(error))
    },
    create: (request, response) => {
        let new_user = request.body;
        console.log(new_user);
        new_user.password_hash = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(9));
        new_user.first_name = toTitleCase(new_user.first_name);
        new_user.last_name = toTitleCase(new_user.last_name);
        new_user.email = new_user.email.toLowerCase();
        User.create(new_user)
            .then( user => {
                return completeLogin(request, response, user);
                console.log('new user!', user);
            })
            .catch(error => {
                response.send(400,{error: error})
                console.log(error)
            })
    },
    destroy: (request, response) => {
        User.findByIdAndRemove(request.params.id)
            .then(() => console.log("deleted"))
            .catch(error => console.log(error))
    },
    update: (request, response) => {
        User.findById(request.params.id)
            .then((user)=>{
                user.title = request.body.title;
                user.first_name = request.body.first_name;
                user.last_name = request.body.last_name;
                user.email = request.body.email;
                user.password = request.body.password;
                return user.save()
                    .then(()=>console.log(saved))
            })
            .catch(error => console.log(error))
    },
    login: (request, response) => {
        console.log(request.body);
        User.findOne({ email: request.body.email })
        .then( (user) => {
            if(user === null){
                response.send(400,{error: 'No such user.'})
            }
            console.log('request.body', request.body.password);
            console.log('user.password_hash', user.password_hash);
            if(bcrypt.compareSync(request.body.password, user.password_hash)){
                console.log('password good');
                return completeLogin(request, response, user);
            } else {
                throw new Error();
            }
        })
        .catch(error => console.log(error))
    },
    show: (request, response) => {
        console.log('getbyid', request.body);
        User.findById(request.body).populate('surveys').exec()
        .then( (user) => {
            response.json(user);
        })
        .catch(error => console.log(error))
    },
    logout: (request, response) => {
        console.log('logging out');

        request.session.destroy();

        response.clearCookie('userID');
        response.clearCookie('expiration');

        response.json(true);
    }
}
