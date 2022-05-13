const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');
const crud = require('../controllers/crud.js');
//QUERYS DEL INDEX
//MOSTRAR PYMES INDEX
//router.get('/', (req,res) => {
//    conn.query('Select Nombre_pyme,Descripcion,estado_sol,Categoria FROM formulario_solicitud as f JOIN categorias as c WHERE estado_sol = "Aprobado" and f.Rut=c.Rut', (err,resp,campos) => {
//        console.log(resp);
//        res.render('index.ejs',{
//            datos: resp
//        });
//    });
//});
//MOTRAR CATEGORIAS INDEX
//router.get('/', (req,res) => {
//    conn.query('Select DISTINCT Categoria FROM categorias as c where c.Categoria != NULL', (err,resp,campos) => {
//        console.log(resp);
//        res.render('index.ejs',{
//            datos: resp
//        });
//    });
//});
//QUERY FILTRADO POR CATEGORIA INDEX

//QUERY BARRA DE BUSQUEDA INDEX



//QUERYS Editar perfil usuario 
//router.get('/editarPerfilUsuario', (req,res) => {
//    conn.query('', (err,resp,campos) => {
//        console.log(resp);
//        res.render('editarPerfilUsuario.ejs',{
//            datos: resp
//        });
//    });
//});

router.get('/registro',(req,res)=>{
        res.render('registro.ejs');
});

router.post('/save', crud.save);


const f5_index= require('./routes/f5_index');
router.get('/upgrade', crud.upgrade)

router.get('/',(req,res)=>{
    res.render('index');
})

const crud= require('./routes/crud');
router.post('/save', crud.save)

// router.get('/correcto', (req,res,next) => {
//     if(req.isAuthenticated()) return next();
//     res.redirect('/login');
// },(req,res) =>{
//     res.render('admin.ejs');
//     // conn.query('Select Nombre FROM administrador', (err,resp,campos) => {
//     //         res.render('admin.ejs',{
//     //         datos : resp
//     //         });

//     //     });
    


//     });

// router.get('/pelicula/:ID', (req,res) => {
//     //res.render('index.ejs');
//     const { ID } = req.params;
//     conn.query('Select ID,Nombre,Director,Fecha_estreno,Genero,Dir_img,Sinopsis,Evaluacion from Contenido_pag natural join resena where resena.ID=contenido_pag.ID and ID = ?', [ID] , (err,resp,campos) => {
//         console.log(resp);
//         res.render('peliculas.ejs',{
//             datos: resp
//         });
//     });
// });

module.exports = router;
