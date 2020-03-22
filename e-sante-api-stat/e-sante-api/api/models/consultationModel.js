var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// consultation
var ConsultationSchema = new Schema({
    consultation: {
        type: String,
    },
    doctor: {
        type: String,
    },
    speciality: {
        type: String,
    },
    user: {
        type: String,
    },
    bilan: {
        type: String,
    },
    medicaments: {
        type: String,
    },
    start_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Consultations', ConsultationSchema);
