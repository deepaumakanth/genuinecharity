/**
 * Created by sarin on 11/19/16.
 */

var healthcarecontroller = require('../controllers/healthcare.server.controller');

module.exports = function(app){
    app.route('/healthcare')
        .get(healthcarecontroller.healthcare)
};