const fs = require('fs').promises;

// fs.writeFile('./text.txt', 'test strings lorem')
//   .then(() => console.log('Arquivo escrito com sucesso'))
//   .catch((err) => console.error('error: %s', err.message));

  // fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  // .then(() => {
  //   console.log('Arquivo salvo');
  // })
  // .catch((err) => {
  //   // Se o arquivo existir, um erro é retornado
  //   console.error('err', err);
  // });


  // const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
