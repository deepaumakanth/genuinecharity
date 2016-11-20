/**
 * Created by vipul on 4/23/2016.
 */
exports.renderHome = function(req, res) {
    res.render('index', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });
};