const mongoose = require("mongoose")
const animalSchema = new mongoose.Schema({
    category: String,
    paroda: String,
    gender: String,
    price: Number,
    image: String
})

const Animal = mongoose.model("Animal", animalSchema)
module.exports = { Animal }