// ობიექტის მნიშვნელობები ემთხვევა თუ არა არსებულ დეფოლტებს

function showSomthing(title = "Untitled", width = 200, height = 200, items = []) {
    console.log(`title=${title}, width=${width}, height=${height} `, items);


}

function showSomthingV2({
    title = "Untitled",
    width = 200,
    height = 200,
    items = []
}) {
    console.log(`title=${title}, width=${width}, height=${height} `, items);


}


let options = {

    title: "My title",
    items: ['item1', 'item2']
}



showSomthing("My title", 150, 300, ['item1', 'item2']);
showSomthingV2(options)



// let user = {
//     name: "John",
//     years: 29

// }


// function userFunc({
//     name = "name",

//     age = "years",
//     isAdmin = false,

// }) {


//     alert(name);
//     alert(years);
//     alert(isAdmin);

// }

// userFunc(user)


// Answer 21  ობიექტის მნიშვნელობები ემთხვევა თუ არა არსებულ დეფოლტებს 

let user = {
    name: "John",
    years: 30,
    isAdmin : true

}

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);