const router = require("express").Router();

router.use("/shirt", require('./shirt/shirt.routes'))
router.use("/auth", require('./auth/auth.routes'))

module.exports = router;
