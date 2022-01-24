const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, 'public');
const hbs = require('hbs');
const helados = require("./hbs/helpers")

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

/*app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"));
});*/
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req,res)=>{
    res.render('home',{
        nombre:"Vivs",
        anio: new Date().getFullYear(),
        categoria: [
            "Helados",
            "Frutas",
            "Tulipan",
        ],
        helados
        }
    );
})

/*app.listen(3000, ()=>{
    console.log("Server listening on port", 3000);
});*/

//port
const port = process.env.PORT || 3000;
//server
const server = app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});


