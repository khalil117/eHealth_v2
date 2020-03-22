var mongoose = require('mongoose');
var Blood = mongoose.model('Bloods');
var Height = mongoose.model('Heigths');
var HeightHistories = mongoose.model('HeightHistories');
var Weight = mongoose.model('Weights');
var WeightHistories = mongoose.model('WeightHistories');

// Bloods

exports.show_a_blood = function (req, res) {
    Blood.findOne({user: req.params.userId}, function (err, blood) {
        if (err)
            res.send(err);
        res.json(blood);
    });
};

exports.create_a_blood = function (req, res) {
    var new_blood = new Blood(req.body);
    new_blood.save(function (err, blood) {
        if (err)
            res.send(err);
        res.json(blood);
    });
};

exports.update_a_blood = function (req, res) {
    Blood.findOneAndUpdate({}, req.body, {
        new: true
    }, function (err, blood) {
        if (err)
            res.send(err);
        res.json(blood);
    });
};

// height
exports.list_all_heights = function (req, res) {
    HeightHistories.find({"height_id": req.params.heightId}, function (err, height) {
        if (err)
            res.send(err);
        res.json(height);
    });
};

exports.create_a_height = function (req, res) {
    var new_height = new Height(req.body);
    new_height.save(function (err, height) {
        if (err)
            res.send(err);
        res.json(height);
    });
};

exports.create_a_height_history = function (req, res) {
    var new_height = new HeightHistories(req.body);
    new_height.save(function (err, height) {
        if (err)
            res.send(err);
        res.json(height);
    });
};

exports.show_a_height = function (req, res) {
    Height.findOne({user: req.params.userId}, function (err, height) {
        if (err)
            res.send(err);
        res.json(height);
    });
};

exports.update_a_height = function (req, res) {
    Height.findOneAndUpdate({
        _id: req.params.heightId
    }, req.body, {
        new: true
    }, function (err, height) {
        if (err)
            res.send(err);
        res.json(height);
    });
};

// weight
exports.list_all_weights = function (req, res) {
    WeightHistories.find({"weight_id": req.params.weightId}, function (err, weight) {
        if (err)
            res.send(err);
        res.json(weight);
    });
};

exports.create_a_weight = function (req, res) {
    var new_weight = new Weight(req.body);
    new_weight.save(function (err, weight) {
        if (err)
            res.send(err);
        res.json(weight);
    });
};

exports.create_a_weight_history = function (req, res) {
    var new_weight = new WeightHistories(req.body);
    new_weight.save(function (err, weight) {
        if (err)
            res.send(err);
        res.json(weight);
    });
};

exports.show_a_weight = function (req, res) {
    Weight.findOne({user: req.params.userId}, function (err, weight) {
        if (err)
            res.send(err);
        res.json(weight);
    });
};

exports.update_a_weight = function (req, res) {
    Weight.findOneAndUpdate({
        _id: req.params.weightId
    }, req.body, {
        new: true
    }, function (err, weight) {
        if (err)
            res.send(err);
        res.json(weight);
    });
};


exports.delete_a_height_history = function (req, res) {
    HeightHistories.remove({
        _id: req.params.heightId
    }, function (err, height) {
        if (err)
            res.send(err);
        res.json({
            message: 'Successfully deleted'
        });
    });
};

exports.delete_a_weight_history = function (req, res) {
    WeightHistories.remove({
        _id: req.params.weightId
    }, function (err, weight) {
        if (err)
            res.send(err);
        res.json({
            message: 'Successfully deleted'
        });
    });
};
