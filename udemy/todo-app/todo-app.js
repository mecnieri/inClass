const todos = [{ text: "Udemy", completed: true },
{ text: "Codeacademy", completed: false },
{ text: "Freecodecamp", completed: true },
{ text: "Codewars", completed: true },
{ text: "The Net Ninja", completed: true }]

// let countUndoneTodos = 0;
// const countUndone = todos.forEach(
//     function (b) {
//         if (!b.completed) {
//             countUndoneTodos++
//         }
//     }
// )

// let createPCount = document.createElement('h2');
// createPCount.textContent = `I have ${countUndoneTodos} todos left`;
// document.body.appendChild(createPCount);


// todos.forEach(
//     function (a) {
//         let createP = document.createElement('p');
//         createP.textContent = a.text;
//         document.body.appendChild(createP);
//     }
// )

// #region  deleteTodo
// const ps = document.querySelectorAll('p')
// const deleteTodo = function (array, todo) {
//     array.forEach(function (a) {
//         if (a.textContent.includes(todo)) {
//             a.remove()
//         }
//     })
// }
// deleteTodo(ps, "free")
// deleteTodo(ps, "ude")
// deleteTodo(ps, "u")
// deleteTodo(ps, "codeacademy")
// #endregion 

// #region  add todo button

document.querySelector('#addtd').addEventListener('click', function (e) {
    console.log("I have added a new todo");
})

//#endregion 

document.querySelector('#new-todo').addEventListener('input',
    function (e) {
        console.log(e.target.value);
    })