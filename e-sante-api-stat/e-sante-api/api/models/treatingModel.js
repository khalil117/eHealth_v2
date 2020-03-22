var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// allergy
var TreatingSchema = new Schema({
    speciality: {
        type: String
    },
    user: {
        type: String
    },
    doctor: {
        type: String
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
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    end_date: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String
    },
    dcomment: {
        type: String
    }

});


module.exports = mongoose.model('Treatings', TreatingSchema);
