const router = require("express").Router();
const Shirt = require("../../models/Shirt.model")
const User = require("../../models/User.model")

const { isAuthenticated } = require('./../../middlewares/jwt.middleware')


router.get("/list", (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.put("/editUser/:user_id/", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndUpdate(user_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/:user_id/delete", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getUserFavs", isAuthenticated, (req, res) => {

    const { _id: user_id } = req.payload

    User
        .findById(user_id)
        .select('favouriteShirts')
        .then(response => res.json(response.favouriteShirts))
        .catch(err => res.status(500).json(err))

})

router.put("/addFav/:shirt_id", isAuthenticated, (req, res) => {

    const { _id: user_id } = req.payload
    const { shirt_id } = req.params

    User
        .findByIdAndUpdate(user_id, { $addToSet: { favouriteShirts: shirt_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/removeFav/:shirt_id", isAuthenticated, (req, res) => {

    const { shirt_id } = req.params
    const { _id: user_id } = req.payload

    User
        .findByIdAndUpdate(user_id, { $pull: { favouriteShirts: shirt_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/:user_id", (req, res) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router;