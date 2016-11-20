/**
 * Created by sarin on 11/19/16.
 */

exports.healthcare = function(req, res) {
    res.render('healthcare', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};
