const express = require('express');
const ConectarBD = require('../config/db')
const cors = require('cors');

//configuracion de express y puerto

const app = express ();
const port = process.env.PORT || 5000;

//enlazar la conexion con la base de datos
ConectarBD();
app.use(cors());


app.use(express.json({extended:true}));


app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/proveedores', require('../routes/proveedor'));
app.use('/api/auth', require("../routes/auth"));
app.use('/api/usuarios', require("../routes/usuario"));


app.get('/', (req, res) =>{
    res.send("Bienvenido, estamos desde el navegador");
})

app.listen(port, () => console.log('esta conectado el servidor con el puerto', port));