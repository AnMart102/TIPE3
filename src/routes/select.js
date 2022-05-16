const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');
const crud = require('../controllers/crud.js');
const f5_index= require('../controllers/f5_index.js');
const updatePerfilAdmin = require('../controllers/updatePerfilAdmin.js');
const modificarPyme = require('../controllers/modificarPyme.js');
const mostrarEstadisticasAdmin = require('../controllers/mostrarEstadisticasAdmin.js');
const { Router } = require('express');

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
router.get('/:id_categoria', (req,res) => {
    const id_categoria = req.params.id_categoria;
    conn.query('SELECT Nombre_pyme,Descripcion,estado_sol,Categoria FROM formulario_solicitud AS f JOIN categorias as c WHERE c.id_categoria = ? and f.id_categoria=c.id_categoria', [id_categoria], (error,results) => {
        if(error){
            throw error;
        }else{
            res.render('/', {categoria:results[0]});
        }
   })
})
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
// router.get('/',(req,res)=>{
//     res.render('index.ejs');
// });
//QUERY BARRA DE BUSQUEDA INDEX

//RUTA PARA EL REGISTRO
router.get('/registro',(req,res)=>{
        res.render('registro.ejs');
});

//RUTA CRUD FORMULARIO DE INSCRIPCION
router.post('/save', crud.save);

//RUTA PARA MOSTRAR Editar perfil usuario
router.get('/POR PONER /:Rut', (req, res)=>{//poner el nombre que creee el andres de la vista
    const Rut = req.params.Rut;
    conn.query('SELECT Nombre,ApellidoP,ApellidoM,Correo,Telefono,calle,numero,CasaDepto,localidad,PoblaVilla,estado_sol,Comentario_admin FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f WHERE u.Rut = ? AND u.Rut=f.Rut AND u.id_direccion=d.id_direccion AND Rol = "User"', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/POR PONER.ejs', {usuario:results[0]});//poner el nombre que creee el andres de la vista
        }
    })
})

//RUTA modificarPyme
router.post('/guardar', modificarPyme.guardar);


//RUTA PARA MOSTRAR Editar perfil admin
router.get('/editarPerfilUsuario/:Rut', (req, res)=>{
    const Rut = req.params.Rut;
    conn.query('SELECT Nombre,ApellidoP,ApellidoM,Correo,Telefono,calle,numero,CasaDepto,localidad,PoblaVilla FROM usuario AS u JOIN direccion as d WHERE Rut = ? AND u.id_direccion=d.id_direccion AND Rol = "Admin"', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/editarPerfilUsuario.ejs', {admin:results[0]});
        }
    })
})

//RUTA PARA MOSTRAR vitrina pyme
router.get('/MOSTRARVITRINAPYME/:Rut', (req, res)=>{//poner el nombre que el andres le puso
    const Rut = req.params.Rut;
    conn.query('', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/MOSTRARVITRINAPYME.ejs', {admin:results[0]});
        }
    })
})

//RUTA PARA ACTUALIZAR EL EDITAR REGISTRO DEL ADMINISTRADOR
router.post('/updateMiPerfilAdmin',updatePerfilAdmin.updateMiPerfilAdmin);

// router.get('/', (req, res)=>{
//     conn.query('', (error, results)=>{
//         if (error) {
//             throw error;
//         }else{
//             res.send(results);
//         }
//     }
// })

//RUTA MOSTRAR QUERYS INDEX 
router.get('/', f5_index.upgrade);

//RUTA MOSTRAR ESTADISTICAS DEL ADMIN 
router.get('/editarPerfilAdmin', mostrarEstadisticasAdmin.mostrarEstAdmin);//ponerle el nombre del archivo de la vista de estadisticas admin que el andres creo

// router.get('/',(req,res)=>{
//     res.render('index');
// })


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
