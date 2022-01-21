const {Schema, model} = require("mongoose");

const reviewSchema = new Schema({
    user: {type:Schema.Types.ObjectId, ref:"user" ,required: true},
    message: {type:String, required: true},
    rating: {type:Number, required: true}
});

module.exports = model("review", reviewSchema);