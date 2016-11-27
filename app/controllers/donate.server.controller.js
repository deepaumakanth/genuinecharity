var sequelize = require("../../config/sequelize").getSequelize;

exports.donate = function(req, res) {
    res.render('donate', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
};

exports.adddonation = function(req, res) {
	var name =  req.body.name,
        phone = req.body.phone,
        value = req.body.value,
        quantity = req.body.quantity,
        contribution_type = req.body.contribution_type,
        email =  req.body.email;
        console.log("donation:"+quantity);


    var query = "insert into contributions (name, email,phone,value,contribution_type,quantity) values (:name, :email, :phone, :value,:contribution_type,:quantity)";
    sequelize.query(query, { replacements: {name: name,email:email, phone: phone, value: value, contribution_type: contribution_type, quantity: quantity }})
        .then(function(success) {
           console.log("donation successful"+JSON.stringify(success));

                return res.status(200).send({success:"success"});
            }).catch(function(err){
                console.log("scholarships could not be added"+JSON.stringify(err));
                return res.status(401).send({ error:err })
            });

};