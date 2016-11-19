/**
 * Created by vipul on 4/23/2016.
 */
exports.renderHome = function(req, res) {
	console.log("test")
    res.render('index', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};

exports.healthcare = function(req, res) {
    res.render('healthcare', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};
