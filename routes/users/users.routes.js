const router = require("express").Router();
const Shirt = require("../../models/Shirt.model")
const User = require("../../models/User.model")


router.get("/list", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:user_id", (req, res) => {
    console.log(req.params)
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.put("/:user_id/edit", (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:user_id/delete", (req, res) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router;