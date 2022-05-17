//select.js
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
const solicitudPymeAdmin = require('../controllers/solicitudPymeAdmin.js');
const { Router } = require('express');

//QUERYS DEL INDEX
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

//QUERY BARRA DE BUSQUEDA INDEX
//
//RUTA PARA EL REGISTRO
router.get('/registro',(req,res)=>{
        res.render('registro.ejs');
});

//RUTA CRUD FORMULARIO DE INSCRIPCION
router.post('/save', crud.save);

//RUTA PARA MOSTRAR Editar perfil usuario
router.get('/POR PONER /:Rut', (req, res)=>{//poner el nombre que creee el andres de la vista
    const Rut = req.params.Rut;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega, Horario, tipoTienda, Empresa_registrada, Actividades_SII, Patente_permiso, R_sanitaria, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, calle, numero, CasaDepto, localidad, PoblaVilla, categorias, archivo, sub_cat FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN archivos as a JOIN categorias as c JOIN subcat as s WHERE u.Rut = ? AND u.Rut=f.Rut AND u.id_direccion=d.id_direccion AND f.id_formulario=a.id_formulario AND f.id_formulario=c.id_formulario AND c.id_categorias=s.id_categorias AND Rol = "User"', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/POR PONER.ejs', {usuario:results[0]});//poner el nombre que creee el andres de la vista
        }
    })
})
//Ruta para mostrar vitrina pyme
router.get('/POR PONER /:id_formulario', (req, res)=>{//poner el nombre que creee el andres de la vista
    const id_formulario = req.params.id_formulario;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega, Horario, tipoTienda, Empresa_registrada, Actividades_SII, Patente_permiso, R_sanitaria, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, calle, numero, CasaDepto, localidad, PoblaVilla, categorias, archivo, sub_cat FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN archivos as a JOIN categorias as c JOIN subcat as s WHERE f.id_formulario = ? AND u.Rut=f.Rut AND u.id_direccion=d.id_direccion AND f.id_formulario=a.id_formulario AND f.id_formulario=c.id_formulario AND c.id_categorias=s.id_categorias AND Rol = "User"', [id_formulario], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/POR PONER.ejs', {pyme:results[0]});//poner el nombre que creee el andres de la vista
        }
    })
})

//Ruta para mostrar la vista para que el administrador apruebe rechace o pida una modificacion del formulario pyme
router.get('/POR PONER /:id_formulario', (req, res)=>{//poner el nombre que creee el andres de la vista
    const id_formulario = req.params.id_formulario;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega, Horario, tipoTienda, Empresa_registrada, Actividades_SII, Patente_permiso, R_sanitaria, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, Comentario_admin, calle, numero, CasaDepto, localidad, PoblaVilla, categorias, archivo, sub_cat FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN archivos as a JOIN categorias as c JOIN subcat as s WHERE f.id_formulario = ? AND u.Rut=f.Rut AND u.id_direccion=d.id_direccion AND f.id_formulario=a.id_formulario AND f.id_formulario=c.id_formulario AND c.id_categorias=s.id_categorias AND Rol = "User"', [id_formulario], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/POR PONER.ejs', {formulario:results[0]});//poner el nombre que creee el andres de la vista
        }
    })
})

//RUTA modificarPyme
router.post('/guardar', modificarPyme.guardar);


//RUTA PARA MOSTRAR Editar perfil ADMIN
router.get('/editarPerfilUsuario/:Rut', (req, res)=>{//poner el nombre que el andres le puso
    const Rut = req.params.Rut;
    conn.query('SELECT Nombre,ApellidoP,ApellidoM,Correo,Telefono,calle,numero,CasaDepto,localidad,PoblaVilla FROM usuario AS u JOIN direccion as d WHERE Rut = ? AND u.id_direccion=d.id_direccion AND Rol = "Admin"', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/editarPerfilUsuario.ejs', {admin:results[0]});//poner el nombre que el andres le puso
        }
    })
})

//RUTA PARA ACTUALIZAR EL EDITAR REGISTRO DEL ADMINISTRADOR
router.post('/updateMiPerfilAdmin',updatePerfilAdmin.updateMiPerfilAdmin);

//RUTA MOSTRAR QUERYS INDEX 
router.get('/', f5_index.upgrade);

//RUTA MOSTRAR QUERYS de administrar solicitudes de pymes 
router.get('/PONER NOMBRE', solicitudPymeAdmin.administrarSolicitudes);//poner el nombre que el andres le puso

//RUTA MOSTRAR ESTADISTICAS DEL ADMIN 
router.get('/editarPerfilAdmin', mostrarEstadisticasAdmin.mostrarEstAdmin);//ponerle el nombre del archivo de la vista de estadisticas admin que el andres creo


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
