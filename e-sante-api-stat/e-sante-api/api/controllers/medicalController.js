var mongoose = require('mongoose');


// analysis
var Analysis = mongoose.model('Analysis');
exports.list_all_analysis = function (req, res) {
    Analysis.find({"user": req.params.userId}, function (err, analysis) {
        if (err)
            res.send(err);
        res.json(analysis);
    });
};

exports.create_a_analysis = function (req, res) {
    var new_analysis = new Analysis(req.body);
    new_analysis.save(function (err, analysis) {
        if (err)
            res.send(err);
        res.json(analysis);
    });
};

exports.show_a_analysis = function (req, res) {
    Analysis.findOne(req.params.analysisId, function (err, analysis) {
        if (err)
            res.send(err);
        res.json(analysis);
    });
};

exports.update_a_analysis = function (req, res) {
    Analysis.findOneAndUpdate({
        _id: req.params.analysisId
    }, req.body, {
        new: true
    }, function (err, analysis) {
        if (err)
            res.send(err);
        res.json(analysis);
    });
};

exports.delete_a_analysis = function (req, res) {
    Analysis.remove({
        _id: req.params.analysisId
    }, function (err, analysis) {
        if (err)
            res.send(err);
        res.json({
            message: 'Analysis successfully deleted'
        });
    });
};


// consultation
var Consultation = mongoose.model('Consultations');
exports.list_all_consultation = function (req, res) {
    Consultation.find({"user": req.params.userId}, function (err, consultation) {
        if (err)
            res.send(err);
        res.json(consultation);
    });
};

exports.create_a_consultation = function (req, res) {
    var new_consultation = new Consultation(req.body);
    new_consultation.save(function (err, consultation) {
        if (err)
            res.send(err);
        res.json(consultation);
    });
};

exports.show_a_consultation = function (req, res) {
    Consultation.findOne(req.params.consultationId, function (err, consultation) {
        if (err)
            res.send(err);
        res.json(consultation);
    });
};

exports.update_a_consultation = function (req, res) {
    Consultation.findOneAndUpdate({
        _id: req.params.consultationId
    }, req.body, {
        new: true
    }, function (err, consultation) {
        if (err)
            res.send(err);
        res.json(consultation);
    });
};

exports.delete_a_consultation = function (req, res) {
    Consultation.remove({
        _id: req.params.consultationId
    }, function (err, consultation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Consultation successfully deleted'
        });
    });
};


// doctor
var Doctor = mongoose.model('Doctors');
var User = mongoose.model('Users');


exports.list_all_doctor = function (req, res) {
    Doctor.find({"user": req.params.userId}, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};

exports.create_a_doctor = function (req, res, next) {
    User.findById(req.body.doctor, function (err, doctor) {
        User.findById(req.body.user, function (err, user) {
            try {
                var new_doctor = new Doctor(
                    {
                        ...req.body,
                        ufirstname: user.firstname,
                        ulastname: user.lastname,
                        dfirstname: doctor.firstname,
                        dlastname: doctor.lastname

                    }
                );
                new_doctor.save(function (err, doctor) {
                    try {
                        res.json(doctor);
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

exports.show_a_doctor = function (req, res) {
    Doctor.findOne(req.params.doctorId, function (err, doctor) {
        if (doctor)
            res.json(doctor);
        res.json(err);
    });
};

exports.update_a_doctor = function (req, res) {
    Doctor.findOneAndUpdate({
        _id: req.params.doctorId
    }, req.body, {
        new: true
    }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};

exports.delete_a_doctor = function (req, res) {
    Doctor.remove({
        _id: req.params.doctorId
    }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json({
            message: 'Doctor successfully deleted'
        });
    });
};


// radiology
var Radiology = mongoose.model('Radiologys');
exports.list_all_radiology = function (req, res) {
    Radiology.find({"user": req.params.userId}, function (err, radiology) {
        if (err)
            res.send(err);
        res.json(radiology);
    });
};

exports.create_a_radiology = function (req, res) {
    var new_radiology = new Radiology(req.body);
    new_radiology.save(function (err, radiology) {
        if (err)
            res.send(err);
        res.json(radiology);
    });
};

exports.show_a_radiology = function (req, res) {
    Radiology.findOne(req.params.radiologyId, function (err, radiology) {
        if (err)
            res.send(err);
        res.json(radiology);
    });
};

exports.update_a_radiology = function (req, res) {
    Radiology.findOneAndUpdate({
        _id: req.params.radiologyId
    }, req.body, {
        new: true
    }, function (err, radiology) {
        if (err)
            res.send(err);
        res.json(radiology);
    });
};

exports.delete_a_radiology = function (req, res) {
    Radiology.remove({
        _id: req.params.radiologyId
    }, function (err, radiology) {
        if (err)
            res.send(err);
        res.json({
            message: 'Radiology successfully deleted'
        });
    });
};
