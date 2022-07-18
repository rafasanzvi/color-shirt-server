const router = require("express").Router();
const Shirt = require("../../models/Shirt.model")
const User = require("../../models/User.model")


router.get("/list", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res) => {

    const { id } = req.params

    User
        .find(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get("/:id/edit", (req, res) => {

    const { id } = req.params

    User
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:id/delete", (req, res) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router;