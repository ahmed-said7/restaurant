const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref:"User"
    },
    Items:[{foodId:{type:ObjectId,ref:"Food"}
    ,price:Number,quantity:Number}],
    totalPrice:Number,
    totalPriceAfterDiscount:Number,
    },{timestamps:true});

const cartModel = new mongoose.Model("Cart",cartSchema);

module.exports=cartModel;