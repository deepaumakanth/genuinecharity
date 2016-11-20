
var index = require('../controllers/index.server.controller')


exports.home = function(app){
    app.get('/', index.renderHome);

    app.route('/ourwork').get(index.ourwork);
    app.route('/aboutus').get(index.aboutus);



};



