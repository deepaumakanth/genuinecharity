

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
	
