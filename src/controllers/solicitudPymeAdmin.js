const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

exports.administrarSolicitudes = (req, res)=>{
    //Formulario de solicitud
    const id_formulario = req.body.id_formulario;
    const Comentario_admin = req.body.Comentario_admin;
    const estado_sol = req.body.estado_sol;

    //Update para cuando se acepta la pyme
    conn.query('SELECT Comentario_admin, estado_sol FROM formulario_solicitud SET ? WHERE id_formulario = ? and estado_sol = "En espera"', [{Comentario_admin, estado_sol}, id_formulario], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/PONER');//poner el estadisticas admin .ejs
        }
    })
    //Update para cuando se pide modificacion la pyme
    conn.query('SELECT Comentario_admin, estado_sol FROM formulario_solicitud SET ? WHERE id_formulario = ? and estado_sol = "En espera"', [{Comentario_admin, estado_sol}, id_formulario], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/PONER');//poner el estadisticas admin .ejs
        }
    })
    //Update para cuando se denega la pyme
    conn.query('SELECT Comentario_admin, estado_sol FROM formulario_solicitud SET ? WHERE id_formulario = ? and estado_sol = "En espera"', [{Comentario_admin, estado_sol}, id_formulario], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/PONER');//poner el estadisticas admin .ejs
        }
    })  
    //res.render("") //poner nombre que le puso el andres.ejs
}   