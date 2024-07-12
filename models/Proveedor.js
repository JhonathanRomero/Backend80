const mongoose = require('mongoose');

// el modelo que vamos a implementar, debe ser le mismo a la base de datos

const proveedorSchema = mongoose.Schema({


    razonSocial:{
        type: String,
        required: true
    },

    nit:{
        type: Number,
        required: true
    },

    nombreProveedor:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    numeroContacto:{
        type: Number,
        required: true
    },

    direccion:{
        type: String,
        required: true
    }


    },{versionkey: false});

module.exports = mongoose.model('Proveedor', proveedorSchema);