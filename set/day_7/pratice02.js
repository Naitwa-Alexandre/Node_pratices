const handlePratice = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject("So sao aceitas entradas numericas");

    const result = (a + b) * c;

    if (result < 50) reject('Numero baixo demais');

    resolve(result);
  });
}

const handleFetchPratice = async () => {
  try {
    const handleRandomNum = () => Math.floor(Math.random() * 100 + 1);
    const randomArray = Array.from({ length: 3}).map(handleRandomNum);
    const result = await handlePratice(...randomArray);
    console.log(`The result is ${ result }`);
  } catch (e) {
    console.error('Err: %s', e);
  }
}

handleFetchPratice();