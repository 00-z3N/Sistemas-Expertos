const express = require('express');
const router = express.Router();

var Carpeta = require('../models/Carpeta')

const { isAuthenticated } = require('../helpers/auth');

router.get('/carpetas',  (req, res) => {
    res.render('carpetas/nueva-carpeta');
  });

router.post('/carpetas/nuevaCarpeta', isAuthenticated, async (req, res) => {
    
    const carpeta = new Carpeta ({
        nombre : req.body.nombre,
        idPadre : req.body.idPadre
    });

    console.log(carpeta);
    
    await carpeta.save(); 
    res.send(carpeta);
    
   
});


module.exports = router;
