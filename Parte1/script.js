// Forma 1:

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(
//   function(response){
//     response.json()
//     .then(function(data){
//       console.log(data)
//     })
//   }
// )

//Forma 2:

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(
//   function(response){return response.json()}
// )
// .then(function(data){console.log(data)})


//Forma 3: 

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>console.log(data))