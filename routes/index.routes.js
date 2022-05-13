const express = require('express')
const homeRoutes = require('./home.routes')
const authRoutes = require('./auth.routes')

const router = express.Router()

router.use('/', homeRoutes)
router.use('/auth', authRoutes)

module.exports = router