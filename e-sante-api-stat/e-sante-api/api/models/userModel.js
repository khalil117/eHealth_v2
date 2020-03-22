var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// User
var UserSchema = new Schema({
    role: {
        type: [{
            type: String,
            enum: ['particulier', 'medecin']
        }],
        default: 'particulier'
    },
    option: {
        type: [{
            type: String,
            enum: ['base', 'famille', 'gold', 'premium']
        }],
        default: 'base'
    },
    language: {
        type: [{
            type: String,
            enum: ['fr', 'en']
        }],
        default: 'fr'
    },
    gender: {
        type: String
    },
    firstname: {
        type: String,
        required: 'Please enter your first name'
    },
    lastname: {
        type: String,
        required: 'Please enter your name'
    },
    birthday: {
        type: Date,
    },
    country: {
        type: String,
    },
    region: {
        type: String,
    },
    city: {
        type: String,
    },
    zipcode: {
        type: Number,
    },
    address: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        select: false
    },
    avatar: {
        type: String,
    },
    photo: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);
