const mongoose = require('mongoose')
let bcrypt = require('bcryptjs');
const AccoutModel = require('../models/AccoutModel');
const CardModel = require('../models/CardModel')
const Schema = mongoose.Schema;


const crudUser = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    fullName: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        maxlength: 10,
        minlength: 10,
        default: "",
    },
    address: {
        type: String,
    },
    sex: {
        type: String,
        default: "other"
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: AccoutModel
    },
    cardATM: {
        type: String,
        ref: CardModel
    },
    roles: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    }
});


crudUser.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error)
    }
};



const UserModel = mongoose.model('Users', crudUser)
module.exports = UserModel

// UserModel.find({
//         username: ''
//     })
//     .populate('Accout')
//     .populate('Card')
//     .then(data => { console.log(data); })
//     .catch(err => { console.log(err); })