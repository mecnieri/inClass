

// კარგია მრავალი რთული კოდის დასამახსოვრებლად, მათი ცვლადად გამოსახვა 
//      მაგალითად ფერები 
const COLOR_GREEN = '#0f0';
const COLOR_ORANGE = '#ff7f00';

// debugger;

//#region ცვლადის გამოცხადება, კოდის თანმიმდევრობის მნიშვნელობა 

// კოდი სრულდება თანმიმდევრულად, ზემოდან ქვემოთ და მარცხნიდან მარჯვნივ

// ცვლადი აუცილებლად ჯერ უნდა იქნას გამოცხადებული
//       და შემდეგ გამოყენებული 
//  წინააღმდეგ შემთხვევაში გვექნება ერორი 

// მაგ: 1.

// console.log(message); //variable.js:18 Uncaught ReferenceError: 
// // message is not defined at variable.js:18
// // აქ message გამოცხადებული არაა, 
// //      საკმარისია ის რომ მხოლოდ ერთი ხაზით ქვემოთაა გამოცხადებული 
// let message;
// message = "my message";

// მაგ: 2.

// let message; 
// console.log(message); // აქ არის გამოცხადებული (defined), მაგრამ არ აქვს მინიჭებული მნიშვნელობა (value),
// // ამიტომ დაწერა განუსაზღვრელი (undefined)
// message = "my message";

// მაგ: 3.

// let message;
// message = "my message";
// console.log(message);
// // აქ ყველაფერი კარგადაა, ჯერ გამოცხადდა, 
// // შემდეგ მიენიჭა მნიშვნელობა, ბოლოს გამოისახა


//#endregion 




// let message;
// //console.log(message);
// message = "my message";
// let user = 'John', age = 33;

// console.log(message, user, age);
// af

if (true) {
    if (true) {
        let name = "gwwwwio"
        console.log(name);
    }
}

if (true) {
    console.log(name);
    console.log(typeof (name));
}



