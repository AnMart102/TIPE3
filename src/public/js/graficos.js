const {visitas} = require("./socket");
const {visitas_ene} = require("./socket");
const {visitas_feb} = require("./socket");
const {visitas_mar} = require("./socket");
const {visitas_abr} = require("./socket");
const {visitas_may} = require("./socket");
const {visitas_jun} = require("./socket");
const {visitas_jul} = require("./socket");
const {visitas_ago} = require("./socket");
const {visitas_sep} = require("./socket");
const {visitas_oct} = require("./socket");
const {visitas_nov} = require("./socket");
const {visitas_dic} = require("./socket");
const {visitas_lun} = require("./socket");
const {visitas_mrt} = require("./socket");
const {visitas_mie} = require("./socket");
const {visitas_jue} = require("./socket");
const {visitas_vie} = require("./socket");
const {visitas_sab} = require("./socket");
const {visitas_dom} = require("./socket");
var parametros_grafico_visitas_dia = ['Lun', 'Mar','Mier','Jue','Vier','Sab','Dom'];
var valores_grafico_visitas_dia = [visitas_lun,visitas_mrt,visitas_mie,visitas_jue,visitas_vie,visitas_sab,visitas_dom];

var data1 = [{
    x: parametros_grafico_visitas_dia,
    y: valores_grafico_visitas_dia,
    type: "bar"
  }];
  Plotly.newPlot("grafico-visitas-dia",data1);


var parametros_grafico_visitas_mes = ['En', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
var valores_grafico_visitas_mes = [visitas_ene,visitas_feb,visitas_mar,visitas_abr,visitas_may,visitas_jun,visitas_jul,visitas_ago,visitas_sep,visitas_oct,visitas_nov,visitas_dic];

var data2 = [{
    x: parametros_grafico_visitas_mes,
    y: valores_grafico_visitas_mes,
    type: "line"
  }];
  Plotly.newPlot("grafico-visitas-mes",data2);

