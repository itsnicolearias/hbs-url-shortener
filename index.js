const express = require('express')
const { create } = require('express-handlebars')
const indexRoutes = require('./routes/index')
const dotenv = require('dotenv')
require('./database/db')

const app = express()
dotenv.config()


const PORT = process.env.PORT

//aceptar extension .hbs
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");


//usar ruta publica
//middleware, como incerceptan la informacion, tienen que ir abajo de las rutas
app.use(express.static(__dirname + "/public"));
app.use('/', indexRoutes)

app.listen(PORT, () => console.log('Server running'))