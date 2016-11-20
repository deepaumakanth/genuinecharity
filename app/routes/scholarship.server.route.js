var sponsorshipcontroller = require('../controllers/scholarship.server.controller');

module.exports = function(app){
  app.route('/sponsorscholarship')
      .get(sponsorshipcontroller.sponsorscholarship);

  app.route('/applyscholarship')
      .get(sponsorshipcontroller.applyscholarship);

app.route('/addsponsor')
      .get(sponsorshipcontroller.addsponsor);

};

