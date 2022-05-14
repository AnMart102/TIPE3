const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

exports.upgrade = (req, res)=>{
    conn.query('SELECT Nombre_pyme,Descripcion,Categoria FROM formulario_solicitud AS f JOIN categorias as c WHERE f.id_categoria=c.id_categoria', (error,results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
    conn.query('Select DISTINCT Categoria FROM categorias', (error,results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
}   