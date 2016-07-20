'use strict';

var Navbar = require('../navbar');

describe('Navbar View', function() {

  beforeEach(function() {
    this.navbar = new Navbar();
  });

  it('Should run a few assertions', function() {
    expect(this.navbar).toBeDefined();
  });

});
