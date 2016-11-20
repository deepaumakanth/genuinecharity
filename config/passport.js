/**
 * Created by vipul on 4/23/2016.
 */
var passport = require('passport')

var sequelize = require("./sequelize").getSequelize;

module.exports = function(){

    passport.serializeUser(function(person, done){
        console.log("serial person == "+JSON.stringify(person));
        done(null, person.email_id);
    });

    passport.deserializeUser(function(email_id, done){
        console.log('deserial email == '+email_id);
        var query = "select email_id, firstname, lastname from users where email_id = :email_id";
        sequelize.query(query, { replacements: {email_id: email_id }, type: sequelize.QueryTypes.SELECT})
            .then(function(person) {
                done(null,person[0]);
            })

    });
    require('./strategies/local.js')();
    //require('./strategies/facebook.js')();
};