const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },

    email: {
        type: String, default:null
    },

    number: {
        type: Number, required: true, unique: true
    },

    status: {
        type: String, default:null
    },

    location: {
        type: [String], default:null
    }
});

module.exports = mongoose.model("contact", contactSchema);