//select.js
const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
const { commit } = require('../database');
const router = express.Router();
const conn = require('../database');
const updatePerfilAdmin = require('../controllers/updatePerfilAdmin.js');
const mostrarEstadisticasAdmin = require('../controllers/mostrarEstadisticasAdmin.js');
const solicitudPymeAdmin = require('../controllers/solicitudPymeAdmin.js')
const { Router } = require('express');


//DASHBOARD ADMIN
router.get('/Dashboard',(req,res)=>{
    res.render('estadisticasVisitas.ejs');
});

//Ruta para mostrar la vista para que el administrador apruebe rechace o pida una modificacion del formulario pyme
router.get('/POR PONER /:id_formulario', (req, res)=>{//poner el nombre que creee el andres de la vista
    const id_formulario = req.params.id_formulario;
    conn.query('SELECT Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega, Horario, tipoTienda, Empresa_registrada, Actividades_SII, Patente_permiso, R_sanitaria, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, Comentario_admin, calle, numero, CasaDepto, localidad, PoblaVilla, categorias, archivo, sub_cat FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN archivos as a JOIN categorias as c JOIN subcat as s WHERE f.id_formulario = ? AND u.Rut=f.Rut AND u.Rut=d.Rut AND f.id_formulario=a.id_formulario AND f.id_formulario=c.id_formulario AND c.id_categorias=s.id_categorias AND Rol = "User"', [id_formulario], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('/POR PONER.ejs', {formulario:results[0]});//poner el nombre que creee el andres de la vista
        }
    })
})

router.get("/admin/emprendimiento/:Rut",(req,res)=>{
    const Rut = req.params.Rut
    //consulta de toda la info de una pime
    res.render('filtro-emprendimientos.ejs')
});

//RUTA PARA MOSTRAR Editar perfil ADMIN
// router.get('/editarPerfilUsuario/:Rut', (req, res)=>{//poner el nombre que el andres le puso
//     const Rut = req.params.Rut;
//     conn.query('SELECT Nombre,ApellidoP,ApellidoM,Correo,Telefono,calle,numero,CasaDepto,localidad,PoblaVilla FROM usuario AS u JOIN direccion as d WHERE Rut = ? AND u.Rut=d.Rut AND Rol = "User"', [Rut], (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.render('/editarPerfilUsuario.ejs', {
//                 admin:results[0]
//             });//poner el nombre que el andres le puso
//         }
//     })
// })
router.post('/updateMiPerfilAdmin',updatePerfilAdmin.updateMiPerfilAdmin);

//RUTA MOSTRAR QUERYS de administrar solicitudes de pymes 
router.get('/PONER NOMBRE',solicitudPymeAdmin.administrarSolicitudes);//poner el nombre que el andres le puso

//RUTA MOSTRAR ESTADISTICAS DEL ADMIN 
router.get('/editarPerfilAdmin', mostrarEstadisticasAdmin.mostrarEstAdmin);//ponerle el nombre del archivo de la vista de estadisticas admin que el andres creo

module.exports = router;