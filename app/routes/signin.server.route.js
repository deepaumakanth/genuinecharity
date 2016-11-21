/**
 * Created by sarin on 11/20/16.
 */

var passport = require('passport');

module.exports = function(app) {
    app.post('/signin', function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                console.log("error in signin server "+JSON.stringify(info));
                return res.status(401).send({ error:info["message"] });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                req.session.signedIn = "true";
                return res.status(200).send({success:"success"});
            });
        })(req, res, next);
    });
};