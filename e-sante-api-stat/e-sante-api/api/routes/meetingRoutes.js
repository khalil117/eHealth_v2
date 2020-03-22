module.exports = function (app) {
    var meetingCtrl = require('../controllers/meetingController');
    var cors = require('cors');

    // sante Routes
    app.use(cors());

    app.route('/info/meetings/doctor/:userId')
        .get(meetingCtrl.list_all_doctor_meeting);

    app.route('/info/meetings/user/:userId')
        .get(meetingCtrl.list_all_user_meeting);

    app.route('/info/meetings')
        .post(meetingCtrl.create_meeting);

    app.route('/info/meetings/:meetingId')
        .get(meetingCtrl.show_meeting)
        .put(meetingCtrl.update_meeting)
        .delete(meetingCtrl.delete_meeting); 
};
