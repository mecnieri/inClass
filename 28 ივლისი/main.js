// function makeAPromise(time) {
//     return new Promise(function (resolve, reject) {
//         // console.log("Start/Created Promise");
//         setTimeout(() => {
//             // console.log("resolving");
//             if (time > 3000) {
//                 // console.log("Rejecting");
//                 reject(new Error("Too long time"));
//             } else {
//                 // console.log("Resolving");
//                 resolve(`Okay its ${time}`);
//             }
//         }, time
//         )
//     });
// }

// let sec1 = makeAPromise(1001)
// let sec2 = makeAPromise(2000)
// let sec3 = makeAPromise(3000)
// let sec4 = makeAPromise(4000)

// sec1.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error.message);
//     })



// sec2.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error.message);
//     })


// let sec5 = makeAPromise(2000)
// sec5.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error.message);
//     })



// let allPromise = Promise.all([sec1, sec2, sec3, sec4])
// allPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(error =>  console.log(error));


// let allRace = Promise.race([sec1, sec2, sec3, sec4])

// allRace
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(error => console.log(error));


// let resolvedPromise = Promise.resolve("Resolved Promise Example")
// resolvedPromise
//     .then(result => console.log(result))
//     .catch(error => console.log("error", error))

function save() {
    document.getElementById("bd").innerHTML = document.getElementById("din").value;
    document.getElementById("by").innerHTML = document.getElementById("yin").value;
    document.getElementById("bc").innerHTML = document.getElementById("cin").value;
    document.getElementById("bm").innerHTML = document.getElementById("min").value;
    document.getElementById("about").innerHTML = document.getElementById("ab").value;


    
}