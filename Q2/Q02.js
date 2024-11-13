
async function buscarDados(entry) {
    if (entry === "testeDeErro") {
      throw new Error("Erro: Entrada inválida.");
    }
    return { dados: `Resultado da busca para: ${entry}` };
  }

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())  
    .then((data) => console.log(data))   
    .catch((erro) => console.log(erro.message));  