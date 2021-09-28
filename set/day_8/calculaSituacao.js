
const calculaSituacao = (media) => {
  if (media >= 7) {
    return 'Aprovado';
  }

  return 'Reprovado';
}

module.exports = calculaSituacao;