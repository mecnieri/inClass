// (function (x, y) {
//     'use strict'
//     console.log(x, y);
//     var x = 13;

// })(1, 3);
// {
//     method1,
//     method2,
// }

let myModule = (function () {
    //myModule code
    let _privateVar = "from module 2 ";
    let publicProperty = 'this is a public property';
    function _privateMethod() {
        console.log(_privateVar);
    }

    function publicMethod() {
        _privateMethod();
    }


    return {
        publicMethod,
        publicProperty
    }
}());



myModule.publicMethod();

console.log(myModule._privateVar);
myModule.publicMethod()
console.log(myModule.publicProperty);