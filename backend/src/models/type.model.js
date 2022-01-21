const {Schema, model} = require('mongoose');

const typeSchema = new Schema({
    name: {type:String, required: true}
});

module.exports = model("type", typeSchema);