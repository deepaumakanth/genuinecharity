var sponsorshipcontroller = require('../controllers/scholarship.server.controller'),
    checksignedincontroller = require('../controllers/checksignedin.server.controller');


module.exports = function(app){
  app.route('/sponsorscholarship')
      .get(checksignedincontroller.checksignedin,sponsorshipcontroller.sponsorscholarship);

  app.route('/applyscholarship')
      .get(checksignedincontroller.checksignedin,sponsorshipcontroller.applyscholarship);

app.route('/addsponsor')
      .post(sponsorshipcontroller.addsponsor);

};

