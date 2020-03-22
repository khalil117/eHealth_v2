var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// allergy
var AllergySchema = new Schema({
    allergy: {
        type: String,
    },
    user: {
        type: String,
    },
    description: {
        type: String,
    },
    in_progress: {
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


module.exports = mongoose.model('Allergys', AllergySchema);
