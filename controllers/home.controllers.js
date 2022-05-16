const Url = require('../models/url.models');
const { nanoid } = require('nanoid')

const getAllUrls = async(req, res) => {
    
    try {
        const urls = await Url.find().lean()
        res.render("Home", {urls: urls})
      
    } catch (error) {
        console.log(error)
        res.send('algo fallo')
    }
    
    

}

const createUrl = async(req, res) => {
    
const { origin } = req.body
//nombre y valor de la propiedad

    try {
        const url = new Url({ origin: origin, shortURL: nanoid(8)})
        await url.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('error: algo fallo')
    }

}

//conectar boton con controlador
const updateUrlForm = async(req, res) => {
    const { id } = req.params
    try {
        const url = await Url.findById(id).lean()
        res.render('Home', { url })
    } catch (error) {
        console.log(error)
        res.send('error algo salio mal')
    }

}

const updateUrl = async(req, res) => {
    const { id } = req.params
    const { origin } = req.body
    try {
       await Url.findByIdAndUpdate(id, { origin: origin })
       res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('error algo salio mal')
    }

}

const redirect = async(req, res) => {

    const { shortURL } = req.params
    try {
        const urlDB = await Url.findOne({ shortURL: shortURL })
        res.redirect(urlDB.origin)
        
    } catch (error) {
        console.log(error)
        res.send('error algo salio mal')
    }
}

const deleteUrl = async(req, res) => {
   const { id } = req.params

    try {
        await Url.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('error algo salio mal')
    }
}

module.exports = { getAllUrls, createUrl, deleteUrl, updateUrlForm, updateUrl, redirect }