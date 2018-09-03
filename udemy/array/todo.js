let todos = [{ text: "udemy", completed: true },
{ text: "codeacademy", completed: false },
{ text: "freecodecamp", completed: true },
{ text: "codewars", completed: true },
{ text: "the net ninja", completed: false }]


// const deleteTodo = function (array, todoText) {
//     const index = array.findIndex(function (todo) {
//         return todo.text === todoText
//     })
// if (index > -1) {
//     array.splice(index, 1)
// }
// }

// console.log(todos);



// const getThingsTodo = function (array) {
//     return array.filter(function (todo) {
//         return !todo.completed
//     })

// }


// console.log(getThingsTodo(todos));

const sortingTodo = function (array) {
    return array.sort(function (a, b) {
        if (a.completed > b.completed) {
            return 1
        } else if (b.completed > a.completed) {
            return -1
        } else {
            return 0;
        }
    })
}

console.log(sortingTodo(todos));


const account = {
    name: 'Giorgi Abzianidze',
    expenses: [],
    addExpense(type, amount) {
        this.expenses.push({ type, amount })
    },
    getAccountSummary() {
        let sum = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            sum += this.expenses[i].amount
        }
        return `${this.name} has $${sum} in expenses`
    }
}

account.addExpense("Rent", 500)
account.addExpense("Coffee", 20)
account.addExpense("Coffee", 40)
console.log(account.getAccountSummary());

console.log(console)