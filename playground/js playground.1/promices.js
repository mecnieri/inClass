// import loadImagePromised
//     from 'images'

// loadImagePromised('cat1.jpg')
//     .then((img) => {
//         var imgElement =
//             document.createElement("img")
//         imgElement.src = img.src
//         document.body.appendChild(imgElement)
//     })
// // alert("dads")

const fetch = require('node-fetch')
function fetchAvatarUrl(userId) {
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)

    
}

const result = fetchAvatarUrl(123)
console.log(result);