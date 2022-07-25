const router = require("express").Router();

router.use("/shirts", require('./shirt/shirt.routes'))
router.use("/auth", require('./auth/auth.routes'))
router.use("/users", require('./users/users.routes'))
router.use("/upload", require('./upload/upload.routes'))

module.exports = router