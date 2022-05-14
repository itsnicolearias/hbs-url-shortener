const express = require('express')
const {getAllUrls, createUrl, deleteUrl} = require('../controllers/home.controllers')
const validateUrl = require('../middlewares/validateUrl')
const router = express.Router()

router.get('/', getAllUrls)

router.post('/', validateUrl, createUrl)

router.get('/eliminar/:id', deleteUrl)

module.exports = router;