module.exports = function (app) {
    var medical = require('../controllers/medicalController');
    var treatingCtrl = require('../controllers/treatingController'); 
    var cors = require('cors');

    // medical Routes
    app.use(cors());

    //analysis
    app.route('/medical/analysis/:userId').get(medical.list_all_analysis);
    app.route('/medical/analysis').post(medical.create_a_analysis);
    app.route('/medical/analysis/:analysisId')
        .get(medical.show_a_analysis)
        .put(medical.update_a_analysis)
        .delete(medical.delete_a_analysis);

    //consultation
    app.route('/medical/consultation/:userId').get(medical.list_all_consultation);
    app.route('/medical/consultation').post(medical.create_a_consultation);
    app.route('/medical/consultation/:consultationId')
        .get(medical.show_a_consultation)
        .put(medical.update_a_consultation)
        .delete(medical.delete_a_consultation);

    //doctor
    app.route('/medical/doctor/:userId').get(medical.list_all_doctor);
    app.route('/medical/doctor').post(medical.create_a_doctor);
    app.route('/medical/doctor/:doctorId')
        .get(medical.show_a_doctor)
        .put(medical.update_a_doctor)
        .delete(medical.delete_a_doctor);

    //radiology
    app.route('/medical/radiology/:userId').get(medical.list_all_radiology);
    app.route('/medical/radiology').post(medical.create_a_radiology);
    app.route('/medical/radiology/:radiologyId')
        .get(medical.show_a_radiology)
        .put(medical.update_a_radiology)
        .delete(medical.delete_a_radiology);

    //treating
    app.route('/medical/doctor/treatings/doctor/:userId')
        .get(treatingCtrl.list_all_doctor_treating);

    app.route('/medical/doctor/treatings/user/:userId')
        .get(treatingCtrl.list_all_user_treating);

    app.route('/medical/doctor/treatings/')
        .post(treatingCtrl.create_treating)
        .get(treatingCtrl.list_all_user_treating_proved);

    app.route('/medical/doctor/treatings/:treatingId')
        .get(treatingCtrl.show_treating)
        .put(treatingCtrl.update_treating)
        .delete(treatingCtrl.delete_treating); 

};