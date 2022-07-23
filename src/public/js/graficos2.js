/*const express = require('express');
const req = require('express/lib/request');
const passport = require('passport');
//const { commit } = require('../../database');
const router = express.Router();
const conn = require('../../database');
//const { Router } = require('express');*/

/*connection.query('SELECT COUNT(*) FROM formulario_solicitud as b JOIN usuario as a WHERE MONTH(tiempo) = 5 and a.Rut= b.Rut', (err, rows) => {
  //const count = rows[0].count;
 const count = rows[0]['COUNT(*)']; // without alias
  console.log(`count: ${count}`);
  var numeritoqlo = rows.length;
});*/
var parametros_grafico_pymes = ['En', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
var valores_grafico_pymes = [1,2,3,4,6,6,7,8,9,10,11,12];


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

