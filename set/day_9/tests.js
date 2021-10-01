const { expect } = require('chai');

const naturalNum = require('./naturalNum');

describe('Executa a funcao naturalNum', () => {
  describe('Quando o numero for maios que 0', () => {
    describe('a resposta', () => {
      it('eh uma "string"', () => {
        const response = naturalNum(10);

        expect(response).to.be.a('string');
      });

      it('Espera que o retorno seja "Positivo"', () => {
        const response = naturalNum(10);

        expect(response).to.be.equals('Positivo');
      });
    });
  });
});

describe('Executa a funcao naturalNum', () => {
  describe('Quando o valor for menor que 0', () => {
    describe('A resposta', () => {
      it('Eh uma string', () => {
        const response = naturalNum(-10);

        expect(response).to.be.a('string');
      });

      it('Espera que o retorno seja "Negativo"', () => {
        const resposne = naturalNum(-10);

        expect(resposne).to.be.equals('Negativo');
      });
    });
  });
});

describe('Executa a funcao naturalNum', () => {
  describe('Quando o valor for 0', () => {
    describe('A resposta', () => {
      it('Espera que seja string', () => {
        const response = naturalNum(0);
        
        expect(response).to.be.a('string');
      });

      it('Espera que o retorno seja "Neutro"', () => {
        const response = naturalNum(0);

        expect(response).to.be.equals('Neutro');
      });
    });
  });
});

describe('Executa a funcao naturalNum', () => {
  describe('Quando o valor for diferente de numero', () => {
    describe('A resposta', () => {
      it('Espera que retorne "O paramentro deve ser um numero"', () => {
        const response = naturalNum('Random String');

        expect(response).to.be.equals('O paramentro deve ser um numero');
      });
    });
  });
});