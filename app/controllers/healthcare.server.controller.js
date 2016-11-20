/**
 * Created by sarin on 11/19/16.
 */

exports.healthcare = function(req, res) {
    res.render('healthcare', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};
