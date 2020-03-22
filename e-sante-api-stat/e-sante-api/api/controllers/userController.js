var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Doctor = mongoose.model('Doctors');

// Users
exports.list_all_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};
exports.list_all_dr_user = function (req, res) {
    User.findOne({role: "medecin"}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.list_all_dr = function (req, res, next) {
    return User.find({role: "medecin"}, function (err, doctors) {
        try {
            res.json(doctors);
        } catch (err) {
            next(err)
        }
    });
};

exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.show_a_user = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.get_doctor_users = function (req, res) {
    Doctor.findById(req.params.userId, function (err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
};

exports.update_a_user = function (req, res) {
    User.findOneAndUpdate({
        _id: req.params.userId
    }, req.body, {
        new: true
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_a_user = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User successfully deleted'
        });
    });
};

exports.login_a_user = function (req, res, next) {
    User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
        if (user)
            return res.json(user);
        return next(err);
    });
};
