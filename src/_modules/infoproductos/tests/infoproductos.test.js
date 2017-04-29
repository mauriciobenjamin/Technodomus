'use strict';

var Infoproductos = require('../infoproductos');

describe('Infoproductos View', function() {

  beforeEach(function() {
    this.infoproductos = new Infoproductos();
  });

  it('Should run a few assertions', function() {
    expect(this.infoproductos).toBeDefined();
  });

});
