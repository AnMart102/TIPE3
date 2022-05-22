
var parametros_grafico_pymes = ['En', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
var valores_grafico_pymes = [4,5,2,30,3,4,5,1,0,0,0,0];

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

