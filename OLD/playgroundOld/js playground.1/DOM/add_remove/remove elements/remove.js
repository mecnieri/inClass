
// .removeChild();

// მშობლის განსაზღვრა.removeChild(წასაშლელი ელემენტი);


// წასასლელად საჭიროა, წასაშლელი ელემენტის,
//      მშობელი ელემენტის მოძიება. 

// მუშაობს .querySelector(".") თუ კლასია ან .querySelector("#") თუ აიდია
// ან getElementById 

// რატომღაც არ მუშაობს getElementByClassName

let parent = document.querySelector(".clasi");

// შემდეგ ვსაზღვრავთ წასაშლელ ელემენტს 
// let child = document.querySelector("#a4");
parent.removeChild(parent.lastElementChild);

console.log(parent.class) ;
 // ერთ ხაზშიც შეიძლება 
// document.querySelector(".clasi").removeChild(document.querySelector("#a3"))



