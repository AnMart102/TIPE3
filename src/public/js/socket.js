

let usuarios_conectados = 0;
var visitas = 0;
let visitas_dia = moment.hour();
let visitas_al_mes = moment.month();
let visitas_semana = moment.weekday();
let bandera = moment.hour(0);
var visitas_ene = 0;
var visitas_feb = 0;
var visitas_mar = 0;
var visitas_abr = 0;
var visitas_may = 0;
var visitas_jun = 0;
var visitas_jul = 0;
var visitas_ago = 0;
var visitas_sep = 0;
var visitas_oct = 0;
var visitas_nov = 0;
var visitas_dic = 0;
var visitas_lun = 0;
var visitas_mrt = 0;
var visitas_mie = 0;
var visitas_jue = 0;
var visitas_vie = 0;
var visitas_sab = 0;
var visitas_dom = 0;


/*try {
  visitas = 0 | Number(fs.readFileSync("visitas.txt", "utf8"));
} catch (err) {
  visitas = 0;
  console.error(err);
}*/

module.exports = function (io, app) {
  io.on("connection", (socket) => {
    console.log("Nuevo usuario conectado " + socket.id);
    usuarios_conectados++;
    if ((visitas_dia = bandera)) {
        visitas = 0;
     }
    else{
        visitas++;
    }
    switch (visitas_al_mes) {
        case 0:
          console.log('enero');
          visitas_ene++;
          break;
        case 1:
          console.log('febrero');
          visitas_feb++;
          break;
        case 2:
          console.log('marzo');
          visitas_mar++;
          break;
        case 3:
          console.log('abril');
          visitas_abr++;
          break;
        case 4:
          console.log('mayo');
          visitas_may++;
          break;
        case 5:
          console.log('junio');
          visitas_jun++;
          break;
        case 6:
          console.log('julio');
          visitas_jul++;
          break;
        case 7:
          console.log('agosto');
          visitas_ago++;
          break;
        case 8:
          console.log('septiembre');
          visitas_sep++;
          break;
        case 9:
          console.log('octubre');
          visitas_oct++;
          break;
        case 10:
          console.log('noviembre');
          visitas_nov++;
          break;
        case 11:
          console.log('diciembre');
          visitas_dic++;
          break;
        default:
          console.log('error');
      }
      switch (visitas_semana) {
        case 1:
          console.log('lunes');
          visitas_lun++;
          break;
        case 2:
          console.log('martes');
          visitas_mrt++;
          break;
        case 3:
          console.log('miercoles');
          visitas_mie++;
          break;
        case 4:
          console.log('jueves');
          visitas_jue++;
          break;
        case 5:
          console.log('viernes');
          visitas_vie++;
          break;
        case 6:
          console.log('sabado');
          visitas_sab++;
          break;
        case 7:
          console.log('domingo');
          visitas_dom++;
          break;
        default:
          console.log('error');
      }
      
      visitas_semana = visitas_lun + visitas_mrt + visitas_mie + visitas_jue + visitas_vie + visitas_sab + visitas_dom;
      
    escribirVisitas();
    io.emit("actualizar", usuarios_conectados, visitas);

    socket.on("disconnect", function () {
      console.log("Usuario desconectado " + socket.id);
      usuarios_conectados--;
      io.emit("actualizar", usuarios_conectados, visitas);
    });
  });
};
module.exports ={visitas_ene};
module.exports ={visitas_feb};
module.exports ={visitas_mar};
module.exports ={visitas_may};
module.exports ={visitas_jun};
module.exports ={visitas_jul};
module.exports ={visitas_ago};
module.exports ={visitas_sep};
module.exports ={visitas_oct};
module.exports ={visitas_abr};
module.exports ={visitas_nov};
module.exports ={visitas_dic};
module.exports ={visitas_lun};
module.exports ={visitas_mrt};
module.exports ={visitas_mie};
module.exports ={visitas_jue};
module.exports ={visitas_vie};
module.exports ={visitas_sab};
module.exports ={visitas_dom};
module.exports ={visitas};

document.getElementById('valor').innerHTML = visitas_dia;
document.getElementById('valor2').innerHTML = visitas_semana;
document.getElementById('valor3').innerHTML = visitas_al_mes;
/*function escribirVisitas() {
  try {
    fs.writeFileSync("visitas.txt", visitas + "");
  } catch (err) {
    console.error(err);
  }
}*/