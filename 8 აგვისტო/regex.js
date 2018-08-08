// PCRE, *POSIX

// \n \t \r \v 
// delimeters -> / / im
// /abc/

// ? არის 0ჯერ ან ერთხელ მაინც 
// * 
// +

// ^ დაწყება
// let myStr = `Product $13

//              Product $25
//              Product $227`;

// let myRe = /[$0-9]+\s*/g;
// let result = myRe.exec(myStr);
// let res = myStr.match(myRe)
// console.log(res, result);

// split 
// replace


let myStr = `aaabbbqqqqqqq`;

let myRe = /[A-Z0-9]/gi;
// let result = myRe.exec(myStr);
let res = myStr.match(myRe)

// if(ma)
console.log(res);

for (let i = 0; i < res.length; i++) {
    let count = 0;
    for (let j = 0; j < res.length; j++) {
        if (res[i] === res[j])    
         count++
        }
        console.log(res[i], count);
    }
// console.log(count);

// split
// replace