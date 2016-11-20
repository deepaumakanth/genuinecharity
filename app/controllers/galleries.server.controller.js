/**
 * Created by sarin on 11/19/16.
 */

exports.galleries = function(req, res) {
    res.render('galleries', {
        title: "Ffutche Foundation",
        user: JSON.stringify(req.user)
    });

};
