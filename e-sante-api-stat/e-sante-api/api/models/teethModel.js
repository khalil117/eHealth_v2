var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// teeth
var TeethSchema = new Schema({
    teeth: {
        type: String,
    },
    user: {
        type: String,
    },
    description: {
        type: String,
    },
    act: {
        type: [{
            type: String,
            enum: ['soin', 'extraction']
        }],
        default: 'soin'
    },
    dentiste: {
        type: String,
    },
    start_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Teeths', TeethSchema);
