// Main javascript entry point
// Should handle bootstrapping/starting application

//'use strict';

$ = jQuery = require('jquery');
var Masonry = require('masonry-layout');
var bootstrap = require('bootstrap');
var imagesLoaded = require('imagesloaded');

$(function () {
  console.log('¡Technodomus te saluda!');
});

$(function() {
  $('.carousel').carousel({
    interval: 15000,
    pause: false,
    wrap: true,
    keyboard: true
  });
});

//El formato de bloques con Masonry y control de carga de imagenes con imagesLoaded que evita superposiciones al armar la pagina
imagesLoaded.makeJQueryPlugin( $ );

$('.grid').imagesLoaded(function(){
  var msnry = new Masonry('.grid', {
    percentPosition: true,
    itemSelector: '.panel',
    gutter: 15
  });
});
