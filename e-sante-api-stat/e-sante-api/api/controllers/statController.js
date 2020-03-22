const mongoose = require('mongoose');


const Allergy = mongoose.model('Allergys');
const frequency = 0;

const frequencyDateFormatMap = {
    0: '%Y-%m-%d',
    1: '%U',
    2: '%Y'
};

const frequencyDateFormat = frequencyDateFormatMap[frequency];

exports.list_all_allergies_stat = function (req, res) {
    return Allergy.aggregate([
            {
                $match: {
                    start_date: {
                        $gte: req.body.fromDate,
                        $lt: req.body.toDate
                    }
                }
            },
            {
                $project: {
                    frequency: {
                        $dateToString: {
                            format: frequencyDateFormat,
                            date: '$start_date'
                        }
                    }
                }
            },
            {
                $group: {
                    _id: '$frequency',
                    count: {
                        $sum: 1
                    }
                }
            }
        ]
        , function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
};