const router = require("express").Router()
const Shirt = require('../../models/Shirt.model')


router.get("/", (req, res) => {

    Shirt
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/create", (req, res) => {

    Shirt
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:shirt_id", (req, res) => {

    const { shirt_id } = req.params

    Shirt
        .findById(shirt_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:shirt_id/edit", (req, res) => {

    const { shirt_id } = req.params

    Shirt
        .findById(shirt_id)
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