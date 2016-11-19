
var index = require('../controllers/index.server.controller')


exports.home = function(app){
    app.get('/', index.renderHome);
};

exports.healthcare =  function(app) {
app.get('/healthcare',index.healthcare);
};

 