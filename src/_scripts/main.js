// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
const $ = require('jquery');
const Muuri = require('muuri');
const bootstrap = require('bootstrap');
// const bootstrap_material = require('bootstrap-material-design');
const popperjs = require('popper.js');

console.log('¡Technodomus te saluda!');


const grid = new Muuri('.grid', {
  items: '.card',
  alignBottom: true,
});