var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// surgery
var SurgerySchema = new Schema({
    surgery: {
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


module.exports = mongoose.model('Surgerys', SurgerySchema);
