const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8', (err, result) => {
  if (err) return console.log(err);

  const first = result;

  readFile('./content/subfolder/text.txt','utf8', (err, result) => {
    if (err) return console.log(err);

    const second = result;

    writeFile('./content/result-async.txt',
      `Here is the result ${ first }, ${ second }`,
      (err, result) => {
        if (err) return console.log(err);
        console.log(result);
    });
  });
}); 