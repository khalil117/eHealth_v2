module.exports = function (app) {
    var user = require('../controllers/userController');
    var cors = require('cors');

    // eSante user Routes
    app.use(cors());
    app.route('/doctors')
        .get(user.list_all_dr);
    app.route('/medecin')
        .get(user.list_all_dr_user);
};
