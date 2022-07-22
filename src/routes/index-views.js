//select.js
const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

const f5_index= require('../controllers/f5_index.js');
const { Router } = require('express');

//RUTA PARA EL REGISTRO

router.get('/', (req, res)=>{//poner el nombre que creee el andres de la vista
    conn.query('SELECT Nombre_pyme,Descripcion,id_formulario FROM formulario_solicitud WHERE estado_sol="Aprobado" ', (error,results) =>{
        if(error){
            throw error;
        }else{
            console.log(results);
            res.render('index.ejs', {
                datos1:results
            });


        }
    })
})

//Query para la barra de busqueda
router.post('/busca', (req, res)=>{//poner el nombre que creee el andres de la vista
    const Nombre_pyme = req.body.Nombre_pyme;
    conn.query('SELECT Nombre_pyme,id_formulario FROM formulario_solicitud WHERE Nombre_pyme LIKE ?', ['%' + Nombre_pyme +'%'], (error, results)=>{
        if(error){
            throw error;
        }else{
            id_form=results[0].id_formulario
            res.redirect('/Emprendimiento/'+id_form);//poner el nombre que creee el andres de la vista
        }
    })
})


//RUTA MOSTRAR QUERYS INDEX 
// router.get('/', f5_index.upgrade);


module.exports = router;