module.exports = function (app) {
    var info = require('../controllers/infoController');
    var cors = require('cors');

    // info info Routes
    app.use(cors());

    app.route('/infos/blood/:userId')
        .get(info.show_a_blood)
        .put(info.update_a_blood);

    app.route('/infos/blood')
        .post(info.create_a_blood);

    // heights
    app.route('/infos/heights')
        .post(info.create_a_height);

    app.route('/infos/heights/history')
        .post(info.create_a_height_history);

    app.route('/infos/heights/history/:heightId')
        .get(info.list_all_heights);

    app.route('/infos/heights/history/:heightId')
        .delete(info.delete_a_height_history);

    app.route('/infos/heights/:userId')
        .get(info.show_a_height);

    app.route('/infos/heights/:heightId')
        .put(info.update_a_height);

    // weights
    app.route('/infos/weights')
        .post(info.create_a_weight);

    app.route('/infos/weights/history')
        .post(info.create_a_weight_history);

    app.route('/infos/weights/history/:weightId')
        .get(info.list_all_weights);

    app.route('/infos/weights/history/:weightId')
        .delete(info.delete_a_weight_history);

    app.route('/infos/weights/:userId')
        .get(info.show_a_weight);

    app.route('/infos/weights/:weightId')
        .put(info.update_a_weight);

};