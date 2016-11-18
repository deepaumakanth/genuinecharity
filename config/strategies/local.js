/**
 * Created by vipul on 4/27/2016.
 */
/**
 * Created by sarin on 10/21/15.
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    sequelize = require("../../config/sequelize").getSequelize,
    bcrypt = require('bcryptjs');

module.exports = function() {
    passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password'
    },function(email, password, done){

    }));
};