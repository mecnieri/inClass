function showSomething(title = "Untitled", width = 200, height = 200, items = []){
    console.log(`title = ${title}, width = ${width}, height = ${height}`, items);   
}

function showSomethingV2({title = "Untitled", width = 200, height = 200, items = []}){
    console.log(`title = ${title}, width = ${width}, height = ${height}`, items);   
}


let options = {
    title: "My Title",
    items: ['item1', 'item2'],
}

//showSomething("My Title", 150, undefined, ['item1', 'item2']);
//showSomethingV2(options)

// Answer 21

let user = {
    name: "John",
    years: 30,
}
let { name, years : age, isAdmin = false} = user;

console.log(name, age, isAdmin);