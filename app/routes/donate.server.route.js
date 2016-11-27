var donatecontroller = require('../controllers/donate.server.controller');

module.exports = function(app){
  app.route('/donate')
      .get(donatecontroller.donate);

 app.route('/adddonation')
      .post(donatecontroller.adddonation);


  };
