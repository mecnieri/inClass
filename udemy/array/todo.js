let todos = [{ text: "udemy", completed: true },
{ text: "codeacademy", completed: false },
{ text: "freecodecamp", completed: true },
{ text: "codewars", completed: true },
{ text: "the net ninja", completed: false }]

//#region search todo

let filtered = {
    searchText: ''
}

search.addEventListener('input', function (e) {
    filtered.searchText = e.target.value;

    let filteredTodos = todos.filter(element => {
        return element.text.toLowerCase().includes(filtered.searchText);
    });

    todosDiv.innerHTML = ''
    filteredTodos.forEach(element => todosDiv.innerHTML += element.text + '<br>')

})

//#endregion 

addTodo.addEventListener('submit', function (e) {
    e.preventDefault()

    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    e.target.elements.text.value = ''
    console.log(todos);
})

check.addEventListener('change', function (e) {
    if (e.target.checked) {
        const getThingsTodo = function (array) {
            let filt = array.filter(function (todo) {
                return !todo.completed
            })
            todosDiv.innerHTML = ''
            filt.forEach(element => todosDiv.innerHTML += element.text + '<br>')

        }
        console.log(getThingsTodo(todos));
    }
})

            // const deleteTodo = function (array, todoText) {
                //     const index = array.findIndex(function (todo) {
                    //         return todo.text === todoText
//     })
// if (index > -1) {
//     array.splice(index, 1)
// }
// }

// console.log(todos);






// const sortingTodo = function (array) {
//     return array.sort(function (a, b) {
//         if (a.completed > b.completed) {
//             return 1
//         } else if (b.completed > a.completed) {
//             return -1
//         } else {
//             return 0;
//         }
//     })
// }

// console.log(sortingTodo(todos));


// const account = {
//     name: 'Giorgi Abzianidze',
//     expenses: [],
//     addExpense(type, amount) {
//         this.expenses.push({ type, amount })
//     },
//     getAccountSummary() {
//         let sum = 0;
//         for (let i = 0; i < this.expenses.length; i++) {
//             sum += this.expenses[i].amount
//         }
//         return `${this.name} has $${sum} in expenses`
//     }
// }

// account.addExpense("Rent", 500)
// account.addExpense("Coffee", 20)
// account.addExpense("Coffee", 40)
// console.log(account.getAccountSummary());

// console.log(console)