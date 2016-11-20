/**
 * Created by sarin on 11/19/16.
 */

exports.galleries = function(req, res) {
    res.render('galleries', {
        title: "Ffutche Foundation",
        userFirstName: req.user ? req.user.firstname : '',
        userLastName: req.user ? req.user.lastname : ''
    });

};
