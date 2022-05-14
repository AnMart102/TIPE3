const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

exports.updateMiPerfilAdmin = (req, res)=>{
//admin
    const Rut = req.body.Rut;
    const Nombre = req.body.Nombre;
    const ApellidoP = req.body.ApellidoP;
    const ApellidoM = req.body.ApellidoM;
    const Correo = req.body.Correo;
    const Telefono = req.body.Telefono;
//direccion
    const calle = req.body.calle;
    const numero = req.body.numeroC;
    const CasaDepto = req.body.CasaDepto;
    const localidad = req.body.localidad;
    const PoblaVilla = req.body.PoblaVilla;
    conn.query('UPDATE usuario SET ? WHERE Rut = ?', [{Nombre,ApellidoP,ApellidoM,Correo,Telefono}, Rut], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/editarPerfilUsuario');
        }
    })
    conn.query('UPDATE direccion as d JOIN usuario as u SET ? WHERE d.id_direccion = u.id_direccion and u.Rut = ?',[{calle,numero,CasaDepto,localidad,PoblaVilla}], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/editarPerfilUsuario');
        }
    })
}   