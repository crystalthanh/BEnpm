const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const card = new Schema({
    seri: String,
    bank: String
});



const CardModel = mongoose.model('Card', card)
module.exports = CardModel