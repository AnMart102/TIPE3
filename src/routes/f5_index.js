const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

exports.upgrade = (req, res)=>{
    conn.query('Select Nombre_pyme,Descripcion,estado_sol,Categoria FROM formulario_solicitud as f JOIN categorias as c WHERE estado_sol = "Aprobado" and f.Rut=c.Rut', (err,res) =>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
    conn.query('Select DISTINCT Categoria FROM categorias as c where c.Categoria != NULL', (err,res) =>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
}