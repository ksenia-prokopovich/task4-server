const User = require("../models/").user;

const UserService = {
    findAll: () => {
        return User.findAll();
    },
    findOne: (id) => {
        return User.findOne({where: {id: id}});
    },
    destroy: (id) => {
        return User.destroy({where: {id: id}});
    },
    create: (body) => {
        return User.create(body);
    },
    signIn: (email, password) => {
        console.log(email, password)
        return User.findOne({where: {email: email, password: password}});
    }
}

module.exports = UserService
