//manejar parametros query


let parametros = {
  userId: 1,
  _limit:3
}


const url = new URL('https://jsonplaceholder.typicode.com/posts');

Object.keys(parametros).forEach(paramKey=>{
  url.searchParams.append(
    paramKey,
    parametros[paramKey]
  )
});

fetch(url).then(r => r.json()).then(data=>console.log(data));

// fetch()
// .then((response)=>{
// // console.log(response)
// return response.json()
// })
// .then((data)=>console.log(data))
// .catch(
//   err => console.log(err)
// )

