
var index = require('../controllers/index.server.controller')


exports.home = function(app){
    app.get('/', index.renderHome);
};

