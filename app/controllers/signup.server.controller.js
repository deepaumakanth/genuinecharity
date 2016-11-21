/**
 * Created by sarin on 11/20/16.
 */

var sequelize = require("../../config/sequelize").getSequelize;

exports.rendersignup = function(req, res) {
    res.render('signup', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};

exports.signup = function(req, res){
    console.log("inside signup controller"+JSON.stringify(req.body));
    if (!req.user) {
        var  email_id = req.body.email,
            password = req.body.password,
            firstname = req.body.firstname,
            lastname = req.body.lastname,
            address = req.body.address,
            phone = req.body.phone,
            marital_status = req.body.marital_status,
            gender = req.body.gender,
            occupation = req.body.occupation;

        // var query = "exec dbo.sp_insert_person 'vipul.sarin@google.com','abcde','Vipul','Sarin'"
        var query = "insert into users (email_id, password,firstname,lastname,address,phone,marital_status,sex,occupation) values (:email_id, :password, :firstname, :lastname,:address,:phone,:marital_status,:gender,:occupation)";
        sequelize.query(query, { replacements: {email_id: email_id, password: password, firstname: firstname, lastname: lastname, address: address, phone: phone, marital_status:marital_status, gender: gender, occupation: occupation }})
            .then(function(success) {
                console.log("signup person successful"+JSON.stringify(success));
                req.login({"email_id" : email_id}, function(err){
                    if (err) return next(err);
                });
                return res.status(200).send({success:"success"});
            }).catch(function(err){
                console.log("signup user error in query"+JSON.stringify(err));
                return res.status(401).send({ error:err })
            });

    } else {
        return res.redirect('/');
    }


};