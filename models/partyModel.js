const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const partySchema = new mongoose.Schema({
    server: {
        type: ObjectId,
        ref: 'User',
    },
    food: [
    {
        foodId: {
            type: ObjectId,
            ref: 'Food'
        },price:Number
    },
    ],
    tables: [
    {
        type: ObjectId,
        ref: 'Table',
    },
    ],
});

module.exports = mongoose.model('Party', partySchema);