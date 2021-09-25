function handlePratice(param, param2, param3) {
  return new Promise((reject, resolve) => {
    if (typeof param !== "number" || typeof param2 !== "number" || typeof param3 !== "number") 
      reject("Informe apenas números");

    const result = (param + param2) * param3;

    if (result < 50) {
      return reject("Valor muito baixo");
    }

    resolve(result);
  });
}


const getRandomNum = () => Math.floor(Math.random() * 100 + 1);

const randomNum = Array.from({ length: 3 }).map(getRandomNum);

handlePratice(...randomNum)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));
