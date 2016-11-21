var sequelize = require("../../config/sequelize").getSequelize;

exports.sponsorscholarship = function(req, res) {
    res.render('sponsorscholarship', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
};

exports.renderapplyscholarship = function(req, res) {
    res.render('applyscholarship', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : '',
        scholarships: req.scholarships ? req.scholarships.scholarships : ''
    });
};

exports.addsponsor = function(req, res) {

	var scholarship = {
      name: req.params.name,
      amount: req.params.amount
    
  };
  console.log("dpa:"+scholarship);

    res.render('addsponsorconfirmation', {
     title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
     });
};

exports.retrieve_valid_scholarships = function(req,res,next){
    var query = "select scholarship_id,name,amount,prerequisite,expiry,type from scholarships where expiry >= :date";
    sequelize.query(query, { replacements: {date: (new Date()).toISOString().substring(0, 10) },type: sequelize.QueryTypes.SELECT})
        .then(function(scholarships) {
            console.log("scholarship retrieval successful"+JSON.stringify(scholarships));
            req.scholarships = {"scholarships":scholarships};
            next();
        }).catch(function(err){
            console.log("scholarship retrieval error"+JSON.stringify(err));
            return res.status(401).send({ error:err })
        });
};

exports.applyscholarship = function(req, res){
    console.log("inside applyscholarship controller"+JSON.stringify(req.body));
        var  email_id = req.user.email_id,
            scholarship_id = req.body.scholarship_id;
        var query = "insert into user_applies_scholarship (email_id, scholarship_id) values (:email_id, :scholarship_id)";
        sequelize.query(query, { replacements: {email_id: email_id,scholarship_id: scholarship_id }})
            .then(function(success) {
                console.log("apply scholarship successful"+JSON.stringify(success));

                return res.status(200).send({success:"success"});
            }).catch(function(err){
                console.log("apply scholarship error in query"+JSON.stringify(err));
                return res.status(401).send({ error:err })
            });



};


