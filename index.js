const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, 'public');
const hbs = require('hbs');
const platos = require("./hbs/helpers")

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
            "Pizza",
            "Burger",
            "Empanada",
        ],
        platos
        }
    );
})

app.listen(3000, ()=>{
    console.log("Server listening on port", 3000);
});


