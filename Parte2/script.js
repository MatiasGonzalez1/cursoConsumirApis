//fetch más limpio trabajando con catch

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
// console.log(response)
return response.json()
})
.then((data)=>console.log(data))
.catch(
  err => console.log(err)
)