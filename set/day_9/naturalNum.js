const naturalNum = (number) => {
  if (typeof number !== 'number') return 'O paramentro deve ser um numero';

  if (number > 0) {
    return 'Positivo';
  } else if (number < 0) {
    return 'Negativo';
  } else {
    return 'Neutro';
  }
};

module.exports = naturalNum;