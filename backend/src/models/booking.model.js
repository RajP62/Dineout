const {Schema, model} = require("mongoose");

const bookingModel = Schema({
    date:{type:Schema.Types.Date, required: true},
    time:{type:Schema.Types.Date, required: true},
    user: {type:Schema.Types.ObjectId, required: true}
});

module.exports = new model("booking", bookingModel);