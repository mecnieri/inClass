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































//#region 
 
 

// let resolvedPromise = Promise.resolve("Resolved Promise Example")
// resolvedPromise
//     .then(result => console.log(result))
//     .catch(error => console.log("error", error))

// function save() {
//     let bd = document.createElement('p');
//     bd.textContent = "Your Birth Day is ";
//     document.body.appendChild(bd);

//     let bdp = document.createElement('p');
//     bdp.setAttribute("id", "bd")
//     document.body.appendChild(bdp);

//     let bm = document.createElement('p');
//     bm.textContent = "Your Birth Month is  ";
//     document.body.appendChild(bm);

//     let bmp = document.createElement('p');
//     bmp.setAttribute("id", "bm")
//     document.body.appendChild(bmp);

//     let by = document.createElement('p');
//     by.textContent = "Your Birth Year is  ";
//     document.body.appendChild(by);

//     let byp = document.createElement('p');
//     byp.setAttribute("id", "by")
//     document.body.appendChild(byp);

//     let bc = document.createElement('p');
//     bc.textContent = "you live in ";
//     document.body.appendChild(bc);

//     let bcp = document.createElement('p');
//     bcp.setAttribute("id", "bc")
//     document.body.appendChild(bcp);

//     let about = document.createElement('p');
//     about.textContent = "your about me ";
//     document.body.appendChild(about);

//     let abp = document.createElement('p');
//     abp.setAttribute("id", "about")
//     document.body.appendChild(abp);

//     document.getElementById("bd").innerHTML = document.getElementById("din").value;
//     document.getElementById("by").innerHTML = document.getElementById("yin").value;
//     document.getElementById("bc").innerHTML = document.getElementById("cin").value;
//     document.getElementById("bm").innerHTML = document.getElementById("min").value;
//     document.getElementById("about").innerHTML = document.getElementById("ab").value;
//     document.getElementById("load").remove();



// }



// function makeAPromise(time) {
//     let load = document.createElement('p');
//     load.setAttribute("id", "load")
//     load.textContent = "Loading ";
//     document.body.appendChild(load);

//     let prom = new Promise(function (resolve, reject) {
//         // console.log("Start/Created Promise");
//         setTimeout(() => {
//             if (time > 3000) {
//                 // console.log("Rejecting");
//                 reject(new Error("Too long time"));
//             } else {
//                 // console.log("Resolving");
//                 resolve();
//             }
//         }, 2000
//         )
//     });

//     prom.then(() => save())

// }

//#endregion 
