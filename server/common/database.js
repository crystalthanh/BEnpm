const mongooseClient = require('mongoose')

module.exports = connectDB = async() => {
    try {
        console.log("Mongoose connecting!")
        await mongooseClient.connect("mongodb+srv://myFirstData:123@cluster0.ict8s.mongodb.net/FirstData?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        })
        console.log("Mongoose connection is successfull!")
    } catch (error) {
        console.log("Mongoose connect error", error)
    }
}