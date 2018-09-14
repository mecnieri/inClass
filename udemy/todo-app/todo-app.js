let todos = [{ text: "Udemy", completed: true },
{ text: "Codeacademy", completed: false },
{ text: "Freecodecamp", completed: true },
{ text: "Codewars", completed: true },
{ text: "The Net Ninja", completed: true }]


const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}



renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})


console.log("test".charCodeAt(0));
 