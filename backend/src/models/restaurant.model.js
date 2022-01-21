const {Schema,model} = require("mongoose");

const restaurantSchema = new Schema({
    imagePrimary:{type:String, required:true},
    altImages:[{type:String}],
    title:{type:String, required:true},
    state: {type:Schema.Types.ObjectId, ref:"state" ,required:true},
    district: {type:String, required:true},
    place: {type:String, required:true},
    featured: {type: Boolean, required: true},
    reviews: [{type:Schema.Types.ObjectId, ref:"review"}],
    contact:{
        callus:{type:String, required: true},
        callrestaurent: {type:String, required:true}
    },
    fssai: {type:String, required: true},
    avgcost:{type:String, required: true},
    about:{
        cuisine:[{type:Schema.Types.ObjectId, ref:"cuisine" ,required:true}],
        type:[{type:Schema.Types.ObjectId, ref:"type", required: true}],
        quickFilters: [{type:Schema.Types.ObjectId, ref:"quickfilter" ,required: true}],
        bestselling: [{type:String, required: true}],
        facilities: [{type:Schema.Types.ObjectId, ref:"facility", required: true}],
        openAt:{type:Number, required:true},
        closeAt: {type:Number, required: true},
    },


}, {versionKey:false, timestamps: true});

module.exports = model("restaurant", restaurantSchema); 