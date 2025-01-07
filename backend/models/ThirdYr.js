const mongoose = require("mongoose");

const thirdyr = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    reg: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    mentor_name: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model("thirdyr", thirdyr);