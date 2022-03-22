const router = require('express-promise-router')()


router.get('/', (req, res) => {
    res.send('ROUTER conectting');
})

module.exports = router;