/**
 * Created by sarin on 11/19/16.
 */

var contactuscontroller = require('../controllers/contactus.server.controller');

module.exports = function(app){
    app.route('/contactus')
        .get(contactuscontroller.contactus)
};
