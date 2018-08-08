$(document).ready(function () {
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
    let arr = []
    let myStorage = window.localStorage;    // localStorage.clear()
    let myJSON = ''
    let jsn = ''
    let html = ''
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            // json.forEach((json) => {
            myJSON += JSON.stringify(json);
            // document.getElementById("demo").innerHTML = myJSON;
            for (key in json) {
                // console.log(JSON.stringify(json[key]));
                myStorage.setItem(key, JSON.stringify(json[key]));
            }
            let jsn = JSON.parse(myStorage.getItem(3));
            // for (key in jsn) {
            //     console.log(key, jsn[key])
            // }
            // console.log(myStorage.getItem(3)),
            let length = JSON.parse(myStorage.length)
            for (let i = 0; i < length; i++) {
                console.log(JSON.parse(myStorage.getItem(i)).username)
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).id} <br>`
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).username} <br>`
            }
            
            //  document.getElementById("demo").innerHTML = `${jsn.username}`
        }
        ).then(

            // console.log(typeof myStorage),
            // console.log(myStorage[3]),
            // console.log(typeof myStorage[3]),
            // console.log(myStorage.getItem(3)),
            // console.log(typeof myStorage.getItem(3)),
            // console.log(JSON.parse(myStorage.getItem(3))),
            // console.log(JSON.parse(myStorage[3])),
            // // document.getElementById("demo").innerHTML = myStorage.getItem(3),

        )
        .catch(error => {
            console.log(error);
        })
})


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