const const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

//CRUD para el formulario de inscripcion de usuario.
exports.save = (req, res)=>{
    const Nombre = req.body.Nombre;
    const ApellidoP = req.body.ApellidoP;
    const ApellidoM = req.body.ApellidoM;
    const Correo = req.body.Correo;
    const Contrasena = req.body.Contrasena;
    const Telefono = req.body.Telefono;    

//agregar las de formulario de solicitud

    const calle = req.body.calle;
    const numero = req.body.numeroC;
    const CasaDepto = req.body.CasaDepto;
    const localidad = req.body.localidad;
    const PoblaVilla = req.body.PoblaVilla;

    const nombre_subcat = req.body.nombre_subcat;

    console.log(Correo +" - "+ Nombre +" - "+ ApellidoP +" - "+ ApellidoM +" - "+ Contrasena +" - "+ Telefono);
    conexion.query('INSERT INTO usuario SET ?', {Nombre:Nombre, ApellidoP:ApellidoP, ApellidoM:ApellidoM, Correo:Correo, Contrasena:Contrasena, Telefono:Telefono}) //FALTAN POR RELLENAR (https://www.youtube.com/watch?v=fLIwK292RPY&ab_channel=Inform%C3%A1ticaDP)
    conexion.query('INSERT INTO formulario_solicitud SET ?', {}) //por terminar hacer para tabla formulario solicitud
    conexion.query('INSERT INTO direccion SET ?', {calle:calle, numero:numero, CasaDepto:CasaDepto, localidad:localidad, PoblaVilla:PoblaVilla}) //por terminar
    conexion.query('INSERT INTO subcat SET ?', {nombre_subcat:nombre_subcat}) //por terminar ()si es que es distinto de NULL
}