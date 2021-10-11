const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('content/first.txt', 'utf8');
const second = readFileSync('content/subfolder/text.txt', 'utf8');

const fileContent = `Here is the result ${ first }, ${ second }`

writeFileSync('./content/result-sync.txt', fileContent);
