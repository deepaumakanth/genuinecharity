
var sequelize = require("../../config/sequelize").getSequelize;

exports.sponsorscholarship = function(req, res) {
    res.render('sponsorscholarship', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
};

exports.applyscholarship = function(req, res) {
    res.render('applyscholarship', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
};

exports.addsponsor = function(req, res) {
	var name =  req.body.name,
      amount = req.body.amount,
      prerequisite = req.body.prerequisite,
      expiry = req.body.expiry,
      type = req.body.type;
     // email_id =  req.user.email_id;

                //console.log("Email Id:"+ req.user.email_id);


              var query = "insert into scholarships (name, amount,prerequisite,expiry,type) values (:name, :amount, :prerequisite, :expiry,:type)";
              sequelize.query(query, { replacements: {name: name, amount: amount, prerequisite: prerequisite, expiry: expiry, type: type }})
            .then(function(success) {
              console.log("deepa");
                //return res.status(200).send({success:"success"});
                var query = "insert into user_sponsors_scholarship (email_id, sponsorship_id) values (:email_id, :sponsorship_id)";
                sequelize.query(query, { replacements: {email_id: email_id, sponsorship_id: sponsorship_id }})
                .then(function (success) {
                return res.status(200).send({success:"success"});

                });

            }).catch(function(err){
                console.log("scholarships could not be added"+JSON.stringify(err));
                return res.status(401).send({ error:err })
            });
            

        res.render('applyscholarship', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
    
  };
  
	
