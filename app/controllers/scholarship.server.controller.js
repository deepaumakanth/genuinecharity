

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