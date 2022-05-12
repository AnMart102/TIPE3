const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

//CRUD para el formulario de inscripcion de usuario.
exports.save = (req, res)=>{
//usuario
    const Nombre = req.body.Nombre;
    const Rut = req.body.Rut;   
    const ApellidoP = req.body.ApellidoP;
    const ApellidoM = req.body.ApellidoM;
    const Correo = req.body.Correo;
    const Contrasena = req.body.Contrasena;
    const Telefono = req.body.Telefono;    

//formulario de solicitud
    const Nombre_pyme = req.body.Nombre_pyme;
    const Descripcion = req.body.Descripcion;
    const RSH = req.body.RSH;
    const Medio_pago = req.body.Medio_pago;
    const Medio_entrega = req.body.Medio_entrega;
    const Empresa_registrada = req.body.Empresa_registrada;
    const Actividades_SII = req.body.Actividades_SII;
    const Patente_permiso = req.body.Patente_permiso;
    const R_sanitaria = req.body.R_sanitaria;
    const Sitio_web = req.body.Sitio_web;
    const Facebook = req.body.Facebook;
    const Whatsapp = req.body.Whatsapp;
    const Instagram = req.body.Instagram;
//direccion
    const calle = req.body.calle;
    const numero = req.body.numeroC;
    const CasaDepto = req.body.CasaDepto;
    const localidad = req.body.localidad;
    const PoblaVilla = req.body.PoblaVilla;
//categorias
    const Categoria = req.body.Categoria;
//subcat
    const nombre_subcat = req.body.nombre_subcat;


//mostrar por consola que se obtienen los datos
    console.log(Correo +" - "+ Nombre +" - "+ ApellidoP +" - "+ ApellidoM +" - "+ Contrasena +" - "+ Telefono);
//querys para insertar en la BD
    conexion.query('INSERT INTO usuario SET ?', {Rut:Rut, Nombre:Nombre, ApellidoP:ApellidoP, ApellidoM:ApellidoM, Correo:Correo, Contrasena:Contrasena, Telefono:Telefono}) //FALTAN POR RELLENAR (https://www.youtube.com/watch?v=fLIwK292RPY&ab_channel=Inform%C3%A1ticaDP)
    conexion.query('INSERT INTO formulario_solicitud SET ?', {Nombre_pyme:Nombre_pyme, Descripcion:Descripcion, RSH:RSH, Medio_pago:Medio_pago, Medio_entrega:Medio_entrega, Empresa_registrada:Empresa_registrada, Actividades_SII:Actividades_SII, Patente_permiso:Patente_permiso, R_sanitaria:R_sanitaria, Sitio_web:Sitio_web, Facebook:Facebook, Whatsapp:Whatsapp, Instagram:Instagram})
    conexion.query('INSERT INTO direccion SET ?', {calle:calle, numero:numero, CasaDepto:CasaDepto, localidad:localidad, PoblaVilla:PoblaVilla})
    conexion.query('INSERT INTO categorias SET ?', {Categoria:Categoria})
    conexion.query('INSERT INTO subcat SET ?', {nombre_subcat:nombre_subcat})
}