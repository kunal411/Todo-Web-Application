const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
});

const Works = mongoose.model('Works',workSchema);

module.exports = Works;