var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// weight
var WeightSchema = new Schema({
    weight: {
        type: String,
    },
    user: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var WeightHistorySchema = new Schema({
    weight: {
        type: String,
    },
    weight_id: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Weights', WeightSchema);
module.exports = mongoose.model('WeightHistories', WeightHistorySchema);