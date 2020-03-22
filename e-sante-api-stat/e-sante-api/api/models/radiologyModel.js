var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// radiology
var RadiologySchema = new Schema({
    radiology: {
        type: String,
    },
    user: {
        type: String,
    },
    doctor: {
        type: String,
    },
    bilan: {
        type: String,
    },
    labo: {
        type: String,
    },
    start_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Radiologys', RadiologySchema);
