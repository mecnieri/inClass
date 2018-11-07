fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let output = '<h1>Users </h1>';
        data.forEach(e => {
            output += e.name + '<br><br>'
        });
        document.getElementById('f').innerHTML = output;
    }
    )
    .catch(err => console.log(err))



// aq aris gamotana failidan da aucileblad schirdeba live server

// fetch('some.txt')
// .then(res => res.text())
// .then(data => {
//     document.getElementById('fe').innerHTML = data
// })