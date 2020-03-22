var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// blood
var BloodSchema = new Schema({
    group: {
        type: String,
    },
    user: {
        type: String,
    }
});

module.exports = mongoose.model('Bloods', BloodSchema);