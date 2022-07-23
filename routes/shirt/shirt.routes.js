const router = require("express").Router()
const Shirt = require('../../models/Shirt.model')


router.get("/list", (req, res) => {

    Shirt
        .find()
        .select({ name: 1, description: 1, images: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/create", (req, res) => {

    const { name, origin, style, colors, images, fabric, sizes, description } = req.body

    const colorsArray = colors.split(", ")

    Shirt
        .create({ name, origin, style, colors: colorsArray, images, fabric, sizes, description })
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.get("/:shirt_id", (req, res) => {

    const { shirt_id } = req.params

    Shirt
        .findById(shirt_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:shirt_id/edit", (req, res) => {

    const { shirt_id, name, origin, style, colors, images, fabric, sizes, description } = req.body

    console.log('----->', typeof colors)
    const colorsArray = colors.split(",")



    Shirt
        .findById({ shirt_id, name, origin, style, colors: colorsArray, images, fabric, sizes, description })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:shirt_id/delete", (req, res) => {

    const { shirt_id } = req.params

    Shirt
        .findByIdAndDelete(shirt_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




module.exports = router