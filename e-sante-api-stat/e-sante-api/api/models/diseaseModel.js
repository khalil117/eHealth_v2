var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// disease
var DiseaseSchema = new Schema({
    disease: {
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
    hereditary: {
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


module.exports = mongoose.model('Diseases', DiseaseSchema);
