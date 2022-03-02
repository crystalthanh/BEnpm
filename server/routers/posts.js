const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('ROUTER conectting');
})

module.exports = router;