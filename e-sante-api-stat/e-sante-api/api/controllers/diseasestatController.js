var Disease = mongoose.model('Diseases');

exports.list_all_diseases_stat = function (req, res) {
    Disease.find(function (err, disease) {
        if (err)
            res.send(err);
        res.json(disease);
    });
};