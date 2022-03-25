const UserModel = require("../models/UserModel")
const generateSequence = require("../utils/sequence")
const responseSuccess = require("../common/response")


const createUser = async(req, res) => {
    const { fullName, username, email, password, phoneNumber, roles } = req.body
    if (email) {
        const foundUser = await UserModel.findOne({ email })
        if (foundUser) return responseSuccess(res, 301, "Email is already exist")
    }
    // đây đang tuyền 1
    const userId = await generateSequence("USER")
    console.log("🚀 ~ file: UserControl.js ~ line 14 ~ createUser ~ userId", userId)
    if (!userId) return responseSuccess(res, 302, "Generate UserId Fail!")

    const user = await new UserModel({ userId, fullName, username, email, password, phoneNumber, roles }).save()

    return res.status(200).json({
        status: 200,
        success: true,
        message: ""
    });
}

const editUser = async(req, res) => {
    // const userId = await generateSequence("USER")
    const { fullName, username, email, password, phoneNumber, roles } = req.body;
    const user = await UserModel.findOne({ email })
    if (!user) return responseSuccess(res, 301, "Email is not exist")
    user.fullName = fullName
    user.password = password
    user.phoneNumber = phoneNumber
    user.username = username
    user.roles = roles
    await user.save();
    return responseSuccess(res, 200, "Edit success")
}

const deleteUser = async(req, res) => {
    const userId = await generateSequence("USER", number)
    await UserModel.findOneAndDelete({ userId }).save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "Delete success",
    });
}


module.exports = {
    createUser,
    editUser,
    deleteUser,
    // getUser,
}