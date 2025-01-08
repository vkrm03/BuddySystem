const mongoose = require("mongoose");

const thirdyrans = new mongoose.Schema({
    reg: {
        type: String,
        required: true,
    },
    week: {
        type: String,
        required: true,
    },
    que: {
        type: String,
        required: true,
    },
    ans: {
        type: String,
        required: true,
    },
    mark: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model("thirdyrans", thirdyrans);