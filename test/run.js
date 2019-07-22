
const expect = require('chai').expect;
const nivel = require('../negocio/calcularniveles')

describe("niveles de validacion", () => {
  it('validar niveles', () => {
    expect(nivel.calcularNivel(4,1,2,1)).to.eql(1);
  });
});

describe("niveles de validacion", () => {
  it('validar niveles', () => {
    expect(nivel.calcularNivel(7,2,2,3)).to.eql(2);
  });
});

describe("niveles de validacion", () => {
  it('validar niveles', () => {
    expect(nivel.calcularNivel(11,3,3,5)).to.eql(2);
  });
});

