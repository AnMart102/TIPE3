//select.js
const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');

const f5_index= require('../controllers/f5_index.js');
const { Router } = require('express');

//RUTA PARA EL REGISTRO




//RUTA MOSTRAR QUERYS INDEX 
router.get('/', f5_index.upgrade);


module.exports = router;