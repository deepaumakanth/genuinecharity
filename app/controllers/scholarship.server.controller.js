

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