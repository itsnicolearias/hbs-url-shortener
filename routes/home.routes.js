const express = require('express')
const {getAllUrls, createUrl, deleteUrl, updateUrlForm, updateUrl, redirect} = require('../controllers/home.controllers')
const validateUrl = require('../middlewares/validateUrl')
const router = express.Router()

router.get('/', getAllUrls)

router.post('/', validateUrl, createUrl)

router.get('/editar/:id',  updateUrlForm)

router.post('/editar/:id', validateUrl, updateUrl)

router.get('/:shortURL', redirect)

router.get('/eliminar/:id', deleteUrl)

module.exports = router;