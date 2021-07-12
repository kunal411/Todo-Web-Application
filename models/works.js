const mongoose = require('mongoose');

// Schema in which it is going to be store in the database
const workSchema = new mongoose.Schema({
    description: {
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