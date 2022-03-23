const router = require('express-promise-router')()
    // const validate = require("../validation/index")

// const express = require('express')
const UserControl = require('../controllers/UserControl')
    // const router = express.Router();

router.route('/user/{id}')
    // .post(UserControl.createUser)
    .put(UserControl.editUser)
    .delete(UserControl.deleteUser)

router.route('/users')
    .post(UserControl.createUser)
module.exports = router;