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
    },function(email_id, password, done){
        console.log("Inside local.js")
        var query = "select email_id,password from users where email_id=:email_id";
        sequelize.query(query, { replacements: {email_id: email_id}, type: sequelize.QueryTypes.SELECT})
            .then(function(ret) {
                if (ret.length == 0)
                    return done(null, false, {
                        message: 'Unknown user'
                    });
                if(ret[0].password != password){
                    console.log("invalid password")
                    return done(null, false, {
                        message: "Invalid password"
                    });
                }
                else{
                    return done(null,ret[0]);
                }

            }).catch(function(err){
                console.log("signup user error in query"+JSON.stringify(err));
                return done(null, false, {
                    message: 'Unknown user'
                });
            });
    }));
};