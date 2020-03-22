module.exports = function (app) {
    var sante = require('../controllers/diseasestatController');
    var cors = require('cors');

    // sante Routes
    app.use(cors());

    app.route('/sante/diseases/')
        .get(sante.list_all_diseases_stat);

    };