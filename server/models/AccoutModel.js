const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const accoutUser = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        age: Number,
        title: String
    }
});


const AccoutModel = mongoose.model('Accout', accoutUser)
module.exports = AccoutModel