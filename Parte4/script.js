 //METODOS POST

 let postParams = {
  title:'foo',
  body:'bar',
  userId:1
 }

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postParams)
}).then(r => r.json()).then(data=>console.log(data)); 

// fetch()
// .then((response)=>{
// // console.log(response)
// return response.json()
// })
// .then((data)=>console.log(data))
// .catch(
//   err => console.log(err)
// )

