const UserModel = require("../models/UserModel")

const createUser = async(req, res) => {
    const { fullName, email, password, phoneNumber } = req.body
        // check user is exsit
    try {
        if (email || phoneNumber) {
            const foundUser = await UserModel.findOne({ email, phoneNumber })
            if (foundUser) return responseSuccess(res, 301, "Email or phone is already exist")
        }
        const newUser = await new UserModel({ fullName, email, password, phoneNumber }).save()
        res.send(newUser)
    } catch (error) {
        res.status(500).send(error);
    }
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