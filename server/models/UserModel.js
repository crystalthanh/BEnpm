const mongoose = require('mongoose')
let bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;


const crudUser = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
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