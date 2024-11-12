const fs = require('fs').promises;

function readProm(caminho) {
  return fs.readdir(caminho);
}

readProm('.file:///C:/Users/samil/Downloads/Atividade%2002%20-%20NODEV2.pdf')
  .then(files => {
     console.log('Arquivos:', files);
  })
  .catch(err => {
    console.error('Erro:', err);
  });