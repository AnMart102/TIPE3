let usuarios_conectados = 0;
var visitas = 0;
let visitas_dia = moment.hour();
let visitas_al_mes = moment.month();
let visitas_semana = moment.weekday();
let bandera = moment.hour(0);

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
    visitas ++;
    /*if ((visitas_dia = bandera)) {
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
      }*/
      
    escribirVisitas();
    io.emit("actualizar", usuarios_conectados, visitas);

    socket.on("disconnect", function () {
      console.log("Usuario desconectado " + socket.id);
      usuarios_conectados--;
      io.emit("actualizar", usuarios_conectados, visitas);
    });
  });
};
document.getElementById('nuevasvisitas').innerHTML = visitas;