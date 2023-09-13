const orderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref:"User"
    },
    Items:[{foodId:{type:ObjectId,ref:"Food"}
    ,price:Number,quantity:Number}],
    totalPrice:Number,
    isDelivered:{type:Boolean,default:false},
    isPaid:{type:Boolean,default:false},
    deliveredAt:Date,
    paidAt:Date,
    },{timestamps:true});

const orderModel = new mongoose.Model("Order",orderSchema);

module.exports=orderModel;