const mongoose = require('mongoose')
let bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;


const crudUser = new Schema({
    firstName: {
        type: String,
        lowercase: true
    },
    lastName: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
    },
    phoneNumber: {
        type: String,
        maxlength: 10,
        minlength: 10,
        default: "",
    },
    address1: {
        type: String,
    },
    sex: {
        type: String,
        default: "other"
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error)
    }
};

let UserModel = mongoose.model('users', userSchema)
module.exports = UserModel