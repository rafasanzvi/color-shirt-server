const router = require("express").Router()
const Shirt = require('../../models/Shirt.model')


router.get("/shirts", (req, res) => {

    Shirt
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/shirts/create", (req, res) => {

    Shirt
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/shirts/:id", (req, res) => {

    console.log('ESTOY ENTRANDO')

    const { id } = req.params

    Shirt
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("shirts/:id/edit", (req, res) => {

})












module.exports = router