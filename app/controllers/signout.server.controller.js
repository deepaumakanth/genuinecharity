/**
 * Created by sarin on 11/20/16.
 */
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};