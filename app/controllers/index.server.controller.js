
exports.renderHome = function(req, res) {
    res.render('index', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : '',
        signedIn: req.session.signedIn ? req.session.signedIn : '',
        attemptedURL: req.session.attemptedURL ? req.session.attemptedURL : ''
    });
};

exports.ourwork = function(req, res) {
    res.render('ourwork', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};

exports.aboutus = function(req, res) {
    res.render('aboutus', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};

exports.setsigninSession = function(req,res){
    req.session.signedIn=undefined;
    res.status(200).send({})
};
exports.getinvolved = function(req, res) {
    res.render('getinvolved', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};


