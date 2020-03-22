var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// height
var HeightSchema = new Schema({
    height: {
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


var HeightHistorySchema = new Schema({
    height_id: {
        type: String,
        select: true
    },
    height: {
        type: String,
        select: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Heigths', HeightSchema);
module.exports = mongoose.model('HeightHistories', HeightHistorySchema);
