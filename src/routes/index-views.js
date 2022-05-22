//select.js
const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');
const crud = require('../controllers/crud.js');
const f5_index= require('../controllers/f5_index.js');
const { Router } = require('express');

//RUTA PARA EL REGISTRO
router.get('/registro',(req,res)=>{
    res.render('registro.ejs');
});

//RUTA CRUD FORMULARIO DE INSCRIPCION
router.post('/save', crud.save);

//RUTA MOSTRAR QUERYS INDEX 
router.get('/', f5_index.upgrade);


module.exports = router;