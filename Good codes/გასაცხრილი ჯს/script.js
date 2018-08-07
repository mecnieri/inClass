// a = Number(prompt("num here"))
// b = Number(prompt("num2 here"))
//#region function


// function f1(a) {
//     part1 = a.substring(0, 1);
//     return part1 + a + part1;
// }


// console.log(f1("afxazeti"));
// console.log(f1("gamarjoba"));
// console.log(f1("avganeti"));
// console.log(f1("zestafonisfero"));
// console.log(f1("svanetis ubani"));
//#endregion 
//#region function numbers

// function f1(n) {
//     if (n % 3 == 0 || n % 7 == 0) {
//         return true
//     }

// }

// console.log(f1(5));
// console.log(f1(6));
// console.log(f1(0));
// console.log(f1(9));
// console.log(f1(11));
// console.log(f1(14));


//#endregion 

//#region 


// function f1(a) {

//     if (a.substring(0, 4) == "java") {

//         return true
//     }
// }

// console.log(f1("afxazeti"));
// console.log(f1("Asamachablo"));
// console.log(f1("wyaltubo"));
// console.log(f1("didgori"));
// console.log(f1("javascript"));

//#endregion 
//#region numbers


// function f1(a, b) {
//     if (Math.abs(a - 100) > Math.abs(b - 100)) {
//         return b;
//     }
//     else {
//         return a;
//     }
// }

// console.log(f1(3, 4));
// console.log(f1(5, 8));
// console.log(f1(15, 5));
// console.log(f1(6, 1));
// console.log(f1(9, 1));
// console.log(f1(9, 188));
// console.log(f1(65, 155));
// console.log(f1(165, 155));
// console.log(f1(105, 115));

//#endregion 
//#region 

// function f1(a, b, c) {
//     if (a == b && b == c) {
//         return 30;
//     }
//     else if (a == b || b == c || a == c) {
//         return 20;
//     }
//     else {
//         return 40;
//     }
// }

// console.log(f1(40, 40, 40));
// console.log(f1(4, 40, 40));
// console.log(f1(40, 40, 4));
// console.log(f1(40, 4, 40));
// console.log(f1(41, 40, 10));
// console.log(f1(40, 410, 40));
// console.log(f1(40, 401, 40));
// console.log(f1(40, 410, 410));

//#endregion 

// function f1(a) {
//     for (let i = 0; i < a.length + 1; i++) {
//         console.log(a.substring(a.length - i, (a.length - i) + 1));

//     }
// }

// console.log(f1("agmashenebeli"));


//#region xarisxi


// x = Number(prompt("insert x here"));
// n = Number(prompt("insert n here"));

// function pow(x, n) {

//     if (n > 0 && n % 1 == 0){
//         return x**n ;
//     }
// }

// alert(pow(x,n))




//#endregion 
//#region ricxvis gamyofebi, ricxvi martivia tu ara 

// x = Number(prompt("insert x here"));
// let b = 0;
//  for (let i = 0; i < x + 1; i++) {
//     if (x % i == 0) {
//         b++;
//         console.log(i)
//     }
// }
// if (b == 2) {
//      console.log(x + " is prime");

// }
// console.log(x + " has " + b + " divisors");



//#endregion 



a = Number(prompt("insert first number here"));
y = Number(prompt("insert last number here"));

let b = 0;
let c = 0;
for (let x = a; x < y + 1; x++) {

    for (let i = 0; i < x + 1; i++) {

        if (x % i == 0) {
            b++;
        }
    }
    if (b == 2) {
        c++;
        console.log(x + " is prime number");
    }
    b = 0;
}

console.log("total " + c + " numbers");
