/**
 * Created by sarin on 11/19/16.
 */
var galleriescontroller = require('../controllers/galleries.server.controller');

module.exports = function(app){
    app.route('/galleries')
        .get(galleriescontroller.galleries)
};