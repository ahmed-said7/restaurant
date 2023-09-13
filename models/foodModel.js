const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    category: {
        type: ObjectId,
        ref:"Category"
    },
    images: [String],
});

module.exports = mongoose.model('Food', foodSchema);