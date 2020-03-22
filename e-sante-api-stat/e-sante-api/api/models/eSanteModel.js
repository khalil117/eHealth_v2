var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
        required: 'Veuillez saisir votre prénom'
    },
    lastname: {
        type: String,
        required: 'Veuillez saisir votre nom'
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
        type: String,
    },
    address: {
        type: String,
    },
    mobile: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
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

// blood
var BloodSchema = new Schema({
    group: {
        type: String,
    },
    user: {
        type: String,
    }
});

// height
var HeightSchema = new Schema({
    height: {
        type: String,
    },
    user: {
        type: String,
    }
});


weight

module.exports = mongoose.model('Users', UserSchema);
module.exports = mongoose.model('Bloods', BloodSchema);