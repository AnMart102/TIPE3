const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');
const { Router } = require('express');
const res = require('express/lib/response');



router.get('/registro',(req,res)=>{
    res.render('registroU.ejs');
});

router.post('/registrou',(req,res)=>{
    const Nombre = req.body.Nombre;
    const Rut = req.body.Rut;   
    const ApellidoP = req.body.ApellidoP;
    const ApellidoM = req.body.ApellidoM;
    const Correo = req.body.Correo;
    const Contrasena = req.body.Contrasena;
    const Telefono = req.body.Telefono; 
    conn.query('INSERT INTO usuario SET ?', {Rut:Rut, Nombre:Nombre, ApellidoP:ApellidoP, ApellidoM:ApellidoM, Correo:Correo, Contrasena:Contrasena, Telefono:Telefono}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registroD');
        }
        }) 
});

router.get('/registroD',(req,res)=>{
    conn.query('SELECT Rut FROM usuario ORDER BY Rut DESC LIMIT 1', (err,resp,campos) => {
        console.log(resp);
        res.render('registroD.ejs',{
        Info : resp
        });
        
    });
});

router.post('/registroD',(req,res)=>{
    const Rut = req.body.Rut;
    const calle = req.body.calle;
    const numero = req.body.numeroC;
    const CasaDepto = req.body.CasaDepto;
    const localidad = req.body.localidad;
    const PoblaVilla = req.body.PoblaVilla;
    conn.query('INSERT INTO direccion SET ?', {Rut:Rut,calle:calle, numero:numero, CasaDepto:CasaDepto, localidad:localidad, PoblaVilla:PoblaVilla}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registroF');
        }
    })
});

router.get('/registroF',(req,res)=>{
    conn.query('SELECT Rut FROM usuario ORDER BY Rut DESC LIMIT 1', (err,resp,campos) => {
        console.log(resp);
        res.render('registroF.ejs',{
        InfoRut : resp
        });
    });
});

router.post('/registroF',(req,res)=>{
    const Nombre_pyme = req.body.Nombre_pyme;
    const Rut = req.body.Rut;
    const Descripcion = req.body.Descripcion;
    const Medio_pago = req.body.Medio_pago;
    const Medio_entrega = req.body.Medio_entrega;
    const Horario = req.body.Horario;
    const tipoTienda = req.body.tipoTienda;
    const Empresa_registrada = req.body.Empresa_registrada;
    const Sitio_web = req.body.Sitio_web;
    const Facebook = req.body.Facebook;
    const Whatsapp = req.body.Whatsapp;
    const Instagram = req.body.Instagram;
    conn.query('INSERT INTO formulario_solicitud SET ?', {Rut:Rut, Nombre_pyme:Nombre_pyme, Descripcion:Descripcion, Medio_pago:Medio_pago, Medio_entrega:Medio_entrega, Horario:Horario, tipoTienda:tipoTienda, Empresa_registrada:Empresa_registrada,  Sitio_web:Sitio_web, Facebook:Facebook,Whatsapp:Whatsapp, Instagram:Instagram}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/registroC');
        }
    })
});

router.get('/registroC',(req,res)=>{
    conn.query('SELECT id_formulario FROM formulario_solicitud ORDER BY ID_P DESC LIMIT 1', (err,resp,campos) => {
        console.log(resp);
        res.render('registroC.ejs',{
        InfoID : resp
        });
    });
});
module.exports = router;