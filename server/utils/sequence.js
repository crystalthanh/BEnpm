const SequenceModel = require("../models/SquenceModel");

// hàm 2 input
// const generateSequence = async(key, number) => {
const generateSequence = async(key) => {
    try {
        const sequence = await SequenceModel.findOne({ key: key })
        if (sequence) {
            sequence.number = sequence.number + 1
            await sequence.save()
            return `${key}-${sequence.number}`;
        } else {
            const newSequence = await new SequenceModel({
                key: key,
                number: 1
            }).save()
            return `${key}-${newSequence.number}`;
        }
    } catch (error) {
        console.log("🚀 ~ file: sequence.js ~ line 20 ~ generateSequence ~ error", error)
        return null;
    }
}

module.exports = generateSequence