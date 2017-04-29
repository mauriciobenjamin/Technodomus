'use strict';

var Formato = require('../formato');

describe('Formato View', function() {

  beforeEach(function() {
    this.formato = new Formato();
  });

  it('Should run a few assertions', function() {
    expect(this.formato).toBeDefined();
  });

});
