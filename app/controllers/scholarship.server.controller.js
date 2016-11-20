

exports.sponsorscholarship = function(req, res) {
    res.render('sponsorscholarship', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });
};

exports.applyscholarship = function(req, res) {
    res.render('applyscholarship', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
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
	
