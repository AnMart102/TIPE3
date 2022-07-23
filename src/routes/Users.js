//select.js
const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');


const { Router } = require('express');

//QUERYS DEL INDEX
//QUERY FILTRADO POR CATEGORIA INDEX
// router.get('/:id_categoria', (req,res) => {
//     const id_categoria = req.params.id_categoria;
//     conn.query('SELECT Nombre_pyme,Descripcion,estado_sol,categorias FROM formulario_solicitud AS f JOIN categorias as c WHERE c.id_formulario = ? and f.id_formulario=c.id_formulario', [id_categoria], (error,results) => {
//         if(error){
//             throw error;
//         }else{
//             res.render('/', {categoria:results[0]});
//         }
//    })
// })
//CON LO ANTERIOR DEBERIA BASTAR, SI FALTA ALGO ES LO QUE ESTA ABAJO, PARA ACTUALIZAR LA PAGINA
// exports.actualizarCategorias = (req, res)=>{
//     const id_categoria = req.body.id_categoria;
//     const Categoria = req.body.Categoria;
//     conn.query('SELECT Nombre_pyme,Descripcion,estado_sol,Categoria FROM formulario_solicitud AS f JOIN categorias as c WHERE c.id_categoria = ? and f.id_categoria=c.id_categoria', [{id_categoria:id_categoria}], (error,results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.render(results);
//         }
//     })
// }

//QUERY BARRA DE BUSQUEDA INDEX
//

//Query carga editar perfil usuario FACUUUU
// router.get('/usuario/editar/:id_formulario',(req,res)=>{
//    const id_formulario=req.params.id_formulario;
//     res.render('editarPerfilUsuario.ejs');
// });



router.get("/user/:Rut",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const rut=req.params.Rut;
    res.render('estadisticasPyme.ejs',{
        Rut:rut
    })
});






//RUTA PARA MOSTRAR Editar perfil usuario
router.get('/edit/:Rut', (req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const Rut = req.params.Rut;
    conn.query('SELECT Rut,Nombre_pyme, Descripcion, Horario, Sitio_web, Facebook, Whatsapp,Instagram FROM formulario_solicitud WHERE Rut =? ', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results[0]);
            res.render('editarPerfilUsuario.ejs', {usuario:results});//poner el nombre que creee el andres de la vista
        }
    })
});
//Ruta para mostrar vitrina pyme
router.get('/Emprendimiento/:id_formulario', (req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const id_formulario = req.params.id_formulario;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega,Horario,tipoTienda ,Empresa_registrada, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, calle, numero, CasaDepto, localidad, PoblaVilla, categorias FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN categorias as c WHERE f.id_formulario = ? AND u.Rut=f.Rut AND u.Rut=d.Rut AND f.id_formulario=c.id_formulario AND Rol = "User"', [id_formulario], (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results);
            res.render('descripcion-emprendimiento.ejs', {
                pyme:results
            });//poner el nombre que creee el andres de la vista
            
        }
    })
});

router.post("/updateuser/:Rut",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const Nombre_pyme = req.body.Nombre_pyme;
    const Descripcion = req.body.Descripcion;
    const Horario = req.body.Horario;
    const Sitio_web = req.body.Sitio_web;   
    const Facebook = req.body.Facebook;
    const Whatsapp = req.body.Whatsapp;
    const Instagram = req.body.Instagram;
    const rut1=req.params.Rut;
    conn.query('UPDATE formulario_solicitud SET Nombre_pyme = ?, Sitio_web = ?, Horario = ?,Facebook =?, Whatsapp=?, Instagram=?, Descripcion=? WHERE Rut= ?', [Nombre_pyme,Sitio_web,Horario,Facebook,Whatsapp,Instagram,Descripcion,rut1], (error,results) =>{
        if(error){
            throw error;
        }else{
           
            res.redirect('/user/'+rut1);
        }
    })


})
  






//RUTA PARA ACTUALIZAR EL EDITAR REGISTRO DEL ADMINISTRADOR










module.exports = router;
