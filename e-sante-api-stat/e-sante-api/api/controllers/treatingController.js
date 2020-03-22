var mongoose = require('mongoose');

// allergy
var Treating = mongoose.model('Treatings');
var User     = mongoose.model('Users');
var Doctor   = mongoose.model('Doctors');

exports.list_all_user_treating = function (req, res, next) {
    Treating.find({"user": req.params.userId}, function (err, treatings) {
        try {
            res.json(treatings);
        } catch (err) {
            next(err)
        }


    });
};

exports.list_all_user_treating_proved = function (res, next) {
    Treating.find({"improved": true}, function (err, treatings) {
        if (err)
            res.send(err);
        res.send(treatings);
    });
};

exports.list_all_doctor_treating = function (req, res, next) {
    Treating.find({"doctor": req.params.userId}, function (err, treatings) {
        try {
            res.json(treatings);
        } catch (err) {
            next(err)
        }
    });
};
exports.create_treating = function (req, res, next) {
    console.log(req.body);
    User.findById(req.body.doctor, function (err, doctor) {
        User.findById(req.body.user, function (err, user) {
            try {
                var new_treating = new Treating(
                    {
                        ...req.body,
                        ufirstname: user.firstname,
                        ulastname: user.lastname,
                        dfirstname: doctor.firstname,
                        dlastname: doctor.lastname
                    }
                );
                new_treating.save(function (err, treating) {
                    try {
                        res.json(treating);
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
exports.show_treating = function (req, res) {
    Treating.findOne(req.params.treatingId, function (err, treating) {
        try {
            res.json(treating);
        } catch (err) {
            next(err)
        }
    });
};

//exports.update_a_comment = function (req, res) {
//    Treating.findById({_id: req.params.treatingId}, req.body, { comment: req.body.comment}, 
//        function (err, treating) {
//        if (err)
//            res.send(err);
//      res.json(treating);
//    });
//};



exports.update_treating = function (req, res, next) {
    Treating.findOneAndUpdate({
        _id: req.params.treatingId
    }, {improved: true}, {}, function (err, treating) {
        try {
            res.json(treating);
        } catch (err) {
            next(err)
        }
    });
};

exports.delete_treating = function (req, res) {
    Treating.remove({
        _id: req.params.treatingId
    }, function (err, treating) {
        if (treating)
            res.json(treating);
        res.json({
            message: 'Treating successfully deleted'
        });
    });
};

