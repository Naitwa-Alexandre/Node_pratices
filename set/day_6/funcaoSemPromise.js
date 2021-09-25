const calcularDivisao = (num1, num2)  => {
  if (num2 === 0) throw new Error('Nao pode ser feita uma divsao por zero!');

  const result = num1 / num2;

  return result;
}

try {
  const resultado = calcularDivisao(49, 3);
  console.log("resultado: %s", resultado);
} catch (e) {
  console.log("erro: %s", e.message);
}