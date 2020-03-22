module.exports = function (app) {
    var sante = require('../controllers/statController');
    var cors = require('cors');

    // sante Routes
    app.use(cors());

    app.route('/stat/allergies')
        .post(sante.list_all_allergies_stat);

    // app.route('/sante/allergies')
    //     .post(sante.create_a_allergy);


    // app.route('/sante/allergies/:allergyId')
    //     .get(sante.show_a_allergy)
    //     .put(sante.update_a_allergy)
    //     .delete(sante.delete_a_allergy);


};