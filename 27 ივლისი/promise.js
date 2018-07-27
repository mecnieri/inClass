function doAsync() {
    let p = new Promise(function (resolve, reject) {

        console.log("in promise code");

        setTimeout(function () {
            console.log("resolving");
            // console.log("rejected");
            resolve();
            // reject(new Error("something went wrong"));
        }, 2000);
    });
    return p;
}

// let promise = doAsync()

// doAsync().then(function () {

//     console.log("fulfilled");
// }, function (error) { console.log(error.message) })
//     ;

doAsync().then(function () {

    console.log("fulfilled");
    return ["Aaa"];
})
.then((msg) => {
    console.log(msg);
})

.catch(function (error) {
    console.log(error.message)
});