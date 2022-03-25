const userRouter = require('./userRouter')


const appRouters = (app) => {
    // prefix url user
    app.use('/api', userRouter);
    // app.use('/posts', posts);
    app.get('/', (req, res) => {
        res.send('SERVER SUCCESS');
    })
}

module.exports = appRouters