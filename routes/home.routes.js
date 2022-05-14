const express = require('express')
const {getAllUrls, createUrl} = require('../controllers/home.controllers')

const router = express.Router()

router.get('/', getAllUrls)

router.post('/', createUrl)

module.exports = router;