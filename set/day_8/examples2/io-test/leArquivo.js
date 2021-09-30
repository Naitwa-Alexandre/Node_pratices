const fs = require('fs');


const leArquivo = (file) => {
  try {
    const response = fs.readFileSync(file, 'utf8');

    return response;
  } catch {
    return null;
  }
}

module.exports = leArquivo;