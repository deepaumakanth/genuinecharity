var sequelize = require("../../config/sequelize").getSequelize;

exports.sponsorscholarship = function(req, res) {
    res.render('sponsorscholarship', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
};

exports.renderAppliedScholarships = function(req, res) {
    res.render('appliedscholarships', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : '',
        appliedScholarships: req.appliedScholarships ? req.appliedScholarships.appliedScholarships : ''
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

exports.rendersponsorconfirmation = function(req, res) {
    res.render('addsponsorconfirmation', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : '',
    });
};

exports.addsponsor = function(req, res,next) {
	var name =  req.body.name,
        amount = req.body.amount,
        prerequisite = req.body.prerequisite,
        expiry = req.body.expiry,
        type = req.body.type,
        email_id =  req.user.email_id;


    var query = "insert into scholarships (name, amount,prerequisite,expiry,type) values (:name, :amount, :prerequisite, :expiry,:type)";
    sequelize.query(query, { replacements: {name: name, amount: amount, prerequisite: prerequisite, expiry: expiry, type: type }})
        .then(function(success) {
            var query = "insert into user_sponsors_scholarship (email_id, scholarship_id) values (:email_id, :scholarship_id)";
            sequelize.query(query, { replacements: {email_id: email_id, scholarship_id: success[0].insertId }})
                .then(function (success) {
                    console.log("Insert sponsor scholarship success");
                    next()
                });
            }).catch(function(err){
                console.log("scholarships could not be added"+JSON.stringify(err));
                return res.status(401).send({ error:err })
            });

};

exports.retrieve_valid_scholarships = function(req,res,next){
    var query = "select * from scholarships where scholarship_id not in (select scholarship_id from user_applies_scholarship where email_id = :email_id) and expiry >= :date";
    sequelize.query(query, { replacements: {email_id: req.user.email_id,date: (new Date()).toISOString().substring(0, 10) },type: sequelize.QueryTypes.SELECT})
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
            scholarship_id = req.body.scholarship_id,
            no_of_children = req.body.no_of_children,
            school_termination = req.body.school_termination,
            parent_marital_status = req.body.parent_marital_status,
            father_name = req.body.father_name,
            father_age = req.body.father_age,
            phone = req.body.phone

        var query = "insert into user_applies_scholarship (email_id, scholarship_id,no_of_children,school_termination,parent_marital_status,father_name,father_age,phone) values (:email_id, :scholarship_id, :no_of_children, :school_termination, :parent_marital_status, :father_name, :father_age, :phone)";
        sequelize.query(query, { replacements: {email_id: email_id,scholarship_id: scholarship_id,no_of_children: no_of_children,school_termination: school_termination, parent_marital_status: parent_marital_status, father_name:father_name, father_age: father_age, phone: phone }})
            .then(function(success) {
                console.log("apply scholarship successful"+JSON.stringify(success));

                return res.status(200).send({success:"success"});
            }).catch(function(err){
                console.log("apply scholarship error in query"+JSON.stringify(err));
                return res.status(401).send({ error:err })
            });
};

exports.retrieve_applied_scholarships = function(req,res,next){
    var query = "select s.name,s.amount,s.prerequisite,s.expiry,s.type from scholarships as s inner join user_applies_scholarship as u on s.scholarship_id = u.scholarship_id where u.email_id = :email_id";
    sequelize.query(query, { replacements: {email_id: req.user.email_id },type: sequelize.QueryTypes.SELECT})
        .then(function(appliedScholarships) {
            console.log("appliedScholarships retrieval successful"+JSON.stringify(appliedScholarships));
            req.appliedScholarships = {"appliedScholarships":appliedScholarships};
            next();
        }).catch(function(err){
            console.log("appliedScholarships retrieval error"+JSON.stringify(err));
            next();
        });
};
