const {Schema,model} = require("mongoose"); 

const restaurantSchema = new Schema({
    imagePrimary:{type:String, required:true},
    altImages:[{type:String}],
    title:{type:String, required:true},
    state: {type:String, required:true},
    district: {type:String,  required:true},
    place: {type:String, required:true},
    reviews: [{type:Schema.Types.ObjectId, ref:"review"}],
    contact:{
        callus:{type:String},
        callrestaurent: {type:String}
    },
    fssai: {type:String, required: true},
    avgcost:{type:String, required: true},
    about:{
        cuisine:{type:Schema.Types.Array},
        type:{type:Schema.Types.Array},
        dishes: {type:Schema.Types.Array},
        bestselling: {type:Schema.Types.Array},
        facilities: {type:Schema.Types.Array},
        openAt:{type:Number, required:true},
        closeAt: {type:Number, required:true},
    },


}, {versionKey:false, timestamps: true});

module.exports = model("restaurant", restaurantSchema); 