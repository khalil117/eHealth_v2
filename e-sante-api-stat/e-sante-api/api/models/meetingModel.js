var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// allergy
var MeetingSchema = new Schema({
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
    }

});


module.exports = mongoose.model('Meetings', MeetingSchema);
