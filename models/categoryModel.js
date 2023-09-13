const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    },{timestamps:true});

const categoryModel = new mongoose.Model("Category",categorySchema);

module.exports=categoryModel;