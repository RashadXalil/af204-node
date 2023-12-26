const { Animal } = require("../models/Animal.model")
const AnimalController = {
    getAll: async (req, res) => {
        try {
            const items = await Animal.find({})
            res.status(200).send(items)
        } catch (error) {
            res.status(404).send("tapammadim")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Animal.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.send("tapammadim")
        }
    },
    add: async (req, res) => {
        try {
            const { category, paroda, price, gender } = req.body
            const newAnimal = new Animal({
                category: category,
                paroda: paroda,
                price: price,
                gender: gender,
                image: req.file.filename
            })
            await newAnimal.save()
            res.send("item created")
        }
        catch (error) {
            res.send("olmadi")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Animal.findByIdAndUpdate(id, { ...req.body })
            res.send("oldi")
        } catch (error) {
            res.send("olmadii")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Animal.findByIdAndDelete(id)
            res.send("daydi")
        } catch (error) {
            res.send("daymadi")
        }
    }
}
module.exports = { AnimalController }