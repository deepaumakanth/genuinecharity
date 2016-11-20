/**
 * Created by sarin on 11/20/16.
 */

var signupcontroller = require('../controllers/signup.server.controller');

module.exports = function(app) {
    app.route('/register')
        .get(signupcontroller.rendersignup)
        .post(signupcontroller.signup);
}