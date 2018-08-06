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
    let storage = localStorage;
    localStorage.clear()
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {console.log(json[1]);}
    //     json.forEach((json) => {


    //     localStorage.setItem(name, json.name)
    //     console.log(json.name);

    //     }
    
    
    )
        .catch(error => {
            console.log(error);
        })
})