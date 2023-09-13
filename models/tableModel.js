const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const tableSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
    },
    y: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: false,
    },
    images:[String]
});

module.exports = mongoose.model('Table', tableSchema);