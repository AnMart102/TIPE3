const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

exports.mostrarEstAdmin = (req, res)=>{
    conn.query('SELECT Nombre_pyme,Nombre,ApellidoP,ApellidoM,categorias,estado_sol FROM formulario_solicitud as f JOIN usuario as u JOIN categorias as c WHERE f.id_formulario=c.id_formulario AND f.Rut=u.Rut and (f.estado_sol="En espera" or f.estado_sol="Modificacion");', (error,results) =>{
        if(error){
            throw error;
        }else{
            datos3=results;
            console.log(datos3);
            res.render("index.ejs");//poner el n0ombre del archivo que creo el andres
        }
    })
}   