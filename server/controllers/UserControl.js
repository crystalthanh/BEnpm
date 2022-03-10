const UserModel = require("../models/UserModel")
const { generateSequence } = require("../utils/sequence")
    // const { responseSuccess } = require("../common/response")


const createUser = async(req, res) => {
    const { fullName, email, password, phoneNumber } = req.body
    if (email) {
        const foundUser = await UserModel.findOne({ email })
            // if (foundUser) return responseSuccess(res, 301, "Email is already exist")
        if (foundUser) return console.log("Email is already exist")
    }
    const userId = await generateSequence("USER", prefix)
    await new UserModel({ fullName, email, password, phoneNumber, userId }).save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}

const editUser = async(req, res) => {
    const userId = req.params.userId;
    const { fullName, email, password, phoneNumber } = req.body;
    const user = await UserModel.findOne({ _id: userId })
    user.fullName = fullName
    user.email = email
    user.password = password
    user.phoneNumber = phoneNumber
    await user.save();
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}

const deleteUser = async(req, res) => {
    const userId = req.params.userId;
    await UserModel.findOneAndRemove({ _id: userId }).save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}


module.exports = {
    createUser,
    editUser,
    deleteUser,
    // getUser,
}