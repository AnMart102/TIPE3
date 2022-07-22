// const express = require('express');
// const passport = require('passport');
// const { commit } = require('../database');
// const router = express.Router();
// const conn = require('../database');

// exports.upgrade = (req, res)=>{
//     conn.query('SELECT Nombre_pyme,Descripcion,id_formulario FROM formulario_solicitud', (error,results) =>{
//         if(error){
//             throw error;
//         }else{
//             datos1=results;
//             console.log(datos1);
//         }
//     })

//     res.render("index.ejs")
// }   