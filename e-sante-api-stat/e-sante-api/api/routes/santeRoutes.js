module.exports = function (app) {
    var sante = require('../controllers/santeController');
    var cors = require('cors');

    // sante Routes
    app.use(cors());

    app.route('/sante/allergies/').get(sante.list_all_allergies_stat);

    app.route('/sante/allergies/:userId').get(sante.list_all_allergies);

    app.route('/sante/allergies')
        .post(sante.create_a_allergy);


    app.route('/sante/allergies/:allergyId')
        .get(sante.show_a_allergy)
        .put(sante.update_a_allergy)
        .delete(sante.delete_a_allergy);

    //diseases
    app.route('/sante/diseases/').get(sante.list_all_diseases_stat);
    app.route('/sante/diseases/:userId').get(sante.list_all_diseases);
    app.route('/sante/diseases').post(sante.create_a_disease);
    app.route('/sante/diseases/:diseaseId')
        .get(sante.show_a_disease)
        .put(sante.update_a_disease)
        .delete(sante.delete_a_disease);

    //medicaments
    app.route('/sante/medicaments/:userId').get(sante.list_all_medicaments);
    app.route('/sante/medicaments').post(sante.create_a_medicament);
    app.route('/sante/medicaments/:medicamentId')
        .get(sante.show_a_medicament)
        .put(sante.update_a_medicament)
        .delete(sante.delete_a_medicament);

    //surgerys
    app.route('/sante/surgerys/:userId').get(sante.list_all_surgerys);
    app.route('/sante/surgerys').post(sante.create_a_surgery);
    app.route('/sante/surgerys/:surgeryId')
        .get(sante.show_a_surgery)
        .put(sante.update_a_surgery)
        .delete(sante.delete_a_surgery);

    //vaccinations
    app.route('/sante/vaccinations/:userId').get(sante.list_all_vaccinations);
    app.route('/sante/vaccinations').post(sante.create_a_vaccination);
    app.route('/sante/vaccinations/:vaccinationId')
        .get(sante.show_a_vaccination)
        .put(sante.update_a_vaccination)
        .delete(sante.delete_a_vaccination);

    //teeths
    app.route('/sante/teeths/:userId').get(sante.list_all_teeths);
    app.route('/sante/teeths').post(sante.create_a_teeth);
    app.route('/sante/teeths/:teethId')
        .get(sante.show_a_teeth)
        .put(sante.update_a_teeth)
        .delete(sante.delete_a_teeth);
};