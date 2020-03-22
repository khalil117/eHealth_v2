var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// doctor
var DoctorSchema = new Schema({
    doctor: {
        type: String,
    },
    speciality: {
        type: String,
    },
    user: {
        type: String,
    },
    current: {
        type: Boolean,
    },
    comment: {
        type: String,
    },
    improved: {
        type: Boolean,
        default: false
    },
    dfirstname: {
        type: String
    },
    dlastname: {
        type: String,
    },
    ufirstname: {
        type: String
    },
    ulastname: {
        type: String,
    }
});


module.exports = mongoose.model('Doctors', DoctorSchema);
