fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    
async function getJson() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        let json = await response.json()
        console.log(json);
    } catch (err) {
        console.log(err);
    }
}

getJson();









