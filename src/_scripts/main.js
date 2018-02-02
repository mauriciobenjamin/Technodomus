// Main javascript entry point
// Should handle bootstrapping/starting application

//'use strict';

const $ = require('jquery');
const bootstrap = require('bootstrap');
const masonry = require('masonry-layout')

$(function () {
  console.log('¡Technodomus te saluda!');
});

$('.carousel').carousel({
  interval: 15000,
  pause: false,
  wrap: true,
  keyboard: true
});

var msnry = new masonry('.grid', {
  itemSelector: '.card',
  //percentPosition: true,
  gutter: 15
});
//El formato de bloques con Masonry y control de carga de imagenes con imagesLoaded que evita superposiciones al armar la pagina

// imagesLoaded.makeJQueryPlugin( $ );
//
// $('.grid').imagesLoaded(function(){
//   var msnry = new Masonry('.grid', {
//   });
// });
