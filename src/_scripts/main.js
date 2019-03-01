// Main javascript entry point
// Should handle bootstrapping/starting application

//'use strict';

const $ = require('jquery');

$(function () {
  console.log('¡Technodomus te saluda!');
});

// $('.carousel').carousel({
//   interval: 15000,
//   pause: false,
//   wrap: true,
//   keyboard: true
// });

$('.card').masonry({
  itemSelector: '.card',
  gutter: 10,
  percentPosition: true,
  columnWidth: ".card-head",
  horizontalOrder:  true,
  originTop: true,
  originLeft: false
});
//El formato de bloques con Masonry y control de carga de imagenes con imagesLoaded que evita superposiciones al armar la pagina

// imagesLoaded.makeJQueryPlugin( $ );
//
// $('.grid').imagesLoaded(function(){
//   var msnry = new Masonry('.grid', {
//   });
// });
