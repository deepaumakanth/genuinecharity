var scholarshipcontroller = require('../controllers/scholarship.server.controller'),
    checksignedincontroller = require('../controllers/checksignedin.server.controller');


module.exports = function(app){
  app.route('/sponsorscholarship')
      .get(checksignedincontroller.checksignedin,scholarshipcontroller.sponsorscholarship);

  app.route('/applyscholarship')
      .get(checksignedincontroller.checksignedin,scholarshipcontroller.retrieve_valid_scholarships,scholarshipcontroller.renderapplyscholarship)
      .post(scholarshipcontroller.applyscholarship);

app.route('/addsponsor')
      .post(scholarshipcontroller.addsponsor,scholarshipcontroller.rendersponsorconfirmation);
app.route('/appliedscholarships')
    .get(scholarshipcontroller.retrieve_applied_scholarships,scholarshipcontroller.renderAppliedScholarships)
};

