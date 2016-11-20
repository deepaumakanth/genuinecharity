/**
 * Created by sarin on 11/19/16.
 */


exports.contactus = function(req, res) {
    res.render('contactus', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};