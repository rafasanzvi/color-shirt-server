const router = require("express").Router()

const uploader = require('./../../config/cloudinay.config')

router.post('/images', uploader.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error uploading the file' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router