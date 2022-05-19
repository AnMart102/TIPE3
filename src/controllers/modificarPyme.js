const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

//CRUD para el formulario de inscripcion de usuario.
exports.guardar = (req, res)=>{
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
    const Horario = req.body.Horario;
    const tipoTienda = req.body.tipoTienda;
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
//archivos
    const archivo = req.body.archivo;
//mostrar por consola
    console.log(Correo +" - "+ Nombre +" - "+ ApellidoP +" - "+ ApellidoM +" - "+ Contrasena +" - "+ Telefono);
//editar perfil usuario
    conn.query('UPDATE usuario SET ? WHERE Rut = ?', [{Nombre:Nombre, ApellidoP:ApellidoP, ApellidoM:ApellidoM, Correo:Correo, Contrasena:Contrasena, Telefono:Telefono}, Rut], (error,results)=>{
    if(error){
        console.log(error);
    }else{
        res.redirect('/');
    }
    }) 
    conexion.query('UPDATE formulario_solicitud as f SET ? WHERE f.Rut=?', [{Nombre_pyme:Nombre_pyme, Descripcion:Descripcion, RSH:RSH, Medio_pago:Medio_pago, Medio_entrega:Medio_entrega, Horario:Horario, tipoTienda:tipoTienda,Empresa_registrada:Empresa_registrada, Actividades_SII:Actividades_SII, Patente_permiso:Patente_permiso, R_sanitaria:R_sanitaria, Sitio_web:Sitio_web, Facebook:Facebook, Whatsapp:Whatsapp, Instagram:Instagram},Rut], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
    conexion.query('UPDATE direccion as d SET ? WHERE d.Rut = ?', [{calle:calle, numero:numero, CasaDepto:CasaDepto, localidad:localidad, PoblaVilla:PoblaVilla}, Rut], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
    conexion.query('UPDATE categorias as c JOIN formulario_solicitud as f SET ? WHERE c.id_formulario=f.id_formulario and f.Rut=?', [{Categoria:Categoria}, Rut], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
    //VER EN QUE QUEDAMOS EN COMO IBAMOS A DEJAR LA RELACION ENTRE FORMULARIO_INCRIPCION Y SUBCATEGORIA
    conexion.query('UPDATE subcat as s JOIN categorias as c SET ? WHERE s.id_categoria=c.id_categoria', {nombre_subcat:nombre_subcat}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
    //ver como se modificaria cada uno de los archivos segun su nombre al parecer tengo que agregar bool con cada uno de los tipos de archivo y limitar las fotos de las pymes
    // conexion.query('UPDATE archivos as a JOIN formulario_solicitud as f SET ? WHERE a.id_formulario = f.id_formulario', {archivo:archivo}, (error,results)=>{
    //     if(error){
    //         console.log(error);
    //     }else{
    //         res.redirect('/');
    //     }
    // })
}