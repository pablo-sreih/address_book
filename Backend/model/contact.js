const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    user_id: {type: String, required:true},
    name: {type: String, required: true},
    email: {type: String, default:null},
    number: {type: Number, required: true},
    status: {type: String, default:null},
    location: {type: [String], default:null}
});

module.exports = mongoose.model("contact", contactSchema);