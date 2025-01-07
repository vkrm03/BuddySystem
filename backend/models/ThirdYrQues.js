const mongoose = require("mongoose");

const thirdyrques = new mongoose.Schema({
    week: {
        type: String,
        required: true,
    },
    que: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model("thirdyrques", thirdyrques);