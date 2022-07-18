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

router.get("/:id", (req, res) => {

    const { id } = req.params

    Shirt
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/:id/edit", (req, res) => {

    const { id } = req.params

    Shirt
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:id/delete", (req, res) => {

    const { id } = req.params

    Shirt
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




module.exports = router