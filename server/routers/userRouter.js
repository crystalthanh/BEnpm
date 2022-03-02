const express = require('express')
const UserModel = require('../models/UserModel')
const app = express();

app.post('/user', (req, res) => {
    const u = new UserModel(req.body);
    try {
        await u.save();
        res.send(u)
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = app;