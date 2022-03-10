const express = require('express')
const UserControl = require('../controllers/UserControl')
const router = express.Router();
const { createUser, deleteUser, editUser } = require('../controllers/UserControl');

router.route('/')
    .post(UserControl.createUser)
    .put(UserControl.editUser)
    .delete(UserControl.deleteUser)
    // router.route('/editUser', editUser);
    // router.route('/deleteUser', deleteUser);
    // router.route('/getUser', getUser);
module.exports = router;