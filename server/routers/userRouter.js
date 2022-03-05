const express = require('express')
const router = express.Router();
const { createUser, deleteUser, editUser } = require('../controllers/UserControl');

router.route('/user', createUser);
router.route('/user', editUser);
router.route('/user', deleteUser);
module.exports = router;