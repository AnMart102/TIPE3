//select.js
const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');
const modificarPyme = require('../controllers/modificarPyme.js');

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



router.get("/user",(req,res)=>{
    res.render('estadisticasPyme.ejs')
});






//RUTA PARA MOSTRAR Editar perfil usuario
router.get('/POR PONER /:Rut', (req, res)=>{//poner el nombre que creee el andres de la vista
    const Rut = req.params.Rut;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega, tipoTienda, Empresa_registrada, Actividades_SII, Patente_permiso, R_sanitaria, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, calle, numero, CasaDepto, localidad, PoblaVilla, categorias, archivo, sub_cat FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN archivos as a JOIN categorias as c JOIN subcat as s WHERE u.Rut = ? AND u.Rut=f.Rut AND u.id_direccion=d.id_direccion AND f.id_formulario=a.id_formulario AND f.id_formulario=c.id_formulario AND c.id_categorias=s.id_categorias AND Rol = "User"', [Rut], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/POR PONER.ejs', {usuario:results[0]});//poner el nombre que creee el andres de la vista
        }
    })
})
//Ruta para mostrar vitrina pyme
router.get('/Emprendimiento/:id_formulario', (req, res)=>{//poner el nombre que creee el andres de la vista
    const id_formulario = req.params.id_formulario;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega,Horario,tipoTienda ,Empresa_registrada, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, calle, numero, CasaDepto, localidad, PoblaVilla, categorias, sub_cat FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN categorias as c JOIN subcat as s WHERE f.id_formulario = ? AND u.Rut=f.Rut AND u.Rut=d.Rut  AND f.id_formulario=c.id_formulario AND c.id_categorias=s.id_categorias AND Rol = "User"', [id_formulario], (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results);
            res.render('descripcion-emprendimiento.ejs', {
                pyme:results
            });//poner el nombre que creee el andres de la vista
            
        }
    })
})


  
//RUTA modificarPyme
router.post('/guardar', modificarPyme.guardar);




//RUTA PARA ACTUALIZAR EL EDITAR REGISTRO DEL ADMINISTRADOR










module.exports = router;
