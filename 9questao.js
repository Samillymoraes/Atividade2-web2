async function sleep(segundos) {
    await setTimeout(sleep, segundos)
  }  

console.log ("Olá")
.then(sleep(2000))
console.log("Depois de 2 segundos")



    