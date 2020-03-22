module.exports = function (app) {
    var user = require('../controllers/userController');
    var cors = require('cors');

    // eSante user Routes
    app.use(cors());
    app.route('/users')
        .get(user.list_all_users)
        .post(user.create_a_user);

    app.route('/doctor/users/:userId')
        .get(user.show_a_user);

    app.route('/users/:userId')
        .get(user.show_a_user)
        .put(user.update_a_user)
        .delete(user.delete_a_user);

    app.route('/login')
        .post(user.login_a_user);

};
