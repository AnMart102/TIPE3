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
router.get('/Dashboard',(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{

    conn.query('SELECT Nombre_pyme,Nombre,ApellidoP,ApellidoM,categorias,estado_sol,f.id_formulario FROM formulario_solicitud as f JOIN usuario as u JOIN categorias as c WHERE f.id_formulario=c.id_formulario AND f.Rut=u.Rut and f.estado_sol="En espera" ;', (error,results) =>{
    if(error){
        throw error;
    }else{
        res.render('estadisticasVisitas.ejs',{datos3:results}); //poner el n0ombre del archivo que creo el andres
        console.log(results);
    }
})

    
});


router.get('/admin/emprendimiento/:id_formulario', (req, res,next)=>{//poner el nombre que creee el andres de la vista
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
    },(req,res) =>{
    
    const id_formulario = req.params.id_formulario;
    conn.query('SELECT f.id_formulario,Nombre, ApellidoP, ApellidoM, Correo, Telefono, Nombre_pyme, Descripcion, RSH, Medio_pago, Medio_entrega,Horario,tipoTienda ,Empresa_registrada, estado_sol, Sitio_web, Facebook, Whatsapp, Instagram, calle, numero, CasaDepto, localidad, PoblaVilla, categorias FROM usuario AS u JOIN direccion as d JOIN formulario_solicitud as f JOIN categorias as c WHERE f.id_formulario = ? AND u.Rut=f.Rut AND u.Rut=d.Rut  AND f.id_formulario=c.id_formulario AND  Rol = "User"', [id_formulario], (error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results);
            res.render('filtro-emprendimientos.ejs', {
                formulario:results
            });//poner el nombre que creee el andres de la vista
            
        }
    })
})



router.post("/botonaceptar",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
    },(req,res) =>{
    const estado_sol=req.body.Estado_sol
    const id_formulario=req.body.Id_formulario
    
    conn.query('UPDATE  formulario_solicitud SET estado_sol = ? WHERE id_formulario=? ', [estado_sol, id_formulario], (error,results) =>{
        if(error){
            throw error;
        }else{
            
            res.redirect('/Dashboard');//poner el estadisticas admin .ejs
        }
    })
})
router.post("/botonmodificar",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const estado_sol=req.body.Estado_sol
    const id_formulario=req.body.Id_formulario
    
    conn.query('UPDATE  formulario_solicitud SET estado_sol = ? WHERE id_formulario=? ', [estado_sol, id_formulario], (error,results) =>{
        if(error){
            throw error;
        }else{
            
            res.redirect('/Dashboard');//poner el estadisticas admin .ejs
        }
    })
})

router.post("/botonrechazar",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const estado_sol=req.body.Estado_sol
    const id_formulario=req.body.Id_formulario
    
    conn.query('UPDATE  formulario_solicitud SET estado_sol = ? WHERE id_formulario=? ', [estado_sol, id_formulario], (error,results) =>{
        if(error){
            throw error;
        }else{
            
            res.redirect('/Dashboard');//poner el estadisticas admin .ejs
        }
    })
})




router.get("/editarperfiladmin",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    res.render("editar-perfil-administrador.ejs");

})

router.post("/updateadmin",(req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
},(req,res) =>{
    const Nombre=req.body.Nombre
    const Correo=req.body.Correo
    conn.query('UPDATE usuario SET Nombre = ?, Correo = ? WHERE Rol="Admin"', [Nombre,Correo], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.redirect('/Dashboard');
        }
    })


})




//RUTA MOSTRAR QUERYS de administrar solicitudes de pymes 
router.get('/PONER NOMBRE',solicitudPymeAdmin.administrarSolicitudes);//poner el nombre que el andres le puso

//RUTA MOSTRAR ESTADISTICAS DEL ADMIN 
router.get('/editarPerfilAdmin', mostrarEstadisticasAdmin.mostrarEstAdmin);//ponerle el nombre del archivo de la vista de estadisticas admin que el andres creo


module.exports = router;

