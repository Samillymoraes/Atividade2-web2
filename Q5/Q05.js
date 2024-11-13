async function fetchDataFromAPI(url){
    let response = fetch(url);
    if (response.status !== 200){
        throw new Error("Houve um erro na chamada dos dados")

    }
    return await response.json();

}

fetchDataFromAPI("https://jsonplaceholder.typicode.com/users/1")
.then((data)=>console.log(data))
.catch((erro)=>console.log(erro.message))