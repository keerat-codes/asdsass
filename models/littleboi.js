const mongoose = require('mongoose');

const littleboiSchema = new mongoose.Schema({
blast_radius : { type:  Number, description: "Required Field", required: true },
lol : { type:  Number, description: "Required Field", required: true },
luckyNumber : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('littleboi', littleboiSchema);