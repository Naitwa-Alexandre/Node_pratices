const calcularDivisao = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Nao pode dividir por zero!'));

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisao(2, 0)
  .then(resolve => console.log(resolve))
  .catch(err => console.log("erro: %s", err.message));