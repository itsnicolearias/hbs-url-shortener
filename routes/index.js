const express = require('express')
const homeRoutes = require('./home')
const authRoutes = require('./auth')

const router = express.Router()

router.use('/', homeRoutes)
router.use('/auth', authRoutes)

module.exports = router