/**
 * Created by sarin on 11/19/16.
 */


exports.contactus = function(req, res) {
    res.render('contactus', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};