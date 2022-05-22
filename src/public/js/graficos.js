var parametros_grafico_visitas_dia = ['Lun', 'Mar','Mier','Jue','Vier','Sab','Dom'];
var valores_grafico_visitas_dia = [1,2,3,4,6,10,20];

var data1 = [{
    x: parametros_grafico_visitas_dia,
    y: valores_grafico_visitas_dia,
    type: "bar"
  }];
  Plotly.newPlot("grafico-visitas-dia",data1);


var parametros_grafico_visitas_mes = ['En', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
var valores_grafico_visitas_mes = [1,2,3,4,4,3,0,0,0,0,0,7];

var data2 = [{
    x: parametros_grafico_visitas_mes,
    y: valores_grafico_visitas_mes,
    type: "line"
  }];
  Plotly.newPlot("grafico-visitas-mes",data2);

