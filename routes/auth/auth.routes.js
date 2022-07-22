const express = require("express")
const bcrypt = require('bcryptjs')
const User = require('../../models/User.model')
const router = express.Router()
const saltRounds = 10
const jwt = require("jsonwebtoken")
const { isAuthenticated } = require("../../middlewares/jwt.middleware")

router.post('/register', (req, res, next) => {

    const { email, password, username, name } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, name, password: hashedPassword, username })
        })
        .then((createdUser) => {

            const { email, username, _id } = createdUser
            const user = { email, username, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })
})






router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username } = foundUser

                const payload = { _id, email, username }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.status(200).json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }

        })
        .catch(err => {
            /* console.log(err) */  // to find the error through console
            res.status(500).json({ message: "Internal Server Error" })
        });
});


router.get('/verify', isAuthenticated, (req, res) => {

    console.log('EL PAYLOAD ES WE ARE IN THE ROUTE AND THE TOKEN WAS CORRECT. THE PAYLOAD IS', req.payload)

    setTimeout(() => {
        res.status(200).json(req.payload)
    }, 1500)
})


module.exports = router