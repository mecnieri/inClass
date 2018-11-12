// const xhr = new XMLHttpRequest()
// const url = "https://api-to-call.com/endpoint"
// xhr.responseType = 'json'
// xhr.onreadystatechange = ()=>{
//   if(xhr.readyState === XMLHttpRequest.DONE){
//     return xhr.response 
//   }
// }
// xhr.open('GET', url)
// xhr.send()


// // console.log(xhr);
// // console.log(xhr.open('GET', url));
// // console.log(xhr.response);
// console.log(xhr.responseType);
// console.log(xhr.onreadystatechange());

// // Information to reach API
// const xhr = new XMLHttpRequest();
// const url ="https://api.datamuse.com/words?"
// const queryParams = 'rel_rhy='
// // Selecting page elements
// const inputField = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const responseField = document.querySelector('#responseField');

// // AJAX function
// const getSuggestions = () => {
// const wordQuery = inputField.value;
//   const endpoint = url + queryParams + wordQuery;
// const xhr = new XMLHttpRequest();
//   xhr.responseType = 'json'
//   xhr.onreadystatechange = ()=> {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
// renderResponse(xhr.response)      
//       xhr.open('GET', endpoint )
// xhr.send()
// }
//   }

// }

// // Clear previous results and display results to webpage
// const displaySuggestions = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   };
//   getSuggestions();
// }

// submit.addEventListener('click', displaySuggestions);
// window.onload = function(){

let http = new XMLHttpRequest();
// console.log(http);


http.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(http.response)[0].name);
  }
}
// console.log(http.readyState);
http.open("GET", "https://jsonplaceholder.typicode.com/users", true)
// console.log(http);
// console.log(http.readyState);
http.send()
// console.log(http.readyState);
// }