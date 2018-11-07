$(document).ready(function () {
    let notes = ["gandzi", "bandzi", "kvariati"]
    let h = document.getElementById('search-text')
    let notesID = document.getElementById('notes')

     $('#btn').click(function () {
        notes.push(h.value);
        localStorage.setItem("note title", notes)
        notesID.innerHTML = ""
        for (let i = 0; i < notes.length; i++) {
            notesID.innerHTML += `${notes[i]} <br>`
         }
    })
     console.log(JSON.parse(localStorage.getItem("note title")));
})