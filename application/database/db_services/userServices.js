const { User } = require('../db_models/userModel');

module.exports = class UserManager {

    static createUser(name) {
        return new User(name);
    }

}