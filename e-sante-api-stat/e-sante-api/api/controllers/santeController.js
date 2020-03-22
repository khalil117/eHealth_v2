var mongoose = require('mongoose');

// allergy
var Allergy = mongoose.model('Allergys');

exports.list_all_allergies_stat = function (req, res) {
    Allergy.find(function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.list_all_allergies = function (req, res) {
    Allergy.find({"user": req.params.userId}, function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.create_a_allergy = function (req, res) {
    var new_allergy = new Allergy(req.body);
    new_allergy.save(function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.show_a_allergy = function (req, res) {
    Allergy.findOne(req.params.allergyId, function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.update_a_allergy = function (req, res) {
    Allergy.findOneAndUpdate({
        _id: req.params.allergyId
    }, req.body, {
        new: true
    }, function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.delete_a_allergy = function (req, res) {
    Allergy.remove({
        _id: req.params.allergyId
    }, function (err, allergy) {
        if (err)
            res.send(err);
        res.json({
            message: 'Allergy successfully deleted'
        });
    });
};


// disease
var Disease = mongoose.model('Diseases');

exports.list_all_diseases_stat = function (req, res) {
    Disease.find(function (err, disease) {
        if (err)
            res.send(err);
        res.json(disease);
    });
};
exports.list_all_diseases = function (req, res) {
    Disease.find({"user": req.params.userId}, function (err, disease) {
        if (err)
            res.send(err);
        res.json(disease);
    });
};

exports.create_a_disease = function (req, res) {
    var new_disease = new Disease(req.body);
    new_disease.save(function (err, disease) {
        if (err)
            res.send(err);
        res.json(disease);
    });
};

exports.show_a_disease = function (req, res) {
    Disease.findOne(req.params.diseaseId, function (err, disease) {
        if (err)
            res.send(err);
        res.json(disease);
    });
};

exports.update_a_disease = function (req, res) {
    Disease.findOneAndUpdate({
        _id: req.params.diseaseId
    }, req.body, {
        new: true
    }, function (err, disease) {
        if (err)
            res.send(err);
        res.json(disease);
    });
};

exports.delete_a_disease = function (req, res) {
    Disease.remove({
        _id: req.params.diseaseId
    }, function (err, disease) {
        if (err)
            res.send(err);
        res.json({
            message: 'Disease successfully deleted'
        });
    });
};


// medicament
var Medicament = mongoose.model('Medicaments');
exports.list_all_medicaments = function (req, res) {
    Medicament.find({"user": req.params.userId}, function (err, medicament) {
        if (err)
            res.send(err);
        res.json(medicament);
    });
};

exports.create_a_medicament = function (req, res) {
    var new_medicament = new Medicament(req.body);
    new_medicament.save(function (err, medicament) {
        if (err)
            res.send(err);
        res.json(medicament);
    });
};

exports.show_a_medicament = function (req, res) {
    Medicament.findOne(req.params.medicamentId, function (err, medicament) {
        if (err)
            res.send(err);
        res.json(medicament);
    });
};

exports.update_a_medicament = function (req, res) {
    Medicament.findOneAndUpdate({
        _id: req.params.medicamentId
    }, req.body, {
        new: true
    }, function (err, medicament) {
        if (err)
            res.send(err);
        res.json(medicament);
    });
};

exports.delete_a_medicament = function (req, res) {
    Medicament.remove({
        _id: req.params.medicamentId
    }, function (err, medicament) {
        if (err)
            res.send(err);
        res.json({
            message: 'Medicament successfully deleted'
        });
    });
};


// surgery
var Surgery = mongoose.model('Surgerys');
exports.list_all_surgerys = function (req, res) {
    Surgery.find({"user": req.params.userId}, function (err, surgery) {
        if (err)
            res.send(err);
        res.json(surgery);
    });
};

exports.create_a_surgery = function (req, res) {
    var new_surgery = new Surgery(req.body);
    new_surgery.save(function (err, surgery) {
        if (err)
            res.send(err);
        res.json(surgery);
    });
};

exports.show_a_surgery = function (req, res) {
    Surgery.findOne(req.params.surgeryId, function (err, surgery) {
        if (err)
            res.send(err);
        res.json(surgery);
    });
};

exports.update_a_surgery = function (req, res) {
    Surgery.findOneAndUpdate({
        _id: req.params.surgeryId
    }, req.body, {
        new: true
    }, function (err, surgery) {
        if (err)
            res.send(err);
        res.json(surgery);
    });
};

exports.delete_a_surgery = function (req, res) {
    Surgery.remove({
        _id: req.params.surgeryId
    }, function (err, surgery) {
        if (err)
            res.send(err);
        res.json({
            message: 'Surgery successfully deleted'
        });
    });
};

// vaccination
var Vaccination = mongoose.model('Vaccinations');
exports.list_all_vaccinations = function (req, res) {
    Vaccination.find({"user": req.params.userId}, function (err, vaccination) {
        if (err)
            res.send(err);
        res.json(vaccination);
    });
};

exports.create_a_vaccination = function (req, res) {
    var new_vaccination = new Vaccination(req.body);
    new_vaccination.save(function (err, vaccination) {
        if (err)
            res.send(err);
        res.json(vaccination);
    });
};

exports.show_a_vaccination = function (req, res) {
    Vaccination.findOne(req.params.vaccinationId, function (err, vaccination) {
        if (err)
            res.send(err);
        res.json(vaccination);
    });
};

exports.update_a_vaccination = function (req, res) {
    Vaccination.findOneAndUpdate({
        _id: req.params.vaccinationId
    }, req.body, {
        new: true
    }, function (err, vaccination) {
        if (err)
            res.send(err);
        res.json(vaccination);
    });
};

exports.delete_a_vaccination = function (req, res) {
    Vaccination.remove({
        _id: req.params.vaccinationId
    }, function (err, vaccination) {
        if (err)
            res.send(err);
        res.json({
            message: 'Vaccination successfully deleted'
        });
    });
};

// teeth
var Teeth = mongoose.model('Teeths');
exports.list_all_teeths = function (req, res) {
    Teeth.find({"user": req.params.userId}, function (err, teeth) {
        if (err)
            res.send(err);
        res.json(teeth);
    });
};

exports.create_a_teeth = function (req, res) {
    var new_teeth = new Teeth(req.body);
    new_teeth.save(function (err, teeth) {
        if (err)
            res.send(err);
        res.json(teeth);
    });
};

exports.show_a_teeth = function (req, res) {
    Teeth.findOne(req.params.teethId, function (err, teeth) {
        if (err)
            res.send(err);
        res.json(teeth);
    });
};

exports.update_a_teeth = function (req, res) {
    Teeth.findOneAndUpdate({
        _id: req.params.teethId
    }, req.body, {
        new: true
    }, function (err, teeth) {
        if (err)
            res.send(err);
        res.json(teeth);
    });
};

exports.delete_a_teeth = function (req, res) {
    Teeth.remove({
        _id: req.params.teethId
    }, function (err, teeth) {
        if (err)
            res.send(err);
        res.json({
            message: 'Teeth successfully deleted'
        });
    });
};
