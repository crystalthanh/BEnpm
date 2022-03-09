const UserModel = require("../models/UserModel")

const createUser = async(req, res) => {
    const { fullName, email, password, phoneNumber, address, sex } = req.body
        // check user is exsit
    if (email) {
        const foundUser = await UserModel.findOne({ email })
        if (foundUser) return responseSuccess(res, 301, "Email is already exist")
    }
    const userId = await generateSequence("USER", prefix)
    await new UserModel({ fullName, email, password, phoneNumber, address, sex, userId }).save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}

const editUser = async(req, res) => {
    const userId = req.params.userId;
    const { fullName, email, password, phoneNumber, address, sex } = req.body;
    const user = await UserModel.findOne({ _id: userId })
    user.fullName = fullName
    user.email = email
    user.password = password
    user.address = address
    user.phoneNumber = phoneNumber
    user.sex = sex
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

}