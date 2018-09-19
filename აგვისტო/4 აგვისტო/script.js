$("#save").click(saveInStorage)
$("#show").click(showOnScreen)


let storage = window.sessionStorage;
let firstName = $("#name");
let surName = $("#surname");
let age = $("#age");
let data = []
let info;

function saveInStorage(){
   
       data.push(firstName.val());
       data.push(surName.val());
       data.push(age.val());
      //console.log(data)
      storage.setItem('Info', `${data}`)
      info = storage.getItem("Info")
}
function showOnScreen() {
   console.log(info);
   $("#span1").append(firstName.val());
   $("#span2").append(surName.val());
   $("#span3").append(age.val());
}