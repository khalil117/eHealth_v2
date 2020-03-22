var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// medicament
var MedicamentSchema = new Schema({
    medicament: {
        type: String,
    },
    user: {
        type: String,
    },
    without_order: {
        type: Boolean,
    },
    duration: {
        type: Boolean,
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


module.exports = mongoose.model('Medicaments', MedicamentSchema);
