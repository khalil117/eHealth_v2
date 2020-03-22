var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// vaccination
var VaccinationSchema = new Schema({
    vaccination: {
        type: String,
    },
    user: {
        type: String,
    },
    description: {
        type: String,
    },
    start_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Vaccinations', VaccinationSchema);
