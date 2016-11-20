
exports.renderHome = function(req, res) {
    res.render('index', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};

exports.ourwork = function(req, res) {
    res.render('ourwork', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};
