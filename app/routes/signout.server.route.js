/**
 * Created by sarin on 11/20/16.
 */

var signoutcontroller = require('../controllers/signout.server.controller');

module.exports = function(app) {
    app.get('/signout', signoutcontroller.signout)
}