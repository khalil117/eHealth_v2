var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// analysis
var AnalysisSchema = new Schema({
    analysis: {
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


module.exports = mongoose.model('Analysis', AnalysisSchema);
