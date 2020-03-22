var mongoose = require('mongoose');

// allergy
var Meeting = mongoose.model('Meetings');
var User = mongoose.model('Users');
exports.list_all_user_meeting = function (req, res, next) {
    Meeting.find({"user": req.params.userId}, function (err, meetings) {
        try {
            res.json(meetings);
        } catch (err) {
            next(err)
        }


    });
};
exports.list_all_doctor_meeting = function (req, res, next) {
    Meeting.find({"doctor": req.params.userId}, function (err, meetings) {
        try {
            res.json(meetings);
        } catch (err) {
            next(err)
        }
    });
};
exports.create_meeting = function (req, res, next) {
    console.log(req.body);
    User.findById(req.body.doctor, function (err, doctor) {
        User.findById(req.body.user, function (err, user) {
            try {
                var new_meeting = new Meeting(
                    {
                        ...req.body,
                        ufirstname: user.firstname,
                        ulastname: user.lastname,
                        dfirstname: doctor.firstname,
                        dlastname: doctor.lastname
                    }
                );
                new_meeting.save(function (err, meeting) {
                    try {
                        res.json(meeting);
                    } catch (err) {
                        next(err)
                    }
                });
            } catch (err) {
                next(err)
            }
        });

    });
};

exports.show_meeting = function (req, res) {
    Meeting.findOne(req.params.meetingId, function (err, meeting) {
        try {
            res.json(meeting);
        } catch (err) {
            next(err)
        }
    });
};

exports.update_meeting = function (req, res, next) {
    Meeting.findOneAndUpdate({
        _id: req.params.meetingId
    }, {improved: true}, {}, function (err, meeting) {
        try {
            res.json(meeting);
        } catch (err) {
            next(err)
        }
    });
};

exports.delete_meeting = function (req, res) {
    Meeting.remove({
        _id: req.params.meetingId
    }, function (err, meeting) {
        if (meeting)
            res.json(meeting);
        res.json({
            message: 'Meeting successfully deleted'
        });
    });
};

