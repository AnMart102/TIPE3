
var parametros_grafico_pymes = ['En', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
var valores_grafico_pymes = [1,2,1,3,4,6,0,4,6,4,7,7];

var data= [{
    x: parametros_grafico_pymes,
    y: valores_grafico_pymes,
    type: 'scatter',
    name: 'marker: circle',
    fill: 'tonexty',
    marker: {
      symbol: 'circle',
      size: 10
    }
  }];
  Plotly.newPlot("grafico-pymes",data);

