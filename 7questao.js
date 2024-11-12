function esperarRejeita (segundos){
    return new Promise(( resolve, reject) => {
        setTimeout((reject)  ("Rejeitado"))
    })
}

esperarRejeita(2000) 
  .catch((erro) => {
    console.log(erro); 
  });