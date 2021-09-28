const { expect } = require('chai');
const calculaSituacao = require('./calculaSituacao');
const Soma = require('./calculos/Soma');
const Multiplica = require('./calculos/Multiplica');


describe('Quando a media for menor que 7', () => {
  it('retorna "Reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('Reprovado');
  });

  it('retorna "Aprovado"', () => {
    const resposta = calculaSituacao(10);

    expect(resposta).to.be.equal('Aprovado');
  });

  it('retorna "Aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('Aprovado');
  });
});

describe('Operacoes matematicas', () => {
  it('Soma dois numeros', () => {
    const numA = 10;
    const numB = 50;
    const result = numA +numB;

    const calc = Soma(numA,numB);

    expect(calc).to.be.equals(result);
  });

  it('Multiplica dois numeros', () => {
    const numA = 2;
    const numB = 30;

    const result = numA * numB;

    const calcResult = Multiplica(numA, numB);

    expect(calcResult).to.be.equals(result);
  });
})