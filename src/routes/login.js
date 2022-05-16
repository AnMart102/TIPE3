const express = require('express');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();


const conn = require('../database');

router.get('/login', (req,res) =>{
    res.render('login.ejs');
});

router.post('/login',passport.authenticate('local',{
    successRedirect: "/correcto",
    failureRedirect: "/login"
}));

router.get('/correcto', (req,res,next)=>{
    if(req.isAuthenticated()) return next();
    
    res.redirect('/login');
},(req,res) =>{
    
    let op = require("../index.js")
    let tipo_usuario = op.rol1;
    if(tipo_usuario==="Admin"){
        res.redirect('/registro');
    }else if(tipo_usuario==="User"){
        res.redirect('/');
    }   
});



module.exports = router;