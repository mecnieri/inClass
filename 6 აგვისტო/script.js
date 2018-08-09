// $('h1').myPlugin()
// $('h1').myPlugin2()
// $('h1')
//     .styleElement({
//         text: 'Hello from plugin',
//         color: 'green',
//         fontSize: '20px',
//         backgroundColor: '#ccc',
//     })

// let worker = new Worker('work.js')
// worker.postMessage('Hello my worker')
// worker.addEventListener('message', (event) => {
//     console.log(event.data);
//     worker.terminate()
//     console.log(event.data);

// })
let myStorage = window.localStorage;
$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json[5].name = "Giorgi Abzianidze");
            console.log(json[5].username = "Giganti");
            for (key in json) {
                myStorage.setItem(key, JSON.stringify(json[key]));
            }

            let length = JSON.parse(myStorage.length)
            for (let i = 0; i < length; i++) {
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).id} <br>`
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).name} <br>`
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).website} <br>`
                document.getElementById("demo").appendChild(document.createElement("div")).setAttribute("onclick", "averageFunc(this, Number(prompt('Please, enter number here')))")

            }
        })
        .catch(error => {
            console.log(error);
        })




})
    function averageFunc() {
        document.getElementById("demo").innerHTML =`${JSON.parse(myStorage.getItem(2)).name} <br>`
    }
// const jsonButton = document.querySelector('#generate');
// const buttonContainer = document.querySelector('#buttonContainer');
// const display = document.querySelector('#displayContainer');
// const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// const generateJson = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if(response.ok){
//       const jsonResponse = await response.json();
//       renderResponse(jsonResponse);
//       changeButton();
//     }
//   } catch(error) {
//     console.log(error);
//   }
// };

// const formatJson = (resJson) => {
//   resJson = JSON.stringify(resJson);
//   let counter = 0;
//   return resJson.split('')
//   .map(char => {
//     switch (char) {
//       case ',':
//         return `,\n${' '.repeat(counter * 2)}`;
//       case '{':
//         counter += 1;
//         return `{\n${' '.repeat(counter * 2)}`;
//       case '}':
//         counter -= 1;
//         return `\n${' '.repeat(counter * 2)}}`;
//       default:
//         return char;
//     }
//   })
//   .join('');
// };

// const renderResponse = (jsonResponse) => {
//   const jsonSelection = Math.floor(Math.random() * 10);
//   display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// };

// const changeButton = () => {
//   const newText = Math.floor(Math.random() * 7);
//   jsonButton.innerHTML = `${collection[newText]}!`;
// };

// jsonButton.addEventListener('click', generateJson);