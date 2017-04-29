'use strict';

var Marcas = require('../marcas');

describe('Marcas View', function() {

  beforeEach(function() {
    this.marcas = new Marcas();
  });

  it('Should run a few assertions', function() {
    expect(this.marcas).toBeDefined();
  });

});
