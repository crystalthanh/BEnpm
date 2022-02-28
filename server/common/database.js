const mongooseClient = require('mongoose')

module.exports = connectDB = async() => {
    try {
        console.log("Mongoose connecting!")
        await mongooseClient.connect("mongodb://localhost:27017/blogs?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Mongoose connection is successfull!")
    } catch (error) {
        console.log("Mongoose connect error", error)
    }
}